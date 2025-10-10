import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { BarChart3, TrendingUp, FileText, Zap } from "lucide-react";

export default function GESTAO360() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="GESTÃO360"
        subtitle="Relatórios executivos, KPIs e BI personalizado para suporte à decisão estratégica"
        primaryCTA={{ text: "Solicitar Demo", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Gestão baseada em dados</h2>
            <p className="text-body-lg text-muted-foreground">
              Transforme seus dados contábeis e financeiros em inteligência de negócios. 
              Dashboards personalizados, indicadores de performance e relatórios executivos.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: BarChart3,
                title: "BI Personalizado",
                description: "Dashboards customizados para seu setor e necessidades",
              },
              {
                icon: TrendingUp,
                title: "KPIs Estratégicos",
                description: "Indicadores relevantes para tomada de decisão",
              },
              {
                icon: FileText,
                title: "Relatórios Executivos",
                description: "Informações claras e objetivas para gestão",
              },
              {
                icon: Zap,
                title: "Integração Total",
                description: "Conexão com ERP, sistemas financeiros e bancos",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Tome decisões baseadas em dados reais"
        description="Conheça nossa solução de BI e gestão executiva"
        primaryButton={{ text: "Ver Demonstração", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
