'use client';
import Link from 'next/link';
import { useLang } from './LangProvider';
import { StatusPill } from './Footer';

function Field({ label, children }) {
  if (children === null || children === undefined || children === '' || (Array.isArray(children) && !children.length)) return null;
  return (
    <div>
      <dt style={{ fontWeight: 600 }}>{label}</dt>
      <dd style={{ margin: '4px 0 0', color: 'var(--ink-2)' }}>{children}</dd>
    </div>
  );
}

export default function Dossier({ word: w }) {
  const { t } = useLang();
  const s = t.scholars;
  const c = w.claim;
  // Gjendja e lenteve: vetëm lentja gjuhësore ka të dhëna tani; të tjerat janë ende bosh.
  const lensStates = [
    c ? 'open' : 'collecting', 'none', 'collecting', 'na', 'none', 'collecting',
  ];

  return (
    <div className="wrap dossier">
      <div className="dossier-main">
        <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/studiuesit" style={{ fontSize: 14 }}>← {s.title}</Link>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'baseline' }}>
            <h1 style={{ fontSize: 52, lineHeight: 1 }}>{w.headword}</h1>
            <span className="tag mono">{w.id}</span>
            {c && <StatusPill status={c.status} />}
          </div>
          {w.concept && <p style={{ margin: 0, fontSize: 17 }}>“{w.concept.toLowerCase()}”</p>}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {w.forms.map((f) => <span key={f} className="tag">{f}</span>)}
          </div>
        </section>

        <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h2 style={{ fontSize: 24 }}>{s.observation}</h2>
          <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
            <Field label={t.word.morph}>{w.morphology}</Field>
            <Field label={t.word.phon}>{w.phonology}</Field>
            <Field label={t.word.prov}>{w.provenance}</Field>
            <Field label="Batch">{w.batch}</Field>
          </dl>
        </section>

        <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: 24 }}>{s.claim}</h2>
            <a href={`https://github.com/Erionxh/gegh-di-explorer/issues/new?title=${encodeURIComponent('Hipotezë: ' + w.headword + ' (' + w.id + ')')}`} className="btn btn-navy" style={{ minHeight: 44, fontSize: 14 }}>{s.propose}</a>
          </div>
          {c ? (
            <>
              <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
                <Field label={s.pie}>{c.pieRoot}</Field>
                <Field label={s.proto}>{c.protoAlbanian}</Field>
                <Field label={s.cognates}>{c.cognates.length ? c.cognates.join(' · ') : null}</Field>
                <Field label={s.note}>{c.note}</Field>
                <Field label={s.review}>{c.reviewNote ? `${c.reviewNote} (${c.reviewed})` : null}</Field>
              </dl>
              {c.superseded && (
                <div className="superseded">
                  <strong>{s.superseded}</strong>
                  <ul style={{ margin: '6px 0 0', paddingLeft: 18 }}>
                    {Object.entries(c.superseded).map(([k, v]) => (
                      <li key={k}><code>{k}</code>: {Array.isArray(v) ? v.join(' · ') || '—' : String(v)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <p style={{ margin: 0, color: 'var(--ink-2)' }}>{s.noClaim}</p>
          )}
        </section>
      </div>

      <aside className="dossier-side">
        <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h2 style={{ fontFamily: 'var(--sans)', fontSize: 16 }}>{s.lensesTitle}</h2>
          <ul className="lens-list">
            {s.lenses.map((name, i) => (
              <li key={name}><span>{i + 1} {name}</span><span style={{ color: 'var(--muted)' }}>{s.lensState[lensStates[i]]}</span></li>
            ))}
          </ul>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--muted)' }}>{s.lensNote}</p>
        </section>
        <Link href={`/fjala/${w.id}`} className="btn btn-outline">{s.publicView}</Link>
      </aside>
    </div>
  );
}
