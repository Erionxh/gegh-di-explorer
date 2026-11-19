'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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

const ic = (d) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const ICONS = {
  map: ic(<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  book: ic(<><path d="M3 5.5C5.5 4.5 8.5 4.5 12 6.5c3.5-2 6.5-2 9-1V19c-2.5-1-5.5-1-9 1-3.5-2-6.5-2-9-1z" /><path d="M12 6.5V20" /></>),
  how: ic(<><circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="18" r="2.2" /><circle cx="19" cy="18" r="2.2" /><path d="M11 7l-5 9M13 7l5 9" /></>),
  shelf: ic(<><rect x="3" y="4" width="4.5" height="16" rx="1" /><rect x="9.5" y="4" width="4.5" height="16" rx="1" /><path d="M16.5 5.2l4 -1 3.4 14.7-4 1z" transform="translate(-2.5 0)" /></>),
  lens: ic(<><circle cx="12" cy="12" r="8.5" /><path d="M12 3.5l3 6M20.5 12l-6.5 1M16 19.5l-4-5.5M7 19l3-6.2M3.6 10.5l6.6 .3M8 4.5l3.5 5.8" /></>),
  layers: ic(<><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 12.5l9 5 9-5" /><path d="M3 16.5l9 5 9-5" /></>),
  search: ic(<><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>),
};

export default function Header() {
  const { t, lang } = useLang();
  const router = useRouter();
  function onSearch(e) {
    e.preventDefault();
    const q = e.currentTarget.elements.q.value.trim();
    router.push(q ? `/kerko?q=${encodeURIComponent(q)}` : '/kerko');
  }
  return (
    <header className="site-header">
      <div className="wrap hdr">
        <div className="hdr-top">
          <Link href="/" className="brand">
            <Microscope />
            <span className="brand-rule" aria-hidden="true" />
            <span className="brand-stack"><span className="brand-name">GEG</span><span className="brand-ver">1.0</span><span className="brand-region">Mirdita</span></span>
            <span className="brand-rule" aria-hidden="true" />
            <span className="brand-tag">{t.tag.map((line) => <span key={line}>{line}</span>)}</span>
          </Link>
          <span className="hdr-beta">BETA</span>
        </div>
        <div className="hdr-tools">
          <form className="hdr-search" role="search" onSubmit={onSearch}>
            {ICONS.search}
            <input name="q" type="search" placeholder={lang === 'en' ? 'Search…' : 'Kërko…'} aria-label={lang === 'en' ? 'Search' : 'Kërko'} />
          </form>
          <Link href="/kujtesa" className="nav-rec" aria-label={t.nav.add + ' — Kujtesa'}><span className="nav-rec-dot"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /></svg></span>{t.nav.add}</Link>
          <LangSwitch />
        </div>
        <nav aria-label="Main" className="hdr-nav">
          <div className="hdr-pills">
            <Link href="/#lentet" className="hdr-pill">{ICONS.lens}{t.nav.lenses}</Link>
            <Link href="/shtyllat" className="hdr-pill">{ICONS.layers}{t.nav.pillars}</Link>
          </div>
          <div className="hdr-links">
            <Link href="/harta">{ICONS.map}<span>{t.nav.map}</span></Link>
            <Link href="/studiuesit">{ICONS.book}<span>{t.nav.scholars}</span></Link>
            <Link href="/metodologjia">{ICONS.how}<span>{t.method.navLabel}</span></Link>
            <Link href="/burimet">{ICONS.shelf}<span>{t.nav.sources}</span></Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
