import { notFound } from 'next/navigation';
import SeatView from '../../../components/SeatView';
import { SEATS } from '../../../lib/board';

export function generateStaticParams() {
  return SEATS.map((_, i) => ({ n: String(i + 1) }));
}

export default function Page({ params }) {
  const i = Number(params.n) - 1;
  if (!(i >= 0 && i < SEATS.length)) notFound();
  return <SeatView i={i} />;
}
