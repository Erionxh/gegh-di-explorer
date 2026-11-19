import { notFound } from 'next/navigation';
import { KuveniThread } from '../../../components/Kuveni';
import { THREADS, getThread } from '../../../lib/forum';

export function generateStaticParams() {
  return THREADS.map((t) => ({ id: t.id }));
}

export const metadata = { title: 'Kuveni · GEG' };

export default function Page({ params }) {
  const t = getThread(params.id);
  if (!t) notFound();
  return <KuveniThread thread={t} />;
}
