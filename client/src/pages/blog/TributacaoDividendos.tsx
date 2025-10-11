import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Shield, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function TributacaoDividendos() {
  const relatedPosts = [
    {
      title: "Holding Patrimonial: Por que agir ainda em 2025",
      slug: "holding-patrimonial-por-que-ainda-em-2025",
      category: "Reforma Tributária"
    },
    {
      title: "Reforma Tributária 2025: Guia Prático para Empresários",
      slug: "reforma-tributaria-2025-guia-pratico-para-empresarios",
      category: "Reforma Tributária"
    },
    {
      title: "Lucro Real com Estratégia",
      slug: "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber",
      category: "Lucro Real"
    }
  ];

  return (
    <BlogPostTemplate
      title="Tributação de Dividendos: o que muda em 2026 e como se preparar"
      description="O PL 1.087/2025 prevê mudanças significativas na tributação de dividendos a partir de 2026. Entenda os impactos para sua empresa e lucros acumulados."
      keywords="tributação dividendos, PL 1.087/2025, IRPF, lucros acumulados, reforma tributária, holding, OSP"
      canonicalUrl="/blog/tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar"
      ogImage="/images/blog/tributacao-dividendos.jpg"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-18"
      readingTime="7 min de leitura"
      heroImage="/images/blog/tributacao-dividendos.jpg"
      heroImageAlt="Análise de tributação de dividendos e impactos fiscais"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        O Projeto de Lei 1.087/2025 traz mudanças profundas na tributação de dividendos no Brasil. 
        Se aprovado, dividendos passarão a ser tributados a partir de 2026. Entenda o que muda e 
        como proteger seus lucros acumulados.
      </p>

      <h2>O Que Mudará na Tributação de Dividendos?</h2>
      <p>
        Atualmente, dividendos distribuídos por empresas brasileiras são isentos de Imposto de Renda 
        para pessoas físicas. O PL 1.087/2025 propõe acabar com essa isenção, introduzindo alíquotas 
        progressivas que podem chegar a 15% sobre os valores distribuídos.
      </p>

      <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              Quando Entra em Vigor?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Se aprovado em 2025, as novas regras começam a valer a partir de <strong>janeiro de 2026</strong>. 
              Isso significa que dividendos distribuídos até 31/12/2025 ainda estarão isentos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              Lucros Acumulados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Empresas com lucros acumulados de anos anteriores podem distribuí-los até o final de 2025 
              <strong> sem tributação</strong>, mesmo que gerados há vários anos.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Alíquotas Propostas</h2>
      <p>
        O projeto prevê tributação progressiva conforme o valor recebido anualmente em dividendos:
      </p>

      <div className="bg-muted/30 rounded-lg p-6 my-6 not-prose">
        <h3 className="text-lg font-semibold mb-4">Tabela de Tributação (PL 1.087/2025)</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="font-medium">Até R$ 50.000/ano:</span>
            <span className="text-green-600 font-bold">Isento</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="font-medium">De R$ 50.000 a R$ 200.000:</span>
            <span className="text-amber-600 font-bold">10%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Acima de R$ 200.000:</span>
            <span className="text-red-600 font-bold">15%</span>
          </div>
        </div>
      </div>

      <h2>Impactos Para Sua Empresa</h2>
      
      <h3>1. Planejamento de Distribuição</h3>
      <p>
        Empresas precisarão avaliar <strong>quando e quanto</strong> distribuir aos sócios. A decisão entre 
        reter lucros na empresa ou distribuir aos sócios ganha nova complexidade, exigindo análise tributária 
        mais profunda.
      </p>

      <h3>2. Lucros Acumulados: Janela de Oportunidade</h3>
      <p>
        Se sua empresa possui lucros acumulados (reservas de lucros), <strong>2025 é o ano decisivo</strong>. 
        Distribuir esses valores antes de 31/12/2025 garante a isenção total de IRPF.
      </p>

      <Card className="my-6 border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            Atenção: Urgência em 2025
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            Empresas com <strong>lucros acumulados significativos</strong> devem agir rapidamente. 
            A partir de 2026, a distribuição desses mesmos lucros será tributada.
          </p>
          <p className="font-medium text-foreground">
            Exemplo: R$ 1 milhão em lucros acumulados distribuídos em 2025 = R$ 0 de IR. 
            Os mesmos R$ 1 milhão distribuídos em 2026 = até R$ 150 mil de IR.
          </p>
        </CardContent>
      </Card>

      <h3>3. Holding Familiar: Proteção Estratégica</h3>
      <p>
        A estruturação de holdings familiares pode ser uma estratégia eficiente para gerenciar a 
        distribuição de lucros e minimizar impactos tributários. Holdings permitem maior flexibilidade 
        na retenção e distribuição de resultados.
      </p>

      <h2>Como se Preparar?</h2>

      <div className="grid gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-1" />
              Passo 1: Levantamento de Lucros Acumulados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Identifique o saldo de lucros acumulados disponíveis para distribuição. Esse é o 
              patrimônio que pode ser protegido até o final de 2025.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-primary mt-1" />
              Passo 2: Análise de Capacidade de Distribuição
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Avalie a saúde financeira da empresa e defina quanto pode ser distribuído sem comprometer 
              o capital de giro e investimentos planejados.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              Passo 3: Planejamento de Distribuições em 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Crie um cronograma de distribuições ao longo de 2025, respeitando limites legais e 
              fluxo de caixa. Não deixe para dezembro.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-1" />
              Passo 4: Avalie Estruturas de Holding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Considere criar uma holding familiar para gestão patrimonial mais eficiente e 
              flexível no longo prazo.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Por Que a OSP Pode Ajudar?</h2>
      <p>
        A OSP possui experiência de mais de 25 anos em planejamento tributário estratégico. 
        Nosso time analisa caso a caso, considerando:
      </p>
      <ul>
        <li>Situação patrimonial completa dos sócios</li>
        <li>Planejamento de caixa da empresa</li>
        <li>Estruturas societárias e holdings</li>
        <li>Impactos de outros tributos (ITCMD, CSLL, etc.)</li>
        <li>Alternativas legais de otimização</li>
      </ul>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Não Deixe Para a Última Hora</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A janela de oportunidade para distribuir lucros acumulados sem tributação está se fechando. 
          Quanto antes você agir, mais opções terá.
        </p>
        <Link href="/contato">
          <Button size="lg" className="gap-2">
            Fale com um Especialista OSP
            <TrendingUp className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        A possível tributação de dividendos a partir de 2026 representa uma mudança estrutural no 
        planejamento tributário brasileiro. Empresas e sócios precisam agir estrategicamente em 2025 
        para proteger patrimônios acumulados e estabelecer novas rotinas de distribuição.
      </p>
      <p>
        <strong>Não espere a aprovação final do PL</strong>. O planejamento antecipado garante mais 
        alternativas e segurança jurídica.
      </p>
    </BlogPostTemplate>
  );
}
