'use client';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';
import { FOLK_CATS, FOLK } from '../../lib/folklori';

export default function Folklori() {
  const { lang } = useLang();
  const en = lang === 'en';
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 780 }}>
      <p className="eyebrow">{en ? 'Culture · Folklore' : 'Kultura · Folklori'}</p>
      <h1 style={{ fontSize: 'clamp(32px, 7vw, 48px)', margin: '4px 0 8px' }}>{en ? 'The folklore of the language' : 'Folklori i gjuhës'}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{en
        ? 'Proverbs, blessings, legends and jokes keep words and forms that dictionaries have lost. Write them exactly as they are said, with the village and the occasion.'
        : 'Fjalët e urta, urimet, legjendat dhe barcoletat ruajnë fjalë e forma që fjalorët i kanë humbur. Shkruajini pikërisht siç thuhen, me fshatin dhe rastin.'}</p>

      {FOLK_CATS.map((c) => {
        const items = FOLK.filter((x) => x.cat === c.id);
        return (
          <section key={c.id} className="card pad" style={{ marginTop: 16 }}>
            <h2 style={{ marginTop: 0, fontSize: 24 }}>{en ? c.en : c.sq}</h2>
            <p style={{ color: 'var(--ink-2)', marginTop: 0 }}>{c.lead}</p>
            {items.map((x) => (
              <div key={x.id} className="folk-item">
                {x.lines.map(([who, line]) => <p key={line} className="folk-line"><span>{who}:</span> <b>{line}</b></p>)}
                <p className="kt-small" style={{ margin: '4px 0 0' }}>📍 {x.place} · {en ? 'testimony' : 'dëshmi'}</p>
                <p style={{ margin: '6px 0 0' }}>{en ? x.en : x.sq}</p>
              </div>
            ))}
            <div className="rj-q" style={{ marginTop: 10 }}>
              <p style={{ margin: 0 }}>{c.ask}</p>
              <Link className="rj-tell" href={`/kujtesa?fjala=${encodeURIComponent(`${c.sq}: `)}`}>🎙 {en ? 'Add yours' : 'Shto tuajën'}</Link>
            </div>
          </section>
        );
      })}
      <p style={{ marginTop: 18 }}><Link href="/lente/6">{en ? '← The anthropological lens' : '← Lentja antropologjike'}</Link></p>
    </div>
  );
}
