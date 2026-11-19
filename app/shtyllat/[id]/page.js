import PillarView from '../../../components/PillarView';
import { PILLAR_ORDER } from '../../../lib/pillars';

export function generateStaticParams() {
  return PILLAR_ORDER.map((id) => ({ id }));
}

export default function Page({ params }) {
  return <PillarView id={params.id} />;
}
