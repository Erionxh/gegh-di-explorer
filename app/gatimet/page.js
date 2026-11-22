'use client';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';
import { DISHES } from '../../lib/dishes';

const T = {
  sq: {
    mock: 'Mock-up · faqe e fshehur, ende pa lidhje në menu',
    eyebrow: 'Kultura · Gatimet', h1: 'Si gatuhet te ju?',
    lead: 'I njëjti emër, gatime të ndryshme. I njëjti gatim, emra të ndryshëm. Ushqimi udhëton më lehtë se çdo gjë tjetër, por fjalët e kuzhinës janë ndër më të vjetrat në një gjuhë: saçi, prushi, kosi, flija.',
    ok: '✓ E vërtetuar', deb: '≈ E diskutueshme', q: '? Pyetje e hapur',
    tellH: 'Tregoje me zë',
    tellLead: 'Pyetni nënën, gjyshen ose gjyshin. Jo vetëm recetën: fjalët, veglat, rastin.',
    qs: ['Cili është gatimi që bëhet vetëm në fshatin tuaj, dhe si quhet?', 'Si bëhet flija, byreku ose pitja te ju? Me çfarë vegla?', 'Çfarë gatuhej për dasmë, për lindje, për të vdekurit?'],
    tell: '🎙 Regjistro',
    more: 'Për dasmat, lindjet dhe vdekjet: Rrethi i jetës →',
  },
  en: {
    mock: 'Mock-up · hidden page, not yet linked in the menu',
    eyebrow: 'Culture · Food', h1: 'How is it cooked where you are?',
    lead: 'The same name, different dishes. The same dish, different names. Food travels more easily than anything, yet kitchen words are among the oldest in a language: saç, prush, kos, flija.',
    ok: '✓ Proven', deb: '≈ Debated', q: '? Open question',
    tellH: 'Tell it aloud',
    tellLead: 'Ask your mother, grandmother or grandfather. Not just the recipe: the words, the tools, the occasion.',
    qs: ['Which dish is made only in your village, and what is it called?', 'How is flija, byrek or pite made where you are? With what tools?', 'What was cooked for a wedding, a birth, for the dead?'],
    tell: '🎙 Record',
    more: 'For weddings, births and deaths: The circle of life →',
  },
};

export default function Gatimet() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 780 }}>
      <div className="kv-mock">{t.mock}</div>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 7vw, 50px)', margin: '4px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>

      <div className="tr-grid" style={{ marginTop: 18 }}>
        {DISHES.map((x) => (
          <article key={x.id} className="tr-card">
            <div className="tr-top"><span className={`tr-tag ${x.st}`}>{t[x.st]}</span></div>
            <h2>{x.name}</h2>
            <p>{lang === 'en' ? x.en : x.sq}</p>
          </article>
        ))}
      </div>

      <section className="card pad" style={{ marginTop: 20 }}>
        <h2 style={{ marginTop: 0, fontSize: 24 }}>🎙 {t.tellH}</h2>
        <p style={{ color: 'var(--ink-2)' }}>{t.tellLead}</p>
        <div className="rj-qs">
          {t.qs.map((q, k) => (
            <div key={k} className="rj-q">
              <p>{q}</p>
              <Link className="rj-tell" href={`/kujtesa?fjala=${encodeURIComponent(`Gatimet: ${T.sq.qs[k]}`)}`}>{t.tell}</Link>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 14 }}><Link href="/rrethi-i-jetes">{t.more}</Link></p>
      </section>
    </div>
  );
}
