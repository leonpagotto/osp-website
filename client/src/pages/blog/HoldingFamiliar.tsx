import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, CheckCircle2 } from "lucide-react";

export default function HoldingFamiliar() {
  return (
    <div className="min-h-screen">
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Planejamento Patrimonial
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Holding Familiar: quando estruturar?</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">5 de Março, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm">Guilherme Pagotto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <p className="text-xl text-muted-foreground">
              A criação de uma holding familiar é uma das decisões mais estratégicas para proteção patrimonial 
              e planejamento sucessório. Mas qual o momento certo para estruturá-la?
            </p>

            <h2>O que é uma Holding Familiar?</h2>
            <p>
              Holding familiar é uma empresa criada especificamente para administrar o patrimônio de uma família. 
              Ela pode ser proprietária de outras empresas, imóveis, participações societárias, investimentos 
              financeiros e outros ativos.
            </p>

            <h2>Quando Estruturar uma Holding?</h2>
            <p>
              Considere criar uma holding familiar quando:
            </p>

            <div className="grid gap-4 not-prose my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    Patrimônio Significativo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Quando o patrimônio familiar supera R$ 5 milhões, os benefícios fiscais e de proteção 
                    justificam a estruturação de uma holding.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    Múltiplos Imóveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Famílias com diversos imóveis se beneficiam enormemente da holding, especialmente 
                    para gestão de aluguéis e futura sucessão.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    Planejamento Sucessório
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Se há preocupação com a sucessão e divisão de bens entre herdeiros, a holding evita 
                    inventários longos e custosos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    Proteção Patrimonial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Empresários que desejam proteger seu patrimônio pessoal dos riscos das atividades 
                    empresariais devem considerar a holding.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>Tipos de Holding Familiar</h2>
            <p>
              Existem diferentes modelos, cada um com finalidade específica:
            </p>

            <h3>1. Holding Pura</h3>
            <p>
              Criada exclusivamente para deter participações em outras empresas ou ativos. 
              Não realiza atividades operacionais.
            </p>

            <h3>2. Holding Patrimonial</h3>
            <p>
              Focada na administração de imóveis e outros bens. Ideal para famílias com portfólio 
              imobiliário significativo.
            </p>

            <h3>3. Holding Mista</h3>
            <p>
              Combina a gestão de participações societárias com administração patrimonial. 
              Modelo mais completo e versátil.
            </p>

            <h2>Vantagens Fiscais</h2>
            <p>
              As principais vantagens tributárias incluem:
            </p>
            <ul>
              <li><strong>Economia no ITCMD:</strong> Redução significativa no imposto de transmissão causa mortis</li>
              <li><strong>Eficiência em Aluguéis:</strong> Tributação otimizada para rendas de locação</li>
              <li><strong>Distribuição de Lucros:</strong> Possibilidade de distribuição isenta de IR</li>
              <li><strong>Reorganização:</strong> Reestruturações societárias com benefícios fiscais</li>
            </ul>

            <h2>Governança Familiar</h2>
            <p>
              Além dos benefícios fiscais, a holding permite estabelecer regras claras de governança:
            </p>
            <ul>
              <li>Acordo de sócios/quotistas bem estruturado</li>
              <li>Regras de distribuição de resultados</li>
              <li>Sucessão organizada e sem conflitos</li>
              <li>Proteção contra casamentos e divórcios</li>
              <li>Venda ou saída de sócios de forma planejada</li>
            </ul>

            <h2>Processo de Estruturação</h2>
            <p>
              A criação de uma holding familiar envolve:
            </p>
            <ol>
              <li><strong>Diagnóstico Patrimonial:</strong> Levantamento completo de ativos e passivos</li>
              <li><strong>Planejamento Tributário:</strong> Análise de regime e estrutura ideal</li>
              <li><strong>Constituição:</strong> Criação da empresa e integralização de capital</li>
              <li><strong>Transferência de Ativos:</strong> Migração dos bens para a holding</li>
              <li><strong>Acordo de Sócios:</strong> Estabelecimento das regras de governança</li>
              <li><strong>Operacionalização:</strong> Estruturação da gestão e controles</li>
            </ol>

            <h2>Cuidados Importantes</h2>
            <p>
              A estruturação de uma holding exige planejamento cuidadoso:
            </p>
            <ul>
              <li>Escolha correta do regime tributário (Lucro Real, Presumido ou Simples)</li>
              <li>Avaliação adequada dos ativos na integralização</li>
              <li>Compliance com todas as normas fiscais e societárias</li>
              <li>Documentação completa e defensável</li>
              <li>Acompanhamento contábil especializado</li>
            </ul>

            <h2>Conclusão</h2>
            <p>
              A holding familiar é uma ferramenta poderosa de planejamento patrimonial e sucessório, 
              mas sua estruturação exige conhecimento técnico especializado. Quando bem implementada, 
              proporciona proteção, eficiência fiscal e governança familiar sólida.
            </p>
            <p>
              Na OSP, acumulamos décadas de experiência em estruturação de holdings familiares, 
              garantindo segurança jurídica, eficiência tributária e governança adequada para 
              perpetuar o patrimônio familiar através das gerações.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Pense na estruturação da sua holding familiar"
        description="Agende uma consultoria especializada com nossos experts em planejamento patrimonial"
        primaryButton={{ text: "Agendar Consultoria", href: "/contato" }}
        secondaryButton={{ text: "Conhecer HOLDING360", href: "/solucoes/holding360" }}
        variant="accent"
      />
    </div>
  );
}
