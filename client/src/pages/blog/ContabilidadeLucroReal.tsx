import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, AlertTriangle, Calendar, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ContabilidadeLucroReal() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        Migrar para Lucro Real sem preparação adequada pode gerar caos operacional e perda de benefícios 
        fiscais. Entenda por que a transição exige organização estruturada e como se preparar corretamente.
      </p>
      {/* Original content as fallback */}
    </>
  );

  const relatedPosts = [
    {
      title: "Lucro Real com Estratégia",
      slug: "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber",
      category: "Lucro Real"
    },
    {
      title: "Estudo Tributário: Como tomar decisões fiscais",
      slug: "estudo-tributario-tomar-decisoes",
      category: "Lucro Real"
    },
    {
      title: "Sua contabilidade está impulsionando ou travando o crescimento",
      slug: "sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio",
      category: "Lucro Real"
    }
  ];

  return (
    <BlogPostTemplate
      title="Contabilidade Lucro Real: Por que mudar de regime exige organização e como se preparar"
      description="Mudança para Lucro Real exige preparação adequada. Saiba como se organizar para uma transição bem-sucedida."
      keywords="mudança regime tributário, lucro real, transição fiscal, organização contábil"
      canonicalUrl="/blog/contabilidade-lucro-real-por-que-mudar-de-regime"
      ogImage="/images/blog/mudanca-lucro-real.png"
      category="Lucro Real"
      categorySlug="lucro-real"
      author={authorInfo}
      publishedDate="2025-06-28"
      readingTime="7 min de leitura"
      heroImage="/images/blog/mudanca-lucro-real.png"
      heroImageAlt="Preparação para mudança para regime de Lucro Real"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="contabilidade-lucro-real-por-que-mudar-de-regime"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}

