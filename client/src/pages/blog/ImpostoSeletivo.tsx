import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { useBlogPost } from "@/lib/blogHelpers";

export default function ImpostoSeletivo() {
  const blogPost = useBlogPost("imposto-seletivo-e-regimes-diferenciados-na-reforma-tributaria");
  
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
    getRelatedPost("cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025"),
    getRelatedPost("reforma-tributaria-2025-guia-pratico-para-empresarios")
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

