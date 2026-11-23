// Zërat publikë të një fjale: vetëm regjistrimet e pranuara nga shqyrtuesi DHE me leje për dëgjim publik.
// Nuk kthen asnjë të dhënë personale përveç fshatit dhe brezit të moshës.
import { admin } from '../../../lib/server/kv';
import { getWanted } from '../../../lib/wantedWords';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  const slug = new URL(req.url).searchParams.get('slug') || '';
  const w = getWanted(slug);
  const db = admin();
  if (!w || !db) return Response.json({ ok: true, items: [] });
  const parts = w.sq.split('/').map((p) => p.trim()).filter(Boolean);
  const { data, error } = await db.from('contributions').select('*')
    .in('word', parts).eq('status', 'approved').eq('consent_public', true)
    .order('created_at', { ascending: false }).limit(30);
  if (error || !data) return Response.json({ ok: true, items: [] });
  const items = await Promise.all(data.map(async (r) => ({
    id: r.id,
    word: r.word,
    said: r.said_form || null,
    geg: r.transcription_status === 'checked' ? r.geg_spelling || null : null,
    ipa: r.transcription_status === 'checked' ? r.ipa || null : null,
    place: r.village || r.region || null,
    age: r.age_band || null,
    audio: r.audio_path ? (await db.storage.from('recordings').createSignedUrl(r.audio_path, 3600)).data?.signedUrl || null : null,
  })));
  return Response.json({ ok: true, items: items.filter((x) => x.audio) }, { headers: { 'Cache-Control': 's-maxage=300' } });
}
