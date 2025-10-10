import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Building2, Shield, FileCheck, Users } from "lucide-react";

export default function FUNDAR360() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="FUNDAR360"
        subtitle="Estruturação técnica, societária e tributária para novos negócios ou reestruturação empresarial"
        primaryCTA={{ text: "Solicitar Consultoria", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Estruture seu negócio da forma certa</h2>
            <p className="text-body-lg text-muted-foreground">
              Criação de empresas, escolha de regime tributário, estrutura societária e planejamento 
              fiscal desde o primeiro dia. Evite erros que podem custar caro no futuro.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Building2,
                title: "Estrutura Empresarial",
                description: "Definição de tipo societário e estrutura de capital ideal",
              },
              {
                icon: Shield,
                title: "Regime Tributário",
                description: "Análise e escolha do regime mais eficiente",
              },
              {
                icon: FileCheck,
                title: "Compliance desde o início",
                description: "Processos e controles estruturados corretamente",
              },
              {
                icon: Users,
                title: "Governança",
                description: "Acordo de sócios e regras de relacionamento",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Comece seu negócio com o pé direito"
        description="Fale com nossos especialistas em estruturação empresarial"
        primaryButton={{ text: "Agendar Consultoria", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
