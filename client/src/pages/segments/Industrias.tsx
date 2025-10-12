import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { Factory, Calculator, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Industrias() {
  const { t } = useTranslation();
  
  const stats = t('segmentPages.industrias.stats', { returnObjects: true }) as Array<{
    value: string;
    label: string;
    highlight?: boolean;
  }>;

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('segmentPages.industrias.hero.title')}
        subtitle={t('segmentPages.industrias.hero.subtitle')}
        primaryCTA={{ text: t('segmentPages.industrias.hero.primaryCTA'), href: "/contato" }}
      />

      <StatsSection
        stats={stats.map((stat, index) => ({
          ...stat,
          highlight: index === 1 || index === 3
        }))}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('segmentPages.industrias.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('segmentPages.industrias.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Factory,
                title: "Custos Industriais",
                description: "Apuração correta de custos de produção e margem",
              },
              {
                icon: Calculator,
                title: "Créditos Fiscais",
                description: "Aproveitamento máximo de PIS/Cofins e ICMS",
              },
              {
                icon: TrendingUp,
                title: "Planejamento Tributário",
                description: "Estruturação para máxima eficiência fiscal",
              },
              {
                icon: Shield,
                title: "Regimes Especiais",
                description: "Drawback, RECAP e outros benefícios",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('segmentPages.industrias.cta.title')}
        description={t('segmentPages.industrias.cta.description')}
        primaryButton={{ text: t('segmentPages.industrias.cta.primaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
