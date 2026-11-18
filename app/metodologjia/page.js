'use client';
import { useLang } from '../../components/LangProvider';
import { StatusPill } from '../../components/Footer';

export default function Method() {
  const { t } = useLang();
  const m = t.method;
  return (
    <div className="method">
      <section className="wrap hero">
        <p className="eyebrow">{m.eyebrow}</p>
        <h1>{m.h1}</h1>
        <p className="lead">{m.lead}</p>
      </section>

      <section className="band">
        <div className="wrap band-inner">
          <h2 className="section-title">{m.flowTitle}</h2>
          <ol className="flow">
            {m.flow.map(([title, text], i) => (
              <li key={title}>
                <span className="flow-n">{i + 1}</span>
                <strong>{title}</strong>
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap" id="lentet" style={{ paddingTop: 56, paddingBottom: 24 }}>
        <h2 className="section-title">{m.lensesTitle}</h2>
        <p style={{ margin: 0, color: 'var(--ink-2)', maxWidth: 760 }}>{m.lensesLead}</p>
        <div className="lens-grid">
          {m.lenses.map(([n, name, text]) => (
            <article key={n} className="card lens-card">
              <span className="lens-n">{n}</span>
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <h3 style={{ fontFamily: 'var(--sans)', fontSize: 18, marginTop: 28 }}>{m.subTitle}</h3>
        <div className="lens-grid" style={{ marginTop: 12 }}>
          {m.sub.map(([n, name, text]) => (
            <article key={n} className="card lens-card" style={{ borderLeft: '4px solid var(--gold)' }}>
              <span className="lens-n" style={{ width: 'auto', padding: '0 10px' }}>{n}</span>
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <h3 style={{ fontFamily: 'var(--sans)', fontSize: 18, marginTop: 28 }}>{m.extraTitle}</h3>
        <ul style={{ paddingLeft: 20, color: 'var(--ink-2)', lineHeight: 1.8 }}>
          {m.extra.map(([k, v]) => <li key={k}><strong>{k}:</strong> {v}</li>)}
        </ul>
      </section>

      <section className="wrap" id="statuset" style={{ paddingTop: 32, paddingBottom: 24 }}>
        <h2 className="section-title">{m.statusTitle}</h2>
        <p style={{ margin: 0, color: 'var(--ink-2)' }}>{m.statusLead}</p>
        <div className="card" style={{ marginTop: 20, overflow: 'hidden' }}>
          <dl className="legend">
            {m.statuses.map(([key, text]) => (
              <div key={key}>
                <dt><StatusPill status={key} /></dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <h3 style={{ fontFamily: 'var(--sans)', fontSize: 18, marginTop: 28 }}>{m.confTitle}</h3>
        <p style={{ color: 'var(--ink-2)', maxWidth: 760 }}>{m.conf}</p>
      </section>

      <section className="wrap" style={{ paddingTop: 32, paddingBottom: 56 }}>
        <h2 className="section-title">{m.pillarsTitle}</h2>
        <div className="pillar-grid">
          {m.pillars.map(([name, text]) => (
            <div key={name} className="card pillar">
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="board">
        <div className="wrap board-inner">
          <div style={{ flex: '1 1 420px' }}>
            <h2 className="section-title" style={{ color: '#fff' }}>{m.rolesTitle}</h2>
            <dl className="roles">
              {m.roles.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
            </dl>
          </div>
          <div style={{ flex: '1 1 320px' }}>
            <h2 className="section-title" style={{ color: '#fff' }}>{m.principlesTitle}</h2>
            <ol style={{ paddingLeft: 22, lineHeight: 1.9, color: '#e6ebf4', fontSize: 16 }}>
              {m.principles.map((p) => <li key={p}>{p}</li>)}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
