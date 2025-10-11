import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertCircle, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ContabilidadeCrescimento() {
  const relatedPosts = [
    {
      title: "Lucro Real com Estratégia",
      slug: "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber",
      category: "Lucro Real"
    },
    {
      title: "Indicadores Financeiros que todo CEO deveria acompanhar",
      slug: "indicadores-financeiros-ceo",
      category: "Gestão"
    },
    {
      title: "Estudo Tributário: Como tomar decisões fiscais",
      slug: "estudo-tributario-tomar-decisoes",
      category: "Lucro Real"
    }
  ];

  return (
    <BlogPostTemplate
      title="Sua contabilidade está impulsionando ou travando o crescimento do seu negócio?"
      description="Descubra se sua contabilidade é uma parceira estratégica ou apenas uma obrigação burocrática."
      keywords="contabilidade estratégica, crescimento empresarial, gestão contábil, contabilidade consultiva"
      canonicalUrl="/blog/sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio"
      ogImage="/images/blog/contabilidade-crescimento.jpg"
      category="Lucro Real"
      categorySlug="lucro-real"
      author={authorInfo}
      publishedDate="2025-07-11"
      readingTime="6 min de leitura"
      heroImage="/images/blog/contabilidade-crescimento.jpg"
      heroImageAlt="Contabilidade estratégica para crescimento empresarial"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        A diferença entre uma contabilidade burocrática e uma estratégica pode significar milhões em 
        economia fiscal e decisões empresariais mais inteligentes. Descubra em qual lado você está.
      </p>

      <h2>O Teste Rápido: Responda Honestamente</h2>
      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <p className="font-semibold mb-4">Marque quantas afirmações se aplicam à sua contabilidade atual:</p>
        <div className="space-y-3 text-sm">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Meu contador só aparece para entregar guias de impostos ou quando há problema
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Não recebo relatórios gerenciais mensais (DRE, fluxo de caixa, análises)
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Quando preciso tomar decisões importantes, não consulto meu contador
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Nunca fizemos um estudo tributário para ver se estou no regime ideal
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Meu contador não entende do meu negócio nem me faz perguntas sobre ele
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Pago impostos, mas não sei explicar como são calculados
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Nunca recebi sugestões de economia tributária ou otimização fiscal
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span className="text-muted-foreground">
              Meu balanço patrimonial é entregue meses após o fechamento do ano
            </span>
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 not-prose my-8">
        <Card className="border-primary/40 bg-accent/80">
          <CardHeader>
            <CardTitle className="text-lg">0-2 marcadas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-700">
              <strong>Contabilidade Estratégica</strong>
              <br />Você tem uma parceira que impulsiona crescimento.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg">3-5 marcadas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-primary">
              <strong>Contabilidade Mediana</strong>
              <br />Cumpre obrigações, mas não agrega valor estratégico.
            </p>
          </CardContent>
        </Card>

        <Card className="border-destructive/30 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-lg">6+ marcadas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-destructive">
              <strong>Contabilidade Burocrática</strong>
              <br />Está travando seu crescimento. Hora de mudar.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Contabilidade Burocrática vs. Estratégica</h2>

      <div className="space-y-6 my-8">
        <div>
          <h3 className="flex items-center gap-2 text-red-600 mb-3">
            <TrendingDown className="h-5 w-5" />
            Contabilidade Burocrática (Trava Crescimento)
          </h3>
          <Card className="border-destructive/30">
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Foco apenas em obrigações legais e fiscais</li>
                <li>• Comunicação reativa (só quando há problema)</li>
                <li>• Relatórios atrasados ou inexistentes</li>
                <li>• Não questiona nem sugere melhorias</li>
                <li>• Cobra pelo menor preço possível</li>
                <li>• Usa jargão técnico sem explicar</li>
                <li>• Não conhece o negócio do cliente</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-green-600 mb-3">
            <TrendingUp className="h-5 w-5" />
            Contabilidade Estratégica (Impulsiona Crescimento)
          </h3>
          <Card className="border-primary/40">
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Parceira ativa nas decisões empresariais</li>
                <li>• Reuniões regulares para análise de resultados</li>
                <li>• Relatórios gerenciais tempestivos e claros</li>
                <li>• Sugere economia tributária e eficiência</li>
                <li>• Cobra pelo valor entregue, não pelo mínimo</li>
                <li>• Explica de forma clara e acessível</li>
                <li>• Conhece profundamente o negócio e setor</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>O Custo Real de Uma Contabilidade Medíocre</h2>

      <div className="grid gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 mt-1" />
              1. Você Paga Mais Impostos do Que Deveria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sem um estudo tributário adequado, muitas empresas pagam 20% a 40% a mais de tributos. 
              Isso pode significar <strong>centenas de milhares de reais por ano</strong> jogados fora.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 mt-1" />
              2. Decisões Baseadas em "Achismo"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sem informações contábeis confiáveis e atualizadas, você toma decisões importantes 
              (contratações, investimentos, precificação) sem dados reais. É como dirigir vendado.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 mt-1" />
              3. Oportunidades Perdidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Incentivos fiscais, regimes especiais, estruturações societárias vantajosas — 
              tudo isso passa despercebido sem uma contabilidade proativa.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 mt-1" />
              4. Riscos Fiscais Escondidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Passivos tributários não identificados podem explodir anos depois, gerando 
              multas e juros que comprometem o futuro da empresa.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>O Que Esperar de Uma Contabilidade Estratégica</h2>

      <h3>Serviços Essenciais:</h3>
      <ul>
        <li><strong>Relatórios gerenciais mensais:</strong> DRE, Balanço, Fluxo de Caixa, análise de margens</li>
        <li><strong>Reuniões periódicas:</strong> Análise de resultados e planejamento</li>
        <li><strong>Estudos tributários:</strong> Comparativo entre regimes e oportunidades de economia</li>
        <li><strong>Planejamento tributário:</strong> Estratégias legais de redução de carga fiscal</li>
        <li><strong>Consultoria em decisões:</strong> Contratações, investimentos, expansão, precificação</li>
        <li><strong>Indicadores de desempenho:</strong> KPIs financeiros e operacionais acompanhados</li>
      </ul>

      <h3>Diferenciais de Excelência:</h3>
      <ul>
        <li>Atendimento consultivo (não apenas burocrático)</li>
        <li>Conhecimento profundo do seu setor</li>
        <li>Uso de tecnologia e automação</li>
        <li>Comunicação clara e educativa</li>
        <li>Proatividade em identificar riscos e oportunidades</li>
      </ul>

      <h2>Quando Mudar de Contabilidade?</h2>

      <Card className="my-6 border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Sinais de Que É Hora de Mudar</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>✗ Você não confia nos números apresentados</li>
            <li>✗ Informações chegam sempre atrasadas</li>
            <li>✗ Contador não retorna ligações ou mensagens</li>
            <li>✗ Você paga, mas não sabe exatamente pelo quê</li>
            <li>✗ Nunca recebeu uma sugestão de melhoria</li>
            <li>✗ Sente que está apenas "cumprindo tabela"</li>
            <li>✗ Seu negócio cresceu, mas o serviço contábil continua o mesmo</li>
          </ul>
        </CardContent>
      </Card>

      <h2>Como a OSP Atua Estrategicamente</h2>
      <p>
        Na OSP, contabilidade é <strong>consultoria estratégica de negócios</strong>, não apenas 
        cumprimento de obrigações. Nossa abordagem:
      </p>

      <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Diagnóstico Completo</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Analisamos toda a estrutura tributária, societária e financeira para identificar 
            oportunidades imediatas.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Planejamento Tributário</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Estudos detalhados para garantir que você paga apenas o necessário, dentro da legalidade.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Acompanhamento Mensal</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Reuniões regulares para análise de resultados, KPIs e ajustes estratégicos.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Consultoria em Decisões</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Apoio técnico em expansões, contratações, investimentos e outras decisões críticas.
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Transforme Sua Contabilidade em Vantagem Competitiva</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Agende uma conversa com nossos especialistas para descobrir como a OSP pode impulsionar 
          o crescimento do seu negócio com inteligência contábil e tributária.
        </p>
        <Link href="/contato">
          <Button size="lg" className="gap-2">
            Quero Conhecer a OSP
            <Target className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        Contabilidade não é custo — é <strong>investimento estratégico</strong>. A diferença entre 
        uma contabilidade medíocre e uma excelente pode ser a diferença entre estagnação e crescimento 
        acelerado.
      </p>
      <p>
        <strong>Não aceite o mínimo.</strong> Exija uma contabilidade que seja parceira ativa do seu 
        sucesso empresarial.
      </p>
    </BlogPostTemplate>
  );
}
