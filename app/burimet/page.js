'use client';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';
import { SOURCES, SOURCE_GROUPS } from '../../lib/sources';

const TXT = {
  sq: {
    eyebrow: 'Lentja 2 · Historike', h1: 'Burimet',
    lead: 'Studimet themelore për gjuhën shqipe: gjermane, austriake, italiane-arbëreshe, shqiptare dhe ndërkombëtare. Çdo lidhje u kontrollua në katalogë bibliotekash më 18.11.2026. Kur mungon lidhja, vepra ekziston, por kopja publike nuk është gjetur ende.',
    groups: { old: 'Tekstet e vjetra shqip', de: 'Gjermane dhe austriake', it: 'Italiane dhe arbëreshe', sq: 'Shqiptare', intl: 'Ndërkombëtare dhe gjenetike' },
    lens: 'Lentja', noLink: 'Lidhja publike: ende e pagjetur', add: 'Propozo një burim',
    note: 'Burimi rendit faktin, jo vlerësimin: një vepër e vjetër mund të ketë ide të tejkaluara. Statusi i çdo pretendimi vendoset në dosje, jo këtu.',
  },
  en: {
    eyebrow: 'Lens 2 · Historical', h1: 'Sources',
    lead: 'The foundational studies of the Albanian language: German, Austrian, Italian-Arbëresh, Albanian and international. Every link was checked against library catalogues on 18 Nov 2026. Where a link is missing, the work exists but a public copy hasn’t been found yet.',
    groups: { old: 'Old Albanian texts', de: 'German and Austrian', it: 'Italian and Arbëresh', sq: 'Albanian', intl: 'International and genetic' },
    lens: 'Lens', noLink: 'Public link: not found yet', add: 'Propose a source',
    note: 'Listing a source records a fact, not a verdict: an old work may contain outdated ideas. The status of each claim is decided in its dossier, not here.',
  },
};

export default function Sources() {
  const { lang } = useLang();
  const t = TXT[lang];
  return (
    <div className="wrap" style={{ paddingTop: 56, paddingBottom: 64 }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>{t.h1}</h1>
      <p style={{ margin: '0 0 8px' }}><Link href="/a-e-dini">{lang === 'en' ? 'Did you know? Curiosities with sources →' : 'A e dini? Kuriozitete me burim →'}</Link></p>
      <p className="lead">{t.lead}</p>
      <p style={{ color: 'var(--muted)', fontSize: 14, maxWidth: 760 }}>{t.note}</p>

      {SOURCE_GROUPS.map((g) => (
        <section key={g} style={{ marginTop: 36 }}>
          <h2 className="section-title" style={{ fontSize: 28 }}>{t.groups[g]}</h2>
          <div className="source-list">
            {SOURCES.filter((s) => s.group === g).map((s) => (
              <article key={s.id} id={s.id} className="card source" style={{ scrollMarginTop: 20 }}>
                <div className="source-year">{s.year}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                  <h3>{s.title}</h3>
                  <p className="source-meta"><strong>{s.author}</strong> · {s.place} · {s.country} · {t.lens} {s.lens}</p>
                  <p style={{ margin: 0, color: 'var(--ink-2)' }}>{lang === 'en' ? s.en : s.sq}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 4 }}>
                    {s.links.length ? s.links.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="source-link">{l.label} ↗</a>
                    )) : <span style={{ fontSize: 14, color: 'var(--muted)' }}>{t.noLink}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <a href="https://github.com/Erionxh/gegh-di-explorer/issues/new?title=Burim%20i%20ri" className="btn btn-navy" style={{ marginTop: 32 }}>{t.add}</a>
    </div>
  );
}
