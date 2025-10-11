import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, AlertTriangle, Calendar, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ContabilidadeLucroReal() {
  const relatedPosts = [
    {
      title: "Lucro Real com Estratégia",
      slug: "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber",
      category: "Lucro Real"
    },
    {
      title: "Estudo Tributário: Como tomar decisões fiscais",
      slug: "estudo-tributario-tomar-decisoes",
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
      title="Contabilidade Lucro Real: Por que mudar de regime exige organização e como se preparar"
      description="Mudança para Lucro Real exige preparação adequada. Saiba como se organizar para uma transição bem-sucedida."
      keywords="mudança regime tributário, lucro real, transição fiscal, organização contábil"
      canonicalUrl="/blog/contabilidade-lucro-real-por-que-mudar-de-regime"
      ogImage="/images/blog/contabilidade-lucro-real.jpg"
      category="Lucro Real"
      categorySlug="lucro-real"
      author={authorInfo}
      publishedDate="2025-06-28"
      readingTime="7 min de leitura"
      heroImage="/images/blog/contabilidade-lucro-real.jpg"
      heroImageAlt="Preparação para mudança para regime de Lucro Real"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        Migrar para Lucro Real sem preparação adequada pode gerar caos operacional e perda de benefícios 
        fiscais. Entenda por que a transição exige organização estruturada e como se preparar corretamente.
      </p>

      <h2>Por Que Mudar Para Lucro Real?</h2>
      <p>
        A mudança para Lucro Real geralmente acontece em três situações:
      </p>

      <div className="grid gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">1. Obrigatoriedade Legal</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">
              Faturamento ultrapassou R$ 78 milhões/ano ou empresa se enquadra em outra situação de 
              obrigatoriedade (instituição financeira, lucros no exterior, etc.).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2. Vantagem Tributária</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">
              Estudo tributário identificou que Lucro Real gerará economia significativa em relação 
              ao Simples ou Presumido (comum em empresas com margens baixas ou muitas despesas dedutíveis).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">3. Preparação Para Crescimento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">
              Empresa em expansão decide migrar preventivamente para ter controles mais robustos e 
              aproveitar benefícios do Lucro Real (créditos fiscais, compensação de prejuízos).
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Por Que a Mudança Exige Organização?</h2>

      <h3>1. Contabilidade Muito Mais Complexa</h3>
      <p>
        No Lucro Real, a contabilidade deixa de ser simplificada e passa a exigir:
      </p>
      <ul>
        <li><strong>Escrituração contábil completa:</strong> Todos os fatos contábeis precisam ser registrados</li>
        <li><strong>Controle de LALUR:</strong> Livro de Apuração do Lucro Real com ajustes fiscais</li>
        <li><strong>Conciliações mensais:</strong> Bancos, estoques, contas a receber/pagar</li>
        <li><strong>Controle de créditos fiscais:</strong> PIS/Cofins, ICMS, IPI</li>
      </ul>

      <h3>2. Mais Obrigações Acessórias</h3>
      <p>
        Empresas no Lucro Real precisam entregar:
      </p>
      <ul className="text-sm">
        <li>ECF (Escrituração Contábil Fiscal) — anual</li>
        <li>ECD (Escrituração Contábil Digital) — anual</li>
        <li>EFD-Contribuições (PIS/Cofins) — mensal</li>
        <li>DCTF (Declaração de Débitos e Créditos Tributários) — mensal</li>
        <li>SPED Fiscal (se aplicável) — mensal</li>
      </ul>

      <h3>3. Exigência de Controles Internos</h3>
      <p>
        Não basta ter boa contabilidade externa — a empresa precisa ter:
      </p>
      <ul>
        <li>Processos internos de compras documentados</li>
        <li>Validação de notas fiscais de entrada</li>
        <li>Gestão de estoques precisa</li>
        <li>Controle de imobilizado (depreciação)</li>
        <li>Segregação de despesas pessoais vs. empresariais</li>
      </ul>

      <Card className="my-6 border-amber-200 bg-amber-50/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Atenção: Transição Mal Feita
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            Empresas que migram para Lucro Real sem preparação enfrentam:
          </p>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Informações contábeis atrasadas ou incorretas</li>
            <li>• Perda de créditos fiscais por falta de controle</li>
            <li>• Multas por obrigações acessórias entregues incorretamente</li>
            <li>• Pagamento a maior de tributos</li>
            <li>• Impossibilidade de tomar decisões baseadas em dados</li>
          </ul>
        </CardContent>
      </Card>

      <h2>Cronograma de Preparação (6-12 Meses Antes)</h2>

      <div className="space-y-4 my-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">12 Meses Antes: Decisão e Estudo</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Realizar estudo tributário comparativo (Simples/Presumido vs. Lucro Real)</li>
              <li>• Calcular economia esperada</li>
              <li>• Avaliar custo de adequação (honorários, sistemas, processos)</li>
              <li>• Tomar decisão formal de mudança</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">9-10 Meses Antes: Sistemas e Processos</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Avaliar se ERP atual suporta Lucro Real (ou contratar novo)</li>
              <li>• Implementar controles de estoque (se ainda não houver)</li>
              <li>• Criar processo de validação de notas fiscais de entrada</li>
              <li>• Implementar conciliação bancária mensal</li>
              <li>• Organizar documentação de imobilizado</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">6 Meses Antes: Contabilidade e Treinamento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Contratar escritório contábil especializado em Lucro Real (se necessário)</li>
              <li>• Iniciar escrituração contábil completa (mesmo ainda em outro regime)</li>
              <li>• Treinar equipe financeira nos novos processos</li>
              <li>• Educar setor de compras sobre importância de NF corretas</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">3 Meses Antes: Ajustes Finais</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Testar cálculo de IRPJ/CSLL no Lucro Real com dados reais</li>
              <li>• Simular preenchimento de obrigações acessórias</li>
              <li>• Validar todos os controles internos</li>
              <li>• Preparar comunicação para fornecedores (se houver mudanças em NF)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Janeiro (Ano da Mudança): Início Oficial</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Comunicar Receita Federal sobre opção pelo Lucro Real</li>
              <li>• Iniciar apuração mensal de IRPJ/CSLL</li>
              <li>• Acompanhar rigorosamente créditos fiscais</li>
              <li>• Reuniões mensais com contabilidade para análise de resultados</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2>Checklist de Preparação</h2>

      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FileCheck className="h-5 w-5 text-primary" />
          Antes de Migrar, Garanta Que Você Tem:
        </h3>
        <div className="space-y-3 text-sm">
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Estudo tributário comprovando vantagem do Lucro Real
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              ERP configurado para Lucro Real e testado
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Controle de estoque implantado e funcionando
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Processo de validação de notas fiscais de entrada
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Conciliação bancária mensal em dia
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Controle de imobilizado completo (bens, datas de aquisição, valores)
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Escritório contábil especializado em Lucro Real contratado
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Equipe interna treinada nos novos processos
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Orçamento aprovado para honorários contábeis maiores
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Simulação de obrigações acessórias testada
            </span>
          </label>
        </div>
      </div>

      <h2>Erros Comuns na Transição</h2>

      <ul>
        <li><strong>Migrar sem estudo prévio:</strong> Descobrir depois que não há vantagem real</li>
        <li><strong>Não investir em sistemas:</strong> Tentar fazer Lucro Real com ferramentas inadequadas</li>
        <li><strong>Não treinar equipe:</strong> Processos novos sem capacitação geram erros</li>
        <li><strong>Trocar de contabilidade sem planejamento:</strong> Perda de histórico e conhecimento do negócio</li>
        <li><strong>Subestimar complexidade:</strong> Achar que é "só mudar de regime"</li>
      </ul>

      <h2>Custos da Transição</h2>

      <h3>Investimentos Necessários:</h3>
      <ul className="text-sm">
        <li><strong>Estudo tributário:</strong> R$ 5.000 a R$ 30.000 (depende do porte)</li>
        <li><strong>Upgrade de ERP:</strong> R$ 10.000 a R$ 50.000 (se necessário)</li>
        <li><strong>Treinamentos:</strong> R$ 3.000 a R$ 10.000</li>
        <li><strong>Consultoria de transição:</strong> R$ 10.000 a R$ 40.000</li>
        <li><strong>Aumento de honorários contábeis:</strong> +50% a +100% mensais</li>
      </ul>

      <h3>Retorno Esperado:</h3>
      <p className="text-sm">
        Se bem planejado, a economia tributária no Lucro Real deve <strong>pagar todos os custos de 
        transição</strong> em 6 a 18 meses. Após isso, é economia líquida ano após ano.
      </p>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">A OSP Conduz Toda a Transição</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Com experiência em centenas de migrações para Lucro Real, a OSP oferece acompanhamento 
          completo: estudo inicial, planejamento de transição, implementação de controles e 
          contabilidade especializada.
        </p>
        <Link href="/contato">
          <Button size="lg" className="gap-2">
            Agende uma Conversa
            <TrendingUp className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        Migrar para Lucro Real é uma decisão estratégica que pode gerar economia significativa, 
        mas exige <strong>preparação estruturada</strong>. Empresas que se organizam adequadamente 
        colhem os benefícios rapidamente. As que migram sem planejamento enfrentam caos e podem 
        até perder dinheiro.
      </p>
      <p>
        <strong>Não subestime a complexidade.</strong> Conte com especialistas e siga um cronograma 
        de preparação para garantir uma transição bem-sucedida.
      </p>
    </BlogPostTemplate>
  );
}
