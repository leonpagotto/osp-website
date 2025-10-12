import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SEOHead } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { blogPosts, categories } from "@/data/blogPosts";
import i18n from '@/i18n';

export default function Blog() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "todos" || post.categorySlug === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured posts (top 3)
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  return (
    <>
      <SEOHead
        title={isEnglish ? "OSP Blog - Insights on Accounting and Business Management" : "Blog OSP - Insights sobre Contabilidade e Gestão Empresarial"}
        description={isEnglish
          ? "Expert articles on tax reform, real profit accounting, asset planning, and financial management. Technical and practical content for entrepreneurs and CFOs."
          : "Artigos especializados sobre reforma tributária, lucro real, planejamento patrimonial e gestão financeira. Conteúdo técnico e prático para empresários e CFOs."
        }
        keywords={isEnglish
          ? "accounting blog, tax reform, real profit, tax planning, financial management, family holding, CBS, IBS"
          : "blog contabilidade, reforma tributária, lucro real, planejamento tributário, gestão financeira, holding familiar, CBS, IBS"
        }
        canonicalUrl={isEnglish ? "/en/blog" : "/blog"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/blog',
          'en': '/en/blog'
        }}
        ogImage="/images/og-blog.jpg"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('blogPage.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('blogPage.hero.description')}
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('blogPage.search.placeholder')}
                  className="pl-12 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-border sticky top-16 bg-background/95 backdrop-blur-md z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 overflow-x-auto py-4 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  variant={
                    selectedCategory === category.slug ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.slug)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === "todos" && searchQuery === "" && (
          <section className="py-12 border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">{t('blogPage.categories.featured')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="group cursor-pointer h-full flex flex-col">
                      <div className="relative h-58 rounded-lg overflow-hidden mb-4 bg-gray-800">
                        <OptimizedImage
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <Badge
                          variant="secondary"
                          className="absolute top-3 left-3"
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.publishedDate)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">
                    {selectedCategory === "todos"
                      ? t('blogPage.categories.allArticles')
                      : categories.find((c) => c.slug === selectedCategory)
                          ?.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {filteredPosts.length}{" "}
                    {filteredPosts.length === 1 ? t('blogPage.readingInfo.article') : t('blogPage.readingInfo.articles')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <article className="group cursor-pointer h-full flex flex-col bg-card rounded-lg border border-border hover:border-primary transition-all">
                        <div className="relative h-58 rounded-t-lg overflow-hidden bg-gray-800">
                          <OptimizedImage
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <Badge
                            variant="secondary"
                            className="w-fit mb-3"
                          >
                            {post.category}
                          </Badge>

                          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                            {post.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(post.publishedDate)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readingTime}
                              </div>
                            </div>

                            <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                              {t('blogPage.actions.read')}
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  {t('blogPage.noResults.title')}
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("todos");
                  }}
                >
                  {t('blogPage.actions.clearFilters')}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                {t('blogPage.cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('blogPage.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato">
                  <Button size="lg" className="w-full sm:w-auto">
                    {t('blogPage.cta.primaryButton')}
                  </Button>
                </Link>
                <Link href="/solucoes">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    {t('blogPage.cta.secondaryButton')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
