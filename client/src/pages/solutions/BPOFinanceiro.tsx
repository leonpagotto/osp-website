import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { DollarSign, CreditCard, FileCheck, TrendingUp } from "lucide-react";

export default function BPOFinanceiro() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="BPO Financeiro"
        subtitle="Terceirização completa da gestão financeira: tesouraria, fluxo de caixa e conciliação bancária"
        primaryCTA={{ text: "Solicitar Proposta", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Seu financeiro nas mãos de especialistas</h2>
            <p className="text-body-lg text-muted-foreground">
              Assumimos toda operação financeira da sua empresa: contas a pagar e receber, 
              conciliação bancária, fluxo de caixa e relacionamento com bancos.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: DollarSign,
                title: "Tesouraria Completa",
                description: "Gestão de contas a pagar e receber",
              },
              {
                icon: CreditCard,
                title: "Conciliação Bancária",
                description: "Automatização e controle total dos extratos",
              },
              {
                icon: FileCheck,
                title: "Fluxo de Caixa",
                description: "Projeções e controle rigoroso do cash",
              },
              {
                icon: TrendingUp,
                title: "Relacionamento Bancário",
                description: "Negociação e gestão de linhas de crédito",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Foque no seu negócio, deixe o financeiro conosco"
        description="Solicite uma proposta personalizada de BPO Financeiro"
        primaryButton={{ text: "Solicitar Proposta", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
