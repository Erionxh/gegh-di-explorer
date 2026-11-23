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
  const { data } = await db.from('contributions').select('session_id, created_at').gte('created_at', since48).neq('status', 'withdrawn').limit(5000);
  const sessions48 = new Set((data || []).map((r) => r.session_id).filter(Boolean)).size;
  return Response.json({ total, last48h: last48, last7d: last7, sessions48h: sessions48 }, { headers: { 'Cache-Control': 's-maxage=300' } });
}
