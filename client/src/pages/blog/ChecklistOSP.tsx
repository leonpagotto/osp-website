import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, FileCheck, Clock, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ChecklistOSP() {
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
    }
  ];

  return (
    <BlogPostTemplate
      title="Como preparar sua empresa para a nova lógica tributária: checklist prático da OSP"
      description="Checklist completo para preparar sua empresa para as mudanças da Reforma Tributária com ações práticas e mensuráveis."
      keywords="checklist reforma tributária, preparação empresas, CBS IBS, adequação fiscal"
      canonicalUrl="/blog/checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria"
      ogImage="/images/blog/checklist-reforma.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-11"
      readingTime="9 min de leitura"
      heroImage="/images/blog/checklist-reforma.png"
      heroImageAlt="Checklist de preparação para reforma tributária"
      relatedPosts={relatedPosts}
    >
      <p className="text-xl text-muted-foreground lead">
        A Reforma Tributária exige preparação estruturada. Este checklist reúne as ações essenciais 
        para sua empresa estar pronta, organizadas por prioridade e prazo.
      </p>

      <h2>Por Que Usar um Checklist?</h2>
      <p>
        A complexidade da Reforma Tributária pode ser paralisante. Um checklist estruturado transforma 
        a preparação em <strong>passos concretos e mensuráveis</strong>, garantindo que nada crítico 
        seja esquecido.
      </p>

      <div className="bg-muted/30 rounded-lg p-6 my-6 not-prose">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Priorização por Prazo
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-destructive/15 text-destructive rounded text-xs font-medium">URGENTE</span>
            <span>Ações para concluir até final de 2025</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-primary/15 text-primary rounded text-xs font-medium">2026</span>
            <span>Ações para o primeiro ano de vigência</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">2027-2028</span>
            <span>Planejamento de médio prazo</span>
          </div>
        </div>
      </div>

      <h2>Checklist de Preparação</h2>

      <h3 className="flex items-center gap-2 mt-8 mb-4">
        <span className="px-2 py-1 bg-destructive/15 text-destructive rounded text-xs font-medium">URGENTE</span>
        Até Final de 2025
      </h3>

      <div className="space-y-4 my-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              1. Distribuir Lucros Acumulados (se aplicável)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Se há lucros acumulados e o PL 1.087/2025 for aprovado, distribua antes de 31/12/2025 
              para evitar tributação.
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded p-3 mt-3">
              <p className="text-foreground text-xs">
                <strong>Ação:</strong> Levantar saldo de lucros acumulados e avaliar capacidade de distribuição
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              2. Realizar Estudo Tributário Detalhado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Calcule o impacto real de CBS/IBS no seu negócio considerando créditos fiscais e 
              margem de agregação de valor.
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded p-3 mt-3">
              <p className="text-foreground text-xs">
                <strong>Ação:</strong> Contratar especialista ou consultoria para simulação detalhada
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              3. Avaliar Estrutura de Holdings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Considere estruturação de holding patrimonial antes das mudanças em ITCMD e dividendos.
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded p-3 mt-3">
              <p className="text-foreground text-xs">
                <strong>Ação:</strong> Consultar especialista em planejamento patrimonial
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="flex items-center gap-2 mt-8 mb-4">
        <span className="px-2 py-1 bg-primary/15 text-primary rounded text-xs font-medium">2026</span>
        Primeiro Ano de Vigência
      </h3>

      <div className="space-y-4 my-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              4. Atualizar Sistemas de Gestão (ERP)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Sistemas precisam calcular CBS corretamente e gerenciar créditos fiscais desde janeiro/2026.
            </p>
            <ul className="space-y-1 text-muted-foreground mt-2">
              <li>• Atualizar ERP para CBS 0,9%</li>
              <li>• Configurar controle de créditos fiscais</li>
              <li>• Testar cálculos com fornecedor do sistema</li>
              <li>• Treinar usuários nas novas funcionalidades</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              5. Revisar Cadastro de Produtos e Serviços
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Classificação fiscal (NCM) precisa estar correta para aplicar alíquotas adequadas.
            </p>
            <ul className="space-y-1 text-muted-foreground mt-2">
              <li>• Auditar NCM de todos os produtos</li>
              <li>• Identificar produtos da Cesta Básica</li>
              <li>• Verificar regimes diferenciados aplicáveis</li>
              <li>• Documentar classificações com justificativa</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              6. Implementar Controle Rigoroso de Notas Fiscais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Todo crédito fiscal depende de nota fiscal correta. Implemente processos de validação.
            </p>
            <ul className="space-y-1 text-muted-foreground mt-2">
              <li>• Criar rotina de validação de NF de entrada</li>
              <li>• Treinar equipe de compras para exigir NF corretas</li>
              <li>• Implementar conciliação mensal de créditos</li>
              <li>• Definir processo de correção de NF incorretas</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              7. Capacitar Equipes Internas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Treinamento específico para cada área impactada pela reforma.
            </p>
            <ul className="space-y-1 text-muted-foreground mt-2">
              <li>• <strong>Fiscal:</strong> Cálculo de CBS/IBS e gestão de créditos</li>
              <li>• <strong>Compras:</strong> Validação de notas fiscais</li>
              <li>• <strong>Vendas:</strong> Impacto em precificação</li>
              <li>• <strong>Financeiro:</strong> Fluxo de caixa com novos tributos</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              8. Renegociar Contratos de Longo Prazo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Contratos com cláusulas tributárias fixas podem gerar perdas. Revise e atualize.
            </p>
            <ul className="space-y-1 text-muted-foreground mt-2">
              <li>• Levantar contratos com cláusulas tributárias</li>
              <li>• Calcular impacto da mudança tributária</li>
              <li>• Propor aditivos com cláusulas atualizadas</li>
              <li>• Incluir cláusula de revisão em novos contratos</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h3 className="flex items-center gap-2 mt-8 mb-4">
        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">2027-2028</span>
        Planejamento de Médio Prazo
      </h3>

      <div className="space-y-4 my-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              9. Reavaliar Estrutura Logística
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Com o princípio do destino e fim da guerra fiscal, a localização de centros de distribuição 
              pode precisar mudar.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              10. Revisar Política de Precificação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              A mudança na carga tributária pode exigir ajustes em margens e estratégia de precificação.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              11. Otimizar Cadeia de Suprimentos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Aproveite a não cumulatividade plena para reavaliar fornecedores e insumos, considerando 
              créditos fiscais disponíveis.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              12. Monitorar Regulamentações Complementares
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Muitos detalhes ainda serão regulamentados. Mantenha-se atualizado sobre leis complementares 
              e normas do Comitê Gestor do IBS.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Como Usar Este Checklist</h2>

      <div className="bg-primary/5 rounded-lg p-6 my-8">
        <h3 className="font-semibold mb-4">Recomendações OSP:</h3>
        <ul className="space-y-2 text-sm">
          <li>✓ <strong>Imprima ou salve este checklist</strong> para acompanhamento contínuo</li>
          <li>✓ <strong>Atribua responsáveis</strong> para cada item dentro da empresa</li>
          <li>✓ <strong>Defina prazos internos</strong> anteriores aos prazos legais</li>
          <li>✓ <strong>Faça revisões mensais</strong> do progresso com a diretoria</li>
          <li>✓ <strong>Documente tudo:</strong> decisões, simulações, treinamentos realizados</li>
          <li>✓ <strong>Conte com especialistas:</strong> Não tente fazer tudo sozinho</li>
        </ul>
      </div>

      <Card className="my-8 border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Atenção: Custo da Não Preparação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="text-muted-foreground">
            Empresas que não se prepararem adequadamente podem enfrentar:
          </p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Perda de créditos fiscais (dinheiro deixado na mesa)</li>
            <li>• Pagamento a maior de tributos por erro de classificação</li>
            <li>• Multas e juros por declarações incorretas</li>
            <li>• Perda de competitividade frente a concorrentes preparados</li>
            <li>• Problemas de fluxo de caixa por surpresas tributárias</li>
          </ul>
          <p className="font-medium text-foreground pt-2">
            O custo de se preparar é infinitamente menor que o custo de não estar preparado.
          </p>
        </CardContent>
      </Card>

      <div className="bg-primary/5 rounded-lg p-8 my-8 text-center not-prose">
        <h3 className="text-2xl font-bold mb-4">A OSP Pode Ajudar em Cada Etapa</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Nossa equipe de especialistas pode acompanhar sua empresa em todo o processo de adequação, 
          desde o estudo tributário inicial até a implementação completa.
        </p>
        <Link href="/contato">
          <Button size="lg" className="gap-2">
            Agende uma Conversa
            <FileCheck className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <h2>Conclusão</h2>
      <p>
        A preparação para a Reforma Tributária não é opcional — é questão de sobrevivência competitiva. 
        Este checklist oferece um roteiro claro, mas cada empresa tem particularidades que exigem 
        análise específica.
      </p>
      <p>
        <strong>Comece hoje.</strong> Quanto mais cedo iniciar a preparação, mais tempo terá para 
        implementar mudanças com segurança e aproveitar oportunidades.
      </p>
    </BlogPostTemplate>
  );
}
