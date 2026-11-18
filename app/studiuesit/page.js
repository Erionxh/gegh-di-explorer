'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';
import { StatusPill } from '../../components/Footer';
import { words } from '../../lib/words';

export default function Scholars() {
  const { t } = useLang();
  const s = t.scholars;
  const [q, setQ] = useState('');
  const needle = q.trim().toLowerCase();
  const rows = words.filter((w) =>
    !needle ||
    w.id.toLowerCase().includes(needle) ||
    (w.concept || '').toLowerCase().includes(needle) ||
    w.forms.some((f) => f.toLowerCase().includes(needle))
  );

  return (
    <div className="wrap scholars">
      <h1 style={{ fontSize: 40 }}>{s.title}</h1>
      <p className="lead" style={{ fontSize: 17, margin: '10px 0 0' }}>{s.lead}</p>
      <label>
        <span style={{ position: 'absolute', left: -9999 }}>{s.search}</span>
        <input className="search" type="search" placeholder={s.search} value={q} onChange={(e) => setQ(e.target.value)} />
      </label>
      <div className="tablebox">
        <table className="data">
          <thead>
            <tr>{s.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((w) => (
              <tr key={w.id}>
                <td className="mono"><Link href={`/studiuesit/${w.id}`}>{w.id}</Link></td>
                <td><Link href={`/studiuesit/${w.id}`}><strong>{w.forms.join(' / ')}</strong></Link></td>
                <td style={{ color: 'var(--ink-2)' }}>{w.concept || s.none}</td>
                <td style={{ color: 'var(--ink-2)' }}>{w.claim?.pieRoot || s.none}</td>
                <td><StatusPill status={w.claim ? w.claim.status : (w.caseStatus === 'REFUTED' ? 'REFUTED' : w.caseStatus === 'OPEN' ? 'OPEN' : 'OBSERVATION')} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 12 }}>{s.rule}</p>
    </div>
  );
}
