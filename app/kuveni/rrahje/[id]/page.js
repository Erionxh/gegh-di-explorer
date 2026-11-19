import { notFound } from 'next/navigation';
import { RrahjeView } from '../../../../components/Rrahje';
import { RRAHJE, getRrahje } from '../../../../lib/rrahje';
export const metadata = { title: 'Rrahje mendimesh · GEG 1.0', robots: { index: false } };
export function generateStaticParams() { return RRAHJE.map((x) => ({ id: x.id })); }
export default function Page({ params }) {
  const x = getRrahje(params.id);
  if (!x) notFound();
  return <RrahjeView x={x} />;
}
