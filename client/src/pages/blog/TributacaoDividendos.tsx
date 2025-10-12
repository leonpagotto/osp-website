import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Shield, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function TributacaoDividendos() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        O Projeto de Lei 1.087/2025 traz mudanças profundas na tributação de dividendos no Brasil. 
        Se aprovado, dividendos passarão a ser tributados a partir de 2026. Entenda o que muda e 
        como proteger seus lucros acumulados.
      </p>
      {/* Original content as fallback */}
    </>
  );

  const relatedPosts = [
    {
      title: "Holding Patrimonial: Por que agir ainda em 2025",
      slug: "holding-patrimonial-por-que-ainda-em-2025",
      category: "Reforma Tributária"
    },
    {
      title: "Reforma Tributária 2025: Guia Prático para Empresários",
      slug: "reforma-tributaria-2025-guia-pratico-para-empresarios",
      category: "Reforma Tributária"
    },
    {
      title: "Lucro Real com Estratégia",
      slug: "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber",
      category: "Lucro Real"
    }
  ];

  return (
    <BlogPostTemplate
      title="Tributação de Dividendos: o que muda em 2026 e como se preparar"
      description="O PL 1.087/2025 prevê mudanças significativas na tributação de dividendos a partir de 2026. Entenda os impactos para sua empresa e lucros acumulados."
      keywords="tributação dividendos, PL 1.087/2025, IRPF, lucros acumulados, reforma tributária, holding, OSP"
      canonicalUrl="/blog/tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar"
      ogImage="/images/blog/tributacao-dividendos.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-18"
      readingTime="7 min de leitura"
      heroImage="/images/blog/tributacao-dividendos.png"
      heroImageAlt="Análise de tributação de dividendos e impactos fiscais"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}

