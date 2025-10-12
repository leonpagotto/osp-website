import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createServiceSchema } from "@/components/SEO/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, FileSearch, BarChart3, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function OSP360() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  
  const features = t('solutionPages.osp360.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const benefits = t('solutionPages.osp360.benefits.items', { returnObjects: true }) as string[];
  const steps = t('solutionPages.osp360.howItWorks.steps', { returnObjects: true }) as Array<{ title: string; description: string }>;
  
  const featureIcons = [FileSearch, Target, BarChart3, Users];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "OSP360 - Complete Integrated Management | OSP" : "OSP360 - Gestão Integrada Completa | OSP"}
        description={isEnglish 
          ? "OSP360: Complete management platform integrating accounting, finance, tax, and BI. 360° vision of your business with data-driven decisions. Accounting, BPO, planning, and insights in one place."
          : "OSP360: Plataforma completa de gestão integrando contabilidade, financeiro, fiscal e BI. Visão 360° do seu negócio com decisões baseadas em dados. Contabilidade, BPO, planejamento e insights em um só lugar."
        }
        keywords={isEnglish
          ? "integrated management, OSP360, digital accounting, financial BPO, tax planning, business intelligence, 360 management, data-driven decisions"
          : "gestão integrada, OSP360, contabilidade digital, bpo financeiro, planejamento tributário, business intelligence, gestão 360, decisões baseadas em dados"
        }
        canonicalUrl={isEnglish ? "/en/solutions/osp360" : "/solucoes/osp360"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/solucoes/osp360',
          'en': '/en/solutions/osp360'
        }}
        ogImage="/images/solutions/osp360-og.jpg"
      />
      
      <StructuredData
        type="service"
        data={createServiceSchema({
          name: "OSP360",
          description: isEnglish
            ? "Complete integrated management platform combining accounting, financial BPO, tax planning, and business intelligence for 360° business visibility."
            : "Plataforma completa de gestão integrada combinando contabilidade, BPO financeiro, planejamento tributário e business intelligence para visão 360° do negócio.",
          areaServed: "Brazil"
        })}
      />
      
      <HeroSection
        title={t('solutionPages.osp360.hero.title')}
        subtitle={t('solutionPages.osp360.hero.subtitle')}
        primaryCTA={{ text: t('solutionPages.osp360.hero.primaryCTA'), href: "/contato" }}
        secondaryCTA={{ text: t('solutionPages.osp360.hero.secondaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('solutionPages.osp360.what.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('solutionPages.osp360.what.description')}
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

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile md:text-section mb-8 text-center">
              {t('solutionPages.osp360.benefits.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Mid-page CTA */}
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">{t('solutionPages.osp360.midCTA.title')}</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {t('solutionPages.osp360.midCTA.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contato">
                    <Button size="lg" className="gap-2">
                      {t('solutionPages.osp360.midCTA.primaryButton')}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contato">
                    <Button size="lg" variant="outline">
                      {t('solutionPages.osp360.midCTA.secondaryButton')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile md:text-section mb-12 text-center">
              {t('solutionPages.osp360.howItWorks.title')}
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t('solutionPages.osp360.cta.title')}
        description={t('solutionPages.osp360.cta.description')}
        primaryButton={{ text: t('solutionPages.osp360.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('solutionPages.osp360.cta.secondaryButton'), href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
