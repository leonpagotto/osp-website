import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, Users, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function HoldingPatrimonial2025() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        2025 pode ser o último ano para estruturar holdings patrimoniais com as vantagens fiscais 
        atuais. Três mudanças legislativas convergem para tornar a janela de oportunidade cada vez 
        mais estreita. Entenda por que agir agora.
      </p>
      {/* Original content as fallback */}
    </>
  );

  const relatedPosts = [
    {
      title: "Holding Familiar: quando estruturar?",
      slug: "holding-familiar-quando-estruturar",
      category: "Planejamento Patrimonial"
    },
    {
      title: "Tributação de Dividendos",
      slug: "tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar",
      category: "Reforma Tributária"
    },
    {
      title: "HOLDING360: Estrutura patrimonial estratégica",
      slug: "../solucoes/holding360",
      category: "Soluções"
    }
  ];

  return (
    <BlogPostTemplate
      title="Holding Patrimonial: Por que agir ainda em 2025"
      description="A janela de oportunidade para estruturar holdings patrimoniais com vantagens fiscais pode estar se fechando. Entenda os motivos da urgência."
      keywords="holding patrimonial, planejamento sucessório, ITCMD, 2025, urgência fiscal"
      canonicalUrl="/blog/holding-patrimonial-por-que-ainda-em-2025"
      ogImage="/images/blog/holding-2025.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-06-29"
      readingTime="7 min de leitura"
      heroImage="/images/blog/holding-2025.png"
      heroImageAlt="Urgência em estruturar holding patrimonial em 2025"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="holding-patrimonial-por-que-ainda-em-2025"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}

