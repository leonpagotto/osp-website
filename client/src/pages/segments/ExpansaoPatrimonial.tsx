import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Building, Home, Users, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ExpansaoPatrimonial() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('segmentPages.expansaoPatrimonial.hero.title')}
        subtitle={t('segmentPages.expansaoPatrimonial.hero.subtitle')}
        primaryCTA={{ text: t('segmentPages.expansaoPatrimonial.hero.primaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('segmentPages.expansaoPatrimonial.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('segmentPages.expansaoPatrimonial.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Building,
                title: "Holdings Patrimoniais",
                description: "Estruturação de holdings para proteção de ativos",
              },
              {
                icon: Home,
                title: "Planejamento Sucessório",
                description: "Sucessão familiar sem conflitos e com eficiência fiscal",
              },
              {
                icon: Users,
                title: "Governança Familiar",
                description: "Acordo de sócios e regras de relacionamento",
              },
              {
                icon: Shield,
                title: "Proteção Patrimonial",
                description: "Blindagem e segregação de riscos",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('segmentPages.expansaoPatrimonial.cta.title')}
        description={t('segmentPages.expansaoPatrimonial.cta.description')}
        primaryButton={{ text: t('segmentPages.expansaoPatrimonial.cta.primaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
