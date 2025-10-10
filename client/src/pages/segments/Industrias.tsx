import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { Factory, Calculator, TrendingUp, Shield } from "lucide-react";

export default function Industrias() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Indústrias"
        subtitle="Soluções especializadas para o setor industrial com foco em eficiência tributária e gestão de custos"
        primaryCTA={{ text: "Falar com Especialista", href: "/contato" }}
      />

      <StatsSection
        stats={[
          { value: "50+", label: "Indústrias atendidas" },
          { value: "23%", label: "Redução média de carga tributária", highlight: true },
          { value: "100%", label: "Aproveitamento de créditos fiscais" },
          { value: "R$ 50M+", label: "Em economia gerada", highlight: true },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Especialização em indústria</h2>
            <p className="text-body-lg text-muted-foreground">
              Conhecemos a fundo as particularidades tributárias da indústria: ICMS, IPI, PIS/Cofins, 
              créditos fiscais, drawback, regimes especiais e muito mais.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Factory,
                title: "Custos Industriais",
                description: "Apuração correta de custos de produção e margem",
              },
              {
                icon: Calculator,
                title: "Créditos Fiscais",
                description: "Aproveitamento máximo de PIS/Cofins e ICMS",
              },
              {
                icon: TrendingUp,
                title: "Planejamento Tributário",
                description: "Estruturação para máxima eficiência fiscal",
              },
              {
                icon: Shield,
                title: "Regimes Especiais",
                description: "Drawback, RECAP e outros benefícios",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Maximize a eficiência da sua indústria"
        description="Agende uma análise tributária especializada para o setor industrial"
        primaryButton={{ text: "Solicitar Análise", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
