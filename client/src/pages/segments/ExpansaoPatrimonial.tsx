import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Building, Home, Users, Shield } from "lucide-react";

export default function ExpansaoPatrimonial() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Expansão Patrimonial e Familiar"
        subtitle="Soluções para grupos familiares, holdings e empresas em processo de estruturação patrimonial e sucessória"
        primaryCTA={{ text: "Agendar Consultoria", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Estruturação patrimonial completa</h2>
            <p className="text-body-lg text-muted-foreground">
              Grupos familiares e empresários em processo de expansão patrimonial precisam de 
              planejamento tributário, sucessório e governança para garantir a perpetuidade do patrimônio.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Building,
                title: "Holdings Patrimoniais",
                description: "Estruturação de holdings para proteção de ativos",
              },
              {
                icon: Home,
                title: "Planejamento Sucessório",
                description: "Sucessão familiar sem conflitos e com eficiência fiscal",
              },
              {
                icon: Users,
                title: "Governança Familiar",
                description: "Acordo de sócios e regras de relacionamento",
              },
              {
                icon: Shield,
                title: "Proteção Patrimonial",
                description: "Blindagem e segregação de riscos",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Proteja e organize seu patrimônio familiar"
        description="Agende uma consultoria especializada em estruturação patrimonial"
        primaryButton={{ text: "Agendar Consultoria", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
