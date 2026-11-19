import { notFound } from 'next/navigation';
import { KuvendiThread } from '../../../components/Kuvendi';
import { THREADS, getThread } from '../../../lib/forum';

export function generateStaticParams() {
  return THREADS.map((t) => ({ id: t.id }));
}

export const metadata = { title: 'Kuvendi · GEG', robots: { index: false } };

export default function Page({ params }) {
  const t = getThread(params.id);
  if (!t) notFound();
  return <KuvendiThread thread={t} />;
}
