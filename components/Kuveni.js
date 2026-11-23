'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from './LangProvider';
import { StatusPill } from './Footer';
import { FORUM_CATS, FORUM_RULES, THREADS, WORD_DEBATES } from '../lib/forum';
import { SOURCES } from '../lib/sources';
import LiveTopic from './KuveniLive';

const UI = {
  sq: {
    mock: 'Postimet me shenjën „Shembull” janë shembuj. Ato te „Nga ju” janë të vërteta.', ex: 'Shembull',
    eyebrow: 'Kuveni i GEG', h1: 'Kuveni', motto: '„Sipas venit bahet kuveni.”',
    lead: 'Vendi ku pyetet, kundërshtohet dhe sillet dëshmi. Si kuveni i pleqve: flet kushdo, por fjala peshon sa dëshmia që sjell.',
    newPost: '+ Temë e re', all: 'Të gjitha', sort: ['Më të reja', 'Më të votuara', 'Pa përgjigje'],
    comments: 'komente', rules: 'Kanuni i Kuvenit', by: 'nga', reviewer: 'Shqyrtues/e', geg: 'GEG',
    back: '← Kuveni', review: 'Shënimi i shqyrtuesit', reply: 'Shkruaj një përgjigje…', send: 'Dërgo', sourceReq: 'Shto burim ose shëno „pa burim”',
    noSource: 'pa burim', wordPage: 'Faqja e fjalës', srcs: 'Burimet', disabled: 'Mock-up: dërgimi s\'është aktiv', empty: 'Ende pa komente. Bëhu i pari.',
    wordsH: 'Fjalët në Kuven', wordsLead: 'Zgjidh një fjalë: dëgjo si e thonë të tjerët, shto versionin tënd, dhe kuvendo pse.', versions: 'versione', debateN: 'në kuvend', openW: 'Hyr', vH: 'Versionet: si e thonë', addV: '🎙 Shto versionin tënd', same: 'Edhe ne kështu', dH: 'Kuvendo: pse?', dLead: 'Këtu nuk kuvendohet kush e thotë më bukur, por nga vjen fjala dhe çfarë e provon. Kuvendo në gegnisht, lirisht.', openThread: 'Tema e plotë në Kuven →', wordPage: 'Faqja e fjalës', play: 'Dëgjo', noDebate: 'Ende pa kuvend. Nise ti: pse mendon se e themi kështu?', backW: '← Kuveni',
    how: 'Si funksionon statusi', howT: 'Votat tregojnë interesin. Statusin (e hapur, e mbështetur, e kontestuar…) e vendos një shqyrtues, me arsye të shkruar, sipas Kushtetutës.',
  },
  en: {
    mock: 'Posts marked "Example" are examples. Those under "From you" are real.', ex: 'Example',
    eyebrow: 'The GEG council', h1: 'Kuveni', motto: '„Sipas venit bahet kuveni.” (The council is held as the place is.)',
    lead: 'The place to ask, challenge and bring evidence. Like the council of elders (kuveni): anyone speaks, but a word weighs as much as the evidence it brings.',
    newPost: '+ New thread', all: 'All', sort: ['Newest', 'Top', 'Unanswered'],
    comments: 'comments', rules: 'Rules of the Kuven', by: 'by', reviewer: 'Reviewer', geg: 'GEG',
    back: '← Kuveni', review: 'Reviewer\'s note', reply: 'Write a reply…', send: 'Send', sourceReq: 'Add a source or mark "no source"',
    noSource: 'no source', wordPage: 'Word page', srcs: 'Sources', disabled: 'Mock-up: sending is off', empty: 'No comments yet. Be the first.',
    wordsH: 'Words in the Kuven', wordsLead: 'Pick a word: hear how others say it, add your version, and debate why.', versions: 'versions', debateN: 'in debate', openW: 'Enter', vH: 'The versions: how people say it', addV: '🎙 Add your version', same: 'We say it too', dH: 'The debate: why?', dLead: 'The debate is not about who says it more beautifully, but where the word comes from and what proves it.', openThread: 'Full thread in the Kuven →', wordPage: 'Word page', play: 'Play', noDebate: 'No debate yet. Start the first: why do you think we say it this way?', backW: '← Kuveni',
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

export function KuveniIndex() {
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
      <p className="kv-motto">{t.motto}</p>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <Link href="/a-e-dini" className="card pad rr-card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>{lang === 'en' ? 'Did you know? →' : 'A e dini? →'}</h2>
        <p>{lang === 'en' ? 'Albanian written in 1332? Dozens of alphabets? Three dialects in Mirdita? Curiosities with sources.' : 'Shqip e shkruar më 1332? Dhjetëra alfabete? Tri të folme në Mirditë? Kuriozitete me burim.'}</p>
      </Link>
      <Link href="/kuveni/pyetje" className="card pad rr-card" style={{ marginTop: 16, borderLeft: '4px solid var(--gold)' }}>
        <h2 style={{ marginTop: 0 }}>{lang === 'en' ? 'Questions of the Kuven →' : 'Pyetjet e Kuvenit →'}</h2>
        <p>{lang === 'en' ? 'Fli, shuj or shuaj, the name of your village, the sacred place, the coffee of the elders. Real questions: answer with your village.' : 'Flija, shuj apo shuaj, emri i fshatit, vendi i shenjtë, kafja e pleqve. Pyetje të vërteta: përgjigjuni me fshatin tuaj.'}</p>
      </Link>
      <Link href="/vendet" className="card pad rr-card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>{lang === 'en' ? 'The names of places →' : 'Emrat e vendeve →'}</h2>
        <p>{lang === 'en' ? 'Scodra, Lissus, Dardania: which names survived and which were lost? And what did the elders call your village, its fields and springs?' : 'Scodra, Lissus, Dardania: cilët emra mbijetuan e cilët u humbën? Dhe si i quanin pleqtë fshatin tuaj, arat e kronet?'}</p>
      </Link>
      <Link href="/kuveni/rrahje" className="card pad rr-card" style={{ marginTop: 16, borderLeft: '4px solid var(--gold)' }}>
        <h2 style={{ marginTop: 0 }}>{lang === 'en' ? 'Rrahje mendimesh: the big questions →' : 'Rrahje mendimesh: pyetjet e mëdha →'}</h2>
        <p>{lang === 'en' ? 'Where does nder come from? Kuven or conventum? Why does Buzuku write ënder? Every side, with its evidence.' : 'Nga vjen nderi? Kuven apo conventum? Pse Buzuku shkruan ënder? Të gjitha anët, me provat e tyre.'}</p>
      </Link>
      <section className="kv-words">
        <h2>{t.wordsH}</h2>
        <p>{t.wordsLead}</p>
        <div className="kv-wgrid">
          {WORD_DEBATES.map((w) => (
            <Link key={w.id} href={`/kuveni/fjala/${w.id}`} className="card kv-wcard">
              <span className="kv-ex">{t.ex}</span>
              <strong>{w.word}</strong>
              <span className="kv-wg">{w.gloss[lang]}</span>
              <span className="kv-wn">🎙 {w.versions.length} {t.versions} · 💬 {w.debate.length} {t.debateN}</span>
              <span className="kv-wgo">{t.openW} →</span>
            </Link>
          ))}
        </div>
      </section>
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
                    <span className="kv-ex">{t.ex}</span>
                  </div>
                  <h3><Link href={`/kuveni/${x.id}`}>{x.title}</Link></h3>
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
          <LiveTopic topic="pyetje" mode="thread" list heading={lang === 'en' ? 'Discussions' : 'Bisedat'} />
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
        <div className="kv-foot"><Who u={c.u} place={c.place} badge={c.badge} t={t} /><span>· {c.ago}</span><span className="kv-ex">{t.ex}</span></div>
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

export function KuveniThread({ thread: x }) {
  const { lang } = useLang();
  const t = UI[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64 }}>
      <Mock t={t} />
      <Link href="/kuveni" style={{ fontSize: 14, display: 'inline-block', marginTop: 16 }}>{t.back}</Link>
      <div className="kv-layout">
        <div>
          <article className="card kv-item kv-post">
            <Vote n={x.votes} />
            <div className="kv-body">
              <div className="kv-meta">
                <span className={`kv-cat c-${x.cat}`}>{FORUM_CATS[x.cat][lang]}</span>
                <StatusPill status={x.status} />
                <span className="kv-ex">{t.ex}</span>
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
              <div className="kv-meta"><b>{t.review}</b><StatusPill status={x.review.status} /><span className="kv-ex">{t.ex}</span></div>
              <p>{x.review.note}</p>
              <span className="kv-who">{x.review.by}</span>
            </div>
          )}


          <div className="kv-comments">
            {x.comments.length === 0 && <p style={{ color: 'var(--ink-2)' }}>{t.empty}</p>}
            {x.comments.map((c, i) => <Comment key={i} c={c} t={t} />)}
          </div>
          <LiveTopic topic={`tema:${x.id}`} mode="reply" />
        </div>
        <Rules t={t} lang={lang} />
      </div>
    </div>
  );
}

