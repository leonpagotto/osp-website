import { useRoute } from "wouter";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Calendar, User } from "lucide-react";

//todo: remove mock data - blog post content
const blogPosts: Record<string, any> = {
  "como-migrar-lucro-real": {
    title: "Como migrar para Lucro Real com segurança",
    date: "15 de Março, 2025",
    author: "Guilherme Pagotto",
    category: "Planejamento Tributário",
    content: `
      <p>A migração do Simples Nacional para o Lucro Real é uma decisão estratégica que pode gerar economia tributária significativa, mas exige planejamento cuidadoso.</p>
      
      <h2>Quando migrar para Lucro Real?</h2>
      <p>A migração faz sentido quando:</p>
      <ul>
        <li>Faturamento anual superior a R$ 4,8 milhões</li>
        <li>Margem de lucro abaixo de 32%</li>
        <li>Alto volume de créditos de PIS/Cofins e ICMS</li>
        <li>Necessidade de investidores ou expansão internacional</li>
      </ul>
      
      <h2>Passo a passo da migração</h2>
      <p>1. <strong>Análise de viabilidade:</strong> Simulação comparativa entre regimes</p>
      <p>2. <strong>Planejamento:</strong> Estruturação dos processos e sistemas</p>
      <p>3. <strong>Implementação:</strong> Adequação contábil e fiscal</p>
      <p>4. <strong>Acompanhamento:</strong> Monitoramento dos primeiros meses</p>
      
      <h2>Principais cuidados</h2>
      <ul>
        <li>Revisão de todos os contratos e operações</li>
        <li>Adequação dos sistemas de gestão</li>
        <li>Treinamento da equipe interna</li>
        <li>Acompanhamento próximo nos primeiros 12 meses</li>
      </ul>
    `,
  },
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts[params?.slug || ""] || blogPosts["como-migrar-lucro-real"];

  return (
    <div className="min-h-screen">
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de ajuda com planejamento tributário?"
        description="Converse com nossos especialistas e descubra como podemos ajudar sua empresa"
        primaryButton={{ text: "Falar com Especialista", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
