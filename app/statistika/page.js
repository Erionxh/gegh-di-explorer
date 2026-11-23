'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Paneli i numrave për ekranin e telefonit. Rifreskohet vetë çdo minutë.
export default function Statistika() {
  const [d, setD] = useState(null);
  const [err, setErr] = useState(false);
  const load = () => fetch('/api/statistika', { cache: 'no-store' }).then((r) => r.json()).then((x) => { setD(x); setErr(false); }).catch(() => setErr(true));
  useEffect(() => { load(); const id = setInterval(load, 60000); return () => clearInterval(id); }, []);
  const Tile = ({ n, l, s }) => (
    <div className="st-tile"><b>{n ?? '…'}</b><span>{l}</span>{s && <small>{s}</small>}</div>
  );
  const time = d?.at ? new Date(d.at).toLocaleTimeString('sq-AL', { hour: '2-digit', minute: '2-digit' }) : '';
  return (
    <div className="wrap" style={{ paddingTop: 20, paddingBottom: 40, maxWidth: 560 }}>
      <h1 style={{ fontSize: 30, margin: '0 0 4px' }}>GEG 1.0 · Numrat</h1>
      <p className="kt-small" style={{ margin: '0 0 16px' }}>{err ? 'Pa lidhje, provo sërish.' : time && `Përditësuar në ${time} · rifreskohet çdo minutë`}</p>
      <div className="st-grid">
        <Tile n={d?.total} l="Regjistrime me zë" s={d && `+${d.last48h} në 48 orët e fundit`} />
        <Tile n={d?.sessions} l="Seanca regjistrimi" s={d && `+${d.sessions48h} në 48 orë`} />
        <Tile n={d?.pending} l="Presin shqyrtim" s={d && `${d.approved} të pranuara`} />
        <Tile n={d?.villages} l="Vende të ndryshme" />
        <Tile n={d?.kvPosts} l="Postime në Kuven" s={d && `+${d.kvPosts48h} në 48 orë`} />
        <Tile n={d?.last7d} l="Regjistrime këtë javë" />
      </div>
      <p style={{ marginTop: 18, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <button className="btn" onClick={load}>↻ Rifresko</button>
        <Link href="/kuveni/moderimi">Moderimi →</Link>
      </p>
    </div>
  );
}
