import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import RelatedSolutions from "@/components/RelatedSolutions";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createServiceSchema } from "@/components/SEO/StructuredData";
import { PieChart, TrendingUp, Calculator, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function PRECIFICA360() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "PRECIFICA360 - Strategic Pricing | OSP" : "PRECIFICA360 - Precificação Estratégica | OSP"}
        description={isEnglish 
          ? "Maximize profitability with PRECIFICA360. Strategic pricing analysis, cost structure, market positioning, and competitive margins for sustainable growth."
          : "Maximize a lucratividade com PRECIFICA360. Análise estratégica de precificação, estrutura de custos, posicionamento de mercado e margens competitivas para crescimento sustentável."
        }
        keywords={isEnglish
          ? "strategic pricing, price analysis, cost structure, profit margins, market positioning, pricing strategy, profitability"
          : "precificação estratégica, análise de preços, estrutura de custos, margem de lucro, posicionamento de mercado, estratégia de preços, lucratividade"
        }
        canonicalUrl={isEnglish ? "/en/solutions/precifica360" : "/solucoes/precifica360"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/solucoes/precifica360',
          'en': '/en/solutions/precifica360'
        }}
        ogImage="/images/solutions/precifica360-og.jpg"
      />
      
      <StructuredData
        type="service"
        data={createServiceSchema({
          name: "PRECIFICA360",
          description: isEnglish
            ? "Strategic pricing analysis service including cost structure evaluation, market positioning, and competitive margin optimization."
            : "Serviço de análise estratégica de precificação incluindo avaliação de estrutura de custos, posicionamento de mercado e otimização de margens competitivas.",
          areaServed: "Brazil"
        })}
      />
      
      <HeroSection
        title={t('solutionPages.precifica360.hero.title')}
        subtitle={t('solutionPages.precifica360.hero.subtitle')}
        primaryCTA={{ text: t('solutionPages.precifica360.hero.primaryCTA'), href: "/contato" }}
        secondaryCTA={{ text: t('solutionPages.precifica360.hero.secondaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('solutionPages.precifica360.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('solutionPages.precifica360.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Calculator,
                title: "Análise de Custos",
                description: "Mapeamento completo de todos os custos diretos e indiretos",
              },
              {
                icon: PieChart,
                title: "Margem por Produto",
                description: "Rentabilidade individual de cada item do portfólio",
              },
              {
                icon: Target,
                title: "Precificação Estratégica",
                description: "Definição de preços baseada em margem-alvo",
              },
              {
                icon: TrendingUp,
                title: "Aumento de Rentabilidade",
                description: "Plano de ação para melhorar resultados",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('solutionPages.precifica360.cta.title')}
        description={t('solutionPages.precifica360.cta.description')}
        primaryButton={{ text: t('solutionPages.precifica360.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('solutionPages.precifica360.cta.secondaryButton'), href: "/contato" }}
        variant="accent"
      />

      <RelatedSolutions 
        currentSlug="precifica360"
        relatedSlugs={['tributa360', 'gestao360', 'osp360']}
      />
    </div>
  );
}
