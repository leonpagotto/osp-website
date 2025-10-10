import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { Globe, FileCheck, TrendingUp, Shield } from "lucide-react";

export default function Multinacionais() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Multinacionais e Grupos Internacionais"
        subtitle="Soluções para empresas com operações cross-border e complexidade fiscal internacional"
        primaryCTA={{ text: "Falar com Especialista", href: "/contato" }}
      />

      <StatsSection
        stats={[
          { value: "12", label: "Países atendidos" },
          { value: "50+", label: "Empresas internacionais", highlight: true },
          { value: "100%", label: "Compliance internacional" },
          { value: "Transfer Pricing", label: "Expertise especializada", highlight: true },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Especialização internacional</h2>
            <p className="text-body-lg text-muted-foreground">
              Empresas com operações internacionais enfrentam desafios tributários complexos: 
              transfer pricing, tratados internacionais, planejamento fiscal global e compliance multi-jurisdicional.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Globe,
                title: "Operações Cross-Border",
                description: "Estruturação de operações internacionais",
              },
              {
                icon: FileCheck,
                title: "Transfer Pricing",
                description: "Estudos e documentação de preços de transferência",
              },
              {
                icon: TrendingUp,
                title: "Planejamento Global",
                description: "Eficiência fiscal em múltiplas jurisdições",
              },
              {
                icon: Shield,
                title: "Compliance Internacional",
                description: "Adequação a normas locais e internacionais",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Expanda globalmente com segurança tributária"
        description="Converse com nossos especialistas em tributação internacional"
        primaryButton={{ text: "Agendar Consultoria", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
