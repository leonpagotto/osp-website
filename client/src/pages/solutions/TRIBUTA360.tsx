import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { Calculator, TrendingDown, Shield, FileCheck } from "lucide-react";

export default function TRIBUTA360() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="TRIBUTA360"
        subtitle="Planejamento tributário estratégico e migração segura para Lucro Real com máxima eficiência fiscal"
        primaryCTA={{ text: "Solicitar Análise Tributária", href: "/contato" }}
      />

      <StatsSection
        stats={[
          { value: "R$ 100M+", label: "Em economia tributária gerada", highlight: true },
          { value: "100+", label: "Migrações seguras para Lucro Real" },
          { value: "23%", label: "Redução média de carga tributária", highlight: true },
          { value: "100%", label: "Compliance garantido" },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Especialistas em Lucro Real</h2>
            <p className="text-body-lg text-muted-foreground">
              Migração estruturada do Simples Nacional para Lucro Real, planejamento tributário 
              e aproveitamento de todos os créditos e incentivos fiscais disponíveis.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Calculator,
                title: "Análise de Viabilidade",
                description: "Simulação comparativa entre regimes tributários",
              },
              {
                icon: TrendingDown,
                title: "Redução de Carga",
                description: "Identificação de créditos, incentivos e oportunidades",
              },
              {
                icon: Shield,
                title: "Migração Segura",
                description: "Processo estruturado com zero risco de autuação",
              },
              {
                icon: FileCheck,
                title: "Compliance Total",
                description: "Entrega de obrigações acessórias no prazo",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Reduza sua carga tributária de forma legal"
        description="Agende uma análise tributária completa com nossos especialistas"
        primaryButton={{ text: "Solicitar Análise", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
