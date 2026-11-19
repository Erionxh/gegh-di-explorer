'use client';
import Link from 'next/link';
import { useLang } from '../../../components/LangProvider';
import { LATIN } from '../../../lib/layers';
import { bsbUrl } from '../../../lib/meyerView';

const T = {
  sq: {
    back: '← Shtresat e huazimeve', eyebrow: 'Shtresa 1 · Hulumtim i hapur', h1: 'Shtresa latine',
    lead: 'Për rreth gjashtë shekuj, nga pushtimi romak deri te dyndjet sllave, shqipja jetoi pranë latinishtes. Mori prej saj qindra fjalë: jo vetëm për kishën e qytetin, por edhe për trupin, shtëpinë dhe familjen. Kjo është shtresa më e madhe e huazimeve.',
    rule: 'Çdo rresht ka faqen te Meyer (1891), që të kontrollohet. Meyer e pa latinishten kudo; shumë nga fjalët e tij „latine” janë rishqyrtuar më vonë (Çabej e të tjerë). Prandaj fjalët e diskutueshme janë veç, si të hapura.',
    qTitle: 'Pyetjet e hapura',
    q: [
      'Pse shqipja mori nga latinishtja edhe fjalë të trupit (shpinë, kofshë) e të familjes (nip, fqinj)? Çfarë tregon kjo për jetën e përbashkët?',
      'Sa nga „huazimet latine” të Meyer-it qëndrojnë sot? Kjo do të shihet fjalë për fjalë me Çabejin.',
      'Si i thoni këto në Mirditë? Gegnishtja ruan shpesh trajtën më afër latinishtes (kângë, shkruj).',
    ],
    open: 'Të hapura: latinisht apo jo?', out: 'Edhe në drejtimin tjetër: shqip → rumanisht',
    outNote: 'Rumanishtja është gjuhë latine, por ka fjalë që, sipas Meyer-it, i mori nga shqipja ose nga një gjuhë e vjetër e përbashkët. Meyer shpesh thotë „ndoshta”.',
    page: 'Meyer, f.', say: 'Si e thoni?', dossier: 'Dosja e fjalës →',
  },
  en: {
    back: '← The loan layers', eyebrow: 'Layer 1 · Open research', h1: 'The Latin layer',
    lead: 'For about six centuries, from the Roman conquest to the Slavic migrations, Albanian lived next to Latin. It took hundreds of words from it: not only for the Church and the town, but also for the body, the house and the family. This is the largest loan layer.',
    rule: "Every row has its page in Meyer (1891), so it can be checked. Meyer saw Latin everywhere; many of his 'Latin' words were later re-examined (Çabej and others). So the disputed words are kept apart, as open.",
    qTitle: 'The open questions',
    q: [
      'Why did Albanian take even words for the body (shpinë, kofshë) and the family (nip, fqinj) from Latin? What does that say about the shared life?',
      "How many of Meyer's 'Latin loans' still hold today? This will be checked word by word against Çabej.",
      'How do you say these in Mirdita? Gheg often keeps the form closer to Latin (kângë, shkruj).',
    ],
    open: 'Open: Latin or not?', out: 'The other direction too: Albanian → Romanian',
    outNote: "Romanian is a Latin language, but it has words that, according to Meyer, it took from Albanian or from an old shared language. Meyer often says 'probably'.",
    page: 'Meyer, p.', say: 'How do you say it?', dossier: 'Word dossier →',
  },
};

function Row({ sq, la, msq, men, pg, nsq, nen, lang, t, arrow, href }) {
  return (
    <div className="layer-row">
      <div className="layer-main">
        <strong>{sq}</strong>
        <span className="layer-tr">{arrow} {la}</span>
        <span className="layer-m">{lang === 'en' ? men : msq}</span>
        {(nsq || nen) && <span className="layer-native">{lang === 'en' ? nen : nsq}</span>}
        <a className="layer-native" href={bsbUrl(pg + 22)} target="_blank" rel="noopener noreferrer">{t.page} {pg} ↗</a>
        {href && <Link className="layer-native" href={href}>{t.dossier}</Link>}
      </div>
      <Link href={`/kujtesa?fjala=${encodeURIComponent(sq.split(' ')[0])}`} className="layer-say">{t.say}</Link>
    </div>
  );
}

export default function LatinLayer() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap lens-page" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <Link href="/shtresat" style={{ fontSize: 14 }}>{t.back}</Link>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{t.h1}</h1>
      <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>{t.lead}</p>
      <p className="draft-note"><span className="dir dir-in" style={{ marginRight: 8 }}>→ shqip</span>{t.rule}</p>
      <section className="card pad lens-example">
        <h2>{t.qTitle}</h2>
        <ol>{t.q.map((x) => <li key={x}>{x}</li>)}</ol>
      </section>
      {LATIN.groups.map((g) => (
        <section key={g.sq} className="lens-sec">
          <h2>{lang === 'en' ? g.en : g.sq}</h2>
          <div className="layer-list">
            {g.words.map(([sq, la, msq, men, pg, nsq, nen]) => <Row key={sq} {...{ sq, la, msq, men, pg, nsq, nen, lang, t }} arrow="←" />)}
          </div>
        </section>
      ))}
      <section className="lens-sec">
        <h2><span className="dir dir-open" style={{ marginRight: 8 }}>?</span>{t.open}</h2>
        <div className="layer-list">
          {LATIN.open.map(([sq, la, msq, men, pg, nsq, nen, href]) => <Row key={sq} {...{ sq, la, msq, men, pg, nsq, nen, lang, t, href }} arrow="↔" />)}
        </div>
      </section>
      <section className="lens-sec">
        <h2><span className="dir dir-out" style={{ marginRight: 8 }}>shqip →</span>{t.out}</h2>
        <p style={{ color: 'var(--ink-2)', marginTop: 0 }}>{t.outNote}</p>
        <div className="layer-list">
          {LATIN.out.map(([sq, ro, msq, men, pg]) => <Row key={sq} {...{ sq, la: `rum. ${ro}`, msq, men, pg, lang, t }} arrow="→" />)}
        </div>
      </section>
    </div>
  );
}
