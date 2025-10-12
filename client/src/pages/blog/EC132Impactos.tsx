import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Target, TrendingUp, Building2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function EC132Impactos() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        A Emenda Constitucional 132/2023 é a base legal da Reforma Tributária. Para empresas em fase 
        de crescimento acelerado, entender seus impactos práticos é essencial para planejar expansão, 
        investimentos e estratégia competitiva nos próximos anos.
      </p>
      {/* Original content as fallback */}
    </>
  );

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
    },
    {
      title: "Checklist OSP: Preparação para Reforma",
      slug: "checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria",
      category: "Reforma Tributária"
    }
  ];

  return (
    <BlogPostTemplate
      title="Reforma Tributária 2025: impactos práticos da EC 132 para empresas em crescimento"
      description="Análise detalhada dos impactos da Emenda Constitucional 132/2023 para empresas que estão expandindo suas operações."
      keywords="EC 132, reforma tributária, empresas crescimento, expansão empresarial"
      canonicalUrl="/blog/reforma-tributaria-2025-impactos-praticos-da-ec-132-para-empresas-em-crescimento"
      ogImage="/images/blog/ec-132-crescimento.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-13"
      readingTime="8 min de leitura"
      heroImage="/images/blog/ec-132-crescimento.png"
      heroImageAlt="Impactos da EC 132 para empresas em crescimento"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="reforma-tributaria-2025-impactos-praticos-da-ec-132-para-empresas-em-crescimento"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}

