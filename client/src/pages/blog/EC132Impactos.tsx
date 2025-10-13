import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { useBlogPost } from "@/lib/blogHelpers";

export default function EC132Impactos() {
  const blogPost = useBlogPost("reforma-tributaria-2025-impactos-praticos-da-ec-132-para-empresas-em-crescimento");
  
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
    getRelatedPost("reforma-tributaria-2025-guia-pratico-para-empresarios"),
    getRelatedPost("cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025")
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
    </BlogPostTemplate>
  );
}

