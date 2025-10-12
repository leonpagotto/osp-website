import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: 'pt-BR' | 'en';
  alternateUrls?: {
    'pt-BR': string;
    'en': string;
  };
  article?: {
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  author,
  publishedTime,
  modifiedTime,
  locale = 'pt-BR',
  alternateUrls,
  article,
}: SEOHeadProps) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ospcontabilidade.com.br';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  // Create full title with brand
  const fullTitle = title.includes('OSP') ? title : `${title} | OSP Contabilidade Digital`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <html lang={locale} />
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Alternate language URLs */}
      {alternateUrls && (
        <>
          <link rel="alternate" hrefLang="pt-BR" href={`${siteUrl}${alternateUrls['pt-BR']}`} />
          <link rel="alternate" hrefLang="en" href={`${siteUrl}${alternateUrls['en']}`} />
          <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${alternateUrls['pt-BR']}`} />
        </>
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:site_name" content="OSP Contabilidade Digital" />
      <meta property="og:locale" content={locale === 'pt-BR' ? 'pt_BR' : 'en_US'} />
      {alternateUrls && locale === 'pt-BR' && <meta property="og:locale:alternate" content="en_US" />}
      {alternateUrls && locale === 'en' && <meta property="og:locale:alternate" content="pt_BR" />}
      
      {/* Article specific meta tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {ogType === 'article' && article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {ogType === 'article' && article?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@ospcontabilidade" />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content={locale === 'pt-BR' ? 'Portuguese' : 'English'} />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
}
