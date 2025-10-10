import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { PieChart, TrendingUp, Calculator, Target } from "lucide-react";

export default function PRECIFICA360() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="PRECIFICA360"
        subtitle="Diagnóstico de margem, análise de custos e precificação estratégica para máxima rentabilidade"
        primaryCTA={{ text: "Solicitar Diagnóstico", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Maximize suas margens</h2>
            <p className="text-body-lg text-muted-foreground">
              Análise profunda de custos, despesas e formação de preço. Identifique produtos 
              e serviços com margem negativa e redefina sua estratégia de precificação.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Calculator,
                title: "Análise de Custos",
                description: "Mapeamento completo de todos os custos diretos e indiretos",
              },
              {
                icon: PieChart,
                title: "Margem por Produto",
                description: "Rentabilidade individual de cada item do portfólio",
              },
              {
                icon: Target,
                title: "Precificação Estratégica",
                description: "Definição de preços baseada em margem-alvo",
              },
              {
                icon: TrendingUp,
                title: "Aumento de Rentabilidade",
                description: "Plano de ação para melhorar resultados",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Descubra onde sua empresa está perdendo dinheiro"
        description="Solicite um diagnóstico de margem e precificação"
        primaryButton={{ text: "Solicitar Análise", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
