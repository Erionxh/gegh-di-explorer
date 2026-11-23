-- GEG · Transkriptimi dhe lidhja zë → fjalë (rishikimet e Gemini-t dhe Kimit, nëntor 2026)
-- Ekzekutoje një herë në Supabase → SQL Editor → Run. Mund të ekzekutohet sërish pa dëm.

alter table public.contributions
  add column if not exists word_id text,               -- fjala e kërkuar (slug i GEG 500), lidh zërin me faqen e fjalës
  add column if not exists said_form text,             -- si e tha folësi në të vërtetë (mund të ndryshojë nga fjala e kërkuar)
  add column if not exists ipa text,                   -- transkriptimi fonetik (IPA)
  add column if not exists geg_spelling text,          -- shkrimi gegnisht
  add column if not exists transcription_status text not null default 'none'; -- none | draft | checked

alter table public.contributions drop constraint if exists contributions_tstatus_check;
alter table public.contributions add constraint contributions_tstatus_check
  check (transcription_status in ('none', 'draft', 'checked')) not valid;

create index if not exists contributions_word_public on public.contributions (word_id, status);
