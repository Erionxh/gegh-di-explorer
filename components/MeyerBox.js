'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLang } from './LangProvider';
import { loadMeyer, fold, bsbUrl } from '../lib/meyerView';

const T = {
  sq: { h: 'Çfarë thoshte Meyer (1891)', page: 'faqja', orig: 'Faqja origjinale', all: 'Hape në fjalor', more: 'Më shumë', less: 'Më pak', note: 'Tekst i lexuar me makinë (OCR), pa u kontrolluar. Pikëpamje e vitit 1891.' },
  en: { h: 'What Meyer said (1891)', page: 'page', orig: 'Original page', all: 'Open in the dictionary', more: 'More', less: 'Less', note: 'Machine-read text (OCR), not yet checked. A view from 1891.' },
};

// Variants to try: each form, without articles or brackets, plus Tosk forms.
function keys(forms) {
  const out = new Set();
  forms.forEach((f) => (f || '').split(/[\/,;]/).forEach((x) => {
    const k = fold(x.replace(/\(.*?\)/g, '').replace(/^(i|e|të|me)\s+/, '').trim());
    if (k.length >= 2) out.add(k);
  }));
  return [...out];
}

export default function MeyerBox({ forms }) {
  const { lang } = useLang();
  const t = T[lang];
  const [hits, setHits] = useState(null);
  const [open, setOpen] = useState({});
  useEffect(() => {
    const ks = keys(forms);
    loadMeyer().then((all) => {
      const found = all.filter((e) => ks.includes(fold(e.h).replace(/[^a-zçë]/g, '')));
      setHits(found.slice(0, 3));
    }).catch(() => setHits([]));
  }, [forms.join('|')]);
  if (!hits || hits.length === 0) return null;
  return (
    <section className="card pad meyer-box">
      <h2 style={{ fontSize: 22 }}>{t.h}</h2>
      {hits.map((e) => {
        const long = e.t.length > 360;
        const txt = long && !open[e.i + e.h] ? e.t.slice(0, 360) + '…' : e.t;
        return (
          <article key={e.i + e.h} className="meyer-entry">
            <div className="meyer-head"><strong>{e.h}</strong>{e.g && <span className="meyer-geg">gegë</span>}<span className="meyer-pg">{t.page} {e.p}</span></div>
            <p>{txt}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, fontSize: 14 }}>
              {long && <button type="button" className="linkish" onClick={() => setOpen({ ...open, [e.i + e.h]: !open[e.i + e.h] })}>{open[e.i + e.h] ? t.less : t.more}</button>}
              <a href={bsbUrl(e.i)} target="_blank" rel="noopener noreferrer">{t.orig} ↗</a>
              <Link href={`/meyer?q=${encodeURIComponent(e.h)}`}>{t.all} →</Link>
            </div>
          </article>
        );
      })}
      <p style={{ margin: 0, fontSize: 13.5, color: 'var(--muted)' }}>{t.note}</p>
    </section>
  );
}
