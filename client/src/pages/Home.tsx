import HeroSection from "@/components/HeroSection";
import SolutionCard from "@/components/SolutionCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createOrganizationSchema, createLocalBusinessSchema } from "@/components/SEO/StructuredData";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import {
  Target,
  Building2,
  Calculator,
  TrendingUp,
  DollarSign,
  PieChart,
  Home as HomeIcon,
  FileText,
  Users,
  Zap,
  Shield,
  BarChart3,
  Compass,
  Rocket,
  Scale,
  LayoutDashboard,
} from "lucide-react";

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
      <motion.section 
        className="py-20"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>

      {/* Soluções Estratégicas */}
      <motion.section 
        className="py-20 bg-card"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('home.strategicSolutions.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('home.strategicSolutions.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SolutionCard
              icon={Compass}
              title={t('solutions.osp360.name')}
              description={t('solutions.osp360.description')}
              href="/solucoes/osp360"
            />
            <SolutionCard
              icon={Rocket}
              title={t('solutions.fundar360.name')}
              description={t('solutions.fundar360.description')}
              href="/solucoes/fundar360"
            />
            <SolutionCard
              icon={Scale}
              title={t('solutions.tributa360.name')}
              description={t('solutions.tributa360.description')}
              href="/solucoes/tributa360"
            />
            <SolutionCard
              icon={LayoutDashboard}
              title={t('solutions.gestao360.name')}
              description={t('solutions.gestao360.description')}
              href="/solucoes/gestao360"
            />
            <SolutionCard
              icon={DollarSign}
              title={t('solutions.bpoFinanceiro.name')}
              description={t('solutions.bpoFinanceiro.description')}
              href="/solucoes/bpo-financeiro"
            />
            <SolutionCard
              icon={PieChart}
              title={t('solutions.precifica360.name')}
              description={t('solutions.precifica360.description')}
              href="/solucoes/precifica360"
            />
            <SolutionCard
              icon={HomeIcon}
              title={t('solutions.holding360.name')}
              description={t('solutions.holding360.description')}
              href="/solucoes/holding360"
            />
            <SolutionCard
              icon={FileText}
              title={t('solutions.contabilidade.name')}
              description={t('solutions.contabilidade.description')}
              href="/solucoes/contabilidade"
            />
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <StatsSection
        stats={[
          { value: "R$ 100M+", label: t('home.stats.savings'), highlight: true },
          { value: "100+", label: t('home.stats.migrations') },
          { value: "98%", label: t('home.stats.retention'), highlight: true },
          { value: "47 anos", label: t('home.stats.experience') },
        ]}
      />

      {/* Testimonials */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard
                  quote={t(`home.testimonials.items.${index}.quote`)}
                  author={t(`home.testimonials.items.${index}.author`)}
                  company={t(`home.testimonials.items.${index}.company`)}
                  role={t(`home.testimonials.items.${index}.role`)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Partners */}
      <motion.section 
        className="py-20 bg-card"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-section-mobile md:text-section mb-4">{t('home.technology.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('home.technology.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["TOTVS", "SAP", "Sankhya", "Omie", "Power BI", "Qlik", "Tableau", "Conta Azul"].map((partner, index) => (
              <motion.div
                key={partner}
                className="flex items-center justify-center p-6 bg-background border border-border rounded-lg hover-elevate"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <CTASection
        title={t('home.cta.title')}
        description={t('home.cta.description')}
        primaryButton={{ text: t('home.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('home.cta.secondaryButton'), href: "/solucoes/osp360" }}
        variant="accent"
      />
    </div>
  );
}
