import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Shield, Zap } from "lucide-react";

const serviceTypes = [
  {
    title: "Contabilidade Standard",
    description: "Serviços contábeis completos para empresas em crescimento",
    features: [
      "Escrituração contábil e fiscal",
      "Obrigações acessórias",
      "Folha de pagamento",
      "Atendimento consultivo",
    ],
  },
  {
    title: "Contabilidade Consultiva",
    description: "Atendimento diferenciado com foco em gestão estratégica",
    features: [
      "Tudo da Standard +",
      "Reuniões mensais de resultados",
      "Relatórios executivos personalizados",
      "Planejamento tributário contínuo",
    ],
  },
  {
    title: "Lucro Real Especializado",
    description: "Para empresas no regime de Lucro Real com alta complexidade",
    features: [
      "Tudo da Consultiva +",
      "Gestão completa do Lucro Real",
      "SLA e marcos de entrega",
      "Integração com sistemas corporativos",
    ],
  },
];

export default function Contabilidade() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Contabilidade OSP"
        subtitle="Serviços contábeis especializados com atendimento diferenciado para empresas de médio e grande porte"
        primaryCTA={{ text: "Solicitar Proposta", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Mais que contabilidade tradicional</h2>
            <p className="text-body-lg text-muted-foreground">
              Oferecemos três níveis de atendimento para atender diferentes perfis e necessidades empresariais, 
              sempre com a qualidade e especialização que só 47 anos de experiência podem proporcionar.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: FileText,
                title: "Compliance Total",
                description: "100% de conformidade fiscal e tributária",
              },
              {
                icon: Users,
                title: "Atendimento Consultivo",
                description: "Relacionamento próximo com especialistas",
              },
              {
                icon: Shield,
                title: "Segurança",
                description: "Processos auditados e certificados",
              },
              {
                icon: Zap,
                title: "Tecnologia",
                description: "Integração com principais ERPs e sistemas",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Nossos Planos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceTypes.map((service, index) => (
              <Card key={index} data-testid={`service-type-${index}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Qual plano é ideal para sua empresa?"
        description="Converse com nossos especialistas e encontre a solução perfeita"
        primaryButton={{ text: "Solicitar Proposta", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
