import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { GraduationCap, Shield, FileCheck, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ServicosEspecializados() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('segmentPages.servicosEspecializados.hero.title')}
        subtitle={t('segmentPages.servicosEspecializados.hero.subtitle')}
        primaryCTA={{ text: t('segmentPages.servicosEspecializados.hero.primaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('segmentPages.servicosEspecializados.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('segmentPages.servicosEspecializados.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: GraduationCap,
                title: "Compliance Regulatório",
                description: "Adequação a normas setoriais específicas",
              },
              {
                icon: Shield,
                title: "Segurança Jurídica",
                description: "Estruturação fiscal defensável e segura",
              },
              {
                icon: FileCheck,
                title: "Obrigações Setoriais",
                description: "Gestão de exigências específicas do setor",
              },
              {
                icon: Users,
                title: "Consultoria Especializada",
                description: "Time com expertise no seu segmento",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('segmentPages.servicosEspecializados.cta.title')}
        description={t('segmentPages.servicosEspecializados.cta.description')}
        primaryButton={{ text: t('segmentPages.servicosEspecializados.cta.primaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
