import { notFound } from 'next/navigation';
import { getWord, wordIds } from '../../../lib/words';
import WordView from '../../../components/WordView';

export function generateStaticParams() {
  return wordIds().map((id) => ({ id }));
}

export function generateMetadata({ params }) {
  const w = getWord(params.id);
  return { title: w ? `${w.headword} · GEG` : 'GEG' };
}

export default function WordPage({ params }) {
  const w = getWord(params.id);
  if (!w) notFound();
  return <WordView word={w} />;
}
