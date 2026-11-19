'use client';
import Link from 'next/link';
import { useLang } from '../../../components/LangProvider';
import { GREEK } from '../../../lib/layers';
import { bsbUrl } from '../../../lib/meyerView';

const T = {
  sq: {
    back: '← Shtresat e huazimeve', eyebrow: 'Shtresa 2 · Hulumtim i hapur', h1: 'Shtresa greke',
    lead: 'Shqipja dhe greqishtja janë fqinje prej mbi dy mijë vjetësh. Fjalët kanë kaluar në të dy drejtimet: nga greqishtja e lashtë dhe e re në shqip, dhe nga shqipja në greqisht, sidomos përmes arvanitëve dhe në Epir.',
    rule: 'Për çdo fjalë, drejtimi testohet, nuk supozohet: kush e ka familjen e fjalës, kush e ka dëshminë më të vjetër, dhe a i ndjek fjala rregullat e tingujve të gjuhës që e ka dhënë. Çdo rresht ka faqen te Meyer (1891), që të kontrollohet. Pikëpamjet e Meyer-it janë të vitit 1891 dhe do të krahasohen me Çabejin.',
    qTitle: 'Pyetjet e hapura',
    q: [
      'Sa fjalë shkuan nga shqipja në greqisht, dhe sa erdhën? Numrat e sotëm vijnë kryesisht nga studiues që kërkonin huazime në shqip; drejtimi tjetër është studiuar më pak.',
      'Fjalët e lashta (drapër, kopsht): huazime të vjetra, apo motra nga e njëjta rrënjë indoevropiane?',
      'Cilat fjalë greke i thoni ende në Mirditë, dhe cilat nuk kanë hyrë fare në gegnisht?',
    ],
    in: 'Hynë në shqip (greqisht → shqip)', out: 'Dolën nga shqipja (shqip → greqisht)', open: 'Të hapura: drejtimi i pazgjidhur',
    page: 'Meyer, f.', say: 'Si e thoni?',
  },
  en: {
    back: '← The loan layers', eyebrow: 'Layer 2 · Open research', h1: 'The Greek layer',
    lead: 'Albanian and Greek have been neighbours for more than two thousand years. Words crossed in both directions: from ancient and modern Greek into Albanian, and from Albanian into Greek, especially through the Arvanites and in Epirus.',
    rule: "For every word the direction is tested, not assumed: who has the word family, who has the oldest record, and whether the word follows the sound rules of the language that gave it. Every row has its page in Meyer (1891), so it can be checked. Meyer's views are from 1891 and will be compared with Çabej.",
    qTitle: 'The open questions',
    q: [
      'How many words went from Albanian into Greek, and how many came the other way? Today\'s counts come mostly from scholars looking for loans into Albanian; the other direction has been studied less.',
      'The ancient words (drapër, kopsht): old loans, or sisters from the same Indo-European root?',
      'Which Greek words do you still say in Mirdita, and which never entered Gheg at all?',
    ],
    in: 'Came into Albanian (Greek → Albanian)', out: 'Went out of Albanian (Albanian → Greek)', open: 'Open: direction unresolved',
    page: 'Meyer, p.', say: 'How do you say it?',
  },
};

function Rows({ list, lang, t, dir }) {
  return (
    <div className="layer-list">
      {list.map(([sq, gr, msq, men, pg, nsq, nen]) => (
        <div key={sq} className="layer-row">
          <div className="layer-main">
            <strong>{sq}</strong>
            <span className="layer-tr">{dir === 'out' ? '→' : dir === 'in' ? '←' : '↔'} {gr}</span>
            <span className="layer-m">{lang === 'en' ? men : msq}</span>
            {(nsq || nen) && <span className="layer-native">{lang === 'en' ? nen : nsq}</span>}
            <a className="layer-native" href={bsbUrl(pg + 22)} target="_blank" rel="noopener noreferrer">{t.page} {pg} ↗</a>
          </div>
          <Link href={`/kujtesa?fjala=${encodeURIComponent(sq.split(' ')[0])}`} className="layer-say">{t.say}</Link>
        </div>
      ))}
    </div>
  );
}

export default function GreekLayer() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap lens-page" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <Link href="/shtresat" style={{ fontSize: 14 }}>{t.back}</Link>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{t.h1}</h1>
      <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>{t.lead}</p>
      <p className="draft-note">{t.rule}</p>
      <section className="card pad lens-example">
        <h2>{t.qTitle}</h2>
        <ol>{t.q.map((x) => <li key={x}>{x}</li>)}</ol>
      </section>
      <section className="lens-sec"><h2><span className="dir dir-in" style={{ marginRight: 8 }}>→ shqip</span>{t.in}</h2><Rows list={GREEK.in} lang={lang} t={t} dir="in" /></section>
      <section className="lens-sec"><h2><span className="dir dir-out" style={{ marginRight: 8 }}>shqip →</span>{t.out}</h2><Rows list={GREEK.out} lang={lang} t={t} dir="out" /></section>
      <section className="lens-sec"><h2><span className="dir dir-open" style={{ marginRight: 8 }}>?</span>{t.open}</h2><Rows list={GREEK.open} lang={lang} t={t} dir="open" /></section>
    </div>
  );
}
