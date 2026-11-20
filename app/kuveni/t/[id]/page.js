import { LiveThread } from '../../../../components/KuveniLive';
export const metadata = { title: 'Kuveni · GEG 1.0' };
export default function Page({ params }) { return <LiveThread id={params.id} />; }
