import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { useBlogPost } from "@/lib/blogHelpers";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function IndicadoresFinanceirosCEO() {
  const blogPost = useBlogPost("indicadores-financeiros-ceo");
  
  if (!blogPost) return null;
  
  const { postData, title, description, category, readingTime, author, getRelatedPost } = blogPost;

  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground mb-8">
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

      <h2>3. Capital de Giro e Ciclo de Caixa</h2>
      <p>
        O capital de giro representa os recursos necessários para financiar a operação do dia a dia. 
        O ciclo de caixa mede quantos dias a empresa leva para converter seus investimentos em produtos/serviços em dinheiro.
      </p>

      <h2>Conclusão</h2>
      <p>
        Estes indicadores formam a base de um sistema robusto de gestão financeira. 
        Quando acompanhados consistentemente e interpretados corretamente, permitem decisões mais assertivas 
        e reduzem significativamente os riscos do negócio.
      </p>
    </>
  );

  const relatedPosts = [
    getRelatedPost("sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio"),
    getRelatedPost("lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber")
  ].filter((post): post is NonNullable<typeof post> => post !== null);

  return (
    <BlogPostTemplate
      title={title}
      description={description}
      keywords={postData.keywords}
      canonicalUrl={`/blog/${postData.slug}`}
      ogImage={postData.featuredImage}
      category={category}
      categorySlug={postData.categorySlug}
      author={author}
      publishedDate={postData.publishedDate}
      readingTime={readingTime}
      heroImage={postData.featuredImage}
      heroImageAlt={title}
      relatedPosts={relatedPosts}
      ctaTitle="Precisa de ajuda com indicadores financeiros?"
      ctaDescription="Nossa equipe pode implementar um dashboard executivo personalizado para sua empresa"
    >
      <BlogContentRenderer 
        slug={postData.slug}
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}
