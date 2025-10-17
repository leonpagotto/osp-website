import HeroSection from "@/components/HeroSection";
import SolutionCard from "@/components/SolutionCard";
import CTASection from "@/components/CTASection";
import { useTranslation } from "react-i18next";
import {
  Target,
  Building2,
  Calculator,
  TrendingUp,
  DollarSign,
  PieChart,
  Home as HomeIcon,
  FileText,
  Compass,
  Rocket,
  Scale,
  LayoutDashboard,
} from "lucide-react";

export default function Solucoes() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('solutionsPage.hero.title')}
        subtitle={t('solutionsPage.hero.subtitle')}
        showGradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <CTASection
        title={t('solutionsPage.cta.title')}
        description={t('solutionsPage.cta.description')}
        primaryButton={{ text: t('solutionsPage.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('solutionsPage.cta.secondaryButton'), href: "/solucoes/osp360" }}
      />
    </div>
  );
}
