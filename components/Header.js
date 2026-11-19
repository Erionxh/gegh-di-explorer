'use client';
import Link from 'next/link';
import { useLang } from './LangProvider';

export function Microscope({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#d9b56a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="42" width="34" height="4" rx="2" />
      <path d="M11 42h26" />
      <path d="M15 41 C7 33 7 21 17 14" />
      <path d="M20 39 C14 32 13 22 21 17" />
      <circle cx="17.5" cy="38.5" r="2.4" />
      <g transform="rotate(-32 22 14)">
        <rect x="19.5" y="-2" width="5" height="3" rx="0.8" />
        <rect x="18.5" y="1" width="7" height="2" rx="0.6" />
        <rect x="18" y="3" width="8" height="14" rx="1.2" />
        <rect x="17.5" y="17" width="9" height="2.5" rx="0.6" />
        <rect x="18" y="19.5" width="2.2" height="4" rx="0.5" />
        <rect x="21" y="19.5" width="2.2" height="5" rx="0.5" />
        <rect x="24" y="19.5" width="2.2" height="4" rx="0.5" />
      </g>
      <circle cx="19" cy="17" r="3.2" />
      <rect x="20" y="32" width="23" height="2.6" rx="1.2" />
      <path d="M22 34.6v5" />
      <text x="31.5" y="30.6" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5.2" fontWeight="600" fill="#d9b56a" stroke="none">abc</text>
    </svg>
  );
}

export function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="langswitch" role="group" aria-label="Gjuha / Language">
      <button type="button" aria-pressed={lang === 'sq'} onClick={() => setLang('sq')} aria-label="Shqip"><img src="/flags/al.svg" alt="" width="20" height="15" className="flag" />SQ</button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
    </div>
  );
}

export default function Header() {
  const { t } = useLang();
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href="/" className="brand">
          <Microscope />
          <span className="brand-name">{t.brand}</span>
          <span className="brand-rule" aria-hidden="true" />
          <span className="brand-tag">
            {t.tag.map((line) => <span key={line}>{line}</span>)}
          </span>
          <span className="beta">BETA</span>
        </Link>
        <div className="lang-mobile"><LangSwitch /></div>
        <nav aria-label="Main" className="main-nav">
          <Link href="/kujtesa" className="nav-rec"><span className="nav-rec-dot"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /></svg></span>{t.nav.add}</Link>
          <Link href="/#lentet" className="nav-lenses">{t.nav.lenses}</Link>
          <Link href="/shtyllat" className="nav-lenses">{t.nav.pillars}</Link>
          <Link href="/#fjalet">{t.nav.words}</Link>
          <Link href="/harta">{t.nav.map}</Link>
          <Link href="/studiuesit">{t.nav.scholars}</Link>
          <Link href="/metodologjia">{t.method.navLabel}</Link>
          <Link href="/burimet">{t.nav.sources}</Link>
          <div className="lang-desktop"><LangSwitch /></div>
        </nav>
      </div>
    </header>
  );
}
