// Statistika publike: vetëm numra, asnjë e dhënë personale.
import { admin } from '../../../lib/server/kv';

export const dynamic = 'force-dynamic';

export async function GET() {
  const db = admin();
  if (!db) return Response.json({ error: 'no-db' }, { status: 503 });
  const now = Date.now();
  const since48 = new Date(now - 48 * 3600 * 1000).toISOString();
  const since7 = new Date(now - 7 * 24 * 3600 * 1000).toISOString();
  const count = async (q) => { const { count } = await q; return count ?? 0; };
  const base = () => db.from('contributions').select('id', { count: 'exact', head: true }).neq('status', 'withdrawn');
  const [total, last48, last7] = await Promise.all([
    count(base()),
    count(base().gte('created_at', since48)),
    count(base().gte('created_at', since7)),
  ]);
  // Seancat: me session_id kur ekziston; për regjistrimet e vjetra (pa session_id) një vlerësim:
  // regjistrime nga i njëjti vend, me më pak se 30 minuta mes tyre, numërohen si një seancë.
  let { data, error } = await db.from('contributions').select('session_id, village, created_at').neq('status', 'withdrawn').order('created_at').limit(10000);
  if (error) ({ data } = await db.from('contributions').select('village, created_at').neq('status', 'withdrawn').order('created_at').limit(10000));
  const rows = data || [];
  const sessionsOf = (list) => {
    const known = new Set(list.map((r) => r.session_id).filter(Boolean));
    const last = new Map();
    let guessed = 0;
    for (const r of list.filter((x) => !x.session_id)) {
      const key = (r.village || '').trim().toLowerCase();
      const t = new Date(r.created_at).getTime();
      if (!last.has(key) || t - last.get(key) > 30 * 60 * 1000) guessed += 1;
      last.set(key, t);
    }
    return { exact: known.size, estimated: guessed };
  };
  const all = sessionsOf(rows);
  const recent = sessionsOf(rows.filter((r) => r.created_at >= since48));
  return Response.json({
    total, last48h: last48, last7d: last7,
    sessions: all.exact + all.estimated, sessionsEstimated: all.estimated,
    sessions48h: recent.exact + recent.estimated,
  }, { headers: { 'Cache-Control': 's-maxage=300' } });
}
