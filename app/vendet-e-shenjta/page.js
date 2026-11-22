'use client';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';
import { SACRED } from '../../lib/sacred';

const T = {
  sq: {
    mock: 'Mock-up · faqe e fshehur, ende pa lidhje në menu',
    eyebrow: 'Kultura · Besimi', h1: 'Vendet e shenjta',
    lead: 'Kisha mbi kishë, faltore mbi tempull, mal i shenjtë para çdo feje. Këtu nuk gjykojmë besimet: mbledhim shtresat, vendet e përbashkëta dhe fjalët e vjetra (fli, i shenjtë, Zot, Verëza), bashkë me atë që kujtojnë pleqtë.',
    ok: '✓ E vërtetuar', deb: '≈ E diskutueshme', q: '? Pyetje e hapur',
    tellH: 'Tregoje me zë',
    tellLead: 'Çdo fshat ka një vend të shenjtë: një kishë të rrënuar, një varr, një lis, një krua. Pyetni pleqtë.',
    qs: ['Cili është vendi i shenjtë i fshatit tuaj, dhe si quhet?', 'Kush shkonte atje, kur, dhe çfarë bënte?', 'A shkonin bashkë njerëz të feve të ndryshme?'],
    tell: '🎙 Regjistro',
    more: 'Për dasmat, lindjet dhe vdekjet: Rrethi i jetës →',
  },
  en: {
    mock: 'Mock-up · hidden page, not yet linked in the menu',
    eyebrow: 'Culture · Belief', h1: 'Sacred places',
    lead: 'Church on church, shrine on temple, a holy mountain before any religion. We do not judge beliefs here: we gather the layers, the shared places and the old words (fli, i shenjtë, Zot, Verëza), together with what the elders remember.',
    ok: '✓ Proven', deb: '≈ Debated', q: '? Open question',
    tellH: 'Tell it aloud',
    tellLead: 'Every village has a sacred place: a ruined church, a grave, an oak, a spring. Ask the elders.',
    qs: ['What is the sacred place of your village, and what is it called?', 'Who went there, when, and what did they do?', 'Did people of different faiths go there together?'],
    tell: '🎙 Record',
    more: 'For weddings, births and deaths: The circle of life →',
  },
};

export default function VendetShenjta() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 780 }}>
      <div className="kv-mock">{t.mock}</div>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 7vw, 50px)', margin: '4px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>

      <div className="tr-grid" style={{ marginTop: 18 }}>
        {SACRED.map((x) => (
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
              <Link className="rj-tell" href={`/kujtesa?fjala=${encodeURIComponent(`Vendet e shenjta: ${T.sq.qs[k]}`)}`}>{t.tell}</Link>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 14 }}><Link href="/rrethi-i-jetes">{t.more}</Link></p>
      </section>
    </div>
  );
}
