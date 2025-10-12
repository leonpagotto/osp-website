import { useTranslation } from "react-i18next";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

//todo: remove mock data - case studies and testimonials
const caseStudies = [
  {
    company: "Tubesteel",
    industry: "Indústria Metalúrgica",
    challenge: "Estrutura tributária inadequada gerando perda de caixa",
    solution: "OSP360 + TRIBUTA360 + GESTÃO360",
    results: [
      "Geração de caixa nos primeiros 45 dias",
      "Migração segura para Lucro Real",
      "Redução de 23% na carga tributária",
      "BI integrado para tomada de decisão",
    ],
  },
  {
    company: "Borabella",
    industry: "Rede de Franquias",
    challenge: "Margem baixa e expansão nacional sem controles adequados",
    solution: "PRECIFICA360 + GESTÃO360 + BPO Financeiro",
    results: [
      "Aumento de margem em +10%",
      "Expansão para todo Brasil",
      "Controles financeiros robustos",
      "Redução de 40% no tempo de fechamento",
    ],
  },
  {
    company: "Galena",
    industry: "Grupo Empresarial",
    challenge: "Múltiplas empresas sem visão consolidada e riscos de compliance",
    solution: "Contabilidade Consultiva + HOLDING360",
    results: [
      "35 anos de parceria estratégica",
      "Governança corporativa estruturada",
      "100% de compliance tributário",
      "Planejamento sucessório implementado",
    ],
  },
];

const testimonials = [
  {
    quote: "A flexibilidade e o atendimento da OSP fazem toda diferença. Entregam sempre no prazo e com qualidade impecável.",
    author: "Gerente Financeiro",
    company: "Quality Machines",
    role: "Indústria de Máquinas",
  },
  {
    quote: "Reduzimos o tempo de fechamento e ganhamos eficiência operacional. O suporte consultivo é excepcional.",
    author: "Controller",
    company: "Enza Zaden",
    role: "Agronegócio",
  },
  {
    quote: "Com a OSP nos tornamos mais competitivos internacionalmente. O planejamento tributário foi decisivo.",
    author: "CFO",
    company: "Grupo Wortex",
    role: "Grupo Internacional",
  },
];

export default function Resultados() {
  const { t } = useTranslation();
  const stats = t('resultadosPage.stats', { returnObjects: true }) as Array<{ value: string; label: string; highlight?: boolean }>;
  
  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('resultadosPage.hero.title')}
        subtitle={t('resultadosPage.hero.subtitle')}
        showGradient={true}
        gradientVariant="blue"
      />

      <StatsSection
        stats={stats.map((stat, index) => ({
          ...stat,
          highlight: index === 0 || index === 3
        }))}
      />

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('resultadosPage.caseStudies.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('resultadosPage.caseStudies.description')}
            </p>
          </div>
          <div className="space-y-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} data-testid={`case-study-${index}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                    <CardTitle className="text-2xl">{study.company}</CardTitle>
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">{t('resultadosPage.caseStudies.challengeLabel')}</h4>
                      <p className="text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">{t('resultadosPage.caseStudies.solutionLabel')}</h4>
                      <p className="text-sm font-medium text-primary">{study.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">{t('resultadosPage.caseStudies.resultsLabel')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">{t('resultadosPage.testimonials.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('resultadosPage.testimonials.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t('resultadosPage.cta.title')}
        description={t('resultadosPage.cta.description')}
        primaryButton={{ text: t('resultadosPage.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('resultadosPage.cta.secondaryButton'), href: "/solucoes/osp360" }}
        variant="accent"
      />
    </div>
  );
}
