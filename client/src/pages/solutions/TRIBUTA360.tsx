import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import RelatedSolutions from "@/components/RelatedSolutions";
import StatsSection from "@/components/StatsSection";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createServiceSchema } from "@/components/SEO/StructuredData";
import { Calculator, TrendingDown, Shield, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function TRIBUTA360() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  
  const features = t('solutionPages.tributa360.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  
  const featureIcons = [Calculator, TrendingDown, Shield, FileCheck];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "TRIBUTA360 - Strategic Tax Planning | OSP" : "TRIBUTA360 - Planejamento Tributário Estratégico | OSP"}
        description={isEnglish 
          ? "Reduce your tax burden legally with TRIBUTA360. Feasibility analysis, regime change, tax credits, and total compliance. Real results for your business."
          : "Reduza sua carga tributária de forma legal com TRIBUTA360. Análise de viabilidade, mudança de regime, créditos tributários e compliance total. Resultados reais para seu negócio."
        }
        keywords={isEnglish
          ? "tax planning, tax reduction, regime change, tax credits, fiscal compliance, tax optimization, real profit"
          : "planejamento tributário, redução de impostos, mudança de regime, créditos tributários, compliance fiscal, otimização tributária, lucro real"
        }
        canonicalUrl={isEnglish ? "/en/solutions/tributa360" : "/solucoes/tributa360"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/solucoes/tributa360',
          'en': '/en/solutions/tributa360'
        }}
        ogImage="/images/solutions/tributa360-og.jpg"
      />
      
      <StructuredData
        type="service"
        data={createServiceSchema({
          name: "TRIBUTA360",
          description: isEnglish
            ? "Strategic tax planning service for companies seeking legal tax reduction. Includes feasibility studies, regime optimization, and compliance management."
            : "Serviço de planejamento tributário estratégico para empresas que buscam redução legal de impostos. Inclui estudos de viabilidade, otimização de regime e gestão de compliance.",
          areaServed: "Brazil"
        })}
      />
      
      <HeroSection
        title={t('solutionPages.tributa360.hero.title')}
        subtitle={t('solutionPages.tributa360.hero.subtitle')}
        primaryCTA={{ text: t('solutionPages.tributa360.hero.primaryCTA'), href: "/contato" }}
        secondaryCTA={{ text: t('solutionPages.tributa360.hero.secondaryCTA'), href: "/contato" }}
      />

      <StatsSection
        stats={[
          { value: "R$ 100M+", label: "Em economia tributária gerada", highlight: true },
          { value: "100+", label: "Migrações seguras para Lucro Real" },
          { value: "23%", label: "Redução média de carga tributária", highlight: true },
          { value: "100%", label: "Compliance garantido" },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('solutionPages.tributa360.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('solutionPages.tributa360.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={features.map((feature, index) => ({
              icon: featureIcons[index],
              title: feature.title,
              description: feature.description,
            }))}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('solutionPages.tributa360.cta.title')}
        description={t('solutionPages.tributa360.cta.description')}
        primaryButton={{ text: t('solutionPages.tributa360.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('solutionPages.tributa360.cta.secondaryButton'), href: "/contato" }}
        variant="accent"
      />

      <RelatedSolutions 
        currentSlug="tributa360"
        relatedSlugs={['osp360', 'precifica360', 'gestao360']}
      />
    </div>
  );
}
