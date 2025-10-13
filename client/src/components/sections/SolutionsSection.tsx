import { useTranslation } from 'react-i18next';
import SolutionCard from "@/components/SolutionCard";
import {
  Compass,
  Rocket,
  Scale,
  LayoutDashboard,
  DollarSign,
  PieChart,
  Home as HomeIcon,
  FileText,
} from "lucide-react";

export default function SolutionsSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-section-mobile md:text-section mb-4">{t('home.strategicSolutions.title')}</h2>
          <p className="text-body-lg text-muted-foreground">
            {t('home.strategicSolutions.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SolutionCard
            icon={Compass}
            title={t('solutions.osp360.name')}
            description={t('solutions.osp360.description')}
            href="/solucoes/osp360"
          />
          <SolutionCard
            icon={Rocket}
            title={t('solutions.fundar360.name')}
            description={t('solutions.fundar360.description')}
            href="/solucoes/fundar360"
          />
          <SolutionCard
            icon={Scale}
            title={t('solutions.tributa360.name')}
            description={t('solutions.tributa360.description')}
            href="/solucoes/tributa360"
          />
          <SolutionCard
            icon={LayoutDashboard}
            title={t('solutions.gestao360.name')}
            description={t('solutions.gestao360.description')}
            href="/solucoes/gestao360"
          />
          <SolutionCard
            icon={DollarSign}
            title={t('solutions.bpoFinanceiro.name')}
            description={t('solutions.bpoFinanceiro.description')}
            href="/solucoes/bpo-financeiro"
          />
          <SolutionCard
            icon={PieChart}
            title={t('solutions.precifica360.name')}
            description={t('solutions.precifica360.description')}
            href="/solucoes/precifica360"
          />
          <SolutionCard
            icon={HomeIcon}
            title={t('solutions.holding360.name')}
            description={t('solutions.holding360.description')}
            href="/solucoes/holding360"
          />
          <SolutionCard
            icon={FileText}
            title={t('solutions.contabilidade.name')}
            description={t('solutions.contabilidade.description')}
            href="/solucoes/contabilidade"
          />
        </div>
      </div>
    </section>
  );
}
