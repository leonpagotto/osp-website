import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCcw, FileText, TrendingUp, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function CBSIBS() {
  const relatedPosts = [
    {
      title: "Reforma Tributária 2025: Guia Prático",
      slug: "reforma-tributaria-2025-guia-pratico-para-empresarios",
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
      title="CBS e IBS na Reforma Tributária: impactos práticos para empresas em 2025"
      description="CBS substitui PIS/Cofins/IPI e IBS substitui ICMS/ISS. Entenda o novo modelo não cumulativo e seus impactos práticos."
      keywords="CBS, IBS, reforma tributária, não cumulativo, crédito tributário, EC 132/2023"
      canonicalUrl="/blog/cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025"
      ogImage="/images/blog/cbs-ibs-reforma.jpg"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-13"
      readingTime="8 min de leitura"
      heroImage="/images/blog/cbs-ibs-reforma.jpg"
      heroImageAlt="Novos tributos CBS e IBS da reforma tributária"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        A Reforma Tributária substitui cinco tributos por dois: a CBS (Contribuição sobre Bens e Serviços) 
        e o IBS (Imposto sobre Bens e Serviços). Entenda como funciona o novo modelo não cumulativo e 
        os impactos práticos para sua empresa.
      </p>

      <h2>O Que São CBS e IBS?</h2>
      
      <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              CBS - Contribuição sobre Bens e Serviços
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Tributo <strong>federal</strong> que substitui:
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• PIS (Programa de Integração Social)</li>
              <li>• Cofins (Contribuição para Financiamento da Seguridade Social)</li>
              <li>• IPI (Imposto sobre Produtos Industrializados)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              IBS - Imposto sobre Bens e Serviços
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Tributo <strong>estadual e municipal</strong> que substitui:
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• ICMS (Imposto sobre Circulação de Mercadorias e Serviços)</li>
              <li>• ISS (Imposto sobre Serviços)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2>Modelo Não Cumulativo</h2>
      <p>
        A principal característica de CBS e IBS é serem <strong>plenamente não cumulativos</strong>. 
        Isso significa que todo tributo pago em uma etapa da cadeia produtiva gera crédito para abater 
        do tributo devido na próxima etapa.
      </p>

      <h3>Como Funciona o Crédito Fiscal?</h3>
      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-4">Exemplo Prático:</h4>
        <div className="space-y-4 text-sm">
          <div className="pb-3 border-b">
            <strong className="block mb-2">Etapa 1: Indústria compra matéria-prima</strong>
            <p className="text-muted-foreground">
              Compra: R$ 100 + R$ 20 (CBS/IBS) = R$ 120 total<br/>
              <span className="text-primary font-medium">Crédito: R$ 20</span>
            </p>
          </div>
          <div className="pb-3 border-b">
            <strong className="block mb-2">Etapa 2: Indústria vende produto acabado</strong>
            <p className="text-muted-foreground">
              Venda: R$ 200 + R$ 40 (CBS/IBS) = R$ 240 total<br/>
              Débito: R$ 40<br/>
              Crédito: -R$ 20<br/>
              <span className="text-primary font-medium">A recolher: R$ 20</span>
            </p>
          </div>
          <div>
            <strong className="block mb-2">Resultado:</strong>
            <p className="text-muted-foreground">
              A indústria só paga sobre o <strong>valor agregado</strong> (R$ 200 - R$ 100 = R$ 100), 
              não sobre o valor total da venda.
            </p>
          </div>
        </div>
      </div>

      <h2>Impactos Práticos Para Empresas</h2>

      <h3>1. Controle de Créditos Mais Rigoroso</h3>
      <p>
        O aproveitamento de créditos fiscais será <strong>fundamental para a competitividade</strong>. 
        Empresas precisarão:
      </p>
      <ul>
        <li>Documentar rigorosamente todas as compras</li>
        <li>Exigir notas fiscais corretas dos fornecedores</li>
        <li>Manter sistema contábil preciso de créditos e débitos</li>
        <li>Reconciliar mensalmente os saldos de créditos</li>
      </ul>

      <Card className="my-6 border-amber-200 bg-amber-50/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-3">
            <RefreshCcw className="h-5 w-5 text-amber-600" />
            Atenção: Créditos Mal Aproveitados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Empresas que não aproveitarem corretamente seus créditos fiscais pagarão <strong>mais 
            impostos do que o necessário</strong>, perdendo competitividade. Um único mês de créditos 
            não aproveitados pode representar milhares de reais perdidos.
          </p>
        </CardContent>
      </Card>

      <h3>2. Fim dos Benefícios Estaduais</h3>
      <p>
        Benefícios fiscais concedidos por estados (como isenções de ICMS) serão <strong>gradualmente 
        extintos</strong>. Empresas que dependem desses benefícios precisam:
      </p>
      <ul>
        <li>Calcular o impacto real no custo tributário</li>
        <li>Reavaliar localização de centros de distribuição</li>
        <li>Renegociar contratos de longo prazo</li>
        <li>Buscar alternativas de eficiência operacional</li>
      </ul>

      <h3>3. Princípio do Destino</h3>
      <p>
        O IBS seguirá o <strong>princípio do destino</strong>: o tributo será recolhido para o estado/município 
        onde o consumidor final está localizado, não onde a empresa vende.
      </p>
      <p>
        <strong>Impacto:</strong> Empresas de e-commerce e varejo com operações interestaduais precisarão 
        ajustar sistemas para recolher o IBS para cada destino de venda.
      </p>

      <h3>4. Alíquota Unificada (mas Alta)</h3>
      <p>
        A alíquota padrão estimada de CBS + IBS ficará entre <strong>26% e 28%</strong>. Porém, como o 
        sistema é não cumulativo, o impacto real depende da margem de agregação de valor de cada empresa.
      </p>

      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-3">Exemplo Comparativo:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong className="block mb-2">Comércio (baixa agregação)</strong>
            <p className="text-muted-foreground">
              Margem: 20%<br/>
              Carga efetiva: ~5,4% sobre venda<br/>
              <span className="text-green-600">Pode reduzir tributos</span>
            </p>
          </div>
          <div>
            <strong className="block mb-2">Serviços (alta agregação)</strong>
            <p className="text-muted-foreground">
              Margem: 80%<br/>
              Carga efetiva: ~22% sobre venda<br/>
              <span className="text-red-600">Pode aumentar tributos</span>
            </p>
          </div>
        </div>
      </div>

      <h2>Cronograma de Transição</h2>
      <div className="space-y-4 my-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2026: Início da CBS (0,9% teste)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              CBS começa com alíquota teste de 0,9%, convivendo com PIS/Cofins.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2027: IBS entra (0,1% teste)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              IBS inicia com alíquota teste, convivendo com ICMS/ISS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2029-2032: Transição Gradual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Aumento gradual de CBS/IBS e redução proporcional de tributos antigos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2033: Sistema Completo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Apenas CBS e IBS em vigor. ICMS, ISS, PIS/Cofins e IPI extintos.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Como se Preparar?</h2>
      <ul>
        <li><strong>Avalie seu fluxo de créditos:</strong> Simule quanto de crédito sua empresa terá direito</li>
        <li><strong>Atualize sistemas:</strong> ERPs precisarão calcular CBS/IBS corretamente</li>
        <li><strong>Treine equipes:</strong> Fiscal, compras e vendas devem entender o novo modelo</li>
        <li><strong>Revise contratos:</strong> Cláusulas tributárias precisam ser atualizadas</li>
        <li><strong>Faça estudos tributários:</strong> Calcule o impacto real no seu negócio</li>
      </ul>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Calcule o Impacto Real na Sua Empresa</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A OSP realiza estudos tributários detalhados para calcular o impacto de CBS e IBS no seu negócio 
          e identificar oportunidades de economia.
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
        CBS e IBS representam a maior transformação tributária em décadas no Brasil. O modelo não 
        cumulativo é mais moderno e eficiente, mas exige controles rigorosos e preparação adequada.
      </p>
      <p>
        <strong>Empresas que se prepararem com antecedência</strong> terão vantagem competitiva, 
        aproveitando melhor os créditos fiscais e evitando erros custosos.
      </p>
    </BlogPostTemplate>
  );
}
