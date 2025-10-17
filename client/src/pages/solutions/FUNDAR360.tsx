import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import RelatedSolutions from "@/components/RelatedSolutions";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createServiceSchema } from "@/components/SEO/StructuredData";
import { Building2, Shield, FileCheck, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function FUNDAR360() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "FUNDAR360 - Complete Company Formation | OSP" : "FUNDAR360 - Abertura Completa de Empresa | OSP"}
        description={isEnglish 
          ? "Open your company quickly and securely with FUNDAR360. Complete bureaucracy handling, regime structuring, and initial setup. From inception to first invoice."
          : "Abra sua empresa de forma rápida e segura com FUNDAR360. Gestão completa da burocracia, estruturação de regime e setup inicial. Do zero à primeira nota fiscal."
        }
        keywords={isEnglish
          ? "company formation, business opening, entrepreneurship, CNPJ, tax regime, company structuring, business registration"
          : "abertura de empresa, abrir empresa, empreendedorismo, CNPJ, regime tributário, estruturação empresarial, registro empresarial"
        }
        canonicalUrl={isEnglish ? "/en/solutions/fundar360" : "/solucoes/fundar360"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/solucoes/fundar360',
          'en': '/en/solutions/fundar360'
        }}
        ogImage="/images/solutions/fundar360-og.jpg"
      />
      
      <StructuredData
        type="service"
        data={createServiceSchema({
          name: "FUNDAR360",
          description: isEnglish
            ? "Complete company formation service handling all bureaucracy, tax regime structuring, and initial business setup."
            : "Serviço completo de abertura de empresa com gestão de toda burocracia, estruturação de regime tributário e setup inicial do negócio.",
          areaServed: "Brazil"
        })}
      />
      
      <HeroSection
        title={t('solutionPages.fundar360.hero.title')}
        subtitle={t('solutionPages.fundar360.hero.subtitle')}
        primaryCTA={{ text: t('solutionPages.fundar360.hero.primaryCTA'), href: "/contato" }}
        secondaryCTA={{ text: t('solutionPages.fundar360.hero.secondaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('solutionPages.fundar360.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('solutionPages.fundar360.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Building2,
                title: "Estrutura Empresarial",
                description: "Definição de tipo societário e estrutura de capital ideal",
              },
              {
                icon: Shield,
                title: "Regime Tributário",
                description: "Análise e escolha do regime mais eficiente",
              },
              {
                icon: FileCheck,
                title: "Compliance desde o início",
                description: "Processos e controles estruturados corretamente",
              },
              {
                icon: Users,
                title: "Governança",
                description: "Acordo de sócios e regras de relacionamento",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <RelatedSolutions 
        currentSlug="fundar360"
        relatedSlugs={['osp360', 'tributa360', 'holding360']}
      />

      <CTASection
        title={t('solutionPages.fundar360.cta.title')}
        description={t('solutionPages.fundar360.cta.description')}
        primaryButton={{ text: t('solutionPages.fundar360.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('solutionPages.fundar360.cta.secondaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
