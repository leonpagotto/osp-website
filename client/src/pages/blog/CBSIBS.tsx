import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCcw, FileText, TrendingUp, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { authorInfo } from "@/data/blogPosts";

export default function CBSIBS() {
  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        A Reforma Tributária substitui cinco tributos por dois: a CBS (Contribuição sobre Bens e Serviços) 
        e o IBS (Imposto sobre Bens e Serviços). Entenda como funciona o novo modelo não cumulativo e 
        os impactos práticos para sua empresa.
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
      title: "Checklist OSP: Preparação para Reforma",
      slug: "checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria",
      category: "Reforma Tributária"
    }
  ];

  return (
    <BlogPostTemplate
      title="CBS e IBS na Reforma Tributária: impactos práticos para empresas em 2025"
      description="CBS substitui PIS/Cofins/IPI e IBS substitui ICMS/ISS. Entenda o novo modelo não cumulativo e seus impactos práticos."
      keywords="CBS, IBS, reforma tributária, não cumulativo, crédito tributário, EC 132/2023"
      canonicalUrl="/blog/cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025"
      ogImage="/images/blog/cbs-ibs.png"
      category="Reforma Tributária"
      categorySlug="reforma-tributaria"
      author={authorInfo}
      publishedDate="2025-07-13"
      readingTime="8 min de leitura"
      heroImage="/images/blog/cbs-ibs.png"
      heroImageAlt="Novos tributos CBS e IBS da reforma tributária"
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug="cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025"
        fallbackContent={fallbackContent}
      />
    </BlogPostTemplate>
  );
}

