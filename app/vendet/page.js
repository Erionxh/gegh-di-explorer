'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';
import { TOPONYMS } from '../../lib/toponyms';

const T = {
  sq: {
    mock: 'Mock-up · faqe e fshehur, ende pa lidhje në menu',
    eyebrow: 'Toponimia', h1: 'Emrat e vendeve',
    lead: 'Disa qytete e mbajnë emrin ilir edhe sot: Shkodra, Lezha. Të tjerë e humbën, nën romakët, sllavët ose osmanët. Dhe çdo fshat ka emra që nuk i shkruan askush: arat, kronet, majat, udhët. Këta i dinë vetëm pleqtë.',
    rule: 'GEG 1.0 nuk vendos si duhet të quhet një vend. Mbledh provat: emrin e sotëm, emrat e vjetër me burim, dhe emrin siç e thonë pleqtë. Nëse një ditë komuniteti ose shteti do të rikthejë një emër, provat do të jenë këtu, të ndara qartë: çfarë është e vërtetuar dhe çfarë është hamendje.',
    all: 'Të gjitha', ok: '✓ E vërtetuar', deb: '≈ E diskutueshme', q: '? Pyetje e hapur',
    today: 'Sot', old: 'Më parë',
    tellH: 'Emrat që dinë pleqtë',
    tellLead: 'Pyetni më të moshuarin e shtëpisë: si e quanin fshatin, lagjen, arat, kronin, malin? A ka ndonjë emër që nuk e përdor më askush? Një emër i vetëm mund të ruajë një fjalë që gjuha e ka harruar.',
    qs: ['Si e thoshin pleqtë emrin e fshatit tuaj?', 'Si quheshin arat, livadhet dhe kronet përreth?', 'A ka ndonjë vend me emër që sot nuk kuptohet më?'],
    tell: '🎙 Tregoje me zë',
    note: 'Edhe emri më i vjetër nuk është gjithmonë «më shqip»: Durrësi trashëgon emrin romak, Shkodra atë ilir. Ky dallim është vetë historia.',
  },
  en: {
    mock: 'Mock-up · hidden page, not yet linked in the menu',
    eyebrow: 'Place names', h1: 'The names of places',
    lead: 'Some towns still carry their Illyrian name: Shkodra, Lezha. Others lost it, under the Romans, the Slavs or the Ottomans. And every village has names nobody writes down: fields, springs, peaks, paths. Only the elders know them.',
    rule: 'GEG 1.0 does not decide what a place should be called. It gathers the evidence: today’s name, older names with sources, and the name as the elders say it. If one day a community or the state wants to restore a name, the evidence will be here, clearly separated: what is proven and what is guesswork.',
    all: 'All', ok: '✓ Proven', deb: '≈ Debated', q: '? Open question',
    today: 'Today', old: 'Before',
    tellH: 'The names the elders know',
    tellLead: 'Ask the eldest in your home: what did they call the village, the neighbourhood, the fields, the spring, the mountain? Is there a name nobody uses any more? A single name can keep a word the language has forgotten.',
    qs: ['How did the elders say the name of your village?', 'What were the fields, meadows and springs around it called?', 'Is there a place whose name nobody understands any more?'],
    tell: '🎙 Tell it aloud',
    note: 'The oldest name is not always “more Albanian”: Durrës inherits the Roman name, Shkodra the Illyrian one. That difference is the history itself.',
  },
};

export default function Vendet() {
  const { lang } = useLang();
  const t = T[lang];
  const [f, setF] = useState('all');
  const list = TOPONYMS.filter((x) => f === 'all' || x.st === f);
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 780 }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 7vw, 50px)', margin: '4px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <p style={{ color: 'var(--ink-2)' }}>{t.rule}</p>

      <section className="card pad" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0, fontSize: 24 }}>🎙 {t.tellH}</h2>
        <p style={{ color: 'var(--ink-2)' }}>{t.tellLead}</p>
        <div className="rj-qs">
          {t.qs.map((q, k) => (
            <div key={k} className="rj-q">
              <p>{q}</p>
              <Link className="rj-tell" href={`/kujtesa?fjala=${encodeURIComponent(`Emri i vendit: ${T.sq.qs[k]}`)}`}>{t.tell}</Link>
            </div>
          ))}
        </div>
      </section>

      <div className="kt-pills" style={{ margin: '22px 0 12px' }}>
        {['all', 'ok', 'deb', 'q'].map((k) => <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{t[k]}</button>)}
      </div>
      <div className="tr-grid">
        {list.map((x) => (
          <article key={x.id} className="tr-card">
            <div className="tr-top"><span className={`tr-tag ${x.st}`}>{t[x.st]}</span></div>
            <h2>{x.today} <span style={{ color: 'var(--ink-2)', fontWeight: 400 }}>←</span> <span className="tr-yr">{x.old}</span></h2>
            <p>{lang === 'en' ? x.en : x.sq}</p>
          </article>
        ))}
      </div>
      <p className="kt-small" style={{ marginTop: 16 }}>{t.note}</p>
    </div>
  );
}
