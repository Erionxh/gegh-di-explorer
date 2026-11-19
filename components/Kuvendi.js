'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from './LangProvider';
import { StatusPill } from './Footer';
import { FORUM_CATS, FORUM_RULES, THREADS } from '../lib/forum';
import { SOURCES } from '../lib/sources';

const UI = {
  sq: {
    mock: 'Mock-up · asgjë nuk ruhet · postimet janë shembuj',
    eyebrow: 'Kuvendi i GEG', h1: 'Kuvendi',
    lead: 'Vendi ku pyetet, kundërshtohet dhe sillet dëshmi. Si kuvendi i pleqve: flet kushdo, por fjala peshon sa dëshmia që sjell.',
    newPost: '+ Temë e re', all: 'Të gjitha', sort: ['Më të reja', 'Më të votuara', 'Pa përgjigje'],
    comments: 'komente', rules: 'Kanuni i Kuvendit', by: 'nga', reviewer: 'Shqyrtues/e', geg: 'GEG',
    back: '← Kuvendi', review: 'Shënimi i shqyrtuesit', reply: 'Shkruaj një përgjigje…', send: 'Dërgo', sourceReq: 'Shto burim ose shëno „pa burim”',
    noSource: 'pa burim', wordPage: 'Faqja e fjalës', srcs: 'Burimet', disabled: 'Mock-up: dërgimi s\'është aktiv', empty: 'Ende pa komente. Bëhu i pari.',
    how: 'Si funksionon statusi', howT: 'Votat tregojnë interesin. Statusin (e hapur, e mbështetur, e kontestuar…) e vendos një shqyrtues, me arsye të shkruar, sipas Kushtetutës.',
  },
  en: {
    mock: 'Mock-up · nothing is saved · posts are examples',
    eyebrow: 'The GEG council', h1: 'Kuvendi',
    lead: 'The place to ask, challenge and bring evidence. Like the council of elders: anyone speaks, but a word weighs as much as the evidence it brings.',
    newPost: '+ New thread', all: 'All', sort: ['Newest', 'Top', 'Unanswered'],
    comments: 'comments', rules: 'Rules of the Kuvend', by: 'by', reviewer: 'Reviewer', geg: 'GEG',
    back: '← Kuvendi', review: 'Reviewer\'s note', reply: 'Write a reply…', send: 'Send', sourceReq: 'Add a source or mark "no source"',
    noSource: 'no source', wordPage: 'Word page', srcs: 'Sources', disabled: 'Mock-up: sending is off', empty: 'No comments yet. Be the first.',
    how: 'How status works', howT: 'Votes show interest. The status (open, supported, disputed…) is set by a reviewer, with written reasons, under the Constitution.',
  },
};

const srcLabel = (id) => {
  const s = SOURCES.find((x) => x.id === id);
  return s ? `${s.author.split(' ').slice(-1)[0]} ${s.year}` : id;
};

function Vote({ n }) {
  const [v, setV] = useState(0);
  return (
    <div className="kv-vote">
      <button aria-label="up" className={v === 1 ? 'on' : ''} onClick={() => setV(v === 1 ? 0 : 1)}>▲</button>
      <span>{n + v}</span>
      <button aria-label="down" className={v === -1 ? 'on' : ''} onClick={() => setV(v === -1 ? 0 : -1)}>▼</button>
    </div>
  );
}

function Who({ u, place, badge, t }) {
  return (
    <span className="kv-who">
      <b>{u}</b>{place ? ` · ${place}` : ''}
      {badge === 'reviewer' && <span className="kv-badge rev">{t.reviewer}</span>}
      {badge === 'geg' && <span className="kv-badge geg">{t.geg}</span>}
    </span>
  );
}

function Mock({ t }) { return <div className="kv-mock">{t.mock}</div>; }

function Rules({ t, lang }) {
  return (
    <aside className="kv-side">
      <div className="card pad kv-rules">
        <h2>{t.rules}</h2>
        <ol>{FORUM_RULES[lang].map(([h, p]) => <li key={h}><b>{h}.</b> {p}</li>)}</ol>
      </div>
      <div className="card pad kv-rules">
        <h2>{t.how}</h2>
        <p>{t.howT}</p>
        <Link href="/kushtetuta">Kushtetuta →</Link>
      </div>
    </aside>
  );
}

