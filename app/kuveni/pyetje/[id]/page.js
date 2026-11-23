import { notFound } from 'next/navigation';
import { PyetjaView } from '../../../../components/Pyetjet';
import { PYETJET, getPyetja } from '../../../../lib/pyetjet';
export function generateStaticParams() { return PYETJET.map((x) => ({ id: x.id })); }
export function generateMetadata({ params }) { const x = getPyetja(params.id); return { title: x ? `${x.sq.t} · Kuveni · GEG 1.0` : 'Kuveni · GEG 1.0' }; }
export default function Page({ params }) {
  const x = getPyetja(params.id);
  if (!x) notFound();
  return <PyetjaView x={x} />;
}
