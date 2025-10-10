import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

//todo: remove mock data - downloadable materials
const materials = [
  {
    title: "Guia Completo: Migração para Lucro Real",
    description: "Passo a passo detalhado para empresas que estão considerando a transição do Simples Nacional para o Lucro Real",
    type: "E-book",
    pages: "32 páginas",
  },
  {
    title: "Checklist: Compliance Tributário",
    description: "Lista completa de verificação para manter sua empresa em conformidade fiscal",
    type: "Checklist",
    pages: "PDF",
  },
  {
    title: "Planilha: Análise de Viabilidade Tributária",
    description: "Ferramenta para comparar regimes tributários e identificar a melhor opção para seu negócio",
    type: "Planilha",
    pages: "Excel",
  },
  {
    title: "Infográfico: Estrutura de Holding Familiar",
    description: "Visual explicativo sobre os tipos de holding e quando estruturar",
    type: "Infográfico",
    pages: "PDF",
  },
  {
    title: "Whitepaper: KPIs Financeiros Essenciais",
    description: "Indicadores que todo gestor deve acompanhar para tomada de decisão estratégica",
    type: "Whitepaper",
    pages: "16 páginas",
  },
  {
    title: "Template: Fluxo de Caixa Projetado",
    description: "Modelo profissional para planejamento e controle do fluxo de caixa",
    type: "Template",
    pages: "Excel",
  },
];

export default function Materiais() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Materiais Gratuitos"
        subtitle="Recursos práticos para aprimorar a gestão contábil, tributária e financeira da sua empresa"
        showGradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-body-lg text-muted-foreground">
              Baixe gratuitamente nossos guias, checklists e ferramentas desenvolvidas 
              por especialistas com mais de 47 anos de experiência em contabilidade estratégica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {materials.map((material, index) => (
              <Card key={index} className="flex flex-col" data-testid={`material-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{material.title}</CardTitle>
                  <div className="flex gap-2">
                    <span className="text-xs text-primary font-medium">{material.type}</span>
                    <span className="text-xs text-muted-foreground">• {material.pages}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{material.description}</p>
                  <Button className="w-full" data-testid={`button-download-${index}`} onClick={() => console.log(`Download: ${material.title}`)}>
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Grátis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Custom Materials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-section-mobile md:text-section mb-4">Precisa de algo específico?</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Nossa equipe pode desenvolver análises e materiais personalizados para o seu negócio
            </p>
            <Button size="lg" data-testid="button-contact-custom">
              Solicitar Material Customizado
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
