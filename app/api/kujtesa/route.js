import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_AUDIO_BYTES = 5 * 1024 * 1024; // 5 MB is far more than a voice clip needs
const clip = (v, n = 500) => (typeof v === 'string' ? v.trim().slice(0, n) : '');

export async function POST(req) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return Response.json({ ok: false, error: 'storage_not_configured' }, { status: 503 });
  }

  let form;
  try { form = await req.formData(); } catch { return Response.json({ ok: false, error: 'bad_request' }, { status: 400 }); }

  const word = clip(form.get('word'), 120);
  const consent = form.get('consent') === 'true';
  if (!word || !consent) return Response.json({ ok: false, error: 'word_and_consent_required' }, { status: 400 });

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  let audioPath = null;
  const audio = form.get('audio');
  if (audio && typeof audio === 'object' && audio.size > 0) {
    if (audio.size > MAX_AUDIO_BYTES) return Response.json({ ok: false, error: 'audio_too_large' }, { status: 413 });
    const type = audio.type || 'audio/webm';
    if (!type.startsWith('audio/')) return Response.json({ ok: false, error: 'not_audio' }, { status: 415 });
    const ext = type.includes('mp4') ? 'm4a' : type.includes('ogg') ? 'ogg' : 'webm';
    audioPath = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from('recordings').upload(audioPath, Buffer.from(await audio.arrayBuffer()), { contentType: type });
    if (error) return Response.json({ ok: false, error: 'upload_failed' }, { status: 500 });
  }

  const { error } = await supabase.from('contributions').insert({
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
    audio_path: audioPath,
    consent: true,
  });
  if (error) return Response.json({ ok: false, error: 'save_failed' }, { status: 500 });

  return Response.json({ ok: true });
}
