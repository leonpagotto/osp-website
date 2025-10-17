import { Button } from "@/components/ui/button";
import SolutionCard from "@/components/SolutionCard";
import { ArrowRight, Compass, Rocket, Scale, LayoutDashboard, DollarSign, PieChart, Home as HomeIcon, FileText } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import type { LucideIcon } from "lucide-react";

interface RelatedSolutionsProps {
  currentSlug: string;
  relatedSlugs: string[];
}

const SOLUTIONS_MAP: Record<string, { icon: LucideIcon; titleKey: string; descriptionKey: string }> = {
  'osp360': {
    icon: Compass,
    titleKey: 'solutions.osp360.name',
    descriptionKey: 'solutions.osp360.description'
  },
  'fundar360': {
    icon: Rocket,
    titleKey: 'solutions.fundar360.name',
    descriptionKey: 'solutions.fundar360.description'
  },
  'tributa360': {
    icon: Scale,
    titleKey: 'solutions.tributa360.name',
    descriptionKey: 'solutions.tributa360.description'
  },
  'gestao360': {
    icon: LayoutDashboard,
    titleKey: 'solutions.gestao360.name',
    descriptionKey: 'solutions.gestao360.description'
  },
  'bpo-financeiro': {
    icon: DollarSign,
    titleKey: 'solutions.bpoFinanceiro.name',
    descriptionKey: 'solutions.bpoFinanceiro.description'
  },
  'precifica360': {
    icon: PieChart,
    titleKey: 'solutions.precifica360.name',
    descriptionKey: 'solutions.precifica360.description'
  },
  'holding360': {
    icon: HomeIcon,
    titleKey: 'solutions.holding360.name',
    descriptionKey: 'solutions.holding360.description'
  },
  'contabilidade': {
    icon: FileText,
    titleKey: 'solutions.contabilidade.name',
    descriptionKey: 'solutions.contabilidade.description'
  },
};

export default function RelatedSolutions({ currentSlug, relatedSlugs }: RelatedSolutionsProps) {
  const { t } = useTranslation();

  // Filter out current solution and get only valid related solutions
  const validRelated = relatedSlugs
    .filter(slug => slug !== currentSlug && SOLUTIONS_MAP[slug])
    .slice(0, 3); // Max 3 related solutions

  if (validRelated.length === 0) return null;

  return (
    <section className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('components.relatedSolutions.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('components.relatedSolutions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {validRelated.map((slug) => {
              const solution = SOLUTIONS_MAP[slug];
              return (
                <SolutionCard
                  key={slug}
                  icon={solution.icon}
                  title={t(solution.titleKey)}
                  description={t(solution.descriptionKey)}
                  href={`/solucoes/${slug}`}
                />
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/solucoes">
              <a>
                <Button size="lg" variant="outline" className="gap-2">
                  {t('components.relatedSolutions.viewAll')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
