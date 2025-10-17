import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import RelatedSolutions from "@/components/RelatedSolutions";
import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData, createServiceSchema } from "@/components/SEO/StructuredData";
import { DollarSign, CreditCard, FileCheck, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function BPOFinanceiro() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  
  const features = t('solutionPages.bpoFinanceiro.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  
  const featureIcons = [DollarSign, CreditCard, FileCheck, TrendingUp];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "Financial BPO - Complete Management | OSP" : "BPO Financeiro - Gestão Completa | OSP"}
        description={isEnglish 
          ? "Complete financial BPO: accounts payable/receivable, cash flow, banking conciliation, and compliance. Free up your team to focus on strategic growth."
          : "BPO Financeiro completo: contas a pagar e receber, fluxo de caixa, conciliação bancária e compliance. Libere sua equipe para focar no crescimento estratégico."
        }
        keywords={isEnglish
          ? "financial BPO, accounts payable, accounts receivable, cash flow management, banking conciliation, financial compliance, financial outsourcing"
          : "bpo financeiro, contas a pagar, contas a receber, gestão de fluxo de caixa, conciliação bancária, compliance financeiro, terceirização financeira"
        }
        canonicalUrl={isEnglish ? "/en/solutions/financial-bpo" : "/solucoes/bpo-financeiro"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/solucoes/bpo-financeiro',
          'en': '/en/solutions/financial-bpo'
        }}
        ogImage="/images/solutions/bpo-financeiro-og.jpg"
      />
      
      <StructuredData
        type="service"
        data={createServiceSchema({
          name: isEnglish ? "Financial BPO" : "BPO Financeiro",
          description: isEnglish
            ? "Complete financial outsourcing solution for companies in Real Profit regime. Includes accounts management, cash flow, and financial compliance."
            : "Solução completa de terceirização financeira para empresas do Lucro Real. Inclui gestão de contas, fluxo de caixa e compliance financeiro.",
          areaServed: "Brazil"
        })}
      />
      
      <HeroSection
        title={t('solutionPages.bpoFinanceiro.hero.title')}
        subtitle={t('solutionPages.bpoFinanceiro.hero.subtitle')}
        primaryCTA={{ text: t('solutionPages.bpoFinanceiro.hero.primaryCTA'), href: "/contato" }}
        secondaryCTA={{ text: t('solutionPages.bpoFinanceiro.hero.secondaryCTA'), href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {t('solutionPages.bpoFinanceiro.what.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('solutionPages.bpoFinanceiro.what.description')}
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

      <CTASection
        title={t('solutionPages.bpoFinanceiro.cta.title')}
        description={t('solutionPages.bpoFinanceiro.cta.description')}
        primaryButton={{ text: t('solutionPages.bpoFinanceiro.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('solutionPages.bpoFinanceiro.cta.secondaryButton'), href: "/contato" }}
        variant="accent"
      />

      <RelatedSolutions 
        currentSlug="bpo-financeiro"
        relatedSlugs={['gestao360', 'osp360', 'contabilidade']}
      />
    </div>
  );
}
