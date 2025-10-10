import HeroSection from "@/components/HeroSection";
import SolutionCard from "@/components/SolutionCard";
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
} from "lucide-react";

export default function Solucoes() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Soluções Estratégicas"
        subtitle="Metodologias especializadas para cada desafio da sua empresa no regime de Lucro Real"
        showGradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard
              icon={Target}
              title="OSP360"
              description="Diagnóstico estratégico completo em 45 dias para identificar riscos, oportunidades e definir plano de ação"
              href="/solucoes/osp360"
            />
            <SolutionCard
              icon={Building2}
              title="FUNDAR360"
              description="Estruturação técnica, societária e tributária para novos negócios ou reestruturação empresarial"
              href="/solucoes/fundar360"
            />
            <SolutionCard
              icon={Calculator}
              title="TRIBUTA360"
              description="Planejamento tributário estratégico e migração segura para Lucro Real com máxima eficiência fiscal"
              href="/solucoes/tributa360"
            />
            <SolutionCard
              icon={TrendingUp}
              title="GESTÃO360"
              description="Relatórios executivos, KPIs e BI personalizado para suporte à decisão estratégica"
              href="/solucoes/gestao360"
            />
            <SolutionCard
              icon={DollarSign}
              title="BPO Financeiro"
              description="Terceirização completa da gestão financeira: tesouraria, fluxo de caixa e conciliação bancária"
              href="/solucoes/bpo-financeiro"
            />
            <SolutionCard
              icon={PieChart}
              title="PRECIFICA360"
              description="Diagnóstico de margem, análise de custos e precificação estratégica para máxima rentabilidade"
              href="/solucoes/precifica360"
            />
            <SolutionCard
              icon={HomeIcon}
              title="HOLDING360"
              description="Estruturação patrimonial, proteção de ativos e planejamento sucessório para grupos familiares"
              href="/solucoes/holding360"
            />
            <SolutionCard
              icon={FileText}
              title="Contabilidade OSP"
              description="Serviços contábeis especializados: Standard, Consultiva e Lucro Real com atendimento diferenciado"
              href="/solucoes/contabilidade"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Qual solução se encaixa no seu desafio?"
        description="Converse com nossos especialistas e encontre a metodologia ideal para sua empresa"
        primaryButton={{ text: "Falar com Especialista", href: "/contato" }}
        secondaryButton={{ text: "Solicitar Diagnóstico", href: "/solucoes/osp360" }}
      />
    </div>
  );
}
