import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ReformaTributaria2025() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        A Reforma Tributária aprovada pela EC 132/2023 é a maior transformação do sistema tributário 
        brasileiro em décadas. Este guia reúne o essencial para empresários, diretores e controladores 
        tomarem decisões estratégicas com segurança.
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
      title: "Checklist OSP: Preparação para Reforma",
      slug: "checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria",
      category: "Reforma Tributária"
    },
    {
      title: "Tributação de Dividendos",
      slug: "tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar",
      category: "Reforma Tributária"
    }
  ];

  return (
    <BlogPostTemplate
      title="Reforma Tributária 2025: Guia Prático para Empresários, Diretores e Controladores"
      description="Guia completo e prático sobre a Reforma Tributária 2025 para líderes empresariais tomarem decisões estratégicas."
      keywords="reforma tributária 2025, guia empresarial, CBS, IBS, planejamento tributário"
      canonicalUrl="/blog/reforma-tributaria-2025-guia-pratico-para-empresarios"
      ogImage="/images/blog/reforma-tributaria-guia.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-13"
      readingTime="10 min de leitura"
      heroImage="/images/blog/reforma-tributaria-guia.png"
      heroImageAlt="Guia prático da reforma tributária 2025 para empresários"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="reforma-tributaria-2025-guia-pratico-para-empresarios"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}

