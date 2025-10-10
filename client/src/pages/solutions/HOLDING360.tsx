import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Home, Shield, Users, FileText } from "lucide-react";

export default function HOLDING360() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="HOLDING360"
        subtitle="Estruturação patrimonial, proteção de ativos e planejamento sucessório para grupos familiares"
        primaryCTA={{ text: "Agendar Consultoria", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Proteja e organize seu patrimônio</h2>
            <p className="text-body-lg text-muted-foreground">
              Criação de holdings patrimoniais e empresariais, planejamento sucessório, 
              proteção de ativos e governança familiar com total segurança jurídica e tributária.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Home,
                title: "Holding Patrimonial",
                description: "Estruturação de imóveis e ativos para proteção",
              },
              {
                icon: Shield,
                title: "Proteção de Ativos",
                description: "Blindagem patrimonial e segregação de riscos",
              },
              {
                icon: Users,
                title: "Planejamento Sucessório",
                description: "Sucessão familiar estruturada e sem conflitos",
              },
              {
                icon: FileText,
                title: "Governança",
                description: "Acordo de sócios e regras de família",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Estruture sua holding com segurança"
        description="Agende uma consultoria com nossos especialistas em planejamento patrimonial"
        primaryButton={{ text: "Agendar Consultoria", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
