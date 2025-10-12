import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { Globe, FileCheck, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Multinacionais() {
  const { t } = useTranslation();
  
  const stats = t('segmentPages.multinacionais.stats', { returnObjects: true }) as Array<{
    value: string;
    label: string;
    highlight?: boolean;
  }>;

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('segmentPages.multinacionais.hero.title')}
        subtitle={t('segmentPages.multinacionais.hero.subtitle')}
        primaryCTA={{ text: t('segmentPages.multinacionais.hero.primaryCTA'), href: "/contato" }}
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
              {t('segmentPages.multinacionais.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('segmentPages.multinacionais.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Globe,
                title: "Operações Cross-Border",
                description: "Estruturação de operações internacionais",
              },
              {
                icon: FileCheck,
                title: "Transfer Pricing",
                description: "Estudos e documentação de preços de transferência",
              },
              {
                icon: TrendingUp,
                title: "Planejamento Global",
                description: "Eficiência fiscal em múltiplas jurisdições",
              },
              {
                icon: Shield,
                title: "Compliance Internacional",
                description: "Adequação a normas locais e internacionais",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('segmentPages.multinacionais.cta.title')}
        description={t('segmentPages.multinacionais.cta.description')}
        primaryButton={{ text: t('segmentPages.multinacionais.cta.primaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
