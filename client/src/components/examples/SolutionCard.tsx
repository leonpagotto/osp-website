import SolutionCard from '../SolutionCard';
import { Target } from 'lucide-react';

export default function SolutionCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <SolutionCard
        icon={Target}
        title="OSP360"
        description="Diagnóstico estratégico completo em 45 dias para identificar riscos e oportunidades"
        href="/solucoes/osp360"
      />
    </div>
  );
}
