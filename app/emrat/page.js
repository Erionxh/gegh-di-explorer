'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';
import { NAMES, NAME_CATS } from '../../lib/names';

const T = {
  sq: { mock: 'Mock-up · lista e parë, do të rritet me burime', eyebrow: 'Gjej rrënjët', h1: 'Emrat', lead: 'Emrat janë fjalë edhe ata, dhe ndër më të vjetrat. Këtu i mbledhim me etiketë të ndershme: me burim ose të paverifikuar.', gen: '🎲 Më jep një emër', boy: 'Djalë', girl: 'Vajzë', any: 'Çdo', all: 'Të gjitha', ok: '✓ Me burim', unv: '≈ E paverifikuar', tree: '🌳 Ndërto trungun e familjes →', add: 'Di një emër të vjetër që mungon? Na e trego →' },
  en: { mock: 'Mock-up · a first list, it will grow with sources', eyebrow: 'Find your roots', h1: 'Names', lead: 'Names are words too, and among the oldest. Here we collect them with an honest label: sourced or unverified.', gen: '🎲 Give me a name', boy: 'Boy', girl: 'Girl', any: 'Any', all: 'All', ok: '✓ Sourced', unv: '≈ Unverified', tree: '🌳 Build your family tree →', add: 'Know an old name that is missing? Tell us →' },
};

export default function Emrat() {
  const { lang } = useLang();
  const t = T[lang];
  const [g, setG] = useState('');
  const [cat, setCat] = useState('all');
  const [pick, setPick] = useState(null);
  const pool = NAMES.filter((n) => (!g || n[1] === g) && (cat === 'all' || n[2] === cat));
  const roll = () => setPick(pool[Math.floor(Math.random() * pool.length)] || null);
  const label = (n) => (n[3] === 'ok' ? t.ok : t.unv);
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 760 }}>
      <div className="kv-mock">{t.mock}</div>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 7vw, 50px)', margin: '4px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>

      <div className="em-gen card pad">
        <div className="kt-pills">{[['', t.any], ['m', t.boy], ['f', t.girl]].map(([k, l]) => <button key={k || 'a'} className={g === k ? 'on' : ''} onClick={() => setG(k)}>{l}</button>)}</div>
        <button className="kt-btn" onClick={roll}>{t.gen}</button>
        {pick && (
          <div className="em-pick">
            <b>{pick[0]}</b>
            <span className={`tr-tag ${pick[3] === 'ok' ? 'ok' : 'deb'}`}>{label(pick)}</span>
            <p>{NAME_CATS[pick[2]][lang][0]}{(lang === 'en' ? pick[5] : pick[4]) ? ` · ${lang === 'en' ? pick[5] : pick[4]}` : ''}</p>
          </div>
        )}
      </div>

      <div className="kv-chips" style={{ margin: '18px 0 10px' }}>
        <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>{t.all}</button>
        {Object.entries(NAME_CATS).map(([k, v]) => <button key={k} className={cat === k ? 'on' : ''} onClick={() => setCat(k)}>{v[lang][0]}</button>)}
      </div>
      {Object.entries(NAME_CATS).filter(([k]) => cat === 'all' || cat === k).map(([k, v]) => {
        const list = NAMES.filter((n) => n[2] === k && (!g || n[1] === g));
        if (!list.length) return null;
        return (
          <section key={k} style={{ marginTop: 16 }}>
            <h2 style={{ fontSize: 22, margin: '0 0 4px' }}>{v[lang][0]}</h2>
            <p className="kt-small" style={{ marginTop: 0 }}>{v[lang][1]}</p>
            <div className="em-list">
              {list.map((n) => (
                <div key={n[0]} className="em-item">
                  <b>{n[0]}</b><span className="kt-small">{n[1] === 'm' ? '♂' : '♀'}</span>
                  {(lang === 'en' ? n[5] : n[4]) && <p>{lang === 'en' ? n[5] : n[4]}</p>}
                </div>
              ))}
            </div>
          </section>
        );
      })}
      <p style={{ marginTop: 24, display: 'grid', gap: 8 }}>
        <Link href="/trungu">{t.tree}</Link>
        <Link href="/kujtesa?fjala=emër i vjetër">{t.add}</Link>
      </p>
    </div>
  );
}
