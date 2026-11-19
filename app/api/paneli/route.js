import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Paneli: statistika private për themeluesin. Fjalëkalimi vjen vetëm nga ADMIN_PASSWORD në Vercel.
// Private stats for the founder. The password lives only in the ADMIN_PASSWORD env var on Vercel.

const hash = (s) => crypto.createHash('sha256').update(String(s || '')).digest();
const count = (rows, key) => {
  const m = {};
  rows.forEach((r) => { const k = (r[key] || '').toString().trim() || '—'; m[k] = (m[k] || 0) + 1; });
  return Object.entries(m).sort((a, b) => b[1] - a[1]);
};

export async function POST(req) {
  const admin = process.env.ADMIN_PASSWORD;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!admin) return Response.json({ ok: false, error: 'not_configured' }, { status: 503 });

  let body = {};
  try { body = await req.json(); } catch { /* empty */ }
  if (!crypto.timingSafeEqual(hash(body.password), hash(admin))) {
    await new Promise((r) => setTimeout(r, 800));
    return Response.json({ ok: false, error: 'wrong_password' }, { status: 401 });
  }
  if (!url || !key) return Response.json({ ok: false, error: 'no_database' }, { status: 503 });

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await supabase
    .from('contributions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5000);
  if (error) return Response.json({ ok: false, error: 'read_failed' }, { status: 500 });
  const rows = data || [];

  const now = Date.now();
  const day = 24 * 3600 * 1000;
  const since = (d) => rows.filter((r) => now - new Date(r.created_at).getTime() < d).length;
  const byDay = {};
  for (let i = 29; i >= 0; i--) byDay[new Date(now - i * day).toISOString().slice(0, 10)] = 0;
  rows.forEach((r) => { const d = (r.created_at || '').slice(0, 10); if (d in byDay) byDay[d] += 1; });

  const latest = rows.slice(0, 25);
  const paths = latest.map((r) => r.audio_path).filter(Boolean);
  let signed = {};
  if (paths.length) {
    const { data: s } = await supabase.storage.from('recordings').createSignedUrls(paths, 3600);
    (s || []).forEach((x) => { if (x.signedUrl) signed[x.path] = x.signedUrl; });
  }

  return Response.json({
    ok: true,
    totals: {
      all: rows.length,
      today: since(day),
      week: since(7 * day),
      audio: rows.filter((r) => r.audio_path).length,
      meaning: rows.filter((r) => (r.meaning || '').trim()).length,
      example: rows.filter((r) => (r.example || '').trim()).length,
      pending: rows.filter((r) => r.status === 'pending').length,
      approved: rows.filter((r) => r.status === 'approved').length,
      rejected: rows.filter((r) => r.status === 'rejected').length,
      words: new Set(rows.map((r) => (r.word || '').toLowerCase().trim())).size,
    },
    by: {
      region: count(rows, 'region'),
      country: count(rows, 'country'),
      age: count(rows, 'age_band'),
      gender: count(rows, 'gender'),
      speaker: count(rows, 'speaker'),
      lang: count(rows, 'ui_lang'),
    },
    days: Object.entries(byDay),
    topWords: count(rows.map((r) => ({ w: (r.word || '').toLowerCase().trim() })), 'w').slice(0, 15),
    latest: latest.map((r) => ({
      id: r.id, at: r.created_at, word: r.word, meaning: r.meaning, village: r.village, region: r.region,
      country: r.country, speaker: r.speaker, era: r.era, example: r.example, age: r.age_band,
      gender: r.gender, birthplace: r.birthplace, status: r.status, audio: r.audio_path ? signed[r.audio_path] || null : null,
    })),
  });
}
