import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

interface RelatedSolution {
  slug: string;
  titleKey: string;
  descriptionKey: string;
}

interface RelatedSolutionsProps {
  currentSlug: string;
  relatedSlugs: string[];
}

const SOLUTIONS_MAP: Record<string, { titleKey: string; descriptionKey: string }> = {
  'osp360': {
    titleKey: 'solutions.osp360.name',
    descriptionKey: 'solutions.osp360.shortDescription'
  },
  'fundar360': {
    titleKey: 'solutions.fundar360.name',
    descriptionKey: 'solutions.fundar360.shortDescription'
  },
  'tributa360': {
    titleKey: 'solutions.tributa360.name',
    descriptionKey: 'solutions.tributa360.shortDescription'
  },
  'gestao360': {
    titleKey: 'solutions.gestao360.name',
    descriptionKey: 'solutions.gestao360.shortDescription'
  },
  'bpo-financeiro': {
    titleKey: 'solutions.bpoFinanceiro.name',
    descriptionKey: 'solutions.bpoFinanceiro.shortDescription'
  },
  'precifica360': {
    titleKey: 'solutions.precifica360.name',
    descriptionKey: 'solutions.precifica360.shortDescription'
  },
  'holding360': {
    titleKey: 'solutions.holding360.name',
    descriptionKey: 'solutions.holding360.shortDescription'
  },
  'contabilidade': {
    titleKey: 'solutions.contabilidade.name',
    descriptionKey: 'solutions.contabilidade.shortDescription'
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
    <section className="py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              {t('components.relatedSolutions.title', 'Outras Soluções que Podem Interessar')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('components.relatedSolutions.subtitle', 'Continue explorando nossas soluções integradas')}
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-${validRelated.length === 2 ? '2' : '3'} gap-6`}>
            {validRelated.map((slug) => {
              const solution = SOLUTIONS_MAP[slug];
              return (
                <Card 
                  key={slug} 
                  className="hover-elevate transition-all duration-300 group border-border hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {t(solution.titleKey)}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {t(solution.descriptionKey)}
                    </p>
                    <Link href={`/solucoes/${slug}`}>
                      <Button 
                        variant="ghost" 
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-all gap-2 p-0 h-auto"
                      >
                        {t('components.relatedSolutions.button', 'Saiba Mais')}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/solucoes">
              <Button size="lg" variant="outline" className="gap-2">
                {t('components.relatedSolutions.viewAll', 'Ver Todas as Soluções')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
