import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Target, TrendingUp, Building2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function EC132Impactos() {
  const relatedPosts = [
    {
      title: "Reforma Tributária 2025: Guia Prático",
      slug: "reforma-tributaria-2025-guia-pratico-para-empresarios",
      category: "Reforma Tributária"
    },
    {
      title: "CBS e IBS na Reforma Tributária",
      slug: "cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025",
      category: "Reforma Tributária"
    },
    {
      title: "Checklist OSP: Preparação para Reforma",
      slug: "checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria",
      category: "Reforma Tributária"
    }
  ];

  return (
    <BlogPostTemplate
      title="Reforma Tributária 2025: impactos práticos da EC 132 para empresas em crescimento"
      description="Análise detalhada dos impactos da Emenda Constitucional 132/2023 para empresas que estão expandindo suas operações."
      keywords="EC 132, reforma tributária, empresas crescimento, expansão empresarial"
      canonicalUrl="/blog/reforma-tributaria-2025-impactos-praticos-da-ec-132-para-empresas-em-crescimento"
      ogImage="/images/blog/ec-132-crescimento.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-13"
      readingTime="8 min de leitura"
      heroImage="/images/blog/ec-132-crescimento.png"
      heroImageAlt="Impactos da EC 132 para empresas em crescimento"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        A Emenda Constitucional 132/2023 é a base legal da Reforma Tributária. Para empresas em fase 
        de crescimento acelerado, entender seus impactos práticos é essencial para planejar expansão, 
        investimentos e estratégia competitiva nos próximos anos.
      </p>

      <h2>O Que é a EC 132/2023?</h2>
      <p>
        A Emenda Constitucional 132, aprovada em dezembro de 2023, é o marco legal que permite a 
        implementação da maior reforma tributária em décadas no Brasil. Ela <strong>altera 33 artigos 
        da Constituição Federal</strong> relacionados ao sistema tributário sobre consumo.
      </p>

      <h3>Principais Mudanças Constitucionais:</h3>
      <ul>
        <li>Extinção futura de ICMS, ISS, IPI, PIS e Cofins</li>
        <li>Criação de CBS (federal) e IBS (estadual/municipal)</li>
        <li>Criação do Imposto Seletivo</li>
        <li>Estabelecimento do princípio do destino</li>
        <li>Não cumulatividade plena e ampla</li>
        <li>Regimes diferenciados para setores específicos</li>
      </ul>

      <h2>Por Que Empresas em Crescimento Devem Se Preocupar Mais?</h2>

      <div className="grid gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Rocket className="h-5 w-5 text-primary" />
              1. Decisões de Hoje Impactam Amanhã
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Empresas em expansão tomam decisões estruturantes agora (localização de filiais, 
              estrutura logística, regime tributário) que terão efeito por anos. Ignorar a Reforma 
              pode significar decisões que ficarão obsoletas em 2026-2027.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" />
              2. Investimentos Precisam Considerar Novo Cenário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Investir em novos centros de distribuição, unidades produtivas ou expansão comercial 
              sem considerar o novo modelo tributário pode resultar em <strong>estruturas ineficientes 
              tributariamente</strong> a partir de 2026.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Target className="h-5 w-5 text-primary" />
              3. Vantagem Competitiva Para Quem Se Prepara
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Concorrentes despreparados enfrentarão caos operacional em 2026-2027. Empresas que se 
              antecipam terão <strong>vantagem competitiva clara</strong>: melhor aproveitamento de 
              créditos, sistemas ajustados, equipes treinadas.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Impactos Práticos Por Área do Negócio</h2>

      <h3>Área Fiscal e Contábil</h3>

      <h4>Desafios:</h4>
      <ul>
        <li><strong>Complexidade transitória:</strong> Sistemas precisarão calcular tributos antigos E novos simultaneamente (2026-2032)</li>
        <li><strong>Controle de créditos fiscais:</strong> Gestão rigorosa de CBS/IBS para não perder dinheiro</li>
        <li><strong>Novas obrigações acessórias:</strong> Declarações e formatos diferentes dos atuais</li>
      </ul>

      <h4>Oportunidades:</h4>
      <ul>
        <li>Créditos fiscais mais amplos podem reduzir carga efetiva</li>
        <li>Sistema mais simples no longo prazo (após 2033)</li>
        <li>Menos brechas para guerra fiscal = competição mais justa</li>
      </ul>

      <h3>Área Comercial e Precificação</h3>

      <h4>Desafios:</h4>
      <ul>
        <li><strong>Revisão de preços:</strong> Mudança na carga tributária exige recalculação de margens</li>
        <li><strong>Contratos de longo prazo:</strong> Cláusulas tributárias atuais ficarão desatualizadas</li>
        <li><strong>Comunicação com clientes:</strong> Explicar mudanças de preço relacionadas à Reforma</li>
      </ul>

      <h4>Oportunidades:</h4>
      <ul>
        <li>Reposicionamento de produtos/serviços conforme nova tributação</li>
        <li>Produtos antes penalizados por cascata tributária ficam mais competitivos</li>
        <li>Transparência tributária como diferencial de marketing</li>
      </ul>

      <h3>Área de Logística e Operações</h3>

      <h4>Desafios:</h4>
      <ul>
        <li><strong>Fim da guerra fiscal:</strong> Benefícios de localização em estados específicos desaparecem</li>
        <li><strong>Princípio do destino:</strong> IBS recolhido onde está o cliente, não onde está a empresa</li>
        <li><strong>Reestruturação de malha logística:</strong> Centros de distribuição podem precisar mudar</li>
      </ul>

      <h4>Oportunidades:</h4>
      <ul>
        <li>Escolher localização por motivos operacionais (custo, logística) e não fiscais</li>
        <li>Simplificação de operações interestaduais</li>
        <li>Menos complexidade em substituição tributária</li>
      </ul>

      <h3>Área de TI e Sistemas</h3>

      <h4>Desafios:</h4>
      <ul>
        <li><strong>Atualização de ERPs:</strong> Sistemas precisam calcular CBS/IBS corretamente</li>
        <li><strong>Integração com split payment:</strong> Possível novo modelo de pagamento de tributos</li>
        <li><strong>Adequação de notas fiscais:</strong> Novos campos e informações obrigatórias</li>
      </ul>

      <h4>Oportunidades:</h4>
      <ul>
        <li>Modernização de sistemas legados</li>
        <li>Automação de processos fiscais</li>
        <li>Integração com tecnologias mais modernas</li>
      </ul>

      <h2>Cenários de Impacto Por Setor</h2>

      <div className="space-y-4 my-8">
        <Card className="border-primary/40 bg-accent/80">
          <CardHeader>
            <CardTitle className="text-lg">Setores Potencialmente Beneficiados</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-1 text-muted-foreground">
              <li>✓ <strong>Comércio e indústria:</strong> Créditos fiscais amplos reduzem carga efetiva</li>
              <li>✓ <strong>Exportadores:</strong> Desoneração completa (CBS/IBS zerados) sem burocracia</li>
              <li>✓ <strong>Cadeia longa de produção:</strong> Não cumulatividade elimina cascata tributária</li>
              <li>✓ <strong>Setores com regime diferenciado:</strong> Saúde, educação, transporte (alíquota 60% menor)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-destructive/30 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-lg">Setores com Possível Aumento de Carga</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-1 text-muted-foreground">
              <li>✗ <strong>Serviços de alta margem:</strong> ISS atual (2-5%) pode subir para 26-28% (CBS+IBS)</li>
              <li>✗ <strong>Tecnologia:</strong> Poucos créditos fiscais + alta agregação de valor</li>
              <li>✗ <strong>Consultoria:</strong> Serviços intelectuais com poucos insumos dedutíveis</li>
              <li>✗ <strong>Sujeitos ao Imposto Seletivo:</strong> Bebidas, tabaco, veículos a combustão</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2>Cronograma de Ação Para Empresas em Crescimento</h2>

      <h3>2025 — Ano de Planejamento</h3>
      <ul>
        <li>Realizar estudo tributário detalhado do impacto de CBS/IBS no seu negócio</li>
        <li>Simular cenários de crescimento com novo sistema tributário</li>
        <li>Revisar contratos de longo prazo e incluir cláusulas de revisão tributária</li>
        <li>Avaliar se estrutura logística atual será eficiente após a Reforma</li>
        <li>Começar treinamento de equipes (fiscal, comercial, compras)</li>
      </ul>

      <h3>2026 — Início da CBS (0,9%)</h3>
      <ul>
        <li>Implementar sistemas atualizados para cálculo de CBS</li>
        <li>Testar processos de aproveitamento de créditos fiscais</li>
        <li>Monitorar impacto real vs. projeções</li>
        <li>Ajustar precificação conforme necessário</li>
      </ul>

      <h3>2027 — Início do IBS (0,1%)</h3>
      <ul>
        <li>Adequar sistemas para IBS por destino</li>
        <li>Validar se localização de filiais ainda faz sentido</li>
        <li>Reavaliar cadeia de suprimentos considerando créditos fiscais</li>
      </ul>

      <h3>2029-2032 — Transição Gradual</h3>
      <ul>
        <li>Acompanhar aumento progressivo de CBS/IBS e redução de tributos antigos</li>
        <li>Ajustar estratégias conforme alíquotas finais são definidas</li>
        <li>Aproveitar janelas de oportunidade na transição</li>
      </ul>

      <h2>Checklist de Preparação Para Crescimento Sustentável</h2>

      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4">Antes de Qualquer Grande Decisão de Expansão:</h3>
        <div className="space-y-3 text-sm">
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              <strong>Calcule o impacto tributário</strong> da decisão considerando CBS/IBS (não apenas tributos atuais)
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              <strong>Simule cenários</strong> de aproveitamento de créditos fiscais na nova estrutura
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              <strong>Consulte especialistas</strong> antes de decisões irreversíveis (compra de imóveis, abertura de filiais)
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              <strong>Inclua cláusulas de revisão</strong> em contratos de longo prazo relacionados à Reforma
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              <strong>Planeje investimentos em tecnologia</strong> para suportar o novo sistema tributário
            </span>
          </label>
        </div>
      </div>

      <h2>Oportunidades Únicas Para Empresas em Crescimento</h2>

      <h3>1. Aproveitar a Transição</h3>
      <p>
        Empresas ágeis podem capturar oportunidades durante o período de transição (2026-2032), 
        quando concorrentes maiores estão paralisados pela complexidade.
      </p>

      <h3>2. Posicionamento Estratégico</h3>
      <p>
        Com o fim da guerra fiscal, empresas podem escolher localização puramente por eficiência 
        operacional, sem distorções tributárias.
      </p>

      <h3>3. Diferenciação Pela Conformidade</h3>
      <p>
        Empresas que dominarem o novo sistema rapidamente terão vantagem sobre concorrentes 
        desorganizados, podendo oferecer preços melhores e serviço mais confiável.
      </p>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Cresça Com Inteligência Tributária</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A OSP ajuda empresas em crescimento a navegar pela Reforma Tributária com segurança, 
          identificando impactos, simulando cenários e garantindo que suas decisões de expansão 
          sejam tributariamente eficientes hoje e no futuro.
        </p>
        <Link href="/solucoes/osp360">
          <Button size="lg" className="gap-2">
            Conheça o OSP360
            <TrendingUp className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        A EC 132/2023 não é uma mudança distante — seus efeitos começam em 2026. Para empresas em 
        fase de crescimento, <strong>ignorar a Reforma é arriscar o futuro</strong>. Decisões 
        tomadas hoje sem considerar o novo cenário tributário podem se tornar custosas em poucos anos.
      </p>
      <p>
        <strong>Crescimento sustentável exige planejamento tributário inteligente.</strong> Antecipe-se, 
        prepare-se e transforme a Reforma em vantagem competitiva.
      </p>
    </BlogPostTemplate>
  );
}
