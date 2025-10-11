import HeroSection from "@/components/HeroSection";
import SolutionCard from "@/components/SolutionCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
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
} from "lucide-react";

//todo: remove mock data - testimonials
const testimonials = [
  {
    quote: "A OSP nos ajudou a gerar caixa já nos primeiros 45 dias de trabalho. A estruturação tributária foi fundamental para nossa expansão.",
    author: "Diretor Financeiro",
    company: "Tubesteel",
    role: "Indústria Metalúrgica",
  },
  {
    quote: "Com a OSP conseguimos aumentar margem em +10% e expandir para todo Brasil com segurança tributária total.",
    author: "CEO",
    company: "Borabella",
    role: "Rede de Franquias",
  },
  {
    quote: "35 anos de parceria. A OSP é essencial para nossa estratégia de negócios e compliance tributário.",
    author: "Sócio-Diretor",
    company: "Galena",
    role: "Grupo Empresarial",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="Inteligência contábil para decisões que transformam negócios"
        subtitle="O braço técnico e consultivo de empresas no Lucro Real"
        backgroundImage="/images/backgrounds/osp-building.jpg"
        overlayOpacity={0.82}
        primaryCTA={{ text: "Fale com Especialista", href: "/contato" }}
        secondaryCTA={{ text: "Diagnóstico Gratuito", href: "/solucoes/osp360" }}
        stats={[
          { value: "+600", label: "Empresas Atendidas" },
          { value: "14", label: "Estados" },
          { value: "12", label: "Países" },
        ]}
      />

      {/* O Que Fazemos */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">O que fazemos</h2>
            <p className="text-body-lg text-muted-foreground">
              Somos o braço técnico e consultivo de empresas no Lucro Real, oferecendo muito mais que contabilidade tradicional
            </p>
          </div>
          <FeatureGrid
            features={[
              {
                icon: Users,
                title: "Atendimento Consultivo",
                description: "Relacionamento direto com sócios e gestores especializados em seu segmento",
              },
              {
                icon: Zap,
                title: "Integração Total",
                description: "Conexão completa entre ERP, sistemas contábeis e financeiros",
              },
              {
                icon: BarChart3,
                title: "BI Personalizado",
                description: "Indicadores e dashboards customizados para sua tomada de decisão",
              },
              {
                icon: Shield,
                title: "Segurança Tributária",
                description: "Especialização em Lucro Real com SLA e entrega de marcos claros",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      {/* Soluções Estratégicas */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Soluções Estratégicas</h2>
            <p className="text-body-lg text-muted-foreground">
              Metodologias especializadas para cada desafio da sua empresa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SolutionCard
              icon={Target}
              title="OSP360"
              description="Diagnóstico completo em 45 dias"
              href="/solucoes/osp360"
            />
            <SolutionCard
              icon={Building2}
              title="FUNDAR360"
              description="Estruturação de novos negócios"
              href="/solucoes/fundar360"
            />
            <SolutionCard
              icon={Calculator}
              title="TRIBUTA360"
              description="Planejamento tributário e Lucro Real"
              href="/solucoes/tributa360"
            />
            <SolutionCard
              icon={TrendingUp}
              title="GESTÃO360"
              description="BI, KPIs e suporte executivo"
              href="/solucoes/gestao360"
            />
            <SolutionCard
              icon={DollarSign}
              title="BPO Financeiro"
              description="Terceirização financeira completa"
              href="/solucoes/bpo-financeiro"
            />
            <SolutionCard
              icon={PieChart}
              title="PRECIFICA360"
              description="Análise de margem e precificação"
              href="/solucoes/precifica360"
            />
            <SolutionCard
              icon={HomeIcon}
              title="HOLDING360"
              description="Estrutura patrimonial e sucessória"
              href="/solucoes/holding360"
            />
            <SolutionCard
              icon={FileText}
              title="Contabilidade"
              description="Standard, Consultiva e Lucro Real"
              href="/solucoes/contabilidade"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection
        stats={[
          { value: "R$ 100M+", label: "Em economia tributária gerada", highlight: true },
          { value: "100+", label: "Migrações seguras para Lucro Real" },
          { value: "98%", label: "Taxa de retenção de clientes", highlight: true },
          { value: "47 anos", label: "De experiência e tradição" },
        ]}
      />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">O que dizem nossos clientes</h2>
            <p className="text-body-lg text-muted-foreground">
              Casos reais de empresas que transformaram sua gestão com a OSP
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-section-mobile md:text-section mb-4">Tecnologia e Integração</h2>
            <p className="text-body-lg text-muted-foreground">
              Integração nativa com os principais ERPs e ferramentas de BI do mercado
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["TOTVS", "SAP", "Sankhya", "Omie", "Power BI", "Qlik", "Tableau", "Conta Azul"].map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center p-6 bg-background border border-border rounded-lg hover-elevate"
              >
                <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para transformar sua gestão contábil?"
        description="Agende uma conversa com nossos especialistas e descubra como podemos ajudar sua empresa a crescer de forma sustentável"
        primaryButton={{ text: "Falar com Especialista", href: "/contato" }}
        secondaryButton={{ text: "Solicitar Diagnóstico OSP360", href: "/solucoes/osp360" }}
        variant="accent"
      />
    </div>
  );
}
