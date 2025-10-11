import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function EstudoTributario() {
  const relatedPosts = [
    {
      title: "Lucro Real com Estratégia",
      slug: "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber",
      category: "Lucro Real"
    },
    {
      title: "Contabilidade Lucro Real: Por que mudar de regime",
      slug: "contabilidade-lucro-real-por-que-mudar-de-regime",
      category: "Lucro Real"
    },
    {
      title: "OSP360: Diagnóstico tributário completo",
      slug: "../solucoes/osp360",
      category: "Soluções"
    }
  ];

  return (
    <BlogPostTemplate
      title="Estudo Tributário Profundo: como tomar decisões fiscais com segurança, clareza e economia real"
      description="Entenda a importância de um estudo tributário profundo para tomar decisões estratégicas com segurança e gerar economia real."
      keywords="estudo tributário, planejamento fiscal, economia tributária, decisões fiscais"
      canonicalUrl="/blog/estudo-tributario-tomar-decisoes"
      ogImage="/images/blog/estudo-tributario.png"
      category="Lucro Real"
      categorySlug="lucro-real"
      author={authorInfo}
      publishedDate="2025-06-28"
      readingTime="8 min de leitura"
      heroImage="/images/blog/estudo-tributario.png"
      heroImageAlt="Estudo tributário profundo para decisões fiscais estratégicas"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        Decisões tributárias baseadas em "achismo" custam milhões às empresas brasileiras todos os anos. 
        Um estudo tributário profundo transforma incerteza em dados concretos, gerando economia real e 
        segurança jurídica.
      </p>

      <h2>O Que é um Estudo Tributário Profundo?</h2>
      <p>
        É uma <strong>análise técnica detalhada</strong> da situação tributária da empresa, que compara 
        cenários, calcula impactos e identifica oportunidades legais de redução de carga fiscal.
      </p>

      <p>Diferente de uma consultoria pontual, o estudo tributário:</p>
      <ul>
        <li>Analisa <strong>histórico completo</strong> (3-5 anos de dados reais)</li>
        <li>Simula <strong>múltiplos cenários</strong> com projeções futuras</li>
        <li>Considera <strong>todas as variáveis</strong>: regime tributário, estrutura societária, operações</li>
        <li>Identifica <strong>riscos escondidos</strong> e passivos tributários potenciais</li>
        <li>Propõe <strong>plano de ação específico</strong> para sua realidade</li>
      </ul>

      <h2>Por Que Muitas Empresas Pagam Mais Impostos do Que Deveriam?</h2>

      <div className="grid gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">1. Regime Tributário Errado</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground mb-2">
              Muitas empresas operam no Simples ou Presumido quando o Lucro Real seria mais vantajoso 
              (ou vice-versa).
            </p>
            <p className="bg-primary/10 border border-primary/30 rounded p-3 text-xs">
              <strong>Exemplo real:</strong> Empresa de serviços com R$ 5 milhões de receita anual, 
              operando no Presumido, descobriu que Lucro Real geraria <strong>economia de R$ 280 mil/ano</strong>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2. Créditos Fiscais Não Aproveitados</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">
              Empresas no Lucro Real frequentemente perdem créditos de PIS/Cofins por não identificar 
              todas as despesas elegíveis ou por falta de controle adequado.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">3. Estrutura Societária Ineficiente</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">
              Operações centralizadas em uma única empresa quando a criação de filiais, holdings ou 
              SPEs (Sociedades de Propósito Específico) seria tributariamente mais eficiente.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">4. Benefícios Fiscais Desconhecidos</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">
              Existem dezenas de incentivos fiscais federais, estaduais e municipais que passam 
              despercebidos por falta de análise especializada.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>O Que um Estudo Tributário Profundo Inclui?</h2>

      <h3>Fase 1: Diagnóstico Completo</h3>
      <ul>
        <li>Análise de balancetes e demonstrativos dos últimos 3-5 anos</li>
        <li>Revisão de contratos sociais e estrutura societária</li>
        <li>Levantamento de todas as operações e fluxos de receita</li>
        <li>Identificação de despesas dedutíveis não aproveitadas</li>
        <li>Auditoria de obrigações acessórias e conformidade fiscal</li>
      </ul>

      <h3>Fase 2: Simulações e Comparações</h3>
      <ul>
        <li>Comparativo entre <strong>Simples, Presumido e Lucro Real</strong></li>
        <li>Cálculo de economia potencial em cada regime</li>
        <li>Projeções para os próximos 3-5 anos</li>
        <li>Análise de impacto da Reforma Tributária (CBS/IBS)</li>
        <li>Simulação de cenários de crescimento</li>
      </ul>

      <h3>Fase 3: Identificação de Oportunidades</h3>
      <ul>
        <li>Benefícios fiscais aplicáveis (PAT, ROTA 2030, Lei do Bem, etc.)</li>
        <li>Créditos fiscais não aproveitados (PIS/Cofins, ICMS, ISS)</li>
        <li>Oportunidades de planejamento sucessório (holdings)</li>
        <li>Estruturações societárias mais eficientes</li>
        <li>Otimizações em folha de pagamento e pró-labore</li>
      </ul>

      <h3>Fase 4: Plano de Ação</h3>
      <ul>
        <li>Recomendações específicas priorizadas por impacto</li>
        <li>Cronograma de implementação</li>
        <li>Cálculo de ROI (retorno sobre investimento) de cada ação</li>
        <li>Riscos e mitigações</li>
        <li>Documentação legal necessária</li>
      </ul>

      <h2>Casos Reais de Economia</h2>

      <div className="space-y-4 my-8">
        <Card className="border-primary/40 bg-accent/80">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Caso 1: Indústria — R$ 15 MM receita/ano
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground mb-2">
              <strong>Situação:</strong> Operava no Presumido há 8 anos
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Estudo identificou:</strong> Lucro Real + aproveitamento de créditos de IPI e PIS/Cofins
            </p>
            <p className="font-semibold text-green-700">
              <strong>Economia anual:</strong> R$ 420.000 (2,8% da receita)
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/40 bg-accent/80">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Caso 2: Serviços de TI — R$ 8 MM receita/ano
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground mb-2">
              <strong>Situação:</strong> Simples Nacional com faturamento crescente
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Estudo identificou:</strong> Lucro Real + Lei do Bem (incentivo fiscal para P&D)
            </p>
            <p className="font-semibold text-green-700">
              <strong>Economia anual:</strong> R$ 380.000 (4,75% da receita)
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/40 bg-accent/80">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Caso 3: Holding Familiar — R$ 25 MM patrimônio
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground mb-2">
              <strong>Situação:</strong> Patrimônio em nome de pessoas físicas
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Estudo identificou:</strong> Estruturação de holding + otimização de distribuição de rendas
            </p>
            <p className="font-semibold text-green-700">
              <strong>Economia em 10 anos:</strong> R$ 1.900.000 (ITCMD + IR sobre aluguéis)
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Quando Fazer um Estudo Tributário?</h2>

      <h3>Situações Ideais:</h3>
      <ul>
        <li><strong>Empresa crescendo:</strong> Faturamento aumentando ano a ano</li>
        <li><strong>Mudança de regime:</strong> Saindo do Simples ou considerando Lucro Real</li>
        <li><strong>Margens apertadas:</strong> Necessidade de reduzir custos, incluindo tributos</li>
        <li><strong>Antes de investimentos:</strong> Expansão, compra de ativos, contratações</li>
        <li><strong>Planejamento sucessório:</strong> Estruturação de holdings ou reorganizações</li>
        <li><strong>Reforma Tributária:</strong> Preparação para CBS/IBS</li>
      </ul>

      <h3>Periodicidade Recomendada:</h3>
      <p>
        Empresas devem fazer um estudo tributário completo a cada <strong>2-3 anos</strong>, ou quando 
        houver mudanças significativas no negócio (crescimento acima de 30%, nova linha de produtos, mudança 
        de estrutura).
      </p>

      <h2>Custo vs. Benefício</h2>

      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4">Investimento Típico:</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Empresas até R$ 5 MM</p>
            <p className="text-2xl font-bold text-primary">R$ 5-10 mil</p>
            <p className="text-xs text-muted-foreground">Estudo básico</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Empresas R$ 5-30 MM</p>
            <p className="text-2xl font-bold text-primary">R$ 15-30 mil</p>
            <p className="text-xs text-muted-foreground">Estudo completo</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Empresas acima de R$ 30 MM</p>
            <p className="text-2xl font-bold text-primary">R$ 40-80 mil</p>
            <p className="text-xs text-muted-foreground">Estudo aprofundado</p>
          </div>
        </div>
      </div>

      <div className="bg-accent border border-primary/40 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3">ROI Típico:</h3>
        <p className="text-sm text-green-900 mb-2">
          Um estudo tributário bem executado costuma identificar economia de <strong>2% a 8% da receita anual</strong>.
        </p>
        <p className="text-sm text-green-900">
          <strong>Exemplo:</strong> Empresa com R$ 10 milhões de receita investindo R$ 20 mil no estudo 
          pode economizar R$ 200 mil a R$ 800 mil por ano. O retorno ocorre em menos de 2 meses.
        </p>
      </div>

      <h2>O Que Esperar de um Bom Estudo Tributário?</h2>

      <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              Relatório Detalhado
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Documento completo (30-100 páginas) com análises, simulações, recomendações e cronograma.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Search className="h-4 w-4 text-primary" />
              Apresentação Executiva
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Reunião com sócios/diretores para explicar achados e responder perguntas.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Plano de Implementação
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Passos práticos para implementar recomendações, com responsáveis e prazos.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Acompanhamento
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Suporte na implementação das mudanças e validação de resultados.
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Transforme Incerteza em Economia Real</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A OSP realiza estudos tributários profundos há mais de 25 anos, com metodologia comprovada 
          e resultados mensuráveis. Descubra quanto sua empresa pode economizar.
        </p>
        <Link href="/solucoes/osp360">
          <Button size="lg" className="gap-2">
            Solicite Seu Estudo Tributário
            <TrendingUp className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        Um estudo tributário profundo não é custo — é <strong>investimento com ROI mensurável</strong>. 
        Em um ambiente tributário complexo como o brasileiro, decisões baseadas em dados concretos são 
        a diferença entre pagar o mínimo necessário e pagar muito mais do que deveria.
      </p>
      <p>
        <strong>Não deixe dinheiro na mesa.</strong> Faça um estudo tributário e descubra exatamente 
        quanto você pode economizar.
      </p>
    </BlogPostTemplate>
  );
}
