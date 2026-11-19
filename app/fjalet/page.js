'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';
import { words } from '../../lib/words';
import { WANTED, CATEGORIES, CAT_EN, archiveMatch } from '../../lib/wantedWords';

const T = {
  sq: { eyebrow: 'Fjalët', h1: 'Të gjitha fjalët', lead: 'Dy lista: fjalët që kanë faqen e tyre në arkiv, dhe 500 fjalët bazë që po i kërkojmë në gegnisht. Çdo fjalë e listës së dytë pret zërin tuaj.', arch: 'Në arkiv', want: 'GEG 500: fjalët që kërkojmë', filter: 'Kërko në listë…', inArch: 'ka faqe', all: 'Të gjitha' },
  en: { eyebrow: 'Words', h1: 'All the words', lead: 'Two lists: the words that have their own page in the archive, and the 500 basic words we are looking for in Gheg. Every word on the second list is waiting for your voice.', arch: 'In the archive', want: 'GEG 500: the words we are looking for', filter: 'Filter the list…', inArch: 'has a page', all: 'All' },
};

export default function AllWords() {
  const { lang } = useLang();
  const t = T[lang];
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');
  const f = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const qq = f(q.trim());
  const list = WANTED.filter((w) => (cat === 'all' || w.cat === cat) && (!qq || f(w.sq).includes(qq) || f(w.en).includes(qq)));
  return (
    <div className="wrap" style={{ paddingTop: 44, paddingBottom: 64 }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>

      <section style={{ marginTop: 26 }}>
        <h2 style={{ fontSize: 26 }}>{t.arch} · {words.length}</h2>
        <div className="chips" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {words.map((w) => <Link key={w.id} href={`/fjala/${w.id}`} className="chip">{w.headword}</Link>)}
        </div>
      </section>

      <section style={{ marginTop: 34 }}>
        <h2 style={{ fontSize: 26 }}>{t.want} · {WANTED.length}</h2>
        <input className="pn-input" style={{ width: '100%', margin: '10px 0' }} placeholder={t.filter} value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="kv-chips" style={{ marginBottom: 14 }}>
          <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>{t.all}</button>
          {CATEGORIES.map((c) => <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{lang === 'en' ? CAT_EN[c] || c : c}</button>)}
        </div>
        <div className="want-grid">
          {list.map((w) => {
            const a = archiveMatch(w);
            return (
              <Link key={w.slug} href={`/kerkojme/${w.slug}`} className={`want-item ${a ? 'has' : ''}`}>
                <strong>{w.sq}</strong><span>{w.en}</span>{a && <em>{t.inArch}</em>}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
