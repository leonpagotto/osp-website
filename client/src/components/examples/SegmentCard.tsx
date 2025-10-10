import SegmentCard from '../SegmentCard';
import { Factory } from 'lucide-react';

export default function SegmentCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <SegmentCard
        icon={Factory}
        title="Indústrias"
        description="Soluções especializadas para o setor industrial com foco em eficiência tributária e gestão financeira"
        href="/segmentos/industrias"
      />
    </div>
  );
}
