import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { Cpu, Code, Rocket, Shield, TrendingUp, Users } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function Tecnologia() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "Technology Accounting - Specialized Solutions | OSP" : "Contabilidade para Tecnologia - Soluções Especializadas | OSP"}
        description={isEnglish 
          ? "Specialized accounting for technology companies. Tax planning for SaaS, startups, software development. Expertise in R&D incentives, IP management, and international expansion."
          : "Contabilidade especializada para empresas de tecnologia. Planejamento tributário para SaaS, startups, desenvolvimento de software. Expertise em incentivos de P&D, gestão de PI e expansão internacional."
        }
        keywords={isEnglish
          ? "technology accounting, SaaS accounting, startup accounting, software development, R&D tax incentives, IP management"
          : "contabilidade para tecnologia, contabilidade para SaaS, contabilidade para startups, desenvolvimento de software, incentivos fiscais P&D, gestão de propriedade intelectual"
        }
        canonicalUrl={isEnglish ? "/en/segments/technology" : "/segmentos/tecnologia"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/segmentos/tecnologia',
          'en': '/en/segments/technology'
        }}
      />
      
      <HeroSection
        title={isEnglish ? "Accounting Intelligence for Technology Companies" : "Inteligência Contábil para Empresas de Tecnologia"}
        subtitle={isEnglish 
          ? "Specialized solutions for SaaS, software development, and technology startups. From incorporation to international expansion, we accelerate your growth with strategic tax planning and financial management."
          : "Soluções especializadas para SaaS, desenvolvimento de software e startups de tecnologia. Da constituição à expansão internacional, aceleramos seu crescimento com planejamento tributário estratégico e gestão financeira inteligente."
        }
        primaryCTA={{ text: isEnglish ? "Talk to a Specialist" : "Falar com Especialista", href: "/contato" }}
      />

      <StatsSection
        stats={[
          { value: "300+", label: isEnglish ? "Technology Clients" : "Clientes de Tecnologia" },
          { value: "85%", label: isEnglish ? "Tax Savings on Average" : "Redução Tributária Média", highlight: true },
          { value: "15+", label: isEnglish ? "Years of Tech Expertise" : "Anos de Expertise em Tech" },
          { value: "98%", label: isEnglish ? "Client Satisfaction" : "Satisfação dos Clientes", highlight: true },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {isEnglish ? "Solutions for Every Stage of Your Tech Journey" : "Soluções para Cada Fase da Sua Jornada Tech"}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {isEnglish 
                ? "From MVP to IPO, we provide the accounting and tax intelligence your technology company needs to scale efficiently."
                : "Do MVP ao IPO, oferecemos a inteligência contábil e tributária que sua empresa de tecnologia precisa para escalar com eficiência."
              }
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Rocket,
                title: isEnglish ? "Startup & Scale-up" : "Startup & Scale-up",
                description: isEnglish 
                  ? "Corporate structuring, tax optimization, and financial planning for rapid growth."
                  : "Estruturação societária, otimização tributária e planejamento financeiro para crescimento acelerado.",
              },
              {
                icon: Code,
                title: isEnglish ? "SaaS & Software Development" : "SaaS & Desenvolvimento de Software",
                description: isEnglish
                  ? "Specialized tax planning for recurring revenue models and subscription-based businesses."
                  : "Planejamento tributário especializado para modelos de receita recorrente e negócios por assinatura.",
              },
              {
                icon: Shield,
                title: isEnglish ? "R&D Tax Incentives" : "Incentivos Fiscais de P&D",
                description: isEnglish
                  ? "Strategic use of Lei do Bem and other innovation incentives to reduce your tax burden."
                  : "Aproveitamento estratégico da Lei do Bem e outros incentivos à inovação para reduzir sua carga tributária.",
              },
              {
                icon: TrendingUp,
                title: isEnglish ? "International Expansion" : "Expansão Internacional",
                description: isEnglish
                  ? "Tax structuring for global operations, transfer pricing, and cross-border transactions."
                  : "Estruturação tributária para operações globais, preços de transferência e transações internacionais.",
              },
              {
                icon: Cpu,
                title: isEnglish ? "IP & Intangible Assets" : "PI & Ativos Intangíveis",
                description: isEnglish
                  ? "Strategic management of intellectual property and valuation of intangible assets."
                  : "Gestão estratégica de propriedade intelectual e valoração de ativos intangíveis.",
              },
              {
                icon: Users,
                title: isEnglish ? "Stock Options & Equity" : "Stock Options & Equity",
                description: isEnglish
                  ? "Tax-efficient structuring of employee equity plans and stock option programs."
                  : "Estruturação tributariamente eficiente de planos de equity e programas de stock options.",
              },
            ]}
            columns={3}
          />
        </div>
      </section>

      <CTASection
        title={isEnglish ? "Ready to Accelerate Your Growth?" : "Pronto para Acelerar seu Crescimento?"}
        description={isEnglish 
          ? "Let's talk about how we can optimize your tax structure and free up resources for innovation and expansion."
          : "Vamos conversar sobre como podemos otimizar sua estrutura tributária e liberar recursos para inovação e expansão."
        }
        primaryButton={{ text: isEnglish ? "Schedule a Consultation" : "Agendar Consulta", href: "/contato" }}
        secondaryButton={{ text: isEnglish ? "Learn More" : "Saiba Mais", href: "/solucoes" }}
        variant="accent"
      />
    </div>
  );
}
