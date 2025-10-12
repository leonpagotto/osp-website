import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Zap, FileCheck, BarChart3, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function OperacaoIntensiva() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('segmentPages.operacaoIntensiva.hero.title')}
        subtitle={t('segmentPages.operacaoIntensiva.hero.subtitle')}
        primaryCTA={{ text: t('segmentPages.operacaoIntensiva.hero.primaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('segmentPages.operacaoIntensiva.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('segmentPages.operacaoIntensiva.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Zap,
                title: "Automação Total",
                description: "Integração e automatização de processos fiscais",
              },
              {
                icon: FileCheck,
                title: "Controles Robustos",
                description: "Validações e checagens automatizadas",
              },
              {
                icon: BarChart3,
                title: "Monitoramento 24/7",
                description: "Acompanhamento em tempo real de operações",
              },
              {
                icon: Shield,
                title: "Compliance Garantido",
                description: "Zero erro em obrigações acessórias",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('segmentPages.operacaoIntensiva.cta.title')}
        description={t('segmentPages.operacaoIntensiva.cta.description')}
        primaryButton={{ text: t('segmentPages.operacaoIntensiva.cta.primaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
