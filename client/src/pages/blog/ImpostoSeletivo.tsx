import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Ban, Building2, Percent } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ImpostoSeletivo() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        Além de CBS e IBS, a Reforma Tributária cria o Imposto Seletivo e diversos regimes diferenciados. 
        Entenda como esses mecanismos funcionam e se sua empresa está no alvo.
      </p>
      {/* Original content as fallback */}
    </>
  );

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
      <BlogContentRenderer 
        slug="imposto-seletivo-e-regimes-diferenciados-na-reforma-tributaria"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}

