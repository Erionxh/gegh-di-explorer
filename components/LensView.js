'use client';
import Link from 'next/link';
import { useLang } from './LangProvider';
import LensSketch from './LensSketch';
import { LENS_PAGES, LENS_ORDER } from '../lib/lensPages';
import { SOURCES } from '../lib/sources';

const L = {
  sq: { back: '← Gjashtë lentet', q: 'Pyetja', looks: 'Çfarë shikon', test: 'Si provohet', limits: 'Kufijtë', sources: 'Burimet', words: 'Fjalët', prev: 'Lentja e mëparshme', next: 'Lentja tjetër', none: 'Burimet për këtë lente do të shtohen.' },
  en: { back: '← The six lenses', q: 'The question', looks: 'What it looks at', test: 'How it is tested', limits: 'Limits', sources: 'Sources', words: 'Words', prev: 'Previous lens', next: 'Next lens', none: 'Sources for this lens will be added.' },
};

export default function LensView({ id }) {
  const { lang } = useLang();
  const p = LENS_PAGES[id];
  if (!p) return null;
  const t = L[lang];
  const c = p[lang];
  const i = LENS_ORDER.indexOf(id);
  const prev = LENS_ORDER[i - 1], next = LENS_ORDER[i + 1];
  const srcs = p.sources.map((s) => SOURCES.find((x) => x.id === s)).filter(Boolean);
  return (
    <div className="wrap lens-page" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <Link href="/#lentet" style={{ fontSize: 14 }}>{t.back}</Link>
      <p className="eyebrow" style={{ marginTop: 18 }}>{lang === 'en' ? 'Lens' : 'Lentja'} {id}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{c.name}</h1>
      {c.tag && <p className="sub-tag" style={{ fontSize: 18 }}>{c.tag}</p>}
      <div className="lens-grid">
        <div className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h2 style={{ fontSize: 20 }}>{t.q}</h2>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.5 }}>{c.question}</p>
        </div>
        <LensSketch type={p.sketch} />
      </div>
      <section className="lens-sec"><h2>{t.looks}</h2><ul>{c.looks.map((x) => <li key={x}>{x}</li>)}</ul></section>
      <section className="lens-sec"><h2>{t.test}</h2><p>{c.test}</p></section>
      <section className="card pad lens-example">
        <h2>{c.exampleTitle}</h2>
        <ol>{c.example.map((x) => <li key={x}>{x}</li>)}</ol>
        {p.words.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <strong style={{ fontSize: 15 }}>{t.words}:</strong>
            {p.words.map(([wid, w]) => <Link key={wid} href={`/fjala/${wid}`} className="tag">{w}</Link>)}
          </div>
        )}
        {p.link && <Link href={p.link[0]} className="btn btn-navy" style={{ alignSelf: 'flex-start' }}>{lang === 'en' ? p.link[2] : p.link[1]}</Link>}
        {p.pages && (
          <div className="lens-pages">
            {p.pages.map(([href, sq, en, dsq, den]) => (
              <Link key={href} href={href} className="card pad rr-card"><h3 style={{ margin: 0 }}>{lang === 'en' ? en : sq} →</h3><p style={{ margin: '6px 0 0' }}>{lang === 'en' ? den : dsq}</p></Link>
            ))}
          </div>
        )}
      </section>
      <section className="lens-sec"><h2>{t.limits}</h2><p>{c.limits}</p></section>
      <section className="lens-sec">
        <h2>{t.sources}</h2>
        {srcs.length ? (
          <ul>{srcs.map((s) => <li key={s.id}><Link href={`/burimet#${s.id}`}>{s.author} ({s.year}), <em>{s.title}</em></Link></li>)}</ul>
        ) : <p style={{ color: 'var(--muted)' }}>{t.none}</p>}
      </section>
      <nav className="lens-nav">
        {prev ? <Link href={`/lente/${prev}`}>← {t.prev}: {LENS_PAGES[prev][lang].name}</Link> : <span />}
        {next ? <Link href={`/lente/${next}`}>{t.next}: {LENS_PAGES[next][lang].name} →</Link> : <span />}
      </nav>
    </div>
  );
}
