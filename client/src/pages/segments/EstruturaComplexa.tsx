import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Network, FileCheck, BarChart3, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EstruturaComplexa() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('segmentPages.estruturaComplexa.hero.title')}
        subtitle={t('segmentPages.estruturaComplexa.hero.subtitle')}
        primaryCTA={{ text: t('segmentPages.estruturaComplexa.hero.primaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('segmentPages.estruturaComplexa.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('segmentPages.estruturaComplexa.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Network,
                title: "Visão Consolidada",
                description: "Relatórios integrados de todas as entidades do grupo",
              },
              {
                icon: FileCheck,
                title: "Compliance Corporativo",
                description: "Governança e controles em toda estrutura",
              },
              {
                icon: BarChart3,
                title: "BI Consolidado",
                description: "Dashboards com visão holística do grupo",
              },
              {
                icon: Users,
                title: "Gestão de Sócios",
                description: "Controle de participações e distribuição de resultados",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('segmentPages.estruturaComplexa.cta.title')}
        description={t('segmentPages.estruturaComplexa.cta.description')}
        primaryButton={{ text: t('segmentPages.estruturaComplexa.cta.primaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
