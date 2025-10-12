import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { authorInfo } from "@/data/blogPosts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

export default function HoldingFamiliar() {
  const { t } = useTranslation();

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
      author={authorInfo}
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
        <h3 className="text-lg font-semibold mb-3">
          {t('solutions.holding360.cta.title')}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {t('solutions.holding360.cta.description')}
        </p>
        <Link href="/solucoes/holding360">
          <Button>{t('solutions.holding360.hero.title')}</Button>
        </Link>
      </div>
    </BlogPostTemplate>
  );
}
    