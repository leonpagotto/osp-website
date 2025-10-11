import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, Users, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function HoldingPatrimonial2025() {
  const relatedPosts = [
    {
      title: "Holding Familiar: quando estruturar?",
      slug: "holding-familiar-quando-estruturar",
      category: "Planejamento Patrimonial"
    },
    {
      title: "Tributação de Dividendos",
      slug: "tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar",
      category: "Reforma Tributária"
    },
    {
      title: "HOLDING360: Estrutura patrimonial estratégica",
      slug: "../solucoes/holding360",
      category: "Soluções"
    }
  ];

  return (
    <BlogPostTemplate
      title="Holding Patrimonial: Por que agir ainda em 2025"
      description="A janela de oportunidade para estruturar holdings patrimoniais com vantagens fiscais pode estar se fechando. Entenda os motivos da urgência."
      keywords="holding patrimonial, planejamento sucessório, ITCMD, 2025, urgência fiscal"
      canonicalUrl="/blog/holding-patrimonial-por-que-ainda-em-2025"
      ogImage="/images/blog/holding-patrimonial-2025.jpg"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-06-29"
      readingTime="7 min de leitura"
      heroImage="/images/blog/holding-patrimonial-2025.jpg"
      heroImageAlt="Urgência em estruturar holding patrimonial em 2025"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        2025 pode ser o último ano para estruturar holdings patrimoniais com as vantagens fiscais 
        atuais. Três mudanças legislativas convergem para tornar a janela de oportunidade cada vez 
        mais estreita. Entenda por que agir agora.
      </p>

      <h2>Por Que a Urgência?</h2>
      <p>
        Três fatores tornam <strong>2025 um ano decisivo</strong> para quem considera estruturar 
        holding patrimonial:
      </p>

      <div className="grid gap-4 not-prose my-8">
        <Card className="border-red-200 bg-red-50/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Calendar className="h-5 w-5 text-red-600" />
              1. Tributação de Dividendos (PL 1.087/2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Se aprovado, dividendos serão tributados a partir de 2026. Holdings estruturadas em 2025 
              podem distribuir <strong>lucros acumulados isentos</strong> até 31/12/2025. Após isso, 
              mesmos lucros sofrerão IR de até 15%.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Building2 className="h-5 w-5 text-amber-600" />
              2. Aumento do ITCMD em Vários Estados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Estados como São Paulo discutem aumentar alíquota de ITCMD (imposto sobre herança) 
              de 4% para até 8%. Holdings criadas <strong>antes do aumento</strong> preservam 
              benefícios da alíquota atual na estruturação inicial.
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Shield className="h-5 w-5 text-blue-600" />
              3. Reforma Tributária e CBS/IBS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Novos tributos podem impactar a gestão de patrimônio imobiliário. Holdings estruturadas 
              <strong> antes de 2026</strong> têm mais tempo para se adaptar e planejar os impactos.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>O Que é uma Holding Patrimonial?</h2>
      <p>
        Holding patrimonial é uma empresa criada para <strong>administrar patrimônio familiar</strong>. 
        Em vez de imóveis, participações e investimentos estarem em nome de pessoas físicas, ficam 
        em nome da holding (pessoa jurídica).
      </p>

      <h3>Principais Benefícios:</h3>
      <ul>
        <li><strong>Planejamento sucessório:</strong> Evita inventário longo e custoso</li>
        <li><strong>Economia tributária:</strong> ITCMD pago uma vez na integralização, não a cada sucessão</li>
        <li><strong>Proteção patrimonial:</strong> Separação entre patrimônio pessoal e empresarial</li>
        <li><strong>Governança familiar:</strong> Regras claras de gestão e sucessão</li>
        <li><strong>Otimização de renda:</strong> Alugéis tributados como pessoa jurídica (potencialmente menor)</li>
      </ul>

      <h2>Cenário Urgente: Dividendos</h2>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Janela de Oportunidade: Até 31/12/2025
        </h3>
        <div className="space-y-3 text-sm text-red-900">
          <p>
            <strong>Situação atual (até 31/12/2025):</strong>
            <br />Dividendos distribuídos por empresas brasileiras são <strong>isentos de IR</strong> 
            para pessoa física. Isso vale mesmo para lucros acumulados de anos anteriores.
          </p>
          <p>
            <strong>Se PL 1.087/2025 for aprovado (a partir de 01/01/2026):</strong>
            <br />Dividendos passam a ser tributados em até <strong>15% de IR</strong>. Lucros 
            acumulados distribuídos após 2026 também serão tributados.
          </p>
          <p className="font-semibold pt-2">
            <strong>Estratégia:</strong> Estruturar holding em 2025 e distribuir lucros acumulados 
            antes do final do ano preserva a isenção fiscal.
          </p>
        </div>
      </div>

      <h2>Cenário de Risco: ITCMD</h2>
      <p>
        O ITCMD (Imposto sobre Transmissão Causa Mortis e Doação) incide sobre heranças e doações. 
        Vários estados consideram aumentar as alíquotas:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6 text-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Alíquota Atual (SP)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary mb-2">4%</p>
            <p className="text-muted-foreground">
              Sobre valor de bens e direitos transmitidos por herança ou doação
            </p>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-base">Proposta Futura (SP)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600 mb-2">até 8%</p>
            <p className="text-muted-foreground">
              Alíquota progressiva conforme valor do patrimônio transmitido
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        <strong>Impacto prático:</strong> Patrimônio de R$ 10 milhões pagaria R$ 400 mil de ITCMD hoje. 
        Com alíquota de 8%, pagaria R$ 800 mil — o dobro.
      </p>

      <h3>Como a Holding Protege?</h3>
      <p>
        Na holding, o ITCMD é pago <strong>uma única vez</strong> na integralização inicial dos bens. 
        Depois, a sucessão acontece por transferência de cotas da empresa, sem novo ITCMD a cada geração 
        (se bem estruturada).
      </p>

      <h2>Quem Deveria Considerar Urgentemente?</h2>

      <div className="space-y-4 my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              Famílias com Patrimônio Acima de R$ 5 Milhões
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Benefícios fiscais e sucessórios justificam os custos de estruturação e manutenção da holding.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" />
              Proprietários de Múltiplos Imóveis
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Gestão de aluguéis e futura sucessão imobiliária ficam muito mais eficientes e econômicas 
            em uma holding.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              Empresários com Lucros Acumulados
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Se sua empresa operacional tem lucros acumulados significativos, pode ser estratégico 
            criar holding e distribuir esses valores em 2025 (isento de IR).
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              Famílias Planejando Sucessão
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Se há preocupação com inventário futuro ou divisão de bens entre herdeiros, a holding 
            resolve esses problemas preventivamente.
          </CardContent>
        </Card>
      </div>

      <h2>Custos vs. Benefícios</h2>

      <h3>Custos de Estruturação:</h3>
      <ul className="text-sm">
        <li>Honorários advocatícios e contábeis: R$ 15.000 a R$ 50.000</li>
        <li>ITCMD na integralização (4% em SP): 4% do valor dos bens</li>
        <li>ITBI (se houver imóveis): varia por município (geralmente 2-3%)</li>
        <li>Custos de registro e cartório: R$ 3.000 a R$ 10.000</li>
      </ul>

      <h3>Custos de Manutenção:</h3>
      <ul className="text-sm">
        <li>Contabilidade mensal: R$ 800 a R$ 3.000/mês</li>
        <li>Declarações anuais e obrigações acessórias</li>
      </ul>

      <h3>Benefícios Típicos:</h3>
      <ul className="text-sm">
        <li>Economia de ITCMD futuro: <strong>4% a 8%</strong> do patrimônio a cada sucessão evitada</li>
        <li>Redução potencial de IR sobre aluguéis: <strong>10% a 15%</strong> anualmente</li>
        <li>Economia de custos de inventário: <strong>R$ 50.000 a R$ 200.000+</strong></li>
        <li>Velocidade na sucessão: <strong>meses vs. anos</strong> de inventário</li>
      </ul>

      <p className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm my-6">
        <strong>ROI Típico:</strong> Para patrimônios acima de R$ 5 milhões, o retorno sobre investimento 
        (economia tributária + agilidade sucessória) geralmente paga os custos de estruturação em 2 a 5 anos.
      </p>

      <h2>Passos Para Estruturar em 2025</h2>

      <div className="space-y-3 my-6 text-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">1. Diagnóstico Patrimonial (1-2 semanas)</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Levantamento completo de bens, direitos, empresas, dívidas e análise tributária.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">2. Planejamento da Estrutura (2-3 semanas)</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Definição de modelo societário, governança, cláusulas de proteção e otimização fiscal.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">3. Constituição da Holding (2-4 semanas)</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Elaboração de contratos, registro na Junta Comercial, inscrições fiscais.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">4. Integralização de Bens (1-3 meses)</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Transferência de imóveis, quotas societárias e outros ativos para a holding.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">5. Distribuição Estratégica (até 31/12/2025)</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Se houver lucros acumulados, distribuir antes do final de 2025 garante isenção de IR.
          </CardContent>
        </Card>
      </div>

      <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm my-6">
        <strong>Prazo realista:</strong> Contar com 3 a 6 meses do início ao final. Para garantir 
        conclusão em 2025, <strong>inicie o processo até julho/agosto</strong> no máximo.
      </p>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Não Deixe Para 2026</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A OSP tem experiência em estruturação de holdings patrimoniais e pode conduzir todo 
          o processo com segurança jurídica e otimização fiscal. Agende uma análise sem compromisso.
        </p>
        <Link href="/solucoes/holding360">
          <Button size="lg" className="gap-2 mr-3">
            Conheça o HOLDING360
            <Building2 className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="/contato">
          <Button size="lg" variant="outline" className="gap-2">
            Agende uma Conversa
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        2025 é um ano de oportunidade única para estruturação de holdings patrimoniais. A convergência 
        de mudanças tributárias torna a janela de vantagens fiscais cada vez mais estreita.
      </p>
      <p>
        <strong>Não há como prever</strong> se haverá outra oportunidade similar nos próximos anos. 
        Se você tem patrimônio significativo e está considerando uma holding, <strong>2025 é o ano para agir</strong>.
      </p>
    </BlogPostTemplate>
  );
}
