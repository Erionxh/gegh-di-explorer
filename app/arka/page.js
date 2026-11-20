'use client';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';

// MOCK-UP: të dhëna shembull. Kur të ketë shoqatë dhe llogari, këto vijnë nga një tabelë e vërtetë.
const ROWS = [
  { d: '2026-11-20', t: 'out', amt: 30.48, cat: 'infra', sq: 'Domenet geg1.org dhe gegnisht.org (1 vit)', en: 'Domains geg1.org and gegnisht.org (1 year)', by: ['Kujdestari'], rcpt: true },
  { d: '2026-12-01', t: 'in', amt: 100, cat: 'don', sq: 'Dhuratë, anonim, Itali', en: 'Donation, anonymous, Italy', by: [], rcpt: true },
  { d: '2026-12-03', t: 'in', amt: 50, cat: 'don', sq: 'Dhuratë, anonim, Zvicër', en: 'Donation, anonymous, Switzerland', by: [], rcpt: true },
  { d: '2026-12-05', t: 'out', amt: 18, cat: 'books', sq: 'Blerje libri: Çabej, Studime etimologjike (antikuariat)', en: 'Book purchase: Çabej, Etymological studies (second-hand)', by: ['Kujdestari', 'Anëtar i bordit'], rcpt: true },
  { d: '2026-12-10', t: 'out', amt: 25, cat: 'scan', sq: 'Skanim në bibliotekë, 120 faqe (vepër në domen publik)', en: 'Library scanning, 120 pages (public-domain work)', by: ['Kujdestari', 'Anëtar i bordit'], rcpt: true },
  { d: '2026-12-15', t: 'out', amt: 20, cat: 'ai', sq: 'Mjete AI për punën në arkiv (abonim mujor)', en: 'AI tools for archive work (monthly subscription)', by: ['Kujdestari', 'Anëtar i bordit'], rcpt: true },
];
const CAT = {
  don: ['Dhurata', 'Donations'], infra: ['Faqja dhe domenet', 'Site and domains'], books: ['Libra', 'Books'],
  scan: ['Skanime', 'Scans'], ai: ['Mjete AI', 'AI tools'], travel: ['Udhëtime në arkiva', 'Archive trips'],
};
const T = {
  sq: {
    mock: 'Mock-up · shifrat janë shembull · arka e vërtetë hapet pasi të ketë bord dhe shoqatë',
    h1: 'Arka e hapur', lead: 'Çdo euro që hyn dhe çdo euro që del, me datë, qëllim dhe faturë. Asnjë pagesë nuk del pa miratimin e dy anëtarëve të bordit.',
    inn: 'Hyrje', out: 'Dalje', bal: 'Gjendja', all: 'Të gjitha', d: 'Data', what: 'Për çka', amt: 'Shuma', ok: 'Miratuar nga', rcpt: 'Fatura', yes: '✓ e publikuar',
    rules: 'Rregullat e arkës', r: ['Llogari bankare e shoqatës, jo personale.', 'Çdo pagesë: dy firma nga bordi.', 'Çdo veprim publikohet këtu brenda 7 ditëve, me faturë.', 'Dhuruesit mund të mbeten anonimë; shuma dhe vendi publikohen.', 'Asnjë pagë për anëtarët e bordit.'],
  },
  en: {
    mock: 'Mock-up · the figures are examples · the real ledger opens once there is a board and an association',
    h1: 'Open ledger', lead: 'Every euro in and every euro out, with date, purpose and receipt. No payment goes out without the approval of two board members.',
    inn: 'In', out: 'Out', bal: 'Balance', all: 'All', d: 'Date', what: 'What for', amt: 'Amount', ok: 'Approved by', rcpt: 'Receipt', yes: '✓ published',
    rules: 'Ledger rules', r: ['An association bank account, not a personal one.', 'Every payment: two board signatures.', 'Every transaction is published here within 7 days, with its receipt.', 'Donors may stay anonymous; the amount and country are published.', 'No salaries for board members.'],
  },
};
const eur = (n) => `€${n.toFixed(2)}`;

export default function Arka() {
  const { lang } = useLang();
  const t = T[lang];
  const [f, setF] = useState('all');
  const i = ROWS.filter((r) => r.t === 'in').reduce((s, r) => s + r.amt, 0);
  const o = ROWS.filter((r) => r.t === 'out').reduce((s, r) => s + r.amt, 0);
  const rows = ROWS.filter((r) => f === 'all' || r.t === f).slice().reverse();
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 860 }}>
      <div className="kv-mock">{t.mock}</div>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)', marginTop: 18 }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <div className="ak-tiles">
        <div><span>{t.inn}</span><b className="in">{eur(i)}</b></div>
        <div><span>{t.out}</span><b className="out">{eur(o)}</b></div>
        <div><span>{t.bal}</span><b>{eur(i - o)}</b></div>
      </div>
      <div className="kv-chips" style={{ margin: '18px 0 10px' }}>
        {[['all', t.all], ['in', t.inn], ['out', t.out]].map(([k, l]) => <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{l}</button>)}
      </div>
      <div className="ak-list">
        {rows.map((r, k) => (
          <div key={k} className="ak-row">
            <div className="ak-top"><span className="ak-date">{r.d}</span><span className={`ak-amt ${r.t}`}>{r.t === 'in' ? '+' : '−'}{eur(r.amt)}</span></div>
            <div className="ak-what">{lang === 'en' ? r.en : r.sq}</div>
            <div className="ak-meta">
              <span className="ak-cat">{CAT[r.cat][lang === 'en' ? 1 : 0]}</span>
              {r.by.length > 0 && <span>{t.ok}: {r.by.join(' + ')}</span>}
              {r.rcpt && <span>{t.rcpt} {t.yes}</span>}
            </div>
          </div>
        ))}
      </div>
      <section className="card pad" style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 22, marginTop: 0 }}>{t.rules}</h2>
        <ol style={{ margin: 0, paddingLeft: 20 }}>{t.r.map((x, k) => <li key={k} style={{ marginBottom: 4 }}>{x}</li>)}</ol>
      </section>
    </div>
  );
}
