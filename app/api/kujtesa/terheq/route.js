import { createClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const sha = (x) => createHash('sha256').update(x).digest('hex');

// Tërheqja e pëlqimit: me kodin e marrë në fund të regjistrimit.
// Fshin zërat dhe të dhënat personale; mban vetëm shënimin se u tërhoq.
export async function POST(req) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return Response.json({ ok: false, error: 'not_configured' }, { status: 503 });
  let b = {};
  try { b = await req.json(); } catch { /* bosh */ }
  const code = typeof b.code === 'string' ? b.code.trim().toUpperCase() : '';
  if (code.length < 8) return Response.json({ ok: false, error: 'bad_code' }, { status: 400 });
  const db = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await db.from('contributions').select('id, audio_path, consent_audio_path').eq('withdraw_hash', sha(code)).is('withdrawn_at', null);
  if (error) return Response.json({ ok: false, error: 'not_available' }, { status: 503 });
  if (!data.length) return Response.json({ ok: false, error: 'not_found' }, { status: 404 });
  const files = data.flatMap((r) => [r.audio_path, r.consent_audio_path]).filter(Boolean);
  if (files.length) await db.storage.from('recordings').remove(files);
  const ids = data.map((r) => r.id);
  await db.from('contributions').update({
    status: 'withdrawn', withdrawn_at: new Date().toISOString(), audio_path: null, consent_audio_path: null,
    village: null, birthplace: null, example: null, age_band: null, gender: null, ip_hash: null,
  }).in('id', ids);
  await db.from('audit_log').insert({ actor: 'folësi', action: 'withdraw', target_table: 'contributions', target_id: ids.join(','), detail: { count: ids.length } });
  return Response.json({ ok: true, count: ids.length });
}
