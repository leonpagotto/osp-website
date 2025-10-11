import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingCart, Users, TrendingDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function CashbackCestaBasica() {
  const relatedPosts = [
    {
      title: "CBS e IBS na Reforma Tributária",
      slug: "cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025",
      category: "Reforma Tributária"
    },
    {
      title: "Reforma Tributária 2025: Guia Prático",
      slug: "reforma-tributaria-2025-guia-pratico-para-empresarios",
      category: "Reforma Tributária"
    }
  ];

  return (
    <BlogPostTemplate
      title="Cashback, Cesta Básica e Justiça Fiscal: o que muda na tributação"
      description="Cashback tributário e Cesta Básica Nacional representam avanços de justiça fiscal. Entenda os impactos operacionais para sua empresa."
      keywords="cashback tributário, cesta básica, CBS, IBS, reforma tributária, NCM, classificação fiscal"
      canonicalUrl="/blog/cashback-cesta-basica-e-justica-fiscal-o-que-muda-na-tributacao"
      ogImage="/images/blog/cashback-cesta-basica.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-13"
      readingTime="6 min de leitura"
      heroImage="/images/blog/cashback-cesta-basica.png"
      heroImageAlt="Cesta básica e cashback fiscal para famílias de baixa renda"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        A Reforma Tributária introduz dois mecanismos importantes de justiça social: o cashback tributário 
        e a Cesta Básica Nacional com alíquota zero. Entenda como esses mecanismos funcionam e os impactos 
        operacionais para empresas.
      </p>

      <h2>O Que é o Cashback Tributário?</h2>
      <p>
        O cashback tributário é uma devolução parcial de impostos (CBS e IBS) paga por famílias de baixa 
        renda inscritas no Cadastro Único (CadÚnico). O objetivo é reduzir o impacto regressivo do IVA 
        (Imposto sobre Valor Agregado) nas famílias mais vulneráveis.
      </p>

      <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              Quem Recebe o Cashback?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Famílias inscritas no <strong>CadÚnico</strong> com renda per capita de até meio salário mínimo 
              terão direito à devolução de parte dos tributos pagos em consumo.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <TrendingDown className="h-5 w-5 text-primary" />
              Percentual de Devolução
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              O percentual de cashback será de <strong>20% a 100%</strong> dos tributos CBS e IBS pagos, 
              variando conforme o tipo de bem ou serviço consumido.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Cesta Básica Nacional: Alíquota Zero</h2>
      <p>
        A Reforma Tributária cria a <strong>Cesta Básica Nacional</strong>, uma lista de produtos essenciais 
        que terão <strong>alíquota zero</strong> de CBS e IBS. Isso significa que esses produtos não sofrerão 
        aumento de preço devido aos novos tributos.
      </p>

      <h3>Produtos Incluídos na Cesta Básica</h3>
      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <h4 className="font-semibold mb-3">Lista Prevista (sujeita a regulamentação):</h4>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <ul className="space-y-1">
            <li>✓ Arroz</li>
            <li>✓ Feijão</li>
            <li>✓ Macarrão</li>
            <li>✓ Farinha de trigo</li>
            <li>✓ Farinha de mandioca</li>
            <li>✓ Açúcar</li>
            <li>✓ Óleo de soja</li>
            <li>✓ Manteiga</li>
          </ul>
          <ul className="space-y-1">
            <li>✓ Margarina</li>
            <li>✓ Café</li>
            <li>✓ Leite</li>
            <li>✓ Pão francês</li>
            <li>✓ Carnes (bovina, suína, aves)</li>
            <li>✓ Peixes</li>
            <li>✓ Ovos</li>
            <li>✓ Frutas e hortaliças nacionais</li>
          </ul>
        </div>
      </div>

      <h2>Impactos Para Empresas</h2>

      <h3>1. Varejistas e Supermercados</h3>
      <p>
        Empresas do varejo alimentar precisarão <strong>identificar corretamente</strong> os produtos da 
        Cesta Básica Nacional para aplicar alíquota zero. Erros na classificação podem gerar:
      </p>
      <ul>
        <li>Cobrança indevida de tributos</li>
        <li>Perda de direito a créditos fiscais</li>
        <li>Passivos tributários em fiscalizações</li>
      </ul>

      <Card className="my-6 border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-3">
            <ShoppingCart className="h-5 w-5 text-amber-600" />
            Atenção: Classificação Fiscal (NCM)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            A correta <strong>classificação NCM</strong> (Nomenclatura Comum do Mercosul) dos produtos será 
            fundamental. Produtos similares podem ter tratamentos tributários diferentes.
          </p>
        </CardContent>
      </Card>

      <h3>2. Indústria e Atacado</h3>
      <p>
        Fabricantes e atacadistas de produtos da Cesta Básica terão <strong>direito a créditos fiscais</strong> 
        mesmo com alíquota zero na saída. Isso porque o sistema é não cumulativo. Porém, será necessário:
      </p>
      <ul>
        <li>Segregar produtos da Cesta Básica no sistema</li>
        <li>Controlar rigorosamente créditos de CBS e IBS</li>
        <li>Documentar corretamente toda a cadeia tributária</li>
      </ul>

      <h3>3. Operação do Cashback</h3>
      <p>
        Para empresas, o cashback será <strong>operacionalmente neutro</strong>. O próprio governo fará a 
        devolução direta para o consumidor, sem envolvimento do estabelecimento comercial. Porém:
      </p>
      <ul>
        <li>Sistemas de emissão de notas fiscais precisarão identificar o CPF do consumidor</li>
        <li>Notas fiscais eletrônicas terão campos específicos para cashback</li>
        <li>Consumidores poderão exigir CPF na nota para garantir o benefício</li>
      </ul>

      <h2>Como se Preparar?</h2>

      <div className="grid gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">1. Revisar Cadastro de Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Identifique todos os produtos que se enquadram na Cesta Básica Nacional e verifique 
              a classificação NCM correta.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2. Atualizar Sistemas Fiscais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sistemas de ERP e emissão de notas fiscais precisarão diferenciar produtos com alíquota 
              zero e calcular corretamente créditos fiscais.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">3. Treinar Equipes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Equipes de fiscal, compras e cadastro de produtos devem ser treinadas para entender 
              as novas regras e aplicá-las corretamente.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">4. Monitorar Regulamentações</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              A lista final de produtos e detalhes operacionais ainda serão regulamentados. 
              Acompanhe as publicações oficiais.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Justiça Fiscal na Prática</h2>
      <p>
        Esses mecanismos representam um avanço importante no sistema tributário brasileiro. 
        Historicamente, impostos sobre consumo (como o antigo ICMS e PIS/Cofins) penalizam 
        desproporcionalmente famílias de baixa renda.
      </p>
      <p>
        Com alíquota zero na Cesta Básica e cashback, a Reforma busca tornar o novo IVA brasileiro 
        mais justo e progressivo, protegendo o poder de compra das famílias mais vulneráveis.
      </p>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Dúvidas Sobre Classificação Fiscal?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A OSP pode ajudar sua empresa a classificar corretamente os produtos, adequar sistemas 
          e garantir conformidade com as novas regras.
        </p>
        <Link href="/contato">
          <Button size="lg" className="gap-2">
            Fale com um Especialista
            <Heart className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        Cashback tributário e Cesta Básica Nacional são pilares de justiça social da Reforma Tributária. 
        Para empresas, representam novos desafios operacionais que exigem preparação adequada em sistemas, 
        processos e capacitação de equipes.
      </p>
      <p>
        <strong>Comece a preparação agora</strong> para garantir conformidade desde o início da vigência 
        das novas regras.
      </p>
    </BlogPostTemplate>
  );
}
