import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

export default function SobreNos() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  
  const timeline = t('about.history.timeline', { returnObjects: true }) as Array<{ year: string; event: string }>;
  const team = t('about.leadership.team', { returnObjects: true }) as Array<{ name: string; role: string; bio: string }>;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "About OSP - 47 Years of Excellence" : "Sobre a OSP - 47 Anos de Excelência"}
        description={isEnglish
          ? "OSP Digital Accounting: 47 years of history, +600 clients, presence in 14 states and 12 countries. Specialized team in accounting, tax, and management for growing companies."
          : "OSP Contabilidade Digital: 47 anos de história, +600 clientes, presença em 14 estados e 12 países. Time especializado em contabilidade, fiscal e gestão para empresas em crescimento."
        }
        keywords={isEnglish
          ? "about OSP, accounting history, professional team, digital accounting, business consulting, 47 years experience"
          : "sobre OSP, história contabilidade, equipe profissional, contabilidade digital, consultoria empresarial, 47 anos experiência"
        }
        canonicalUrl={isEnglish ? "/en/about" : "/sobre-nos"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/sobre-nos',
          'en': '/en/about'
        }}
        ogImage="/images/og/about.jpg"
      />
      
      <HeroSection
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
        showGradient={true}
        gradientVariant="indigo"
      />

      {/* Essência */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile md:text-section mb-6 text-center">{t('about.essence.title')}</h2>
            <div className="prose prose-lg max-w-none text-center text-muted-foreground">
              <p className="text-body-lg leading-relaxed mb-4">
                {t('about.essence.paragraph1')}
              </p>
              <p className="text-body-lg leading-relaxed">
                {t('about.essence.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-section-mobile md:text-section mb-12 text-center">{t('about.history.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start" data-testid={`timeline-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-mono font-bold text-primary">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-5">
                    <p className="text-base">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('about.leadership.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('about.leadership.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => {
              // Normalize name for file path: lowercase, replace all spaces with hyphens, remove accents
              const imagePath = `/images/team/${member.name
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') // Remove accents
                .replace(/\s+/g, '-') // Replace all spaces with hyphens
              }.jpg`;
              return (
                <Card key={index} data-testid={`team-member-${index}`}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-primary/10">
                      <img 
                        src={imagePath}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient placeholder if image not found
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-blue-700">
                              <span class="text-white text-3xl font-bold">${member.name.split(' ').map((n: string) => n[0]).join('')}</span>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('about.values.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('about.values.subtitle')}
            </p>
          </div>
          <FeatureGrid
            features={[
              {
                icon: Target,
                title: t('about.values.items.specialization.title'),
                description: t('about.values.items.specialization.description'),
              },
              {
                icon: Users,
                title: t('about.values.items.partnership.title'),
                description: t('about.values.items.partnership.description'),
              },
              {
                icon: Award,
                title: t('about.values.items.excellence.title'),
                description: t('about.values.items.excellence.description'),
              },
              {
                icon: TrendingUp,
                title: t('about.values.items.results.title'),
                description: t('about.values.items.results.description'),
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title={t('about.cta.title')}
        description={t('about.cta.description')}
        primaryButton={{ text: t('about.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('about.cta.secondaryButton'), href: "/faca-parte" }}
      />
    </div>
  );
}
