import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { useBlogPost } from "@/lib/blogHelpers";

export default function ContabilidadeCrescimento() {
  const blogPost = useBlogPost("sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio");
  
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
    getRelatedPost("lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber"),
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
    </BlogPostTemplate>
  );
}