function SameBtn({ n, label }) {
  const [on, setOn] = useState(false);
  return <button type="button" className={`kv-same ${on ? 'on' : ''}`} onClick={() => setOn(!on)}>👍 {label} · {n + (on ? 1 : 0)}</button>;
}

export function KuveniWord({ w }) {
  const { lang } = useLang();
  const t = UI[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64 }}>
      <Mock t={t} />
      <Link href="/kuveni" style={{ fontSize: 14, display: 'inline-block', marginTop: 16 }}>{t.backW}</Link>
      <div className="kv-whead">
        <h1 className="headword">{w.word}</h1>
        <span className="kv-wg">{w.gloss[lang]}</span>
        <span className="kv-ex">{t.ex}</span>
      </div>
      <p className="lead" style={{ marginTop: 4 }}>{w.ask[lang]}</p>
      <div className="kv-links">
        {!w.noPage && <Link className="kv-word" href={`/fjala/${w.id}`}>{t.wordPage}: <b>{w.word}</b> →</Link>}
        <Link className="btn btn-gold" style={{ minHeight: 40 }} href={`/kujtesa?fjala=${encodeURIComponent(w.word)}`}>{t.addV}</Link>
      </div>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 26 }}>{t.vH}</h2>
        <div className="kv-vgrid">
          {w.versions.map((v, i) => (
            <article key={i} className="card kv-ver">
              <div className="kv-vform">{v.form}</div>
              <div className="kv-vsay">{v.say}</div>
              <div className="kv-audio" title={t.disabled}><span>▶</span><i />{v.audio}</div>
              <div className="kv-foot"><b style={{ color: 'var(--ink)' }}>{v.place}</b><span>· {v.who}</span><span className="kv-ex">{t.ex}</span></div>
              <SameBtn n={v.same} label={t.same} />
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 26 }}>{t.dH}</h2>
        <p style={{ color: 'var(--ink-2)', marginTop: 4 }}>{t.dLead}</p>
        <div className="kv-comments">
          {w.debate.length === 0 && <p style={{ color: 'var(--ink-2)' }}>{t.noDebate}</p>}
          {w.debate.map((c, i) => (
            <div key={i} className="kv-c d0">
              <Vote n={c.votes} />
              <div className="kv-body">
                <div className="kv-foot"><Who u={c.u} badge={c.badge} t={t} /><span className="kv-stance">{c.stance[lang]}</span><span className="kv-ex">{t.ex}</span></div>
                <p>{c.t}</p>
                <div className="kv-foot">{c.src ? <span className="kv-src">📖 {srcLabel(c.src)}</span> : <span className="kv-tag">{t.noSource}</span>}</div>
              </div>
            </div>
          ))}
        </div>
        <LiveTopic topic={`fjala:${w.id}`} mode="versions" />
        {w.thread && <p style={{ marginTop: 14 }}><Link href={`/kuveni/${w.thread}`}>{t.openThread}</Link></p>}
      </section>
    </div>
  );
}
