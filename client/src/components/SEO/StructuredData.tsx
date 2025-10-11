import { Helmet } from 'react-helmet-async';

interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string[];
  }[];
  sameAs?: string[];
}

interface BreadcrumbSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }[];
}

interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
}

interface StructuredDataProps {
  type: 'organization' | 'breadcrumb' | 'article';
  data: OrganizationSchema | BreadcrumbSchema | ArticleSchema;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}

// Helper function to create organization schema
export function createOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OSP Contabilidade Digital',
    url: 'https://ospcontabilidade.com.br',
    logo: 'https://ospcontabilidade.com.br/logo.png',
    description: 'Consultoria contábil, fiscal e tributária para empresas de médio e grande porte no Brasil e exterior.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+55-11-XXXX-XXXX',
        contactType: 'customer service',
        areaServed: 'BR',
        availableLanguage: ['Portuguese', 'English', 'Spanish'],
      },
    ],
    sameAs: [
      // Add social media URLs here
      'https://www.linkedin.com/company/osp-contabilidade',
      'https://www.instagram.com/ospcontabilidade',
    ],
  };
}

// Helper function to create breadcrumb schema
export function createBreadcrumbSchema(items: { name: string; url: string }[]): BreadcrumbSchema {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ospcontabilidade.com.br';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

// Helper function to create article schema
export function createArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}): ArticleSchema {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ospcontabilidade.com.br';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'OSP Contabilidade Digital',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}
