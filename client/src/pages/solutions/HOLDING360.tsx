import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import RelatedSolutions from "@/components/RelatedSolutions";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createServiceSchema } from "@/components/SEO/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Shield, Users, FileText, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function HOLDING360() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  
  const features = t('solutionPages.holding360.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const benefits = t('solutionPages.holding360.benefits.items', { returnObjects: true }) as string[];
  const urgencyFactors = t('solutionPages.holding360.urgency.factors', { returnObjects: true }) as Array<{ title: string; description: string; impact: string }>;
  
  const featureIcons = [Home, Shield, Users, FileText];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "HOLDING360 - Asset Holding Structuring | OSP" : "HOLDING360 - Estruturação de Holding Patrimonial | OSP"}
        description={isEnglish 
          ? "Protect your assets with HOLDING360. Asset holding structuring for succession planning, tax optimization, and legal protection. Urgency: new inheritance tax legislation."
          : "Proteja seu patrimônio com HOLDING360. Estruturação de holding patrimonial para sucessão, otimização tributária e proteção jurídica. Urgência: nova legislação de herança e doação."
        }
        keywords={isEnglish
          ? "asset holding, family holding, succession planning, asset protection, inheritance tax, holding structuring, tax optimization"
          : "holding patrimonial, holding familiar, planejamento sucessório, proteção patrimonial, imposto herança, estruturação holding, otimização tributária"
        }
        canonicalUrl={isEnglish ? "/en/solutions/holding360" : "/solucoes/holding360"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/solucoes/holding360',
          'en': '/en/solutions/holding360'
        }}
        ogImage="/images/solutions/holding360-og.jpg"
      />
      
      <StructuredData
        type="service"
        data={createServiceSchema({
          name: "HOLDING360",
          description: isEnglish
            ? "Complete asset holding structuring service for family succession, tax optimization, and legal asset protection."
            : "Serviço completo de estruturação de holding patrimonial para sucessão familiar, otimização tributária e proteção jurídica de patrimônio.",
          areaServed: "Brazil"
        })}
      />
      
      <HeroSection
        title={t('solutionPages.holding360.hero.title')}
        subtitle={t('solutionPages.holding360.hero.subtitle')}
        primaryCTA={{ text: t('solutionPages.holding360.hero.primaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('solutionPages.holding360.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('solutionPages.holding360.what.description')}
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

      {/* Urgency Section - 2025 Deadline */}
      <section className="py-20 bg-amber-50/50 dark:bg-amber-950/10 border-y border-amber-200/50 dark:border-amber-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
              <h2 className="text-section-mobile md:text-section text-center">
                {t('solutionPages.holding360.urgency.title')}
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t('solutionPages.holding360.urgency.subtitle')}
            </p>

            <div className="space-y-4">
              {urgencyFactors.map((factor, index) => (
                <Card key={index} className="border-l-4 border-l-amber-600">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg">{factor.title}</CardTitle>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        factor.impact === 'CRÍTICO' || factor.impact === 'CRITICAL' ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400' :
                        factor.impact === 'ALTO' || factor.impact === 'HIGH' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400'
                      }`}>
                        {factor.impact}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {factor.description}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-br from-amber-100/50 to-transparent dark:from-amber-950/20 border-amber-300/50 dark:border-amber-800/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-3">
                  {t('solutionPages.holding360.urgency.deadline.title')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('solutionPages.holding360.urgency.deadline.description')}
                </p>
                <Link href="/contato">
                  <Button size="lg" className="gap-2">
                    {t('solutionPages.holding360.urgency.deadline.button')}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile md:text-section mb-8 text-center">
              {t('solutionPages.holding360.benefits.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedSolutions 
        currentSlug="holding360"
        relatedSlugs={['fundar360', 'tributa360', 'osp360']}
      />

      <CTASection
        title={t('solutionPages.holding360.cta.title')}
        description={t('solutionPages.holding360.cta.description')}
        primaryButton={{ text: t('solutionPages.holding360.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('solutionPages.holding360.cta.secondaryButton'), href: "/resultados" }}
        variant="accent"
      />
    </div>
  );
}
