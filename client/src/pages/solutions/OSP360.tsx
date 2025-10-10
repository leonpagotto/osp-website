import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, FileSearch, BarChart3, Users } from "lucide-react";

const benefits = [
  "Visão 360° completa da saúde tributária e financeira",
  "Identificação de riscos fiscais e oportunidades de economia",
  "Plano de ação estruturado para os próximos 12 meses",
  "Análise de viabilidade de migração para Lucro Real",
  "Diagnóstico de margem e precificação",
  "Mapeamento de processos e controles internos",
];

export default function OSP360() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="OSP360"
        subtitle="Diagnóstico estratégico completo em 45 dias para transformar a gestão da sua empresa"
        primaryCTA={{ text: "Solicitar Diagnóstico", href: "/contato" }}
        secondaryCTA={{ text: "Agendar Apresentação", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">O que é o OSP360?</h2>
            <p className="text-body-lg text-muted-foreground">
              É a nossa metodologia proprietária de diagnóstico empresarial que analisa todos os aspectos 
              tributários, financeiros e operacionais da sua empresa em 45 dias, gerando um plano de ação 
              estratégico para maximizar resultados.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: FileSearch,
                title: "Análise Profunda",
                description: "Revisão completa de documentos fiscais, contratos e processos",
              },
              {
                icon: Target,
                title: "Identificação de Gaps",
                description: "Mapeamento de riscos, ineficiências e oportunidades",
              },
              {
                icon: BarChart3,
                title: "Plano Estratégico",
                description: "Roadmap detalhado com priorização e cronograma",
              },
              {
                icon: Users,
                title: "Acompanhamento",
                description: "Suporte na implementação das recomendações",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile md:text-section mb-8 text-center">Benefícios do OSP360</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile md:text-section mb-12 text-center">Como Funciona</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Kick-off e Coleta (Dias 1-10)</h3>
                      <p className="text-muted-foreground">
                        Reunião inicial, definição de escopo e coleta de documentação fiscal, contábil e operacional
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Análise e Diagnóstico (Dias 11-30)</h3>
                      <p className="text-muted-foreground">
                        Análise tributária, financeira e operacional com identificação de riscos e oportunidades
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Plano de Ação (Dias 31-45)</h3>
                      <p className="text-muted-foreground">
                        Apresentação executiva com roadmap priorizado e cronograma de implementação
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Pronto para transformar sua gestão?"
        description="Solicite um diagnóstico OSP360 e descubra como podemos ajudar sua empresa"
        primaryButton={{ text: "Solicitar Diagnóstico Gratuito", href: "/contato" }}
        secondaryButton={{ text: "Falar com Especialista", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
