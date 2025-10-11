/**
 * Blog Post Template Component
 * Reusable template for all blog posts with SEO optimization
 */

import { SEOHead } from '@/components/SEO';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'wouter';
import { ReactNode } from 'react';

interface BlogPostAuthor {
  name: string;
  bio: string;
  role?: string;
  image?: string;
}

interface BlogPostTemplateProps {
  // SEO Data
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  
  // Post Metadata
  category: string;
  categorySlug: string;
  author: BlogPostAuthor;
  publishedDate: string;
  modifiedDate?: string;
  readingTime?: string;
  
  // Content
  heroImage?: string;
  heroImageAlt?: string;
  children: ReactNode;
  
  // Related content
  relatedPosts?: Array<{
    title: string;
    slug: string;
    category: string;
  }>;
  
  // CTA
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

export function BlogPostTemplate({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  category,
  categorySlug,
  author,
  publishedDate,
  modifiedDate,
  readingTime,
  heroImage,
  heroImageAlt,
  children,
  relatedPosts,
  ctaTitle = "Precisa de ajuda com sua contabilidade?",
  ctaDescription = "Fale com um especialista da OSP e descubra como podemos ajudar sua empresa.",
  ctaButtonText = "Falar com Especialista",
  ctaButtonLink = "https://wa.me/5519993216091?text=Ol%C3%A1!%20Vim%20do%20blog%20e%20gostaria%20de%20saber%20mais",
}: BlogPostTemplateProps) {
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <>
      {/* SEO Head */}
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage || heroImage}
        ogType="article"
        publishedTime={publishedDate}
        modifiedTime={modifiedDate}
        article={{
          author: author.name,
          section: category,
          tags: keywords.split(', '),
        }}
      />

      <article className="min-h-screen bg-background">
        {/* Breadcrumb & Back Navigation */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/blog">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao Blog
                </Button>
              </Link>
              
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {heroImage && (
          <div className="w-full bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-muted shadow-lg">
                  <img
                    src={heroImage}
                    alt={heroImageAlt || title}
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <Link href={`/blog?category=${categorySlug}`}>
              <Badge 
                variant="secondary" 
                className="mb-4 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Por {author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
              </div>
              {readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime}</span>
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {children}
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <div className="flex items-start gap-4">
                {author.image && (
                  <OptimizedImage
                    src={author.image}
                    alt={author.name}
                    className="w-16 h-16 rounded-full"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{author.name}</h3>
                  {author.role && (
                    <p className="text-sm text-muted-foreground mb-2">{author.role}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{author.bio}</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-xl border border-primary/20">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-3">{ctaTitle}</h3>
                <p className="text-muted-foreground mb-6">{ctaDescription}</p>
                <a href={ctaButtonLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    {ctaButtonText}
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors cursor-pointer group">
                        <Badge variant="secondary" className="mb-3">
                          {post.category}
                        </Badge>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}

// Helper function to format date in Portuguese
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
