'use client';
import Link from 'next/link';
import { useLang } from '../components/LangProvider';
import { words } from '../lib/words';

const FEATURED = ['GC-0001', 'GC-0002', 'GC-0004', 'GC-0022', 'GC-0024', 'GC-0079', 'GC-0025', 'GC-0012', 'GC-0013', 'GC-0039', 'GC-0037', 'Q10321', 'Q20001', 'Q20004', 'Q20005'];

export default function Home() {
  const { t, lang } = useLang();
  const h = t.home;
  const featured = FEATURED.map((id) => words.find((w) => w.id === id)).filter(Boolean);

  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow">{h.eyebrow}</p>
        <h1>{h.h1}</h1>
        <p className="lead">{h.lead}</p>
      </section>

      <section className="wrap" style={{ paddingBottom: 48 }}>
        <div className="card what-box">
          <h2>{h.whatTitle}</h2>
          <p>{h.what}</p>
        </div>

        <div className="card why-box">
          <h2>{h.whyTitle}</h2>
          <p>{h.why}</p>
          <ol className="roadmap">
            {h.roadmap.map(([v, r], i) => (
              <li key={v} className={i === 0 ? 'now' : ''}><strong>{v}</strong><span>{r}</span></li>
            ))}
          </ol>
          <p className="why-open"><Link href="/kujtesa">{h.whyOpen} →</Link></p>
        </div>

        <h2 id="lentet" className="section-title" style={{ marginTop: 40, scrollMarginTop: 20 }}>{h.lensesTitle}</h2>
        <p style={{ margin: 0, color: 'var(--ink-2)' }}>{h.lensesLead}</p>
        <div className="home-lenses">
          {t.method.lenses.map(([n, name, text]) => (
            <article key={n} className={`card home-lens${n === '1' ? ' home-lens-1' : ''}`}>
              <span className="lens-n">{n}</span>
              <h3><Link href={`/lente/${n}`}>{name}</Link></h3>
              <p>{text}</p>
              <Link href={`/lente/${n}`} className="lens-more">{lang === 'en' ? 'Read more' : 'Lexo më shumë'} →</Link>
              {n === '1' && (
                <div className="home-sublenses">
                  {t.method.sub.map(([sn, sname, stext, stag]) => (
                    <Link key={sn} href={`/lente/${sn}`} className="home-sublens">
                      <span className="lens-n lens-n-sub">{sn}</span>
                      <div>
                        <strong>{sname}</strong>
                        {stag && <em className="sub-tag">{stag}</em>}
                        <p>{stext}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="wrap doors" aria-label={h.d1Title + ' / ' + h.d2Title}>
        <article className="door door-memory">
          <div className="door-icon" style={{ background: '#e8f2ec' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2f7a4f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /></svg>
          </div>
          <h2>{h.d1Title}</h2>
          <p>{h.d1Text}</p>
          <ul>{h.d1List.map((x) => <li key={x}>{x}</li>)}</ul>
          <Link href="/kujtesa" className="btn btn-green">{h.d1Cta}</Link>
        </article>

        <article className="door door-scholars">
          <div className="door-icon" style={{ background: '#2a3c60' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d9b56a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z" /><path d="M8 7h6" /><path d="M8 11h6" /><path d="M4 19a2 2 0 0 1 2-2h12" /></svg>
          </div>
          <h2>{h.d2Title}</h2>
          <p>{h.d2Text}</p>
          <ul>{h.d2List.map((x) => <li key={x}>{x}</li>)}</ul>
          <Link href="/studiuesit" className="btn btn-gold">{h.d2Cta}</Link>
        </article>
      </section>

      <section className="band" id="si">
        <div className="wrap band-inner">
          <h2 className="section-title">{h.howTitle}</h2>
          <p style={{ margin: 0, color: 'var(--ink-2)' }}>{h.howLead} <Link href="/metodologjia">{t.method.h1} →</Link></p>
          <div className="steps">
            {h.steps.map(([title, text], i) => (
              <div key={title}>
                <span className="n">{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" id="fjalet" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <h2 className="section-title">{h.wordsTitle}</h2>
        <p style={{ margin: 0, color: 'var(--ink-2)' }}>{h.wordsLead}</p>
        <div className="chips">
          {featured.map((w) => (
            <Link key={w.id} href={`/fjala/${w.id}`} className="chip">{w.headword}</Link>
          ))}
        </div>
        <p style={{ marginTop: 14, fontSize: 14, color: 'var(--muted)' }}>
          <Link href="/studiuesit">{h.count(words.length)}</Link>
        </p>
      </section>

      <section className="board" id="bordi">
        <div className="wrap board-inner">
          <div style={{ flex: '1 1 380px' }}>
            <h2 className="section-title" style={{ color: '#fff' }}>{h.boardTitle}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>{h.boardText}</p>
            <p style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontWeight: 600 }}>
              <Link href="/shtyllat/qeverisja" style={{ color: 'var(--gold)' }}>{lang === 'en' ? 'How the board works' : 'Si punon bordi'} →</Link>
              <Link href="/kushtetuta" style={{ color: 'var(--gold)' }}>{lang === 'en' ? 'Read the Constitution' : 'Lexo Kushtetutën'} →</Link>
            </p>
          </div>
          <ul className="seats">{h.seats.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>
    </>
  );
}
