import EvergreenGuidePage from '@/components/EvergreenGuidePage';
import { evergreenGuides } from '@/lib/evergreen-guides';
import { buildGuideMetadata } from '@/lib/guide-metadata';

const guide = evergreenGuides['cpg-demand-forecasting'];

export const metadata = buildGuideMetadata(guide);

export default function Page() { return <EvergreenGuidePage guide={guide} />; }
