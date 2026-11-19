-- GEG · Dera e Kujtesës · Supabase setup
-- Ngjiteni këtë në Supabase → SQL Editor → Run. / Paste into Supabase → SQL Editor → Run.

create table if not exists public.contributions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  word text not null,
  meaning text,
  village text,
  region text,
  speaker text,          -- gjyshja, gjyshi… (never a personal name)
  era text,              -- p.sh. "vitet '70"
  example text,
  audio_path text,       -- path inside the private 'recordings' bucket
  consent boolean not null,
  ui_lang text,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected'))
);

-- Only the server (service role) can read or write. No public access.
alter table public.contributions enable row level security;

-- Private bucket for the voice recordings.
insert into storage.buckets (id, name, public)
values ('recordings', 'recordings', false)
on conflict (id) do nothing;

-- Shtuar më vonë / added later
alter table public.contributions
  add column if not exists country text,
  add column if not exists age_band text check (age_band in ('<30','30-50','50-70','70+')),
  add column if not exists gender text check (gender in ('m','f')),
  add column if not exists birthplace text;

-- Kuveni (forumi): shih docs/kuveni.sql
