import { createClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';
import { sniffAudio } from '../../../lib/server/audio';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_AUDIO_BYTES = 5 * 1024 * 1024;
const PER_IP_HOUR = 40;      // një kartolinë = 25 fjalë
const PER_IP_DAY = 150;
const GLOBAL_DAY = 3000;     // kufi për të gjithë faqen në 24 orë
const CONSENT_VERSION = 'zani-2026-11-22';
const clip = (v, n = 500) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
const sha = (x) => createHash('sha256').update(x).digest('hex');
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const missingColumn = (e) => e && (e.code === '42703' || e.code === 'PGRST204' || /column/i.test(e.message || ''));

async function upload(supabase, file) {
  if (!file || typeof file !== 'object' || file.size <= 0) return { path: null };
  if (file.size > MAX_AUDIO_BYTES) return { error: 'audio_too_large', status: 413 };
  const buf = Buffer.from(await file.arrayBuffer());
  const kind = sniffAudio(buf);
  if (!kind.ok) return { error: 'not_audio', status: 415 };
  const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}.${kind.ext}`;
  const { error } = await supabase.storage.from('recordings').upload(path, buf, { contentType: kind.type });
  if (error) return { error: 'upload_failed', status: 500 };
  return { path, hash: sha(buf) };
}

export async function POST(req) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return Response.json({ ok: false, error: 'storage_not_configured' }, { status: 503 });

  let form;
  try { form = await req.formData(); } catch { return Response.json({ ok: false, error: 'bad_request' }, { status: 400 }); }

  // Kurth për robotët: fusha e fshehur duhet të mbetet bosh.
  if (clip(form.get('website'))) return Response.json({ ok: true });

  const word = clip(form.get('word'), 120);
  const consent = form.get('consent') === 'true';
  if (!word || !consent) return Response.json({ ok: false, error: 'word_and_consent_required' }, { status: 400 });

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  // Kufijtë kundër abuzimit
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  const ipHash = sha(`${ip}|${key.slice(-24)}`);
  const hourAgo = new Date(Date.now() - 3600e3).toISOString();
  const dayAgo = new Date(Date.now() - 86400e3).toISOString();
  const { count: globalCount } = await supabase.from('contributions').select('id', { count: 'exact', head: true }).gte('created_at', dayAgo);
  if ((globalCount || 0) >= GLOBAL_DAY) return Response.json({ ok: false, error: 'busy' }, { status: 429 });
  const h = await supabase.from('contributions').select('id', { count: 'exact', head: true }).eq('ip_hash', ipHash).gte('created_at', hourAgo);
  if (!h.error) {
    if ((h.count || 0) >= PER_IP_HOUR) return Response.json({ ok: false, error: 'too_many' }, { status: 429 });
    const d = await supabase.from('contributions').select('id', { count: 'exact', head: true }).eq('ip_hash', ipHash).gte('created_at', dayAgo);
    if ((d.count || 0) >= PER_IP_DAY) return Response.json({ ok: false, error: 'too_many' }, { status: 429 });
  }

  const main = await upload(supabase, form.get('audio'));
  if (main.error) return Response.json({ ok: false, error: main.error }, { status: main.status });
  const spoken = await upload(supabase, form.get('consent_audio'));
  if (spoken.error) {
    if (main.path) await supabase.storage.from('recordings').remove([main.path]);
    return Response.json({ ok: false, error: spoken.error }, { status: spoken.status });
  }

  const base = {
    word,
    meaning: clip(form.get('meaning')),
    village: clip(form.get('village'), 120),
    country: clip(form.get('country'), 80),
    age_band: ['<30', '30-50', '50-70', '70+'].includes(form.get('age_band')) ? form.get('age_band') : null,
    birthplace: clip(form.get('birthplace'), 120),
    gender: ['m', 'f'].includes(form.get('gender')) ? form.get('gender') : null,
    region: clip(form.get('region'), 120),
    speaker: clip(form.get('speaker'), 60),
    era: clip(form.get('era'), 60),
    example: clip(form.get('example')),
    ui_lang: clip(form.get('lang'), 5),
    audio_path: main.path,
    consent: true,
  };
  const code = clip(form.get('withdraw_code'), 60);
  const extra = {
    ip_hash: ipHash,
    speaker_id: UUID.test(form.get('speaker_id') || '') ? form.get('speaker_id') : null,
    session_id: UUID.test(form.get('session_id') || '') ? form.get('session_id') : null,
    consent_version: CONSENT_VERSION,
    consent_by: form.get('consent_by') === 'on_behalf' ? 'on_behalf' : 'self',
    consent_public: form.get('consent_public') === 'true',
    consent_audio_path: spoken.path || null,
    withdraw_hash: code.length >= 8 ? sha(code.toUpperCase()) : null,
    audio_sha256: main.hash || null,
  };

  let { error } = await supabase.from('contributions').insert({ ...base, ...extra });
  if (missingColumn(error)) ({ error } = await supabase.from('contributions').insert(base)); // para se të ekzekutohet docs/mbrojtja.sql
  if (error) {
    const orphans = [main.path, spoken.path].filter(Boolean);
    if (orphans.length) await supabase.storage.from('recordings').remove(orphans);
    return Response.json({ ok: false, error: 'save_failed' }, { status: 500 });
  }
  return Response.json({ ok: true });
}
