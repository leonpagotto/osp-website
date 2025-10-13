import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { useBlogPost } from "@/lib/blogHelpers";
import { useTranslation } from 'react-i18next';
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HoldingFamiliar() {
  const { t } = useTranslation();
  const blogPost = useBlogPost("holding-familiar-quando-estruturar");
  
  if (!blogPost) return null;
  
  const { postData, title, description, category, readingTime, author, getRelatedPost } = blogPost;

  const fallbackContent = (
    <>
      <p className="text-xl text-muted-foreground lead">
        {description}
      </p>
    </>
  );

  const relatedPosts = [
    getRelatedPost("holding-patrimonial-por-que-ainda-em-2025"),
    getRelatedPost("indicadores-financeiros-ceo")
  ].filter((post): post is NonNullable<typeof post> => post !== null);

  return (
    <BlogPostTemplate
      title={title}
      description={description}
      keywords={postData.keywords}
      canonicalUrl={`/blog/${postData.slug}`}
      ogImage={postData.featuredImage}
      category={category}
      categorySlug={postData.categorySlug}
      author={author}
      publishedDate={postData.publishedDate}
      readingTime={readingTime}
      heroImage={postData.featuredImage}
      heroImageAlt={title}
      relatedPosts={relatedPosts}
    >
      <BlogContentRenderer 
        slug={postData.slug}
        fallbackContent={fallbackContent}
      />

      <div className="not-prose mt-8 p-6 bg-card rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-3">
          {t('solutions.holding360.cta.title')}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {t('solutions.holding360.cta.description')}
        </p>
        <Link href="/solucoes/holding360">
          <Button>{t('solutions.holding360.hero.title')}</Button>
        </Link>
      </div>
    </BlogPostTemplate>
  );
}
    