import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HoldingFamiliar() {
  return (
    <BlogPostTemplate
      title="Holding Familiar: quando estruturar?"
      description="A criação de uma holding familiar é uma das decisões mais estratégicas para proteção patrimonial e planejamento sucessório. Descubra qual o momento certo para estruturá-la."
      keywords="holding familiar, planejamento patrimonial, sucessão familiar, proteção patrimonial, ITCMD, governança familiar, OSP contabilidade"
      canonicalUrl="/blog/holding-familiar-quando-estruturar"
      ogImage="/images/blog/holding-familiar.jpg"
      category="Planejamento Patrimonial"
      categorySlug="planejamento-patrimonial"
      author={{
        name: "Guilherme Pagotto",
        bio: "Advogado, contador e empresário, atua no mercado contábil há mais de 25 anos. É consultor estrategista da OSP Soluções de Negócio. Também é diretor do Sescon e juiz do Tribunal de Impostos e Taxas (TIT) de Campinas.",
        role: "Consultor Estrategista - OSP",
      }}
      publishedDate="2025-03-05"
      readingTime="8 min de leitura"
      heroImage="/images/blog/holding-familiar.jpg"
      heroImageAlt="Família discutindo planejamento patrimonial e holding familiar"
      relatedPosts={[
        {
          title: "HOLDING360: Estrutura patrimonial estratégica",
          slug: "../solucoes/holding360",
          category: "Soluções"
        },
        {
          title: "Indicadores Financeiros que todo CEO deveria acompanhar",
          slug: "indicadores-financeiros-ceo",
          category: "Gestão"
        }
      ]}
    >
      <p className="text-xl text-muted-foreground lead">
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

          <div className="not-prose mt-8 p-6 bg-card rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-3">Quer saber mais sobre nossa solução HOLDING360?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Conheça nossa solução especializada em estruturação patrimonial e planejamento sucessório.
            </p>
          <Link href="/solucoes/holding360">
            <Button>Conhecer HOLDING360</Button>
          </Link>
        </div>
      </BlogPostTemplate>
    );
  }
    