export function KuvendiIndex() {
  const { lang } = useLang();
  const t = UI[lang];
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState(0);
  let list = THREADS.filter((x) => cat === 'all' || x.cat === cat);
  if (sort === 1) list = [...list].sort((a, b) => b.votes - a.votes);
  if (sort === 2) list = list.filter((x) => x.comments.length === 0);
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64 }}>
      <Mock t={t} />
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <div className="kv-layout">
        <div>
          <div className="kv-bar">
            <button className="btn btn-gold kv-new" title={t.disabled}>{t.newPost}</button>
            <div className="kv-chips">
              <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>{t.all}</button>
              {Object.entries(FORUM_CATS).map(([k, v]) => (
                <button key={k} className={cat === k ? 'on' : ''} onClick={() => setCat(k)}>{v[lang]}</button>
              ))}
            </div>
            <div className="kv-sort">
              {t.sort.map((s, i) => <button key={s} className={sort === i ? 'on' : ''} onClick={() => setSort(i)}>{s}</button>)}
            </div>
          </div>
          <div className="kv-list">
            {list.map((x) => (
              <article key={x.id} className="card kv-item">
                <Vote n={x.votes} />
                <div className="kv-body">
                  <div className="kv-meta">
                    <span className={`kv-cat c-${x.cat}`}>{FORUM_CATS[x.cat][lang]}</span>
                    <StatusPill status={x.status} />
                  </div>
                  <h3><Link href={`/kuvendi/${x.id}`}>{x.title}</Link></h3>
                  <div className="kv-foot">
                    <Who u={x.author} place={x.place} badge={x.badge} t={t} />
                    <span>· {x.ago}</span>
                    <span>· 💬 {x.comments.length} {t.comments}</span>
                    {x.sources.length === 0 && <span className="kv-tag">{t.noSource}</span>}
                    {x.sources.map((s) => <span key={s} className="kv-src">📖 {srcLabel(s)}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Rules t={t} lang={lang} />
      </div>
    </div>
  );
}

function Comment({ c, t, depth = 0 }) {
  return (
    <div className={`kv-c d${depth}`}>
      <Vote n={c.votes} />
      <div className="kv-body">
        <div className="kv-foot"><Who u={c.u} place={c.place} badge={c.badge} t={t} /><span>· {c.ago}</span></div>
        <p>{c.t}</p>
        <div className="kv-foot">
          {c.src && <span className="kv-src">📖 {srcLabel(c.src)}</span>}
          {c.tag && <span className="kv-tag">{t.noSource}</span>}
        </div>
        {c.replies?.map((r, i) => <Comment key={i} c={r} t={t} depth={depth + 1} />)}
      </div>
    </div>
  );
}

export function KuvendiThread({ thread: x }) {
  const { lang } = useLang();
  const t = UI[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64 }}>
      <Mock t={t} />
      <Link href="/kuvendi" style={{ fontSize: 14, display: 'inline-block', marginTop: 16 }}>{t.back}</Link>
      <div className="kv-layout">
        <div>
          <article className="card kv-item kv-post">
            <Vote n={x.votes} />
            <div className="kv-body">
              <div className="kv-meta">
                <span className={`kv-cat c-${x.cat}`}>{FORUM_CATS[x.cat][lang]}</span>
                <StatusPill status={x.status} />
              </div>
              <h1 className="kv-title">{x.title}</h1>
              <div className="kv-foot"><span>{t.by}</span><Who u={x.author} place={x.place} badge={x.badge} t={t} /><span>· {x.ago}</span></div>
              {x.body.map((p) => <p key={p}>{p}</p>)}
              <div className="kv-links">
                {x.word && <Link className="kv-word" href={`/fjala/${x.word[0]}`}>{t.wordPage}: <b>{x.word[1]}</b> →</Link>}
                {x.link && <Link className="kv-word" href={x.link[0]}>{x.link[1]} →</Link>}
              </div>
              {x.sources.length > 0 && (
                <div className="kv-foot"><b>{t.srcs}:</b>{x.sources.map((s) => <Link key={s} className="kv-src" href="/burimet">📖 {srcLabel(s)}</Link>)}</div>
              )}
            </div>
          </article>

          {x.review && (
            <div className="kv-review">
              <div className="kv-meta"><b>{t.review}</b><StatusPill status={x.review.status} /></div>
              <p>{x.review.note}</p>
              <span className="kv-who">{x.review.by}</span>
            </div>
          )}

          <div className="card kv-reply">
            <textarea placeholder={t.reply} rows={3} disabled title={t.disabled} />
            <div className="kv-reply-bar">
              <span>📖 {t.sourceReq}</span>
              <button className="btn btn-navy" disabled title={t.disabled}>{t.send}</button>
            </div>
          </div>

          <div className="kv-comments">
            {x.comments.length === 0 && <p style={{ color: 'var(--ink-2)' }}>{t.empty}</p>}
            {x.comments.map((c, i) => <Comment key={i} c={c} t={t} />)}
          </div>
        </div>
        <Rules t={t} lang={lang} />
      </div>
    </div>
  );
}
