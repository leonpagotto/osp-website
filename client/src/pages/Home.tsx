import { lazy, Suspense } from 'react';
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createOrganizationSchema, createLocalBusinessSchema } from "@/components/SEO/StructuredData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
// Below-fold icons loaded only above fold to reduce initial bundle
import {
  Target,
  Building2,
  Calculator,
  TrendingUp,
  Users,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";

// Lazy load below-fold sections to improve mobile performance
const SolutionsSection = lazy(() => import("@/components/sections/SolutionsSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const TechPartnersSection = lazy(() => import("@/components/sections/TechPartnersSection"));
const SectionLoader = lazy(() => import("@/components/sections/SectionLoader"));

export default function Home() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  
  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "Digital Accounting for Growing Companies | OSP" : "Contabilidade Digital para Empresas em Crescimento | OSP"}
        description={isEnglish 
          ? "OSP Digital Accounting: Integrated accounting, tax planning, BPO, and technology solutions for companies in Real Profit. +600 clients, 14 states, 47 years of expertise."
          : "OSP Contabilidade Digital: Contabilidade integrada, planejamento tributário, BPO e soluções tecnológicas para empresas do Lucro Real. +600 clientes, 14 estados, 47 anos de expertise."
        }
        keywords={isEnglish
          ? "digital accounting, real profit accounting, tax planning, financial BPO, business consulting, accounting technology, tax advisory, business intelligence, integrated ERP"
          : "contabilidade digital, contabilidade lucro real, planejamento tributário, bpo financeiro, consultoria empresarial, tecnologia contábil, assessoria tributária, business intelligence, erp integrado"
        }
        canonicalUrl={isEnglish ? "/en" : "/"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/',
          'en': '/en'
        }}
        ogImage="/images/og/home-og.jpg"
      />
      
      <StructuredData type="organization" data={createOrganizationSchema()} />
      <StructuredData type="localBusiness" data={createLocalBusinessSchema()} />
      
      {/* Hero */}
      <HeroSection
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        backgroundImage="/images/backgrounds/osp-building.jpg"
        overlayOpacity={0.82}
        primaryCTA={{ text: t('home.hero.primaryCTA'), href: "/contato" }}
        secondaryCTA={{ text: t('home.hero.secondaryCTA'), href: "/solucoes/osp360" }}
        stats={[
          { value: "+600", label: t('home.hero.stats.companies') },
          { value: "14", label: t('home.hero.stats.states') },
          { value: "12", label: t('home.hero.stats.countries') },
        ]}
      />

      {/* O Que Fazemos */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('home.whatWeDo.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('home.whatWeDo.subtitle')}
            </p>
          </div>
          <FeatureGrid
            features={[
              {
                icon: Users,
                title: t('home.whatWeDo.features.consulting.title'),
                description: t('home.whatWeDo.features.consulting.description'),
              },
              {
                icon: Zap,
                title: t('home.whatWeDo.features.integration.title'),
                description: t('home.whatWeDo.features.integration.description'),
              },
              {
                icon: BarChart3,
                title: t('home.whatWeDo.features.bi.title'),
                description: t('home.whatWeDo.features.bi.description'),
              },
              {
                icon: Shield,
                title: t('home.whatWeDo.features.security.title'),
                description: t('home.whatWeDo.features.security.description'),
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection
        stats={[
          { value: "R$ 100M+", label: t('home.stats.savings'), highlight: true },
          { value: "100+", label: t('home.stats.migrations') },
          { value: "98%", label: t('home.stats.retention'), highlight: true },
          { value: t('home.stats.years'), label: t('home.stats.experience') },
        ]}
      />

      {/* Lazy-loaded below-fold sections for better mobile performance */}
      <Suspense fallback={<SectionLoader />}>
        <SolutionsSection />
        <TestimonialsSection />
        <TechPartnersSection />
      </Suspense>

      {/* CTA */}
      <CTASection
        title={t('home.cta.title')}
        description={t('home.cta.description')}
        primaryButton={{ 
          text: t('home.cta.primaryButton'), 
          href: "https://api.whatsapp.com/send?phone=5519993216091&text=Olá!%20Vim%20pelo%20site%20da%20OSP%20e%20gostaria%20de%20falar%20com%20um%20especialista",
          isExternal: true,
          icon: "whatsapp"
        }}
        secondaryButton={{ text: t('home.cta.secondaryButton'), href: "/solucoes/osp360" }}
        variant="accent"
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section-mobile md:text-section mb-4">{t('contact.hero.title')}</h2>
              <p className="text-body-lg text-muted-foreground">
                {t('contact.hero.subtitle')}
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
