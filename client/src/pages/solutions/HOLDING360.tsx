import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Shield, Users, FileText, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const benefits = [
  "Redução de ITCMD (Imposto sobre Herança) em até 4-8%",
  "Proteção contra penhoras e riscos empresariais",
  "Organização da sucessão familiar sem conflitos",
  "Economia de IR sobre aluguéis (Lucro Real na holding)",
  "Blindagem patrimonial com segurança jurídica",
  "Governança clara para decisões familiares",
];

const urgencyFactors = [
  {
    title: "PL 1.087/2025 - Tributação de Dividendos",
    description: "Dividendos passam a ser tributados progressivamente (0-15%). Estruturar antes de 2026 permite aproveitamento de lucros acumulados sem IR.",
    impact: "CRÍTICO"
  },
  {
    title: "Aumentos de ITCMD Estaduais",
    description: "Estados como SP podem aumentar ITCMD de 4% para 8%. Doações via holding hoje evitam taxas futuras mais altas.",
    impact: "ALTO"
  },
  {
    title: "Reforma Tributária em vigor",
    description: "CBS/IBS alteram tributação de aluguéis. Holdings estruturadas em 2025 têm vantagem no novo regime.",
    impact: "MÉDIO"
  }
];

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

      {/* Urgency Section - 2025 Deadline */}
      <section className="py-20 bg-amber-50/50 dark:bg-amber-950/10 border-y border-amber-200/50 dark:border-amber-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
              <h2 className="text-section-mobile md:text-section text-center">Por que estruturar sua holding em 2025?</h2>
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Três fatores convergem para tornar 2025 o ano decisivo para quem tem patrimônio acima de R$ 5 milhões
            </p>

            <div className="space-y-4">
              {urgencyFactors.map((factor, index) => (
                <Card key={index} className="border-l-4 border-l-amber-600">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg">{factor.title}</CardTitle>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        factor.impact === 'CRÍTICO' ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400' :
                        factor.impact === 'ALTO' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400'
                      }`}>
                        {factor.impact}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {factor.description}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-br from-amber-100/50 to-transparent dark:from-amber-950/20 border-amber-300/50 dark:border-amber-800/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-3">Janela de oportunidade: até 31/12/2025</h3>
                <p className="text-muted-foreground mb-6">
                  Holdings estruturadas até dezembro de 2025 aproveitam regras atuais antes da tributação de dividendos e possíveis aumentos de ITCMD.
                </p>
                <Link href="/contato">
                  <Button size="lg" className="gap-2">
                    Agendar Consultoria Urgente
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile md:text-section mb-8 text-center">Benefícios da Holding Patrimonial</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Estruture sua holding com segurança"
        description="Agende uma consultoria com nossos especialistas em planejamento patrimonial"
        primaryButton={{ text: "Agendar Consultoria", href: "/contato" }}
        secondaryButton={{ text: "Ver Cases de Sucesso", href: "/resultados" }}
        variant="accent"
      />
    </div>
  );
}
