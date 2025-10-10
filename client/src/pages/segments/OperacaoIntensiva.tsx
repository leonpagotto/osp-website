import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Zap, FileCheck, BarChart3, Shield } from "lucide-react";

export default function OperacaoIntensiva() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Operação Intensiva"
        subtitle="Alto volume de transações, notas fiscais e movimentações que demandam automação e controles robustos"
        primaryCTA={{ text: "Falar com Especialista", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Eficiência em operações de alto volume</h2>
            <p className="text-body-lg text-muted-foreground">
              Empresas com milhares de notas fiscais, transações financeiras e operações diárias 
              precisam de automação, controles e processos estruturados para garantir compliance e eficiência.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: Zap,
                title: "Automação Total",
                description: "Integração e automatização de processos fiscais",
              },
              {
                icon: FileCheck,
                title: "Controles Robustos",
                description: "Validações e checagens automatizadas",
              },
              {
                icon: BarChart3,
                title: "Monitoramento 24/7",
                description: "Acompanhamento em tempo real de operações",
              },
              {
                icon: Shield,
                title: "Compliance Garantido",
                description: "Zero erro em obrigações acessórias",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Escale com segurança e eficiência"
        description="Conheça nossas soluções para operações de alto volume"
        primaryButton={{ text: "Agendar Consultoria", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
