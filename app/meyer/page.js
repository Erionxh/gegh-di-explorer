'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';
import { loadMeyer, fold, bsbUrl } from '../../lib/meyerView';

const T = {
  sq: {
    eyebrow: 'Burim i plotë · Lentja 1 dhe 2', h1: 'Fjalori i Meyer-it (1891)',
    lead: 'Gustav Meyer, Etymologisches Wörterbuch der albanesischen Sprache (Strasburg 1891): fjalori i parë etimologjik i shqipes, i plotë, me kërkim. Meyer provoi se shqipja është degë më vete e familjes indoevropiane. Pikëpamjet e tij për prejardhjen e fjalëve janë të vitit 1891: shumë prej tyre janë rishqyrtuar më vonë (Çabej e të tjerë).',
    warn: 'Teksti është lexuar me makinë (OCR) dhe nuk është kontrolluar ende. Shkronjat greke dhe shenjat e veçanta të Meyer-it shpesh dalin gabim. Për çdo hyrje, hapni faqen origjinale.',
    credit: 'Skanimi: Bayerische Staatsbibliothek München (MDZ), pa të drejta autori, për përdorim jo tregtar.',
    ph: 'Kërko një fjalë shqipe, gjermane ose një rrënjë…', gheg: 'Vetëm hyrjet me forma gege (geg., scut., Mirdita, Dibra, Mati)',
    count: (n, m) => `${n} hyrje${m ? ` · po shfaqen ${m}` : ''}`, more: 'Shfaq më shumë', page: 'faqja', orig: 'Shiko faqen origjinale', loading: 'Duke ngarkuar fjalorin…',
    missing: 'Faqet 40–257 (B–M) po shtohen.', abbr: 'Shkurtime të Meyer-it: geg. = gegërisht, to. = toskërisht, scut. = Shkodër, cal./sic. = arbëreshët e Kalabrisë/Siçilisë, gr. = arvanitët e Greqisë, Ro. = Rossi, Bla. = Blanchus, Mitk. = Mitkos, Hahn, Kav. = Kavalioti.',
  },
  en: {
    eyebrow: 'Full source · Lenses 1 and 2', h1: "Meyer's Dictionary (1891)",
    lead: "Gustav Meyer, Etymologisches Wörterbuch der albanesischen Sprache (Strasbourg 1891): the first etymological dictionary of Albanian, complete and searchable. Meyer proved Albanian is a separate branch of the Indo-European family. His views on word origins are from 1891; many were later re-examined (Çabej and others).",
    warn: "The text is machine-read (OCR) and not yet checked. Meyer's Greek letters and special signs are often wrong. For any entry, open the original page.",
    credit: 'Scan: Bayerische Staatsbibliothek München (MDZ), no copyright, for non-commercial use.',
    ph: 'Search an Albanian or German word, or a root…', gheg: 'Only entries with Gheg forms (geg., scut., Mirdita, Dibra, Mati)',
    count: (n, m) => `${n} entries${m ? ` · showing ${m}` : ''}`, more: 'Show more', page: 'page', orig: 'See the original page', loading: 'Loading the dictionary…',
    missing: 'Pages 40–257 (B–M) are being added.', abbr: "Meyer's abbreviations: geg. = Gheg, to. = Tosk, scut. = Shkodra, cal./sic. = Arbëresh of Calabria/Sicily, gr. = Arvanites of Greece, Ro. = Rossi, Bla. = Blanchus, Mitk. = Mitkos, Hahn, Kav. = Kavalioti.",
  },
};

export default function Meyer() {
  const { lang } = useLang();
  const t = T[lang];
  const [all, setAll] = useState(null);
  const [q, setQ] = useState('');
  const [gheg, setGheg] = useState(false);
  const [n, setN] = useState(40);
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get('q')) setQ(p.get('q'));
    if (p.get('geg')) setGheg(true);
    loadMeyer().then(setAll);
  }, []);
  const res = useMemo(() => {
    if (!all) return [];
    const f = fold(q.trim());
    let r = all;
    if (gheg) r = r.filter((e) => e.g);
    if (f.length >= 2) {
      const head = r.filter((e) => fold(e.h).startsWith(f));
      const rest = r.filter((e) => !fold(e.h).startsWith(f) && e.f.includes(f));
      r = [...head, ...rest];
    }
    return r;
  }, [all, q, gheg]);
  useEffect(() => setN(40), [q, gheg]);
  return (
    <div className="wrap lens-page" style={{ paddingTop: 44, paddingBottom: 64 }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 46px)' }}>{t.h1}</h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>{t.lead}</p>
      <p className="draft-note">{t.warn} {t.missing}</p>
      <div className="search-big"><input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.ph} aria-label={t.ph} /></div>
      <label style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 15 }}><input type="checkbox" checked={gheg} onChange={(e) => setGheg(e.target.checked)} />{t.gheg}</label>
      {!all ? <p style={{ color: 'var(--muted)' }}>{t.loading}</p> : <p style={{ color: 'var(--muted)', margin: 0 }}>{t.count(res.length, res.length > n ? n : 0)}</p>}
      <div className="meyer-list">
        {res.slice(0, n).map((e, k) => (
          <article key={e.i + '-' + k} className="meyer-entry">
            <div className="meyer-head"><strong>{e.h}</strong>{e.g && <span className="meyer-geg">gegë</span>}<span className="meyer-pg">{t.page} {e.p}</span></div>
            <p>{e.t}</p>
            <a href={bsbUrl(e.i)} target="_blank" rel="noopener noreferrer">{t.orig} →</a>
          </article>
        ))}
      </div>
      {res.length > n && <button type="button" className="btn btn-navy" style={{ alignSelf: 'flex-start' }} onClick={() => setN(n + 60)}>{t.more}</button>}
      <p style={{ fontSize: 13.5, color: 'var(--muted)' }}>{t.abbr}</p>
      <p style={{ fontSize: 13.5, color: 'var(--muted)' }}>{t.credit} <Link href="/burimet#S-meyer-1891">Burimet →</Link></p>
    </div>
  );
}
