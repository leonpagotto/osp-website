import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ReformaTributaria2025() {
  const relatedPosts = [
    {
      title: "CBS e IBS na Reforma Tributária",
      slug: "cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025",
      category: "Reforma Tributária"
    },
    {
      title: "Checklist OSP: Preparação para Reforma",
      slug: "checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria",
      category: "Reforma Tributária"
    },
    {
      title: "Tributação de Dividendos",
      slug: "tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar",
      category: "Reforma Tributária"
    }
  ];

  return (
    <BlogPostTemplate
      title="Reforma Tributária 2025: Guia Prático para Empresários, Diretores e Controladores"
      description="Guia completo e prático sobre a Reforma Tributária 2025 para líderes empresariais tomarem decisões estratégicas."
      keywords="reforma tributária 2025, guia empresarial, CBS, IBS, planejamento tributário"
      canonicalUrl="/blog/reforma-tributaria-2025-guia-pratico-para-empresarios"
      ogImage="/images/blog/reforma-tributaria-guia.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-13"
      readingTime="10 min de leitura"
      heroImage="/images/blog/reforma-tributaria-guia.png"
      heroImageAlt="Guia prático da reforma tributária 2025 para empresários"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        A Reforma Tributária aprovada pela EC 132/2023 é a maior transformação do sistema tributário 
        brasileiro em décadas. Este guia reúne o essencial para empresários, diretores e controladores 
        tomarem decisões estratégicas com segurança.
      </p>

      <h2>O Que é a Reforma Tributária?</h2>
      <p>
        A Reforma Tributária substitui <strong>cinco tributos sobre consumo</strong> por dois novos impostos 
        de modelo mais moderno e eficiente:
      </p>

      <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tributos Extintos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>✗ ICMS (estadual)</li>
              <li>✗ ISS (municipal)</li>
              <li>✗ PIS (federal)</li>
              <li>✗ Cofins (federal)</li>
              <li>✗ IPI (federal)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Novos Tributos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>✓ <strong>IBS</strong> - Imposto sobre Bens e Serviços<br/>
                <span className="text-xs">(estadual e municipal)</span>
              </li>
              <li>✓ <strong>CBS</strong> - Contribuição sobre Bens e Serviços<br/>
                <span className="text-xs">(federal)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2>Princípios Fundamentais</h2>

      <h3>1. Não Cumulatividade Plena</h3>
      <p>
        Todo tributo pago em uma etapa gera <strong>crédito fiscal</strong> para a próxima. Isso elimina 
        o efeito cascata e torna o sistema mais transparente.
      </p>

      <h3>2. Princípio do Destino</h3>
      <p>
        O tributo será recolhido para o estado/município onde está o <strong>consumidor final</strong>, 
        não onde a empresa vende. Isso acaba com a guerra fiscal entre estados.
      </p>

      <h3>3. Alíquota Unificada</h3>
      <p>
        Uma única alíquota nacional de CBS + IBS (estimada em 26-28%) para a maioria dos produtos e serviços, 
        com exceções para setores específicos.
      </p>

      <h2>Cronograma de Implementação</h2>

      <div className="space-y-3 my-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              2026
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              CBS começa com alíquota teste de <strong>0,9%</strong>, coexistindo com PIS/Cofins. 
              Empresas começam a acumular créditos de CBS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              2027
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              IBS inicia com alíquota teste de <strong>0,1%</strong>, coexistindo com ICMS/ISS. 
              Início gradual da migração.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              2029-2032
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Transição gradual com aumento de CBS/IBS e redução proporcional dos tributos antigos 
              até extinção completa.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              2033
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sistema completamente implementado. Apenas CBS e IBS em vigor. 
              ICMS, ISS, PIS/Cofins e IPI extintos.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Impactos Por Setor</h2>

      <h3>Comércio e Indústria</h3>
      <ul>
        <li><strong>Benefício:</strong> Créditos fiscais mais amplos reduzem carga tributária efetiva</li>
        <li><strong>Desafio:</strong> Necessidade de controle rigoroso de créditos e notas fiscais</li>
        <li><strong>Atenção:</strong> Fim dos benefícios fiscais estaduais impacta planejamento logístico</li>
      </ul>

      <h3>Serviços</h3>
      <ul>
        <li><strong>Impacto:</strong> Aumento potencial de carga, especialmente para serviços com pouco insumo</li>
        <li><strong>Benefício:</strong> Créditos sobre aluguel, energia, telecom e outros insumos</li>
        <li><strong>Atenção:</strong> ISS atual varia de 2% a 5%; novo sistema pode chegar a 26-28%</li>
      </ul>

      <h3>E-commerce</h3>
      <ul>
        <li><strong>Mudança:</strong> Recolhimento para o estado/município do consumidor</li>
        <li><strong>Desafio:</strong> Sistemas precisam calcular IBS específico para cada destino</li>
        <li><strong>Benefício:</strong> Fim da guerra fiscal equaliza competição</li>
      </ul>

      <h2>Regimes Especiais</h2>

      <div className="bg-muted/30 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4">Setores com Tratamento Diferenciado:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Alíquota Reduzida (60%)</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Saúde</li>
              <li>• Educação</li>
              <li>• Transporte coletivo</li>
              <li>• Atividades culturais</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Alíquota Zero</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Cesta Básica Nacional</li>
              <li>• Medicamentos essenciais</li>
              <li>• Produtos agropecuários in natura</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Decisões Estratégicas Necessárias</h2>

      <div className="grid gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              1. Avaliar Impacto Financeiro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Realize estudo tributário detalhado para calcular o impacto real no seu negócio. 
              Considere margem de agregação de valor e direito a créditos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              2. Revisar Estrutura Societária
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Holdings, filiais e estrutura de distribuição podem precisar ser repensadas 
              considerando o novo princípio do destino.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              3. Investir em Sistemas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              ERPs e sistemas de gestão precisarão ser atualizados para calcular CBS/IBS corretamente 
              e gerenciar créditos fiscais de forma eficiente.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              4. Capacitar Equipes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Departamentos fiscal, financeiro, compras e comercial precisam entender profundamente 
              o novo sistema tributário.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              5. Renegociar Contratos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Contratos de longo prazo com cláusulas tributárias precisam ser revistos e atualizados 
              para refletir o novo cenário.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Oportunidades da Reforma</h2>
      <p>
        Apesar dos desafios, a Reforma Tributária traz oportunidades reais:
      </p>
      <ul>
        <li><strong>Simplificação:</strong> Menos obrigações acessórias e declarações</li>
        <li><strong>Transparência:</strong> Sistema mais claro e previsível</li>
        <li><strong>Créditos amplos:</strong> Possibilidade de reduzir carga tributária efetiva</li>
        <li><strong>Competição justa:</strong> Fim da guerra fiscal entre estados</li>
        <li><strong>Modernização:</strong> Alinhamento com melhores práticas internacionais</li>
      </ul>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">Prepare Sua Empresa Com Segurança</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A OSP oferece diagnóstico completo do impacto da Reforma Tributária no seu negócio, 
          com simulações, planejamento estratégico e plano de ação personalizado.
        </p>
        <Link href="/solucoes/osp360">
          <Button size="lg" className="gap-2">
            Conheça o OSP360
            <Target className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        A Reforma Tributária é inevitável e transformadora. Empresas que se prepararem com antecedência 
        terão vantagem competitiva significativa, aproveitando oportunidades de redução de carga e 
        evitando erros custosos.
      </p>
      <p>
        <strong>Não espere 2026 chegar.</strong> Comece o planejamento agora para ter tempo de implementar 
        mudanças estruturais com segurança.
      </p>
    </BlogPostTemplate>
  );
}
