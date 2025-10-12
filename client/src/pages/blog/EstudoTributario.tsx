import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function EstudoTributario() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        Decisões tributárias baseadas em "achismo" custam milhões às empresas brasileiras todos os anos. 
        Um estudo tributário profundo transforma incerteza em dados concretos, gerando economia real e 
        segurança jurídica.
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
      title: "Contabilidade Lucro Real: Por que mudar de regime",
      slug: "contabilidade-lucro-real-por-que-mudar-de-regime",
      category: "Lucro Real"
    },
    {
      title: "OSP360: Diagnóstico tributário completo",
      slug: "../solucoes/osp360",
      category: "Soluções"
    }
  ];

  return (
    <BlogPostTemplate
      title="Estudo Tributário Profundo: como tomar decisões fiscais com segurança, clareza e economia real"
      description="Entenda a importância de um estudo tributário profundo para tomar decisões estratégicas com segurança e gerar economia real."
      keywords="estudo tributário, planejamento fiscal, economia tributária, decisões fiscais"
      canonicalUrl="/blog/estudo-tributario-tomar-decisoes"
      ogImage="/images/blog/estudo-tributario.png"
      category="Lucro Real"
      categorySlug="lucro-real"
      author={authorInfo}
      publishedDate="2025-06-28"
      readingTime="8 min de leitura"
      heroImage="/images/blog/estudo-tributario.png"
      heroImageAlt="Estudo tributário profundo para decisões fiscais estratégicas"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="estudo-tributario-tomar-decisoes"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}

