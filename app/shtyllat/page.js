'use client';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';
import { Castle } from '../../components/PillarView';
import { PILLARS, PILLAR_ORDER } from '../../lib/pillars';

const T = {
  sq: { eyebrow: 'Arkitektura e kështjellës', h1: 'Tetë shtyllat', lead: 'Lentet janë mënyrat si e shikojmë gjuhën. Shtyllat janë ajo që e mban kështjellën në këmbë: rregullat, teknika, rendi, materiali, provat, kujdestaria, puna shkencore dhe dera për publikun. Kushtetuta është themeli, ndërfaqja është çatia që shihet nga jashtë.', more: 'Lexo më shumë' },
  en: { eyebrow: 'The architecture of the castle', h1: 'The eight pillars', lead: 'The lenses are the ways we look at the language. The pillars are what keep the castle standing: the rules, the engineering, the order, the material, the evidence, the custodianship, the scientific work and the door for the public. The Constitution is the foundation; the interface is the roof seen from outside.', more: 'Read more' },
};

export default function Pillars() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{t.h1}</h1>
      <p className="lead" style={{ maxWidth: 780 }}>{t.lead}</p>
      <div className="card pad castle" style={{ marginTop: 24 }}><Castle /></div>
      <div className="pillar-grid">
        {PILLAR_ORDER.map((id) => {
          const c = PILLARS[id][lang];
          return (
            <Link key={id} href={`/shtyllat/${id}`} className="card pillar pillar-card-link">
              <span className="pillar-n">{PILLARS[id].n}</span>
              <h3>{c.name}</h3>
              <p style={{ fontStyle: 'italic', marginBottom: 6 }}>{c.metaphor}</p>
              <p>{c.question}</p>
              <span className="lens-more">{t.more} →</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
