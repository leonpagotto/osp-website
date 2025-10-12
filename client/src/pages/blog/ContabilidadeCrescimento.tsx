import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertCircle, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ContabilidadeCrescimento() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        A diferença entre uma contabilidade burocrática e uma estratégica pode significar milhões em 
        economia fiscal e decisões empresariais mais inteligentes. Descubra em qual lado você está.
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
      title: "Indicadores Financeiros que todo CEO deveria acompanhar",
      slug: "indicadores-financeiros-ceo",
      category: "Gestão"
    },
    {
      title: "Estudo Tributário: Como tomar decisões fiscais",
      slug: "estudo-tributario-tomar-decisoes",
      category: "Lucro Real"
    }
  ];

  return (
    <BlogPostTemplate
      title="Sua contabilidade está impulsionando ou travando o crescimento do seu negócio?"
      description="Descubra se sua contabilidade é uma parceira estratégica ou apenas uma obrigação burocrática."
      keywords="contabilidade estratégica, crescimento empresarial, gestão contábil, contabilidade consultiva"
      canonicalUrl="/blog/sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio"
      ogImage="/images/blog/contabilidade-crescimento.png"
      category="Lucro Real"
      categorySlug="lucro-real"
      author={authorInfo}
      publishedDate="2025-07-11"
      readingTime="6 min de leitura"
      heroImage="/images/blog/contabilidade-crescimento.png"
      heroImageAlt="Contabilidade estratégica para crescimento empresarial"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}

