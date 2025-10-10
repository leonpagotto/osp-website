import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

//todo: remove mock data - blog posts
const blogPosts = [
  {
    title: "Como migrar para Lucro Real com segurança",
    excerpt: "Guia completo com os passos essenciais para uma transição bem-sucedida do Simples Nacional para o Lucro Real.",
    category: "Planejamento Tributário",
    date: "15 de Março, 2025",
    slug: "como-migrar-lucro-real",
  },
  {
    title: "5 indicadores financeiros que todo CEO precisa acompanhar",
    excerpt: "Descubra os KPIs mais importantes para tomada de decisão estratégica em sua empresa.",
    category: "Gestão Financeira",
    date: "10 de Março, 2025",
    slug: "indicadores-financeiros-ceo",
  },
  {
    title: "Holding Familiar: quando estruturar?",
    excerpt: "Entenda os benefícios e o momento certo para criar uma holding patrimonial ou empresarial.",
    category: "Planejamento Patrimonial",
    date: "5 de Março, 2025",
    slug: "holding-familiar-quando-estruturar",
  },
  {
    title: "Compliance tributário: como evitar riscos fiscais",
    excerpt: "Boas práticas para manter sua empresa em conformidade e evitar multas e penalidades.",
    category: "Compliance",
    date: "1 de Março, 2025",
    slug: "compliance-tributario",
  },
  {
    title: "Automação contábil: ganhos reais para sua empresa",
    excerpt: "Como a tecnologia pode reduzir erros, economizar tempo e melhorar a qualidade das informações contábeis.",
    category: "Tecnologia",
    date: "25 de Fevereiro, 2025",
    slug: "automacao-contabil",
  },
  {
    title: "Precificação estratégica: maximize suas margens",
    excerpt: "Metodologia para análise de custos e definição de preços que garantem rentabilidade sustentável.",
    category: "Gestão Financeira",
    date: "20 de Fevereiro, 2025",
    slug: "precificacao-estrategica",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Blog OSP"
        subtitle="Insights, tendências e boas práticas em gestão contábil, tributária e financeira"
        showGradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card className="h-full hover-elevate active-elevate-2 cursor-pointer transition-all group" data-testid={`blog-post-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Ler artigo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
