import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { Heart, Stethoscope, ShieldCheck, TrendingUp, FileCheck, Users } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function Saude() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "Healthcare Accounting - Specialized Solutions | OSP" : "Contabilidade para Saúde - Soluções Especializadas | OSP"}
        description={isEnglish 
          ? "Specialized accounting for healthcare sector. Tax planning for clinics, hospitals, medical practices. Expertise in healthcare regulations, compliance, and operational efficiency."
          : "Contabilidade especializada para setor de saúde. Planejamento tributário para clínicas, hospitais, consultórios médicos. Expertise em regulamentações da saúde, compliance e eficiência operacional."
        }
        keywords={isEnglish
          ? "healthcare accounting, medical practice accounting, hospital accounting, clinic tax planning, healthcare compliance"
          : "contabilidade para saúde, contabilidade médica, contabilidade hospitalar, planejamento tributário clínicas, compliance saúde"
        }
        canonicalUrl={isEnglish ? "/en/segments/healthcare" : "/segmentos/saude"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/segmentos/saude',
          'en': '/en/segments/healthcare'
        }}
      />
      
      <HeroSection
        title={isEnglish ? "Accounting Intelligence for Healthcare Professionals" : "Inteligência Contábil para Profissionais de Saúde"}
        subtitle={isEnglish 
          ? "Specialized solutions for clinics, hospitals, laboratories, and medical practices. We combine healthcare sector expertise with strategic tax planning so you can focus on what matters: caring for patients."
          : "Soluções especializadas para clínicas, hospitais, laboratórios e consultórios médicos. Unimos expertise no setor de saúde com planejamento tributário estratégico para você focar no que importa: cuidar dos pacientes."
        }
        primaryCTA={{ text: isEnglish ? "Talk to a Specialist" : "Falar com Especialista", href: "/contato" }}
      />

      <StatsSection
        stats={[
          { value: "200+", label: isEnglish ? "Healthcare Clients" : "Clientes do Setor Saúde" },
          { value: "40%", label: isEnglish ? "Average Tax Savings" : "Redução Tributária Média", highlight: true },
          { value: "20+", label: isEnglish ? "Years in Healthcare" : "Anos no Setor Saúde" },
          { value: "100%", label: isEnglish ? "Regulatory Compliance" : "Compliance Regulatório", highlight: true },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {isEnglish ? "Complete Solutions for the Healthcare Sector" : "Soluções Completas para o Setor de Saúde"}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {isEnglish 
                ? "We understand the complexities of the healthcare sector and provide tailored accounting and tax solutions for sustainable growth."
                : "Entendemos as complexidades do setor de saúde e oferecemos soluções contábeis e tributárias sob medida para crescimento sustentável."
              }
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Stethoscope,
                title: isEnglish ? "Medical Practices & Clinics" : "Consultórios & Clínicas",
                description: isEnglish 
                  ? "Tax optimization for individual practitioners and multi-specialty clinics."
                  : "Otimização tributária para profissionais autônomos e clínicas multiespecialidades.",
              },
              {
                icon: Heart,
                title: isEnglish ? "Hospitals & Healthcare Networks" : "Hospitais & Redes de Saúde",
                description: isEnglish
                  ? "Complex tax structuring and financial management for large healthcare operations."
                  : "Estruturação tributária complexa e gestão financeira para grandes operações de saúde.",
              },
              {
                icon: ShieldCheck,
                title: isEnglish ? "Regulatory Compliance" : "Compliance Regulatório",
                description: isEnglish
                  ? "Expertise in healthcare regulations, ANS, ANVISA, and sector-specific compliance requirements."
                  : "Expertise em regulamentações da saúde, ANS, ANVISA e requisitos de compliance específicos do setor.",
              },
              {
                icon: FileCheck,
                title: isEnglish ? "Simplified Tax Regime" : "Regime Tributário Simplificado",
                description: isEnglish
                  ? "Strategic use of Simples Nacional and Anexo III for maximum tax efficiency in healthcare."
                  : "Aproveitamento estratégico do Simples Nacional e Anexo III para máxima eficiência tributária na saúde.",
              },
              {
                icon: TrendingUp,
                title: isEnglish ? "Expansion & Growth" : "Expansão & Crescimento",
                description: isEnglish
                  ? "Financial planning and tax structuring for opening new units and scaling operations."
                  : "Planejamento financeiro e estruturação tributária para abertura de novas unidades e escalabilidade.",
              },
              {
                icon: Users,
                title: isEnglish ? "Medical Cooperatives" : "Cooperativas Médicas",
                description: isEnglish
                  ? "Specialized management for medical cooperatives with optimal tax and operational structures."
                  : "Gestão especializada para cooperativas médicas com estruturas tributárias e operacionais otimizadas.",
              },
            ]}
            columns={3}
          />
        </div>
      </section>

      <CTASection
        title={isEnglish ? "Focus on Healing, We Handle the Numbers" : "Foque em Cuidar, Nós Cuidamos dos Números"}
        description={isEnglish 
          ? "Let us manage your accounting and tax obligations while you dedicate your time to patient care and growing your practice."
          : "Deixe-nos gerenciar suas obrigações contábeis e tributárias enquanto você dedica seu tempo ao cuidado dos pacientes e crescimento do seu negócio."
        }
        primaryButton={{ text: isEnglish ? "Schedule a Consultation" : "Agendar Consulta", href: "/contato" }}
        secondaryButton={{ text: isEnglish ? "Learn More" : "Saiba Mais", href: "/solucoes" }}
        variant="accent"
      />
    </div>
  );
}
