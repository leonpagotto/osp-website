import { blogPosts, type BlogPost } from '../client/src/data/blogPosts';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  alternates?: Array<{ hreflang: string; href: string }>;
}

const BASE_URL = process.env.VITE_BASE_URL || 'https://ospcontabilidade.com.br';

// Static pages with priorities and change frequencies
const staticPages = [
  { path: '', changefreq: 'weekly', priority: 1.0 }, // Home
  { path: 'sobre-nos', changefreq: 'monthly', priority: 0.8 },
  { path: 'solucoes', changefreq: 'weekly', priority: 0.9 },
  { path: 'segmentos', changefreq: 'monthly', priority: 0.8 },
  { path: 'resultados', changefreq: 'weekly', priority: 0.7 },
  { path: 'blog', changefreq: 'daily', priority: 0.9 },
  { path: 'materiais', changefreq: 'weekly', priority: 0.7 },
  { path: 'contato', changefreq: 'monthly', priority: 0.8 },
  { path: 'faca-parte', changefreq: 'monthly', priority: 0.6 },
];

// Solution pages
const solutionPages = [
  'osp360',
  'tributa360',
  'gestao360',
  'precifica360',
  'fundar360',
  'holding360',
  'contabilidade',
  'bpo-financeiro',
];

// Segment pages
const segmentPages = [
  'comercio-varejo',
  'servicos-profissionais',
  'industria-manufatura',
  'tecnologia-startups',
  'saude-bem-estar',
  'construcao-engenharia',
  'agronegocio',
  'ecommerce-digital',
];

function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

function generateSitemapUrls(): SitemapUrl[] {
  const urls: SitemapUrl[] = [];
  const currentDate = getCurrentDate();

  // Add static pages (bilingual)
  staticPages.forEach(page => {
    const ptPath = page.path ? `/${page.path}` : '/';
    const enPath = page.path ? `/en/${page.path}` : '/en';

    // Portuguese version
    urls.push({
      loc: `${BASE_URL}${ptPath}`,
      lastmod: currentDate,
      changefreq: page.changefreq as any,
      priority: page.priority,
      alternates: [
        { hreflang: 'pt-BR', href: `${BASE_URL}${ptPath}` },
        { hreflang: 'en', href: `${BASE_URL}${enPath}` },
        { hreflang: 'x-default', href: `${BASE_URL}${ptPath}` },
      ],
    });

    // English version
    urls.push({
      loc: `${BASE_URL}${enPath}`,
      lastmod: currentDate,
      changefreq: page.changefreq as any,
      priority: page.priority * 0.9, // Slightly lower priority for EN
      alternates: [
        { hreflang: 'pt-BR', href: `${BASE_URL}${ptPath}` },
        { hreflang: 'en', href: `${BASE_URL}${enPath}` },
        { hreflang: 'x-default', href: `${BASE_URL}${ptPath}` },
      ],
    });
  });

  // Add solution pages
  solutionPages.forEach(solution => {
    const ptPath = `/solucoes/${solution}`;
    const enPath = `/en/solutions/${solution}`;

    urls.push({
      loc: `${BASE_URL}${ptPath}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
      alternates: [
        { hreflang: 'pt-BR', href: `${BASE_URL}${ptPath}` },
        { hreflang: 'en', href: `${BASE_URL}${enPath}` },
        { hreflang: 'x-default', href: `${BASE_URL}${ptPath}` },
      ],
    });

    urls.push({
      loc: `${BASE_URL}${enPath}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7,
      alternates: [
        { hreflang: 'pt-BR', href: `${BASE_URL}${ptPath}` },
        { hreflang: 'en', href: `${BASE_URL}${enPath}` },
        { hreflang: 'x-default', href: `${BASE_URL}${ptPath}` },
      ],
    });
  });

  // Add segment pages
  segmentPages.forEach(segment => {
    const ptPath = `/segmentos/${segment}`;
    const enPath = `/en/segments/${segment}`;

    urls.push({
      loc: `${BASE_URL}${ptPath}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
      alternates: [
        { hreflang: 'pt-BR', href: `${BASE_URL}${ptPath}` },
        { hreflang: 'en', href: `${BASE_URL}${enPath}` },
        { hreflang: 'x-default', href: `${BASE_URL}${ptPath}` },
      ],
    });

    urls.push({
      loc: `${BASE_URL}${enPath}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
      alternates: [
        { hreflang: 'pt-BR', href: `${BASE_URL}${ptPath}` },
        { hreflang: 'en', href: `${BASE_URL}${enPath}` },
        { hreflang: 'x-default', href: `${BASE_URL}${ptPath}` },
      ],
    });
  });

  // Add blog posts (all 14 posts in both languages)
  blogPosts.forEach((post: BlogPost) => {
    const postDate = post.modifiedDate || post.publishedDate;
    const ptPath = `/blog/${post.slug}`;
    const enPath = `/en/blog/${post.slug}`;

    // Portuguese blog post
    urls.push({
      loc: `${BASE_URL}${ptPath}`,
      lastmod: postDate,
      changefreq: 'monthly',
      priority: 0.8,
      alternates: [
        { hreflang: 'pt-BR', href: `${BASE_URL}${ptPath}` },
        { hreflang: 'en', href: `${BASE_URL}${enPath}` },
        { hreflang: 'x-default', href: `${BASE_URL}${ptPath}` },
      ],
    });

    // English blog post
    urls.push({
      loc: `${BASE_URL}${enPath}`,
      lastmod: postDate,
      changefreq: 'monthly',
      priority: 0.7,
      alternates: [
        { hreflang: 'pt-BR', href: `${BASE_URL}${ptPath}` },
        { hreflang: 'en', href: `${BASE_URL}${enPath}` },
        { hreflang: 'x-default', href: `${BASE_URL}${ptPath}` },
      ],
    });
  });

  return urls;
}

export function generateSitemap(): string {
  const urls = generateSitemapUrls();

  const urlElements = urls
    .map(url => {
      const alternates = url.alternates
        ?.map(
          alt =>
            `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`
        )
        .join('\n');

      return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
${alternates || ''}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlElements}
</urlset>`;
}

// Generate robots.txt
export function generateRobotsTxt(): string {
  return `# robots.txt for OSP Contabilidade
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin/internal pages (if any)
Disallow: /api/
Disallow: /_/

# Crawl-delay (optional, for politeness)
Crawl-delay: 1
`;
}
