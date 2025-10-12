import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, FileCheck, Clock, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function ChecklistOSP() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        A Reforma Tributária exige preparação estruturada. Este checklist reúne as ações essenciais 
        para sua empresa estar pronta, organizadas por prioridade e prazo.
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
    }
  ];

  return (
    <BlogPostTemplate
      title="Como preparar sua empresa para a nova lógica tributária: checklist prático da OSP"
      description="Checklist completo para preparar sua empresa para as mudanças da Reforma Tributária com ações práticas e mensuráveis."
      keywords="checklist reforma tributária, preparação empresas, CBS IBS, adequação fiscal"
      canonicalUrl="/blog/checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria"
      ogImage="/images/blog/checklist-reforma.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-11"
      readingTime="9 min de leitura"
      heroImage="/images/blog/checklist-reforma.png"
      heroImageAlt="Checklist de preparação para reforma tributária"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}
