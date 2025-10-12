import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingCart, Users, TrendingDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function CashbackCestaBasica() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        A Reforma Tributária introduz dois mecanismos importantes de justiça social: o cashback tributário 
        e a Cesta Básica Nacional com alíquota zero. Entenda como esses mecanismos funcionam e os impactos 
        operacionais para empresas.
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
      title="Cashback, Cesta Básica e Justiça Fiscal: o que muda na tributação"
      description="Cashback tributário e Cesta Básica Nacional representam avanços de justiça fiscal. Entenda os impactos operacionais para sua empresa."
      keywords="cashback tributário, cesta básica, CBS, IBS, reforma tributária, NCM, classificação fiscal"
      canonicalUrl="/blog/cashback-cesta-basica-e-justica-fiscal-o-que-muda-na-tributacao"
      ogImage="/images/blog/cashback-cesta-basica.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-13"
      readingTime="6 min de leitura"
      heroImage="/images/blog/cashback-cesta-basica.png"
      heroImageAlt="Cesta básica e cashback fiscal para famílias de baixa renda"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="cashback-cesta-basica-e-justica-fiscal-o-que-muda-na-tributacao"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}
