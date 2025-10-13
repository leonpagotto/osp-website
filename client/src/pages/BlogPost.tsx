import { useRoute, Link } from "wouter";
import { useTranslation } from 'react-i18next';
import { blogPostsBilingual, authorInfo } from "@/data/blogPostsBilingual";
import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import i18n from '@/i18n';

export default function BlogPost() {
  const { t } = useTranslation();
  const [, params] = useRoute("/blog/:slug");
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  const lang = isEnglish ? 'en' : 'pt';
  
  // Find the post by slug
  const post = blogPostsBilingual.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t('blogPost.notFound.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('blogPost.notFound.description')}</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('blogPost.backToBlog')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t('blogPost.backToBlog')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      {post.featuredImage && (
        <div className="w-full bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-background shadow-lg">
                <img
                  src={post.featuredImage}
                  alt={post.title[lang]}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <Badge variant="secondary" className="mb-4">
              {post.category[lang]}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title[lang]}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedDate}>
                  {formatDate(post.publishedDate, currentLang)}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime[lang]}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-8 bg-primary/5 border border-primary/20 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">{post.title[lang]}</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {post.description[lang]}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  {isEnglish 
                    ? "Full article content coming soon. Contact us to learn more about this topic."
                    : "Conteúdo completo do artigo em breve. Entre em contato para saber mais sobre este tema."}
                </p>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <div className="flex items-start gap-4">
                {authorInfo.image && (
                  <img
                    src={authorInfo.image}
                    alt={authorInfo.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{authorInfo.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {authorInfo.role[lang]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {authorInfo.bio[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-xl border border-primary/20">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-3">
                  {isEnglish 
                    ? "Need help with tax planning?"
                    : "Precisa de ajuda com planejamento tributário?"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {isEnglish
                    ? "Talk to our specialists and discover how OSP can transform your accounting management."
                    : "Converse com nossos especialistas e descubra como a OSP pode transformar sua gestão contábil."}
                </p>
                <Link href="/contato">
                  <Button size="lg">
                    {isEnglish ? "Talk to a Specialist" : "Falar com Especialista"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to format date
function formatDate(dateString: string, language: string = 'pt-BR'): string {
  const date = new Date(dateString);
  const locale = language === 'en' ? 'en-US' : 'pt-BR';
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
