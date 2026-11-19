import { createClient } from '@supabase/supabase-js';

export const admin = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
};

export async function userFrom(req, db) {
  const h = req.headers.get('authorization') || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : null;
  if (!token || !db) return null;
  const { data, error } = await db.auth.getUser(token);
  if (error || !data?.user) return null;
  return data.user;
}

export const isMod = (user) => {
  const list = (process.env.MOD_EMAILS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
  return !!user?.email && list.includes(user.email.toLowerCase());
};

export const clip = (v, n = 500) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
export const json = (o, status = 200) => Response.json(o, { status });
