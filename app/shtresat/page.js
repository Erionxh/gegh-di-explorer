'use client';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';
import { LAYERS } from '../../lib/layers';

const T = {
  sq: {
    eyebrow: 'Lentja historike · Hulumtim i hapur', h1: 'Shtresat e huazimeve',
    lead: 'Çdo gjuhë merr dhe jep. Shqipja ka marrë nga latinishtja, greqishtja, sllavishtja, turqishtja e italishtja, dhe u ka dhënë atyre. Këtu nuk numërojmë "humbje". Shënojmë çdo fjalë me drejtimin e saj, dhe drejtimi testohet, nuk supozohet.',
    dirTitle: 'Si testohet drejtimi',
    dir: [
      'Familja e fjalës: gjuha që ka foljen, emrat dhe fjalët e prejardhura nga e njëjta rrënjë është zakonisht ajo që e ka dhënë fjalën.',
      'Ligjet tingullore: fjala sillet si fjalë e trashëguar në njërën gjuhë dhe si e huaj në tjetrën.',
      'Data: kur dëshmohet fjala për herë të parë në secilën gjuhë.',
      'Gjeografia: ku është e përhapur fjala, dhe ku jetonin folësit e të dy gjuhëve bashkë.',
    ],
    dirs: [['in', 'Hyri në shqip'], ['out', 'Doli nga shqipja'], ['both', 'Në të dy drejtimet / substrat i përbashkët'], ['open', 'I pazgjidhur']],
    dirsTitle: 'Katër drejtimet',
    soon: 'Do të ndërtohet', open: 'Hap shtresën',
  },
  en: {
    eyebrow: 'Historical lens · Open research', h1: 'The loan layers',
    lead: 'Every language takes and gives. Albanian took from Latin, Greek, Slavic, Turkish and Italian, and gave to them too. We don\'t count "losses" here. Every word is marked with its direction, and the direction is tested, not assumed.',
    dirTitle: 'How direction is tested',
    dir: [
      'The word family: the language that has the verb, the nouns and the derived words from the same root is usually the one that gave the word.',
      'Sound laws: the word behaves like an inherited word in one language and like a foreign one in the other.',
      'Dating: when the word is first attested in each language.',
      'Geography: where the word is spread, and where speakers of both languages lived side by side.',
    ],
    dirs: [['in', 'Came into Albanian'], ['out', 'Went out of Albanian'], ['both', 'Both ways / shared substrate'], ['open', 'Unresolved']],
    dirsTitle: 'The four directions',
    soon: 'To be built', open: 'Open the layer',
  },
};

export default function Layers() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap lens-page" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{t.h1}</h1>
      <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>{t.lead}</p>
      <section className="lens-sec"><h2>{t.dirsTitle}</h2>
        <div className="dir-legend">{t.dirs.map(([k, v]) => <span key={k} className={`dir dir-${k}`}>{v}</span>)}</div>
      </section>
      <section className="lens-sec"><h2>{t.dirTitle}</h2><ul>{t.dir.map((x) => <li key={x}>{x}</li>)}</ul></section>
      <div className="pillar-grid">
        {LAYERS.map((l) => l.ready ? (
          <Link key={l.id} href={`/shtresat/${l.id}`} className="card pillar pillar-card-link">
            <h3>{lang === 'en' ? l.en : l.sq}</h3><p>{l.note[lang]}</p><span className="lens-more">{t.open} →</span>
          </Link>
        ) : (
          <div key={l.id} className="card pillar" style={{ opacity: 0.7 }}>
            <h3>{lang === 'en' ? l.en : l.sq}</h3><p>{l.note[lang]}</p><span style={{ fontSize: 13, color: 'var(--muted)' }}>{t.soon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
