import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import RelatedSolutions from "@/components/RelatedSolutions";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createServiceSchema } from "@/components/SEO/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Shield, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function Contabilidade() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  
  const serviceTypes = t('solutionPages.contabilidade.services.types', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  
  const mainFeatures = t('solutionPages.contabilidade.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  
  const mainFeatureIcons = [FileText, Users, Shield, Zap];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "Digital Accounting for Real Profit | OSP" : "Contabilidade Digital para Lucro Real | OSP"}
        description={isEnglish 
          ? "Integrated digital accounting for companies in Real Profit regime. Total compliance, advisory support, security, and integrated technology. More than accounting, a strategic partner."
          : "Contabilidade digital integrada para empresas do Lucro Real. Compliance total, atendimento consultivo, segurança e tecnologia integrada. Mais do que contabilidade, um parceiro estratégico."
        }
        keywords={isEnglish
          ? "digital accounting, real profit accounting, integrated accounting, accounting compliance, accounting consulting, accounting technology, ERP integration"
          : "contabilidade digital, contabilidade lucro real, contabilidade integrada, compliance contábil, consultoria contábil, tecnologia contábil, integração ERP"
        }
        canonicalUrl={isEnglish ? "/en/solutions/accounting" : "/solucoes/contabilidade"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/solucoes/contabilidade',
          'en': '/en/solutions/accounting'
        }}
        ogImage="/images/solutions/contabilidade-og.jpg"
      />
      
      <StructuredData
        type="service"
        data={createServiceSchema({
          name: isEnglish ? "Digital Accounting" : "Contabilidade Digital",
          description: isEnglish
            ? "Comprehensive digital accounting services for mid to large companies. Includes financial reporting, tax compliance, advisory consulting, and ERP integration."
            : "Serviços completos de contabilidade digital para empresas de médio e grande porte. Inclui demonstrações financeiras, compliance fiscal, consultoria e integração com ERP.",
          areaServed: "Brazil"
        })}
      />
      
      <HeroSection
        title={t('solutionPages.contabilidade.hero.title')}
        subtitle={t('solutionPages.contabilidade.hero.subtitle')}
        primaryCTA={{ text: t('solutionPages.contabilidade.hero.primaryCTA'), href: "/contato" }}
        secondaryCTA={{ text: t('solutionPages.contabilidade.hero.secondaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('solutionPages.contabilidade.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('solutionPages.contabilidade.what.description')}
            </p>
          </div>

          <FeatureGrid
            features={mainFeatures.map((feature, index) => ({
              icon: mainFeatureIcons[index],
              title: feature.title,
              description: feature.description,
            }))}
            columns={4}
          />
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('solutionPages.contabilidade.services.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceTypes.map((service, index) => (
              <Card key={index} data-testid={`service-type-${index}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <RelatedSolutions 
        currentSlug="contabilidade"
        relatedSlugs={['osp360', 'bpo-financeiro', 'gestao360']}
      />

      <CTASection
        title={t('solutionPages.contabilidade.cta.title')}
        description={t('solutionPages.contabilidade.cta.description')}
        primaryButton={{ text: t('solutionPages.contabilidade.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('solutionPages.contabilidade.cta.secondaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
