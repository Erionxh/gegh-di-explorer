'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';
import { StatusPill } from '../../components/Footer';
import { words } from '../../lib/words';
import { CATEGORY_ORDER } from '../../lib/categories';

function rowStatus(w) {
  if (w.claim) return w.claim.status;
  if (w.hypotheses?.length) return 'OPEN';
  if (w.caseStatus === 'REFUTED') return 'REFUTED';
  if (w.caseStatus === 'OPEN') return 'OPEN';
  return 'OBSERVATION';
}

export default function Scholars() {
  const { t } = useLang();
  const s = t.scholars;
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState('cat');
  const needle = q.trim().toLowerCase();

  const order = [...CATEGORY_ORDER, 'other'];
  const rows = words
    .filter((w) => cat === 'all' || w.category === cat)
    .filter((w) =>
      !needle ||
      w.id.toLowerCase().includes(needle) ||
      (w.concept || '').toLowerCase().includes(needle) ||
      w.forms.some((f) => f.toLowerCase().includes(needle))
    )
    .sort((a, b) => {
      if (sort === 'cat') {
        const d = order.indexOf(a.category) - order.indexOf(b.category);
        if (d) return d;
      }
      return a.headword.localeCompare(b.headword, 'sq');
    });

  const chip = (key) => (
    <button key={key} type="button" className={`filter${cat === key ? ' on' : ''}`} aria-pressed={cat === key} onClick={() => setCat(key)}>
      {s.cats[key]}
    </button>
  );

  return (
    <div className="wrap scholars">
      <h1 style={{ fontSize: 40 }}>{s.title}</h1>
      <p className="lead" style={{ fontSize: 17, margin: '10px 0 0' }}>{s.lead}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ flex: '1 1 320px', maxWidth: 520 }}>
          <span style={{ position: 'absolute', left: -9999 }}>{s.search}</span>
          <input className="search" type="search" placeholder={s.search} value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <div className="langswitch sortswitch" role="group" aria-label="Sort">
          <button type="button" aria-pressed={sort === 'cat'} onClick={() => setSort('cat')}>{s.sortCat}</button>
          <button type="button" aria-pressed={sort === 'az'} onClick={() => setSort('az')}>{s.sortAz}</button>
        </div>
      </div>

      <div className="filters">{['all', ...order].map(chip)}</div>

      <div className="tablebox">
        <table className="data">
          <thead>
            <tr>
              <th scope="col">{s.cols[0]}</th>
              <th scope="col">{s.cols[1]}</th>
              <th scope="col">{s.cols[2]}</th>
              <th scope="col">{s.catCol}</th>
              <th scope="col">{s.cols[3]}</th>
              <th scope="col">{s.cols[4]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((w) => (
              <tr key={w.id}>
                <td className="mono"><Link href={`/studiuesit/${w.id}`}>{w.id}</Link></td>
                <td><Link href={`/studiuesit/${w.id}`}><strong>{w.forms.join(' / ')}</strong></Link></td>
                <td style={{ color: 'var(--ink-2)' }}>{(w.concept || s.none).toLowerCase()}</td>
                <td style={{ color: 'var(--ink-2)' }}>{s.cats[w.category]}</td>
                <td style={{ color: 'var(--ink-2)' }}>{w.claim?.pieRoot || (w.hypotheses?.length ? `${w.hypotheses.length} H` : s.none)}</td>
                <td><StatusPill status={rowStatus(w)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 12 }}>{s.rule} · <Link href="/metodologjia#statuset">{t.method.legendLink}</Link></p>
    </div>
  );
}
