import { notFound } from 'next/navigation';
import { getWord, wordIds } from '../../../lib/words';
import Dossier from '../../../components/Dossier';

export function generateStaticParams() {
  return wordIds().map((id) => ({ id }));
}

export function generateMetadata({ params }) {
  const w = getWord(params.id);
  return { title: w ? `${w.headword} · Dosja · GEG` : 'GEG' };
}

export default function DossierPage({ params }) {
  const w = getWord(params.id);
  if (!w) notFound();
  return <Dossier word={w} />;
}
