import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createServiceSchema } from "@/components/SEO/StructuredData";
import { BarChart3, TrendingUp, FileText, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function GESTAO360() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "GESTAO360 - Business Intelligence & Management | OSP" : "GESTAO360 - Business Intelligence e Gestão | OSP"}
        description={isEnglish 
          ? "Transform data into strategic decisions with GESTAO360. Integrated dashboards, real-time indicators, and predictive analysis for business growth."
          : "Transforme dados em decisões estratégicas com GESTAO360. Dashboards integrados, indicadores em tempo real e análises preditivas para crescimento do negócio."
        }
        keywords={isEnglish
          ? "business intelligence, BI, dashboards, management indicators, data analysis, strategic management, KPIs"
          : "business intelligence, BI, dashboards, indicadores de gestão, análise de dados, gestão estratégica, KPIs"
        }
        canonicalUrl={isEnglish ? "/en/solutions/gestao360" : "/solucoes/gestao360"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/solucoes/gestao360',
          'en': '/en/solutions/gestao360'
        }}
        ogImage="/images/solutions/gestao360-og.jpg"
      />
      
      <StructuredData
        type="service"
        data={createServiceSchema({
          name: "GESTAO360",
          description: isEnglish
            ? "Business Intelligence platform with integrated dashboards and real-time management indicators for data-driven strategic decisions."
            : "Plataforma de Business Intelligence com dashboards integrados e indicadores de gestão em tempo real para decisões estratégicas baseadas em dados.",
          areaServed: "Brazil"
        })}
      />
      
      <HeroSection
        title={t('solutionPages.gestao360.hero.title')}
        subtitle={t('solutionPages.gestao360.hero.subtitle')}
        primaryCTA={{ text: t('solutionPages.gestao360.hero.primaryCTA'), href: "/contato" }}
        secondaryCTA={{ text: t('solutionPages.gestao360.hero.secondaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('solutionPages.gestao360.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('solutionPages.gestao360.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: BarChart3,
                title: "BI Personalizado",
                description: "Dashboards customizados para seu setor e necessidades",
              },
              {
                icon: TrendingUp,
                title: "KPIs Estratégicos",
                description: "Indicadores relevantes para tomada de decisão",
              },
              {
                icon: FileText,
                title: "Relatórios Executivos",
                description: "Informações claras e objetivas para gestão",
              },
              {
                icon: Zap,
                title: "Integração Total",
                description: "Conexão com ERP, sistemas financeiros e bancos",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('solutionPages.gestao360.cta.title')}
        description={t('solutionPages.gestao360.cta.description')}
        primaryButton={{ text: t('solutionPages.gestao360.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('solutionPages.gestao360.cta.secondaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
