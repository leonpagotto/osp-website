import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Ban, Building2, Percent } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ImpostoSeletivo() {
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
      title="Imposto Seletivo e regimes diferenciados na Reforma Tributária: riscos, exceções e como se preparar"
      description="Entenda o Imposto Seletivo e os regimes diferenciados da Reforma Tributária e seus impactos em setores específicos."
      keywords="imposto seletivo, regimes diferenciados, reforma tributária, tributação específica"
      canonicalUrl="/blog/imposto-seletivo-e-regimes-diferenciados-na-reforma-tributaria"
      ogImage="/images/blog/imposto-seletivo.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-13"
      readingTime="7 min de leitura"
      heroImage="/images/blog/imposto-seletivo.png"
      heroImageAlt="Imposto seletivo e regimes diferenciados da reforma tributária"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        Além de CBS e IBS, a Reforma Tributária cria o Imposto Seletivo e diversos regimes diferenciados. 
        Entenda como esses mecanismos funcionam e se sua empresa está no alvo.
      </p>

      <h2>O Que é o Imposto Seletivo?</h2>
      <p>
        O Imposto Seletivo (IS) é um <strong>tributo federal adicional</strong> sobre bens e serviços 
        considerados prejudiciais à saúde ou ao meio ambiente. É popularmente chamado de <strong>"imposto 
        do pecado"</strong> e tem caráter extrafiscal — seu objetivo principal não é arrecadar, mas 
        desestimular o consumo.
      </p>

      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-600" />
          Produtos e Serviços Sujeitos ao Imposto Seletivo
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Prejudiciais à Saúde:</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Cigarros e derivados do tabaco</li>
              <li>• Bebidas alcoólicas</li>
              <li>• Bebidas açucaradas</li>
              <li>• Alimentos ultraprocessados</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Prejudiciais ao Meio Ambiente:</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Veículos movidos exclusivamente a combustíveis fósseis</li>
              <li>• Embarcações e aeronaves (potencialmente)</li>
              <li>• Produtos minerais (a definir)</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Características do Imposto Seletivo</h3>
      <ul>
        <li><strong>Alíquotas específicas:</strong> Variam conforme o grau de nocividade do produto</li>
        <li><strong>Não gera crédito:</strong> Diferente de CBS/IBS, o IS não é compensável na cadeia</li>
        <li><strong>Arrecadação federal:</strong> Receita vai para a União</li>
        <li><strong>Adicional:</strong> Incide junto com CBS e IBS, não substitui</li>
      </ul>

      <h2>Impactos Por Setor</h2>

      <div className="grid gap-4 not-prose my-8">
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Ban className="h-5 w-5 text-orange-600" />
              Tabaco e Bebidas Alcoólicas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Impacto: ALTO</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Setores mais afetados. Alíquotas do IS podem ser muito elevadas, aumentando 
              significativamente o preço final. Estratégias de precificação e volume de vendas 
              precisarão ser completamente revisadas.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Flame className="h-5 w-5 text-amber-600" />
              Bebidas Açucaradas e Ultraprocessados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Impacto: MÉDIO</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Refrigerantes, energéticos e alimentos ultraprocessados entram no radar. 
              Empresas devem considerar reformulação de produtos para reduzir açúcar e 
              aditivos prejudiciais.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" />
              Automotivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Impacto: MÉDIO</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Veículos puramente a combustão podem ter IS adicional. Híbridos e elétricos 
              estarão isentos, incentivando transição energética. Montadoras precisam acelerar 
              eletrificação de portfólio.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Regimes Diferenciados (Alíquotas Reduzidas)</h2>
      <p>
        Para equilibrar o sistema, a Reforma cria regimes com <strong>alíquotas reduzidas</strong> 
        para setores essenciais ou sensíveis:
      </p>

      <div className="space-y-4 my-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Percent className="h-5 w-5 text-green-600" />
              Redução de 60% (aprox. 10-12%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Serviços de saúde</li>
              <li>• Serviços de educação</li>
              <li>• Transporte coletivo de passageiros</li>
              <li>• Produtos agropecuários, pesqueiros, florestais e extrativistas</li>
              <li>• Atividades artísticas e culturais</li>
              <li>• Bens e serviços relacionados a segurança e soberania nacional</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Percent className="h-5 w-5 text-blue-600" />
              Alíquota Zero (0%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Produtos da Cesta Básica Nacional</li>
              <li>• Medicamentos e dispositivos médicos essenciais</li>
              <li>• Produtos agropecuários in natura</li>
              <li>• Serviços de educação de ensino superior (Prouni)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2>Como Saber Se Sua Empresa Está Impactada?</h2>

      <h3>Passo 1: Classifique Seus Produtos/Serviços</h3>
      <p>
        Identifique se algum produto ou serviço da sua empresa se enquadra em:
      </p>
      <ul>
        <li>Lista do Imposto Seletivo (maior tributação)</li>
        <li>Regimes diferenciados (menor tributação)</li>
        <li>Regime padrão CBS+IBS (tributação normal)</li>
      </ul>

      <h3>Passo 2: Calcule o Impacto Financeiro</h3>
      <p>
        Para cada categoria, simule:
      </p>
      <ul>
        <li>Aumento no custo tributário</li>
        <li>Impacto no preço ao consumidor</li>
        <li>Potencial redução de demanda</li>
        <li>Necessidade de reformulação de produtos</li>
      </ul>

      <h3>Passo 3: Planeje Ações Estratégicas</h3>

      <Card className="my-6 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Estratégias de Adaptação</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>
              <strong>Se sujeito ao IS:</strong>
              <ul className="ml-4 mt-1 space-y-1">
                <li>• Considere reformulação para sair da lista (ex: reduzir açúcar)</li>
                <li>• Reavalie portfólio de produtos</li>
                <li>• Prepare-se para potencial queda de demanda</li>
                <li>• Invista em comunicação sobre mudanças</li>
              </ul>
            </li>
            <li>
              <strong>Se beneficiário de regime diferenciado:</strong>
              <ul className="ml-4 mt-1 space-y-1">
                <li>• Garanta enquadramento correto</li>
                <li>• Documente requisitos para manter benefício</li>
                <li>• Aproveite competitividade tributária</li>
              </ul>
            </li>
          </ul>
        </CardContent>
      </Card>

      <h2>Cronologia de Regulamentação</h2>
      <p>
        Muitos detalhes do Imposto Seletivo e regimes diferenciados ainda serão <strong>definidos 
        por lei complementar</strong>:
      </p>
      <ul>
        <li>Lista exata de produtos sujeitos ao IS</li>
        <li>Alíquotas específicas para cada categoria</li>
        <li>Critérios técnicos de enquadramento</li>
        <li>Regras de transição</li>
      </ul>

      <p className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-sm my-6">
        <strong>Importante:</strong> Acompanhe as regulamentações que serão publicadas entre 2025 e 2026. 
        As listas podem mudar com base em estudos técnicos e pressão de setores afetados.
      </p>

      <h2>Oportunidades Para Empresas</h2>
      <p>
        Embora o Imposto Seletivo seja um desafio para alguns, cria <strong>oportunidades de mercado</strong>:
      </p>
      <ul>
        <li><strong>Produtos saudáveis:</strong> Alternativas sem IS ganham competitividade</li>
        <li><strong>Inovação:</strong> Desenvolvimento de produtos reformulados</li>
        <li><strong>Sustentabilidade:</strong> Produtos ecológicos ficam relativamente mais baratos</li>
        <li><strong>Diferenciação:</strong> Posicionamento premium em categorias beneficiadas</li>
      </ul>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Avalie o Impacto no Seu Negócio</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A OSP pode ajudar a identificar se sua empresa está sujeita ao Imposto Seletivo ou 
          pode se beneficiar de regimes diferenciados, calculando impactos e estratégias.
        </p>
        <Link href="/contato">
          <Button size="lg" className="gap-2">
            Fale com um Especialista
            <Flame className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        O Imposto Seletivo e os regimes diferenciados adicionam camadas de complexidade à Reforma 
        Tributária. Empresas precisam entender em qual categoria se enquadram e planejar adequadamente, 
        seja para minimizar impactos negativos ou aproveitar oportunidades de benefícios fiscais.
      </p>
      <p>
        <strong>Não espere as regulamentações finais.</strong> Comece a análise agora para ter tempo 
        de reagir estrategicamente.
      </p>
    </BlogPostTemplate>
  );
}
