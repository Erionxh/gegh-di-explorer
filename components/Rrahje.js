'use client';
import Link from 'next/link';
import { useLang } from './LangProvider';
import { RRAHJE, RR_STATUS } from '../lib/rrahje';
import { SOURCES } from '../lib/sources';
import LiveTopic from './KuveniLive';

const T = {
  sq: {
    mock: 'Qëndrimet dhe kundërshtimet lart janë përmbledhja e GEG. Poshtë, te „Nga ju”, shkruani ju.', eyebrow: 'Kuveni · Rrahje mendimesh', h1: 'Rrahje mendimesh',
    lead: 'Pyetjet e mëdha të gegnishtes, me të gjitha anët. Çdo qëndrim ka provat e veta, çdo kundërshtim ka përgjigjen e vet. Statusin e vendos Pleqnia, me arsye, jo votat.',
    back: '← Rrahje mendimesh', backK: '← Kuveni', positions: 'Qëndrimet', exchange: 'Kundërshtime dhe përgjigje', test: 'Çka do ta zgjidhte?',
    pleqnia: 'Pleqnia', pleqniaNote: 'Statusi ndryshon vetëm kur vjen provë e re, jo kur dikush „fiton” rrahjen.',
    obj: 'Kundërshtim', rep: 'Përgjigje', to: 'për qëndrimin', yes: 'Bindëse', no: 'Jo bindëse', word: 'Faqja e fjalës', join: 'Sillni një provë ose një kundërshtim', n: 'qëndrime',
  },
  en: {
    mock: 'The positions and objections above are the GEG summary. Below, under "From you", you write.', eyebrow: 'Kuveni · Clash of ideas', h1: 'Rrahje mendimesh',
    lead: 'The big questions of Gheg, with every side. Each position has its evidence, each objection its reply. The status is set by the Pleqnia (the elders), with reasons, not by votes.',
    back: '← Rrahje mendimesh', backK: '← Kuveni', positions: 'The positions', exchange: 'Objections and replies', test: 'What would settle it?',
    pleqnia: 'Pleqnia (the elders\' judgment)', pleqniaNote: 'The status changes only when new evidence arrives, not when someone "wins" the argument.',
    obj: 'Objection', rep: 'Reply', to: 'on position', yes: 'Convincing', no: 'Not convincing', word: 'Word page', join: 'Bring evidence or an objection', n: 'positions',
  },
};


const Status = ({ s, lang }) => <span className={`rr-status rr-${s}`}>{RR_STATUS[s][lang]}</span>;

export function RrahjeIndex() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 860 }}>
      <div className="kv-mock">{t.mock}</div>
      <Link href="/kuveni" style={{ fontSize: 14, display: 'inline-block', marginTop: 16 }}>{t.backK}</Link>
      <p className="eyebrow" style={{ marginTop: 14 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <div style={{ display: 'grid', gap: 12, marginTop: 20 }}>
        {RRAHJE.map((x) => (
          <Link key={x.id} href={`/kuveni/rrahje/${x.id}`} className="card pad rr-card">
            <Status s={x.status} lang={lang} />
            <h2>{x.q[lang]}</h2>
            <p>{x.why[lang]}</p>
            <span className="rr-meta">{x.positions.length} {t.n} · {x.positions.map((p) => p.who).join(' · ')}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function RrahjeView({ x }) {
  const { lang } = useLang();
  const t = T[lang];
  const src = (id) => SOURCES.find((s) => s.id === id);
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 860 }}>
      <div className="kv-mock">{t.mock}</div>
      <Link href="/kuveni/rrahje" style={{ fontSize: 14, display: 'inline-block', marginTop: 16 }}>{t.back}</Link>
      <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', marginTop: 12 }}>{x.q[lang]}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{x.why[lang]}</p>
      {x.word && <Link className="kv-word" href={`/fjala/${x.word}`}>{t.word} →</Link>}

      <section className="card pad rr-pleqnia">
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}><strong>{t.pleqnia}</strong><Status s={x.status} lang={lang} /></div>
        <p>{x.pleqnia[lang]}</p>
        <small>{t.pleqniaNote}</small>
      </section>

      <h2 className="rr-h">{t.positions}</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {x.positions.map((p) => {
          const s = p.src && src(p.src);
          return (
            <article key={p.id} className={`card pad rr-pos ${p.badge === 'geg' ? 'geg' : ''}`}>
              <div className="rr-who"><span className="rr-letter">{p.id}</span>{p.who}</div>
              <h3>{p.claim[lang]}</h3>
              <p>{p.why[lang]}</p>
              {s && <p className="rr-src">{s.author}, {s.year}: <i>{s.title}</i></p>}
            </article>
          );
        })}
      </div>

      <h2 className="rr-h">{t.exchange}</h2>
      <div className="rr-thread">
        {x.exchange.map((e, i) => (
          <div key={i} className={`rr-ex ${e.kind}`}>
            <div className="rr-exhead"><b>{e.kind === 'obj' ? t.obj : t.rep}</b> · {t.to} {e.to} · {e.who}</div>
            <p>{e.t[lang]}</p>
          </div>
        ))}
      </div>

      <LiveTopic topic={`rrahje:${x.id}`} mode="argument" stances={x.positions.map((p) => p.id)} />

      <h2 className="rr-h">{t.test}</h2>
      <ol className="rr-test">{x.test[lang].map((s, i) => <li key={i}>{s}</li>)}</ol>

      <Link className="btn btn-gold" style={{ minHeight: 44, marginTop: 18 }} href="/kujtesa">{t.join}</Link>
    </div>
  );
}
