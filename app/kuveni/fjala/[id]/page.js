import { notFound } from 'next/navigation';
import { KuveniWord } from '../../../../components/Kuveni';
import { WORD_DEBATES, getWordDebate } from '../../../../lib/forum';

export function generateStaticParams() {
  return WORD_DEBATES.map((w) => ({ id: w.id }));
}

export const metadata = { title: 'Kuveni · GEG' };

export default function Page({ params }) {
  const w = getWordDebate(params.id);
  if (!w) notFound();
  return <KuveniWord w={w} />;
}
