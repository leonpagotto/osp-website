import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, TrendingUp } from "lucide-react";

export default function IndicadoresFinanceirosCEO() {
  return (
    <div className="min-h-screen">
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Gestão Financeira
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">5 indicadores financeiros que todo CEO precisa acompanhar</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">10 de Março, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm">Jonas Marinho</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <p className="text-xl text-muted-foreground">
              A tomada de decisão estratégica exige mais do que intuição. CEOs bem-sucedidos baseiam suas escolhas em dados 
              concretos e indicadores que revelam a verdadeira saúde financeira do negócio.
            </p>

            <h2>1. EBITDA e Margem EBITDA</h2>
            <p>
              O EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) é fundamental para avaliar 
              a capacidade operacional de geração de caixa da empresa, independentemente de sua estrutura de capital 
              e decisões fiscais.
            </p>
            <Card className="my-6">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-2">Por que é importante:</p>
                    <p className="text-sm text-muted-foreground">
                      Permite comparar a performance operacional com concorrentes e avaliar a eficiência 
                      da gestão sem influência de decisões de financiamento ou tributação.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2>2. Fluxo de Caixa Livre (Free Cash Flow)</h2>
            <p>
              O FCF mostra quanto dinheiro a empresa gera após investimentos necessários para manter e crescer o negócio. 
              É o recurso disponível para distribuição aos sócios, redução de dívida ou novos investimentos estratégicos.
            </p>
            <p>
              <strong>Fórmula:</strong> FCF = EBITDA - Investimentos em Capital de Giro - CAPEX
            </p>

            <h2>3. Capital de Giro e Ciclo de Caixa</h2>
            <p>
              O capital de giro representa os recursos necessários para financiar a operação do dia a dia. 
              O ciclo de caixa mede quantos dias a empresa leva para converter seus investimentos em produtos/serviços em dinheiro.
            </p>
            <p>
              <strong>Benchmark:</strong> Ciclos menores que 30 dias são considerados excelentes. Acima de 60 dias pode indicar problemas de eficiência.
            </p>

            <h2>4. ROI e ROIC</h2>
            <p>
              O Retorno sobre Investimento (ROI) e o Retorno sobre Capital Investido (ROIC) medem a eficiência 
              na alocação de recursos. Um ROIC consistentemente acima do custo de capital indica criação de valor.
            </p>
            <Card className="my-6">
              <CardContent className="pt-6">
                <p className="text-sm">
                  <strong>Meta:</strong> ROIC superior a 15% é considerado excelente para a maioria dos setores. 
                  Compare sempre com o custo de capital da empresa (WACC).
                </p>
              </CardContent>
            </Card>

            <h2>5. Ponto de Equilíbrio e Margem de Segurança</h2>
            <p>
              Conhecer o ponto de equilíbrio (break-even) e a margem de segurança é crucial para gestão de riscos. 
              Indica o quanto o faturamento pode cair antes da empresa entrar no prejuízo.
            </p>
            <p>
              <strong>Margem de Segurança = (Faturamento Atual - Ponto de Equilíbrio) / Faturamento Atual</strong>
            </p>
            <p>
              Uma margem de segurança acima de 30% indica boa proteção contra variações de mercado.
            </p>

            <h2>Como Implementar</h2>
            <p>
              A implementação efetiva desses indicadores exige:
            </p>
            <ul>
              <li><strong>Sistemas integrados:</strong> ERP conectado à contabilidade gerencial</li>
              <li><strong>Atualização frequente:</strong> Dashboards atualizados no mínimo semanalmente</li>
              <li><strong>Análise comparativa:</strong> Acompanhamento de tendências e benchmarks setoriais</li>
              <li><strong>Suporte especializado:</strong> Parceria com contabilidade consultiva para interpretação correta</li>
            </ul>

            <h2>Conclusão</h2>
            <p>
              Estes cinco indicadores formam a base de um sistema robusto de gestão financeira. 
              Quando acompanhados consistentemente e interpretados corretamente, permitem decisões mais assertivas 
              e reduzem significativamente os riscos do negócio.
            </p>
            <p>
              Na OSP, auxiliamos nossos clientes a implementar dashboards executivos com esses e outros indicadores 
              relevantes para seu setor, garantindo visão clara e atualizada da saúde financeira do negócio.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de ajuda com indicadores financeiros?"
        description="Nossa equipe pode implementar um dashboard executivo personalizado para sua empresa"
        primaryButton={{ text: "Falar com Especialista", href: "/contato" }}
        secondaryButton={{ text: "Conhecer GESTÃO360", href: "/solucoes/gestao360" }}
        variant="accent"
      />
    </div>
  );
}
