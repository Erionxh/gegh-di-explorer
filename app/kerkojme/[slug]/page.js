import { notFound } from 'next/navigation';
import WantedView from '../../../components/WantedView';
import { WANTED, getWanted } from '../../../lib/wantedWords';

export function generateStaticParams() {
  return WANTED.map((w) => ({ slug: w.slug }));
}

export default function Page({ params }) {
  const w = getWanted(params.slug);
  if (!w) notFound();
  return <WantedView slug={w.slug} />;
}
