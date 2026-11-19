'use client';
import Link from 'next/link';
import { useLang } from './LangProvider';
import { SEATS, CONTACT } from '../lib/board';

const T = {
  sq: { back: '← Bordi i nëntë', seat: 'Ulësja', of: 'nga 9', open: 'Vend i hapur', taken: 'E zënë', does: 'Çfarë bën', not: 'Çfarë nuk vendos', fits: 'Kujt i përshtatet', lens: 'Lidhet me', apply: 'Të intereson kjo ulëse, ose njeh dikë që i përshtatet?', write: 'Shkruaj', how: 'Si punon bordi', con: 'Kushtetuta', prev: '← E mëparshmja', next: 'Tjetra →' },
  en: { back: '← The board of nine', seat: 'Seat', of: 'of 9', open: 'Open seat', taken: 'Taken', does: 'What it does', not: 'What it does not decide', fits: 'Who it suits', lens: 'Linked to', apply: 'Interested in this seat, or know someone who fits?', write: 'Write to', how: 'How the board works', con: 'The Constitution', prev: '← Previous', next: 'Next →' },
};

export default function SeatView({ i }) {
  const { lang } = useLang();
  const t = T[lang];
  const s = SEATS[i][lang];
  return (
    <div className="wrap lens-page" style={{ paddingTop: 48, paddingBottom: 64, maxWidth: 820 }}>
      <Link href="/shtyllat/qeverisja" style={{ fontSize: 14 }}>{t.back}</Link>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.seat} {i + 1} {t.of} · {t.lens}: {s.lens}</p>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 46px)' }}>{s.name}</h1>
      <span className={`pill ${s.founder ? 'pill-supported' : 'pill-open'}`}>{s.founder ? t.taken : t.open}</span>
      <section className="lens-sec"><h2>{t.does}</h2><ul>{s.does.map((x) => <li key={x}>{x}</li>)}</ul></section>
      <section className="lens-sec"><h2>{t.not}</h2><p>{s.not}</p></section>
      <section className="lens-sec"><h2>{t.fits}</h2><p>{s.fits}</p></section>
      {!s.founder && (
        <section className="card pad" style={{ marginTop: 22 }}>
          <p style={{ margin: 0, fontWeight: 600 }}>{t.apply}</p>
          <p style={{ margin: '6px 0 0' }}>{t.write}: <a href={`mailto:${CONTACT}?subject=${encodeURIComponent('GEG 1.0 · ' + s.name)}`}>{CONTACT}</a></p>
        </section>
      )}
      <p style={{ marginTop: 22, display: 'flex', gap: 18, flexWrap: 'wrap' }}>
        <Link href="/shtyllat/qeverisja">{t.how} →</Link><Link href="/kushtetuta">{t.con} →</Link>
      </p>
      <nav className="pillar-nav" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
        {i > 0 ? <Link href={`/bordi/${i}`}>{t.prev}</Link> : <span />}
        {i < 8 ? <Link href={`/bordi/${i + 2}`}>{t.next}</Link> : <span />}
      </nav>
    </div>
  );
}
