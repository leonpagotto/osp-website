import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Network, FileCheck, BarChart3, Users } from "lucide-react";

export default function EstruturaComplexa() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Estrutura Complexa"
        subtitle="Soluções para empresas com múltiplas entidades, CNPJs, sócios ou operações que exigem governança e visão consolidada"
        primaryCTA={{ text: "Falar com Especialista", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Gestão integrada de estruturas complexas</h2>
            <p className="text-body-lg text-muted-foreground">
              Empresas com múltiplos CNPJs, filiais em diferentes estados, sócios com participação 
              cruzada ou holdings exigem uma gestão contábil e tributária integrada e estratégica.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Network,
                title: "Visão Consolidada",
                description: "Relatórios integrados de todas as entidades do grupo",
              },
              {
                icon: FileCheck,
                title: "Compliance Corporativo",
                description: "Governança e controles em toda estrutura",
              },
              {
                icon: BarChart3,
                title: "BI Consolidado",
                description: "Dashboards com visão holística do grupo",
              },
              {
                icon: Users,
                title: "Gestão de Sócios",
                description: "Controle de participações e distribuição de resultados",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Simplifique a gestão da sua estrutura"
        description="Converse com nossos especialistas em grupos empresariais"
        primaryButton={{ text: "Agendar Consultoria", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
