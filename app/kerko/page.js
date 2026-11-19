'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';
import { words } from '../../lib/words';
import { SOURCES } from '../../lib/sources';
import { TURKISH } from '../../lib/layers';
import { PILLARS, PILLAR_ORDER } from '../../lib/pillars';
import { LENS_PAGES, LENS_ORDER } from '../../lib/lensPages';
import { WANTED } from '../../lib/wantedWords';
import { loadMeyer, fold as mfold } from '../../lib/meyerView';

const fold = (s) => (s || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

const T = {
  sq: { h1: 'Kërko', ph: 'Kërko fjalë, rrënjë, burime…', words: 'Fjalët', wanted: 'Fjalë që kërkojmë (GEG 500)', turkish: 'Shtresa turke', sources: 'Burimet', pages: 'Faqet', none: 'Asgjë ende për këtë kërkim.', noneCta: 'E dini këtë fjalë? Shtojeni me zërin tuaj', hint: 'Shkruani një fjalë, një rrënjë (p.sh. *h₂ed-), një autor ose një temë.', say: 'Si e thoni?' },
  en: { h1: 'Search', ph: 'Search words, roots, sources…', words: 'Words', wanted: 'Words we are looking for (GEG 500)', turkish: 'Turkish layer', sources: 'Sources', pages: 'Pages', none: 'Nothing yet for this search.', noneCta: 'Know this word? Add it in your own voice', hint: 'Type a word, a root (e.g. *h₂ed-), an author or a topic.', say: 'How do you say it?' },
};

export default function Search() {
  const { lang } = useLang();
  const t = T[lang];
  const [q, setQ] = useState('');
  useEffect(() => { setQ(new URLSearchParams(window.location.search).get('q') || ''); }, []);
  const [meyer, setMeyer] = useState(null);
  useEffect(() => { loadMeyer().then(setMeyer); }, []);
  const f = fold(q.trim());

  const res = useMemo(() => {
    if (f.length < 2) return null;
    const has = (...xs) => xs.some((x) => fold(x).includes(f));
    return {
      words: words.filter((w) => has(w.headword, ...(w.forms || []), w.concept, w.claim?.pieRoot, w.claim?.protoAlbanian)).slice(0, 30),
      wanted: WANTED.filter((x) => has(x.sq, x.en)).slice(0, 20),
      turkish: TURKISH.flatMap((g) => g.words).filter(([sq, tr, msq, men]) => has(sq, tr, msq, men)).slice(0, 20),
      sources: SOURCES.filter((s) => has(s.author, s.title, s.year, s[lang])).slice(0, 20),
      pages: [
        ...PILLAR_ORDER.map((id) => ({ href: `/shtyllat/${id}`, name: PILLARS[id][lang].name, text: PILLARS[id][lang].question })),
        ...LENS_ORDER.map((id) => ({ href: `/lente/${id}`, name: LENS_PAGES[id][lang].name, text: LENS_PAGES[id][lang].question })),
      ].filter((p) => has(p.name, p.text)),
    };
  }, [f, lang]);
  const mres = useMemo(() => { if (!meyer || f.length < 2) return []; const g = mfold(q.trim()); return [...meyer.filter((e) => mfold(e.h).startsWith(g)), ...meyer.filter((e) => !mfold(e.h).startsWith(g) && e.f.includes(g))].slice(0, 8); }, [meyer, f, q]);

  function submit(e) {
    e.preventDefault();
    window.history.replaceState(null, '', q ? `/kerko?q=${encodeURIComponent(q)}` : '/kerko');
  }

  const total = res ? Object.values(res).reduce((a, b) => a + b.length, 0) + mres.length : 0;
  return (
    <div className="wrap lens-page" style={{ paddingTop: 40, paddingBottom: 64 }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 46px)' }}>{t.h1}</h1>
      <form onSubmit={submit} className="search-big" role="search">
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.ph} autoFocus aria-label={t.h1} />
      </form>
      {!res && <p style={{ color: 'var(--muted)' }}>{t.hint}</p>}
      {res && total === 0 && (
        <div className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ margin: 0 }}>{t.none}</p>
          <Link href={`/kujtesa?fjala=${encodeURIComponent(q.trim())}`} className="btn btn-green" style={{ alignSelf: 'flex-start' }}>{t.noneCta} →</Link>
        </div>
      )}
      {res?.words.length > 0 && (
        <section className="lens-sec"><h2>{t.words}</h2>
          <div className="search-tags">{res.words.map((w) => <Link key={w.id} href={`/fjala/${w.id}`} className="tag">{w.headword}{w.concept ? ` · ${w.concept}` : ''}</Link>)}</div>
        </section>
      )}
      {res?.wanted.length > 0 && (
        <section className="lens-sec"><h2>{t.wanted}</h2>
          <div className="search-tags">{res.wanted.map((x) => <Link key={x.cat + x.sq} href={`/kerkojme/${x.slug}`} className="tag">{x.sq} ({x.en}) →</Link>)}</div>
        </section>
      )}
      {res?.turkish.length > 0 && (
        <section className="lens-sec"><h2>{t.turkish}</h2>
          <div className="search-tags">{res.turkish.map(([sq, tr]) => <Link key={sq} href="/shtresat/turke" className="tag">{sq} ← {tr}</Link>)}</div>
        </section>
      )}
      {mres.length > 0 && (
        <section className="lens-sec"><h2>{lang === 'en' ? "Meyer's Dictionary (1891)" : 'Fjalori i Meyer-it (1891)'}</h2>
          <ul>{mres.map((e, k) => <li key={k}><Link href={`/meyer?q=${encodeURIComponent(q.trim())}`}><strong>{e.h}</strong></Link> — {e.t.slice(0, 110)}… <span style={{ color: 'var(--muted)', fontSize: 13 }}>(f. {e.p})</span></li>)}</ul>
        </section>
      )}
      {res?.sources.length > 0 && (
        <section className="lens-sec"><h2>{t.sources}</h2>
          <ul>{res.sources.map((s) => <li key={s.id}><Link href={`/burimet#${s.id}`}>{s.author} ({s.year}), <em>{s.title}</em></Link></li>)}</ul>
        </section>
      )}
      {res?.pages.length > 0 && (
        <section className="lens-sec"><h2>{t.pages}</h2>
          <ul>{res.pages.map((p) => <li key={p.href}><Link href={p.href}>{p.name}</Link>: {p.text}</li>)}</ul>
        </section>
      )}
    </div>
  );
}
