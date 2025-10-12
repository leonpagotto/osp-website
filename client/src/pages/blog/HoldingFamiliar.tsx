import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HoldingFamiliar() {
  // Fallback content for if translations aren't loaded
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        A criação de uma holding familiar é uma das decisões mais estratégicas para proteção patrimonial 
        e planejamento sucessório. Mas qual o momento certo para estruturá-la?
      </p>

      <h2>O que é uma Holding Familiar?</h2>
      <p>
        Holding familiar é uma empresa criada especificamente para administrar o patrimônio de uma família. 
        Ela pode ser proprietária de outras empresas, imóveis, participações societárias, investimentos 
        financeiros e outros ativos.
      </p>

      <h2>Quando Estruturar uma Holding?</h2>
      <p>
        Considere criar uma holding familiar quando:
      </p>

      <div className="grid gap-4 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              Patrimônio Significativo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Quando o patrimônio familiar supera R$ 5 milhões, os benefícios fiscais e de proteção 
              justificam a estruturação de uma holding.
            </p>
          </CardContent>
        </Card>
        {/* Rest of original content... */}
      </div>
    </>
  );

  return (
    <BlogPostTemplate
      title="Holding Familiar: quando estruturar?"
      description="A criação de uma holding familiar é uma das decisões mais estratégicas para proteção patrimonial e planejamento sucessório. Descubra qual o momento certo para estruturá-la."
      keywords="holding familiar, planejamento patrimonial, sucessão familiar, proteção patrimonial, ITCMD, governança familiar, OSP contabilidade"
      canonicalUrl="/blog/holding-familiar-quando-estruturar"
      ogImage="/images/blog/holding-familiar.png"
      category="Planejamento Patrimonial"
      categorySlug="planejamento-patrimonial"
      author={{
        name: "Guilherme Pagotto",
        bio: "Advogado, contador e empresário, atua no mercado contábil há mais de 25 anos. É consultor estrategista da OSP Soluções de Negócio. Também é diretor do Sescon e juiz do Tribunal de Impostos e Taxas (TIT) de Campinas.",
        role: "Consultor Estrategista - OSP",
      }}
      publishedDate="2025-03-05"
      readingTime="8 min de leitura"
      heroImage="/images/blog/holding-familiar.png"
      heroImageAlt="Família discutindo planejamento patrimonial e holding familiar"
      relatedPosts={[
        {
          title: "HOLDING360: Estrutura patrimonial estratégica",
          slug: "../solucoes/holding360",
          category: "Soluções"
        },
        {
          title: "Indicadores Financeiros que todo CEO deveria acompanhar",
          slug: "indicadores-financeiros-ceo",
          category: "Gestão"
        }
      ]}
    >
      <BlogContentRenderer 
        slug="holding-familiar-quando-estruturar"
        fallbackContent={fallbackContent}
      />

      <div className="not-prose mt-8 p-6 bg-card rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-3">Quer saber mais sobre nossa solução HOLDING360?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Conheça nossa solução especializada em estruturação patrimonial e planejamento sucessório.
        </p>
        <Link href="/solucoes/holding360">
          <Button>Conhecer HOLDING360</Button>
        </Link>
      </div>
    </BlogPostTemplate>
  );
}
    