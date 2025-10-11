import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, Calculator, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function LucroRealEstrategia() {
  const relatedPosts = [
    {
      title: "Estudo Tributário: Como tomar decisões fiscais",
      slug: "estudo-tributario-tomar-decisoes",
      category: "Lucro Real"
    },
    {
      title: "Contabilidade Lucro Real: Por que mudar de regime",
      slug: "contabilidade-lucro-real-por-que-mudar-de-regime",
      category: "Lucro Real"
    },
    {
      title: "Sua contabilidade está impulsionando ou travando o crescimento",
      slug: "sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio",
      category: "Lucro Real"
    }
  ];

  return (
    <BlogPostTemplate
      title="Lucro Real com Estratégia: O Que Toda Empresa Precisa Saber Antes de Operar Nesse Regime"
      description="Guia completo sobre o regime de Lucro Real: quando optar, vantagens, desafios e como maximizar benefícios fiscais."
      keywords="lucro real, regime tributário, planejamento tributário, apuração fiscal"
      canonicalUrl="/blog/lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber"
      ogImage="/images/blog/lucro-real-estrategia.png"
      category="Lucro Real"
      categorySlug="lucro-real"
      author={authorInfo}
      publishedDate="2025-07-11"
      readingTime="9 min de leitura"
      heroImage="/images/blog/lucro-real-estrategia.png"
      heroImageAlt="Estratégias para Lucro Real e planejamento tributário"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        O Lucro Real não é apenas um regime tributário — é uma ferramenta estratégica que, quando bem 
        utilizada, pode gerar economia significativa e insights valiosos sobre o negócio. Entenda como 
        operar com inteligência nesse regime.
      </p>

      <h2>O Que é o Lucro Real?</h2>
      <p>
        Lucro Real é o regime tributário onde <strong>IRPJ e CSLL</strong> são calculados sobre o lucro 
        contábil efetivamente apurado, ajustado por adições e exclusões previstas na legislação fiscal.
      </p>

      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-3">Alíquotas do Lucro Real:</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between pb-2 border-b">
            <span><strong>IRPJ:</strong> 15% + adicional de 10% sobre lucro acima de R$ 20 mil/mês</span>
            <span className="font-mono text-primary">até 25%</span>
          </div>
          <div className="flex justify-between">
            <span><strong>CSLL:</strong> Contribuição Social sobre o Lucro Líquido</span>
            <span className="font-mono text-primary">9%</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          * Carga máxima combinada de 34% sobre o lucro, mas pode ser muito menor com planejamento adequado
        </p>
      </div>

      <h2>Quando o Lucro Real é Obrigatório?</h2>
      <p>
        Algumas empresas <strong>devem obrigatoriamente</strong> optar pelo Lucro Real:
      </p>
      <ul>
        <li>Faturamento anual superior a <strong>R$ 78 milhões</strong></li>
        <li>Instituições financeiras (bancos, cooperativas de crédito, seguradoras)</li>
        <li>Empresas com lucros, rendimentos ou ganhos de capital no exterior</li>
        <li>Empresas com benefícios fiscais de isenção ou redução de impostos</li>
        <li>Factoring e empresas de securitização</li>
      </ul>

      <h2>Quando o Lucro Real é Vantajoso (Mesmo Não Sendo Obrigatório)?</h2>

      <div className="grid gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Calculator className="h-5 w-5 text-primary" />
              Margens de Lucro Baixas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Se sua margem de lucro real é <strong>menor que a presumida</strong> (8% para comércio/indústria 
              ou 32% para serviços), o Lucro Real pode gerar economia significativa.
            </p>
            <div className="bg-accent border border-primary/40 rounded p-3 mt-3 text-xs">
              <strong>Exemplo:</strong> Empresa de serviços com receita de R$ 10 milhões e lucro real de 
              R$ 1,5 milhão (15%) pagará menos no Lucro Real do que no Presumido.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              Despesas Operacionais Elevadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Empresas com muitas despesas dedutíveis (folha de pagamento, aluguéis, marketing, tecnologia) 
              se beneficiam do Lucro Real, pois <strong>todas as despesas legítimas reduzem a base de cálculo</strong>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              Prejuízos Fiscais Acumulados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No Lucro Real, prejuízos fiscais podem ser <strong>compensados</strong> em até 30% do lucro de 
              exercícios futuros, reduzindo tributos por anos após um período de investimento ou crise.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Target className="h-5 w-5 text-primary" />
              Fase de Investimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Empresas em expansão com muitos investimentos (contratações, marketing, desenvolvimento) podem 
              ter lucro reduzido ou até prejuízo temporário. No Lucro Real, pagam menos ou nada de IRPJ/CSLL.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Desafios do Lucro Real</h2>

      <h3>1. Contabilidade Mais Complexa</h3>
      <p>
        O Lucro Real exige <strong>contabilidade rigorosa e completa</strong>:
      </p>
      <ul>
        <li>Escrituração contábil detalhada de todas as operações</li>
        <li>Conciliação mensal de contas</li>
        <li>Controle de LALUR (Livro de Apuração do Lucro Real)</li>
        <li>Maior volume de obrigações acessórias (ECF, ECD, etc.)</li>
      </ul>

      <h3>2. Custo Contábil Mais Alto</h3>
      <p>
        Honorários contábeis para Lucro Real são tipicamente <strong>50% a 100% mais altos</strong> que 
        para Simples ou Presumido, devido à complexidade.
      </p>

      <h3>3. Exige Organização Financeira</h3>
      <p>
        Não basta ter contabilidade boa — a empresa precisa de:
      </p>
      <ul>
        <li>Controles internos eficientes</li>
        <li>Processos de compras e vendas documentados</li>
        <li>Conciliação bancária mensal</li>
        <li>Gestão de estoques precisa</li>
      </ul>

      <h2>Como Maximizar Benefícios no Lucro Real</h2>

      <div className="space-y-4 my-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">1. Planeje Despesas Dedutíveis</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground mb-2">
              Toda despesa necessária, usual e devidamente comprovada é dedutível. Aproveite:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Salários e encargos</li>
              <li>• Aluguéis e condomínios</li>
              <li>• Marketing e publicidade</li>
              <li>• Tecnologia e software</li>
              <li>• Treinamentos e capacitação</li>
              <li>• Despesas com veículos (proporcional ao uso empresarial)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2. Gerencie Prejuízos Estrategicamente</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">
              Se você teve prejuízo fiscal em anos anteriores, pode compensar até 30% do lucro atual. 
              Isso reduz significativamente a base de cálculo por vários anos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">3. Controle Rigoroso de Notas Fiscais</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">
              Toda despesa só é dedutível com nota fiscal. Implemente processos para garantir que 
              100% das compras empresariais sejam documentadas corretamente.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">4. Apuração Trimestral vs. Anual</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground mb-2">
              Você pode escolher entre:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• <strong>Trimestral:</strong> Apuração definitiva a cada 3 meses (menos flexível)</li>
              <li>• <strong>Anual:</strong> Pagamentos mensais por estimativa + ajuste no final do ano (mais estratégico)</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              A opção anual geralmente oferece mais oportunidades de planejamento.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Lucro Real + Reforma Tributária</h2>
      <p>
        Com a Reforma Tributária chegando, o Lucro Real ganha <strong>ainda mais relevância</strong>:
      </p>
      <ul>
        <li>Empresas em Lucro Real terão vantagem no aproveitamento de créditos de CBS/IBS</li>
        <li>Contabilidade já estará estruturada para os novos tributos</li>
        <li>Controles necessários para Lucro Real são os mesmos exigidos pela Reforma</li>
      </ul>

      <Card className="my-6 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Transição Estratégica</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="text-muted-foreground">
            Se você está considerando migrar para Lucro Real, <strong>2025 é um ano ideal</strong>. 
            Você terá um ano completo para organizar processos antes da entrada em vigor da CBS em 2026.
          </p>
        </CardContent>
      </Card>

      <h2>Quando NÃO Escolher Lucro Real?</h2>
      <p>
        O Lucro Real pode não ser vantajoso se:
      </p>
      <ul>
        <li>Margens de lucro são consistentemente altas (acima de 32% para serviços)</li>
        <li>Poucas despesas dedutíveis (negócios muito enxutos)</li>
        <li>Falta de organização financeira e controles internos</li>
        <li>Impossibilidade de arcar com honorários contábeis mais altos</li>
      </ul>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Faça um Estudo Tributário Comparativo</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A OSP realiza estudos detalhados comparando Lucro Real, Presumido e Simples Nacional, 
          calculando a economia real para seu negócio específico.
        </p>
        <Link href="/solucoes/osp360">
          <Button size="lg" className="gap-2">
            Solicite Seu Estudo Tributário
            <Calculator className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        O Lucro Real é um regime poderoso quando usado estrategicamente. Exige organização e 
        investimento em contabilidade de qualidade, mas pode gerar economia tributária significativa 
        e fornecer informações gerenciais valiosas para decisões empresariais.
      </p>
      <p>
        <strong>Não escolha seu regime tributário no "achismo".</strong> Faça um estudo técnico 
        comparando as opções e tome uma decisão baseada em números reais.
      </p>
    </BlogPostTemplate>
  );
}
