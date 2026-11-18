'use client';
import { useLang } from './LangProvider';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="wrap site-footer">
      <span>{t.footer.motto}</span>
      <span>{t.footer.foot}</span>
    </footer>
  );
}

export function StatusPill({ status }) {
  const { t } = useLang();
  const key = status || 'OPEN';
  return <span className={`pill pill-${key.toLowerCase()}`}>{t.status[key] || key}</span>;
}
