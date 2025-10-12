import { useTranslation } from "react-i18next";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Zap, DollarSign, GraduationCap, Home, Laptop } from "lucide-react";

//todo: remove mock data - job openings
const iconMap = {
  Heart,
  DollarSign,
  Laptop,
  TrendingUp,
  GraduationCap,
  Users,
};

export default function FacaParte() {
  const { t } = useTranslation();
  const benefitsData = t('facaPartePage.benefits.items', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const careerAreas = t('facaPartePage.careerAreas.areas', { returnObjects: true }) as string[];
  
  const benefits = benefitsData.map((benefit, index) => ({
    ...benefit,
    icon: Object.values(iconMap)[index],
  }));

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('facaPartePage.hero.title')}
        subtitle={t('facaPartePage.hero.subtitle')}
        primaryCTA={{ text: t('facaPartePage.hero.primaryCTA'), href: "#vagas" }}
        showGradient={false}
      />

      {/* Por que OSP */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('facaPartePage.whyOSP.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('facaPartePage.whyOSP.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('facaPartePage.benefits.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('facaPartePage.benefits.description')}
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <FeatureGrid features={benefits} columns={3} />
          </div>
        </div>
      </section>

      {/* Career Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-section-mobile md:text-section mb-4">{t('facaPartePage.careerAreas.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('facaPartePage.careerAreas.description')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {careerAreas.map((area, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-card-border rounded-lg text-center hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`career-area-${index}`}
              >
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-card" id="vagas">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">{t('facaPartePage.howToApply.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    {t('facaPartePage.howToApply.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild data-testid="button-apply">
                      <a href="mailto:talentos@ospcontabilidade.com.br">
                        {t('facaPartePage.howToApply.primaryButton')}
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild data-testid="button-linkedin">
                      <a href="https://linkedin.com/company/osp" target="_blank" rel="noopener noreferrer">
                        {t('facaPartePage.howToApply.secondaryButton')}
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    <strong>{t('facaPartePage.howToApply.contactInfo.email')}</strong> {t('facaPartePage.howToApply.contactInfo.emailValue')}<br />
                    <strong>{t('facaPartePage.howToApply.contactInfo.subject')}</strong> {t('facaPartePage.howToApply.contactInfo.subjectValue')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
