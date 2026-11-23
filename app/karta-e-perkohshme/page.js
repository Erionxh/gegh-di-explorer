'use client';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';

const T = {
  sq: {
    mock: 'Draft · faqe e fshehur, për t’u lexuar nga themeluesi para se të publikohet',
    h1: 'Karta e përkohshme e qeverisjes',
    lead: 'Vlen derisa bordi të ketë të paktën tre anëtarë. Pastaj bordi miraton Kushtetutën dhe kjo kartë mbaron.',
    items: [
      ['Kujdestari, jo gjykatësi', 'Themeluesi mban projektin në këmbë si kujdestar i përkohshëm. Ai nuk vendos vetë çfarë është e vërtetë: çdo pretendim mbetet «i hapur» ose «pa burim» derisa ta shqyrtojë një studiues.'],
      ['Moderimi i zërave', 'Regjistrimet pranohen ose refuzohen vetëm për cilësi, pëlqim dhe sjellje, kurrë sepse forma nuk pëlqehet. Çdo vendim ka arsye të shkruar dhe ruhet në ditar.'],
      ['Tërheqja', 'Kushdo mund ta tërheqë zërin me kodin e vet, në çdo kohë, pa dhënë arsye. Tërheqja fshin skedarët.'],
      ['Paratë', 'Çdo e ardhur dhe çdo shpenzim shënohet publikisht te Arka. Themeluesi nuk merr pagesë nga projekti.'],
      ['Sponsorët', 'Sponsorët shënohen me emër dhe shumë. Nuk ndikojnë në përmbajtje, në renditjen e moduleve apo në statusin e asnjë pretendimi.'],
      ['Të dhënat', 'Zërat nuk shiten kurrë. Studiuesit mund t’i përdorin për kërkim me kërkesë të shkruar; publikisht dëgjohen vetëm ata me leje publike.'],
      ['Ndryshimet', 'Çdo ndryshim i kësaj karte publikohet me datë. Versionet e vjetra mbeten të dukshme.'],
    ],
    end: 'Kjo kartë mbaron ditën që bordi me të paktën tre anëtarë miraton Kushtetutën.',
    more: 'Kushtetuta →',
  },
  en: {
    mock: 'Draft · hidden page, for the founder to read before it is published',
    h1: 'Interim governance charter',
    lead: 'In force until the board has at least three members. The board then adopts the Constitution and this charter ends.',
    items: [
      ['Custodian, not judge', 'The founder keeps the project running as interim custodian. He does not decide on his own what is true: every claim stays “open” or “unsourced” until a scholar reviews it.'],
      ['Moderating voices', 'Recordings are approved or rejected only for quality, consent and conduct, never because a form is disliked. Every decision has a written reason and is kept in the log.'],
      ['Withdrawal', 'Anyone can withdraw their voice with their own code, at any time, without giving a reason. Withdrawal deletes the files.'],
      ['Money', 'Every income and expense is recorded publicly in the Ledger. The founder takes no payment from the project.'],
      ['Sponsors', 'Sponsors are listed by name and amount. They have no influence on content, on the order of modules or on the status of any claim.'],
      ['Data', 'Voices are never sold. Scholars may use them for research on written request; only those with public permission can be heard publicly.'],
      ['Changes', 'Every change to this charter is published with a date. Old versions remain visible.'],
    ],
    end: 'This charter ends on the day a board of at least three members adopts the Constitution.',
    more: 'Constitution →',
  },
};

export default function Karta() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 760 }}>
      <div className="kv-mock">{t.mock}</div>
      <h1 style={{ fontSize: 'clamp(30px, 6.5vw, 44px)', margin: '18px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <ol style={{ paddingLeft: 22, display: 'grid', gap: 12 }}>
        {t.items.map(([h, p]) => <li key={h}><b>{h}.</b> {p}</li>)}
      </ol>
      <p style={{ color: 'var(--ink-2)' }}>{t.end}</p>
      <Link href="/kushtetuta">{t.more}</Link>
    </div>
  );
}
