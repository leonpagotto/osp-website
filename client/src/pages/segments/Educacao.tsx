import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { GraduationCap, BookOpen, Users, TrendingUp, Shield, Building } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function Educacao() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "Education Accounting - Specialized Solutions | OSP" : "Contabilidade para Educação - Soluções Especializadas | OSP"}
        description={isEnglish 
          ? "Specialized accounting for education sector. Tax planning for schools, universities, online courses. Expertise in educational regulations, compliance, and sustainable growth."
          : "Contabilidade especializada para setor de educação. Planejamento tributário para escolas, universidades, cursos online. Expertise em regulamentações educacionais, compliance e crescimento sustentável."
        }
        keywords={isEnglish
          ? "education accounting, school accounting, university accounting, online education tax planning, educational compliance"
          : "contabilidade para educação, contabilidade escolar, contabilidade universitária, planejamento tributário educação, compliance educacional"
        }
        canonicalUrl={isEnglish ? "/en/segments/education" : "/segmentos/educacao"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/segmentos/educacao',
          'en': '/en/segments/education'
        }}
      />
      
      <HeroSection
        title={isEnglish ? "Accounting Intelligence for Educational Institutions" : "Inteligência Contábil para Instituições de Ensino"}
        subtitle={isEnglish 
          ? "Specialized solutions for schools, universities, online education, and training centers. We combine education sector expertise with strategic tax planning to support your mission of transforming lives through education."
          : "Soluções especializadas para escolas, universidades, educação online e centros de treinamento. Unimos expertise no setor educacional com planejamento tributário estratégico para apoiar sua missão de transformar vidas através da educação."
        }
        primaryCTA={{ text: isEnglish ? "Talk to a Specialist" : "Falar com Especialista", href: "/contato" }}
      />

      <StatsSection
        stats={[
          { value: "150+", label: isEnglish ? "Education Clients" : "Clientes do Setor Educação" },
          { value: "35%", label: isEnglish ? "Average Tax Savings" : "Redução Tributária Média", highlight: true },
          { value: "15+", label: isEnglish ? "Years in Education" : "Anos no Setor Educação" },
          { value: "100%", label: isEnglish ? "MEC Compliance" : "Compliance MEC", highlight: true },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">
              {isEnglish ? "Complete Solutions for Education" : "Soluções Completas para Educação"}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {isEnglish 
                ? "We understand the unique challenges of educational institutions and provide tailored accounting and tax solutions for sustainable growth and regulatory compliance."
                : "Entendemos os desafios únicos das instituições de ensino e oferecemos soluções contábeis e tributárias sob medida para crescimento sustentável e compliance regulatório."
              }
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: GraduationCap,
                title: isEnglish ? "Schools & K-12 Education" : "Escolas & Educação Básica",
                description: isEnglish 
                  ? "Tax optimization and financial management for traditional and bilingual schools."
                  : "Otimização tributária e gestão financeira para escolas tradicionais e bilíngues.",
              },
              {
                icon: Building,
                title: isEnglish ? "Universities & Higher Education" : "Universidades & Ensino Superior",
                description: isEnglish
                  ? "Complex tax structuring for large educational institutions with multiple campuses."
                  : "Estruturação tributária complexa para grandes instituições de ensino com múltiplos campus.",
              },
              {
                icon: BookOpen,
                title: isEnglish ? "Online Education & EdTech" : "Educação Online & EdTech",
                description: isEnglish
                  ? "Specialized tax planning for digital education platforms and online course providers."
                  : "Planejamento tributário especializado para plataformas de educação digital e provedores de cursos online.",
              },
              {
                icon: Shield,
                title: isEnglish ? "MEC & Regulatory Compliance" : "Compliance MEC & Regulatório",
                description: isEnglish
                  ? "Expertise in MEC regulations, FIES, PROUNI, and sector-specific compliance requirements."
                  : "Expertise em regulamentações do MEC, FIES, PROUNI e requisitos de compliance específicos do setor.",
              },
              {
                icon: TrendingUp,
                title: isEnglish ? "Expansion & New Units" : "Expansão & Novas Unidades",
                description: isEnglish
                  ? "Financial planning and tax structuring for opening new campuses and franchising operations."
                  : "Planejamento financeiro e estruturação tributária para abertura de novos campus e operações de franquia.",
              },
              {
                icon: Users,
                title: isEnglish ? "Training Centers & Courses" : "Centros de Treinamento & Cursos",
                description: isEnglish
                  ? "Optimized tax structures for professional training, language schools, and specialized courses."
                  : "Estruturas tributárias otimizadas para treinamentos profissionais, escolas de idiomas e cursos especializados.",
              },
            ]}
            columns={3}
          />
        </div>
      </section>

      <CTASection
        title={isEnglish ? "Focus on Education, We Handle the Compliance" : "Foque na Educação, Nós Cuidamos do Compliance"}
        description={isEnglish 
          ? "Let us manage your accounting, tax, and regulatory obligations while you dedicate your energy to providing quality education."
          : "Deixe-nos gerenciar suas obrigações contábeis, tributárias e regulatórias enquanto você dedica sua energia a proporcionar educação de qualidade."
        }
        primaryButton={{ text: isEnglish ? "Schedule a Consultation" : "Agendar Consulta", href: "/contato" }}
        secondaryButton={{ text: isEnglish ? "Learn More" : "Saiba Mais", href: "/solucoes" }}
        variant="accent"
      />
    </div>
  );
}
