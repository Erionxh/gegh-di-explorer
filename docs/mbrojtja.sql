-- GEG · Mbrojtja e zërave (pas rishikimit të ChatGPT dhe Kimi, nëntor 2026)
-- Ekzekutoje një herë në Supabase → SQL Editor → Run. Mund të ekzekutohet sërish pa dëm.

alter table public.contributions
  add column if not exists ip_hash text,              -- hash i IP-së, vetëm për kufijtë kundër abuzimit
  add column if not exists speaker_id uuid,           -- i njëjti folës brenda një seance
  add column if not exists session_id uuid,           -- një seancë regjistrimi
  add column if not exists consent_version text,      -- versioni i tekstit të pëlqimit që u pa
  add column if not exists consent_by text,           -- 'self' = folësi vetë, 'on_behalf' = një i afërm me pëlqimin e folësit
  add column if not exists consent_public boolean not null default false, -- lejon dëgjimin publik
  add column if not exists consent_audio_path text,   -- pëlqimi i thënë me zë nga folësi
  add column if not exists withdraw_hash text,        -- hash i kodit për tërheqje
  add column if not exists withdrawn_at timestamptz,
  add column if not exists audio_sha256 text,         -- gjurmë e skedarit, për të dalluar dëmtimin
  add column if not exists reviewed_at timestamptz,
  add column if not exists reviewed_by text,
  add column if not exists review_reason text;

alter table public.contributions drop constraint if exists contributions_status_check;
alter table public.contributions add constraint contributions_status_check
  check (status in ('pending', 'approved', 'rejected', 'withdrawn'));

create index if not exists contributions_ip_time on public.contributions (ip_hash, created_at desc);
create index if not exists contributions_withdraw on public.contributions (withdraw_hash);
create index if not exists contributions_status_time on public.contributions (status, created_at);

-- Ditari i veprimeve: kush bëri çfarë, kur dhe pse. Vetëm shtohet, nuk ndryshohet.
create table if not exists public.audit_log (
  id bigint generated always as identity primary key,
  at timestamptz not null default now(),
  actor text not null,
  action text not null,
  target_table text not null,
  target_id text,
  reason text,
  detail jsonb
);
alter table public.audit_log enable row level security;
