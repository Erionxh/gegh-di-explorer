-- Kuveni: forumi i vërtetë. Ekzekutoje një herë në Supabase → SQL Editor.
-- Të gjitha leximet dhe shkrimet kalojnë nga serveri (service role); RLS është i ndezur pa rregulla,
-- kështu që askush nuk mund të lexojë apo shkruajë direkt nga shfletuesi.

create table if not exists kv_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 40),
  village text,
  accepted_terms_at timestamptz not null default now(),
  banned boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists kv_posts (
  id uuid primary key default gen_random_uuid(),
  topic text not null,                 -- p.sh. 'fjala:kuven', 'rrahje:nder', 'pyetje'
  kind text not null default 'post' check (kind in ('post','reply','version','argument')),
  parent_id uuid references kv_posts(id) on delete cascade,
  title text,
  body text not null check (char_length(body) between 1 and 4000),
  form text,                           -- si e thoni fjalën
  place text,                          -- fshati / vendi
  stance text,                         -- për rrahjet: qëndrimi (A, B…) ose 'obj'/'rep'
  audio_path text,
  author uuid not null references auth.users(id) on delete cascade,
  status text not null default 'live' check (status in ('live','held','removed')),
  flag_reason text,
  created_at timestamptz not null default now()
);
create index if not exists kv_posts_topic on kv_posts(topic, created_at desc);
create index if not exists kv_posts_status on kv_posts(status);

create table if not exists kv_votes (
  post_id uuid references kv_posts(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  value smallint not null check (value in (-1, 1)),
  primary key (post_id, user_id)
);

create table if not exists kv_reports (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references kv_posts(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  reason text,
  resolved boolean not null default false,
  created_at timestamptz not null default now(),
  unique (post_id, user_id)
);

alter table kv_profiles enable row level security;
alter table kv_posts enable row level security;
alter table kv_votes enable row level security;
alter table kv_reports enable row level security;
