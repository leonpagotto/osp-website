import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Zap, DollarSign, GraduationCap, Home, Laptop } from "lucide-react";

//todo: remove mock data - job openings
const benefits = [
  {
    icon: Heart,
    title: "Plano de Saúde e Odontológico",
    description: "Cobertura completa para você e sua família",
  },
  {
    icon: DollarSign,
    title: "Vale Refeição/Alimentação",
    description: "Benefício flexível para suas necessidades",
  },
  {
    icon: Laptop,
    title: "Home Office",
    description: "Estrutura para trabalho remoto quando necessário",
  },
  {
    icon: TrendingUp,
    title: "Bônus por Desempenho",
    description: "Reconhecimento pelos resultados alcançados",
  },
  {
    icon: GraduationCap,
    title: "Desenvolvimento Contínuo",
    description: "Treinamentos, certificações e cursos especializados",
  },
  {
    icon: Users,
    title: "Ambiente Colaborativo",
    description: "Cultura de parceria e crescimento conjunto",
  },
];

const careerAreas = [
  "Contabilidade",
  "Fiscal e Tributário",
  "Departamento Pessoal",
  "BPO Financeiro",
  "Consultoria",
  "Tecnologia e Automação",
];

export default function FacaParte() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Faça Parte da OSP"
        subtitle="Junte-se a um time de especialistas que transformam a contabilidade em instrumento estratégico de negócios"
        primaryCTA={{ text: "Ver Vagas Abertas", href: "#vagas" }}
        showGradient={false}
      />

      {/* Por que OSP */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Por que trabalhar na OSP?</h2>
            <p className="text-body-lg text-muted-foreground">
              Somos referência em contabilidade estratégica para empresas de médio e grande porte. 
              Aqui, você terá a oportunidade de trabalhar com clientes complexos e desafiadores, 
              crescendo profissionalmente em um ambiente de excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Nossos Benefícios</h2>
            <p className="text-body-lg text-muted-foreground">
              Cuidamos do nosso time com benefícios competitivos e ambiente de trabalho diferenciado
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <FeatureGrid features={benefits} columns={3} />
          </div>
        </div>
      </section>

      {/* Career Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-section-mobile md:text-section mb-4">Áreas de Atuação</h2>
            <p className="text-body-lg text-muted-foreground">
              Oportunidades em diversas áreas especializadas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {careerAreas.map((area, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-card-border rounded-lg text-center hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`career-area-${index}`}
              >
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-card" id="vagas">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Como se Candidatar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Envie seu currículo e carta de apresentação para nosso time de talentos. 
                    Analisaremos seu perfil e entraremos em contato caso haja oportunidades alinhadas com sua experiência.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild data-testid="button-apply">
                      <a href="mailto:talentos@ospcontabilidade.com.br">
                        Enviar Currículo
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild data-testid="button-linkedin">
                      <a href="https://linkedin.com/company/osp" target="_blank" rel="noopener noreferrer">
                        Ver no LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    <strong>E-mail:</strong> talentos@ospcontabilidade.com.br<br />
                    <strong>Assunto:</strong> Candidatura - [Sua Área de Interesse]
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
