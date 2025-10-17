import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { ShoppingBag, Store, TrendingUp, Users, Package, Truck } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function ComercioServicos() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "Commerce & Services Accounting - Specialized Solutions | OSP" : "Contabilidade para Comércio e Serviços - Soluções Especializadas | OSP"}
        description={isEnglish 
          ? "Specialized accounting for retail, wholesale, and service businesses. Tax planning for commerce, restaurants, professional services. Expertise in operational efficiency and sustainable growth."
          : "Contabilidade especializada para varejo, atacado e empresas de serviços. Planejamento tributário para comércio, restaurantes, serviços profissionais. Expertise em eficiência operacional e crescimento sustentável."
        }
        keywords={isEnglish
          ? "retail accounting, wholesale accounting, service business accounting, commerce tax planning, restaurant accounting"
          : "contabilidade varejo, contabilidade atacado, contabilidade serviços, planejamento tributário comércio, contabilidade restaurantes"
        }
        canonicalUrl={isEnglish ? "/en/segments/commerce-services" : "/segmentos/comercio-servicos"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/segmentos/comercio-servicos',
          'en': '/en/segments/commerce-services'
        }}
      />
      
      <HeroSection
        title={isEnglish ? "Accounting Intelligence for Commerce & Services" : "Inteligência Contábil para Comércio e Serviços"}
        subtitle={isEnglish 
          ? "Specialized solutions for retail, wholesale, restaurants, and service businesses. We combine sector expertise with strategic tax planning to boost your profitability and operational efficiency."
          : "Soluções especializadas para varejo, atacado, restaurantes e empresas de serviços. Unimos expertise setorial com planejamento tributário estratégico para impulsionar sua lucratividade e eficiência operacional."
        }
        primaryCTA={{ text: isEnglish ? "Talk to a Specialist" : "Falar com Especialista", href: "/contato" }}
      />

      <StatsSection
        stats={[
          { value: "400+", label: isEnglish ? "Commerce & Service Clients" : "Clientes Comércio & Serviços" },
          { value: "30%", label: isEnglish ? "Average Tax Savings" : "Redução Tributária Média", highlight: true },
          { value: "25+", label: isEnglish ? "Years of Experience" : "Anos de Experiência" },
          { value: "95%", label: isEnglish ? "Client Retention" : "Retenção de Clientes", highlight: true },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {isEnglish ? "Solutions for Every Type of Business" : "Soluções para Todo Tipo de Negócio"}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {isEnglish 
                ? "Whether you're a small local shop or a multi-location chain, we provide the accounting and tax expertise you need to thrive."
                : "Seja uma pequena loja local ou uma rede com múltiplas unidades, oferecemos a expertise contábil e tributária que você precisa para prosperar."
              }
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Store,
                title: isEnglish ? "Retail & E-commerce" : "Varejo & E-commerce",
                description: isEnglish 
                  ? "Tax optimization for physical stores, online shops, and omnichannel operations."
                  : "Otimização tributária para lojas físicas, e-commerce e operações omnichannel.",
              },
              {
                icon: Package,
                title: isEnglish ? "Wholesale & Distribution" : "Atacado & Distribuição",
                description: isEnglish
                  ? "Complex tax structuring for wholesale operations and distribution networks."
                  : "Estruturação tributária complexa para operações de atacado e redes de distribuição.",
              },
              {
                icon: ShoppingBag,
                title: isEnglish ? "Restaurants & Food Services" : "Restaurantes & Alimentação",
                description: isEnglish
                  ? "Specialized solutions for restaurants, cafes, food trucks, and catering businesses."
                  : "Soluções especializadas para restaurantes, cafés, food trucks e empresas de catering.",
              },
              {
                icon: Users,
                title: isEnglish ? "Professional Services" : "Serviços Profissionais",
                description: isEnglish
                  ? "Tax planning for consulting, marketing, design, and other professional service firms."
                  : "Planejamento tributário para consultoria, marketing, design e outras empresas de serviços profissionais.",
              },
              {
                icon: TrendingUp,
                title: isEnglish ? "Franchises & Networks" : "Franquias & Redes",
                description: isEnglish
                  ? "Unified accounting and tax management for franchise operations and multi-location businesses."
                  : "Gestão contábil e tributária unificada para operações de franquia e negócios multi-locação.",
              },
              {
                icon: Truck,
                title: isEnglish ? "Logistics & Transportation" : "Logística & Transporte",
                description: isEnglish
                  ? "Optimized tax structures for logistics providers, couriers, and transportation services."
                  : "Estruturas tributárias otimizadas para empresas de logística, entregas e serviços de transporte.",
              },
            ]}
            columns={3}
          />
        </div>
      </section>

      <CTASection
        title={isEnglish ? "Focus on Growing Your Business" : "Foque em Crescer Seu Negócio"}
        description={isEnglish 
          ? "Let us handle your accounting and taxes while you focus on serving customers and expanding your operations."
          : "Deixe-nos cuidar da contabilidade e impostos enquanto você foca em atender clientes e expandir suas operações."
        }
        primaryButton={{ text: isEnglish ? "Schedule a Consultation" : "Agendar Consulta", href: "/contato" }}
        secondaryButton={{ text: isEnglish ? "Learn More" : "Saiba Mais", href: "/solucoes" }}
        variant="accent"
      />
    </div>
  );
}
