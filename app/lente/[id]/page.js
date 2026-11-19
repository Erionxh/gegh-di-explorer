import LensView from '../../../components/LensView';
import { LENS_ORDER } from '../../../lib/lensPages';

export function generateStaticParams() {
  return LENS_ORDER.map((id) => ({ id }));
}

export default function Page({ params }) {
  return <LensView id={params.id} />;
}
