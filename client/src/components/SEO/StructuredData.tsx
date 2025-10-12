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
  type: 'organization' | 'breadcrumb' | 'article' | 'service' | 'localBusiness' | 'faq';
  data: OrganizationSchema | BreadcrumbSchema | ArticleSchema | any;
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
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Paulista, 1636 – 15º Andar',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01310-200',
      addressCountry: 'BR'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+55-19-99321-6091',
        contactType: 'customer service',
        areaServed: 'BR',
        availableLanguage: ['Portuguese', 'English', 'Spanish'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+55-11-5242-4407',
        contactType: 'sales',
        areaServed: 'BR',
        availableLanguage: ['Portuguese', 'English'],
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

// Service Schema for solution pages
export function createServiceSchema(service: {
  name: string;
  description: string;
  areaServed?: string;
  locale?: string;
}) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ospcontabilidade.com.br';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'OSP Contabilidade Digital',
      url: siteUrl
    },
    description: service.description,
    areaServed: {
      '@type': 'Country',
      name: service.areaServed || 'Brazil'
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${siteUrl}/contato`
    }
  };
}

// LocalBusiness Schema
export function createLocalBusinessSchema() {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ospcontabilidade.com.br';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'OSP Contabilidade Digital',
    image: `${siteUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Paulista, 1636 – 15º Andar',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01310-200',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.5617,
      longitude: -46.6563
    },
    url: siteUrl,
    telephone: '+55-11-5242-4407',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150'
    }
  };
}

// FAQ Schema
export function createFAQSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };
}
