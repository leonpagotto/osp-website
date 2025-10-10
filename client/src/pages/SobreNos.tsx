import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

//todo: remove mock data - timeline and team
const timeline = [
  { year: "1977", event: "Fundação da OSP por Gervásio de Souza" },
  { year: "1990", event: "Especialização em empresas de médio e grande porte" },
  { year: "2000", event: "Expansão nacional - atendimento em 14 estados" },
  { year: "2010", event: "Desenvolvimento de metodologias 360" },
  { year: "2020", event: "Atuação internacional em 12 países" },
  { year: "2025", event: "Liderança em Lucro Real com +600 empresas" },
];

const team = [
  { name: "Gervásio de Souza", role: "Fundador & Presidente", bio: "47 anos de experiência em contabilidade estratégica" },
  { name: "Jonas Marinho", role: "CEO", bio: "Líder em transformação digital e governança" },
  { name: "Guilherme Pagotto", role: "Diretor Executivo", bio: "Especialista em planejamento tributário" },
];

export default function SobreNos() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Sobre a OSP"
        subtitle="47 anos transformando a contabilidade em instrumento estratégico de negócios"
        showGradient={false}
      />

      {/* Essência */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-mobile md:text-section mb-6 text-center">Nossa Essência</h2>
            <div className="prose prose-lg max-w-none text-center text-muted-foreground">
              <p className="text-body-lg leading-relaxed mb-4">
                A OSP nasceu em 1977 com uma visão clara: ser mais do que um escritório de contabilidade. 
                Desde o início, nos posicionamos como o braço técnico e consultivo de empresas que buscam excelência em gestão tributária e financeira.
              </p>
              <p className="text-body-lg leading-relaxed">
                Hoje, somos referência nacional em atendimento a empresas no regime de Lucro Real, 
                combinando tradição com inovação para entregar resultados que transformam negócios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-section-mobile md:text-section mb-12 text-center">Nossa História</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start" data-testid={`timeline-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-mono font-bold text-primary">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-5">
                    <p className="text-base">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Liderança</h2>
            <p className="text-body-lg text-muted-foreground">
              Time executivo com décadas de experiência em contabilidade estratégica
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} data-testid={`team-member-${index}`}>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Nossos Valores</h2>
            <p className="text-body-lg text-muted-foreground">
              Princípios que guiam nossa atuação e relacionamento com clientes
            </p>
          </div>
          <FeatureGrid
            features={[
              {
                icon: Target,
                title: "Especialização",
                description: "Foco total em Lucro Real e empresas de médio e grande porte",
              },
              {
                icon: Users,
                title: "Parceria",
                description: "Relacionamento consultivo e de longo prazo com nossos clientes",
              },
              {
                icon: Award,
                title: "Excelência",
                description: "Entrega de qualidade com SLA e marcos claros",
              },
              {
                icon: TrendingUp,
                title: "Resultados",
                description: "Compromisso com a geração de valor mensurável",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Conheça melhor a OSP"
        description="Agende uma visita ou videoconferência com nossa equipe"
        primaryButton={{ text: "Agendar Conversa", href: "/contato" }}
        secondaryButton={{ text: "Trabalhe Conosco", href: "/faca-parte" }}
      />
    </div>
  );
}
