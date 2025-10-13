/**
 * Bilingual Blog Posts Data
 * Central repository for all blog posts with Portuguese and English translations
 */

export interface BlogPostBilingual {
  slug: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  category: {
    pt: string;
    en: string;
  };
  categorySlug: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  readingTime: {
    pt: string;
    en: string;
  };
  keywords: string;
  featuredImage: string;
  featured?: boolean;
}

export const blogPostsBilingual: BlogPostBilingual[] = [
  {
    slug: "tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar",
    title: {
      pt: "Tributação de Dividendos: o que muda em 2026 e como se preparar",
      en: "Dividend Taxation: what changes in 2026 and how to prepare"
    },
    description: {
      pt: "O PL 1.087/2025 prevê mudanças significativas na tributação de dividendos a partir de 2026. Entenda os impactos para sua empresa e lucros acumulados.",
      en: "Bill 1.087/2025 provides for significant changes in dividend taxation starting in 2026. Understand the impacts on your company and retained earnings."
    },
    category: {
      pt: "Reforma Tributária",
      en: "Tax Reform"
    },
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-18",
    readingTime: {
      pt: "7 min de leitura",
      en: "7 min read"
    },
    keywords: "tributação dividendos, PL 1.087/2025, IRPF, lucros acumulados, reforma tributária, holding, OSP",
    featuredImage: "/images/blog/tributacao-dividendos.png",
    featured: true,
  },
  {
    slug: "cashback-cesta-basica-e-justica-fiscal-o-que-muda-na-tributacao",
    title: {
      pt: "Cashback, Cesta Básica e Justiça Fiscal: o que muda na tributação",
      en: "Cashback, Basic Basket and Tax Justice: what changes in taxation"
    },
    description: {
      pt: "Cashback tributário e Cesta Básica Nacional representam avanços de justiça fiscal. Entenda os impactos operacionais para sua empresa.",
      en: "Tax cashback and National Basic Basket represent advances in tax justice. Understand the operational impacts on your company."
    },
    category: {
      pt: "Reforma Tributária",
      en: "Tax Reform"
    },
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: {
      pt: "6 min de leitura",
      en: "6 min read"
    },
    keywords: "cashback tributário, cesta básica, CBS, IBS, reforma tributária, NCM, classificação fiscal",
    featuredImage: "/images/blog/cashback-cesta-basica.png",
    featured: true,
  },
  {
    slug: "cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025",
    title: {
      pt: "CBS e IBS na Reforma Tributária: impactos práticos para empresas em 2025",
      en: "CBS and IBS in Tax Reform: practical impacts for companies in 2025"
    },
    description: {
      pt: "CBS substitui PIS/Cofins/IPI e IBS substitui ICMS/ISS. Entenda o novo modelo não cumulativo e seus impactos práticos.",
      en: "CBS replaces PIS/Cofins/IPI and IBS replaces ICMS/ISS. Understand the new non-cumulative model and its practical impacts."
    },
    category: {
      pt: "Reforma Tributária",
      en: "Tax Reform"
    },
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: {
      pt: "8 min de leitura",
      en: "8 min read"
    },
    keywords: "CBS, IBS, reforma tributária, não cumulativo, crédito tributário, EC 132/2023",
    featuredImage: "/images/blog/cbs-ibs.png",
    featured: true,
  },
  {
    slug: "reforma-tributaria-2025-guia-pratico-para-empresarios",
    title: {
      pt: "Reforma Tributária 2025: Guia Prático para Empresários, Diretores e Controladores",
      en: "Tax Reform 2025: Practical Guide for Entrepreneurs, Directors and Controllers"
    },
    description: {
      pt: "Guia completo e prático sobre a Reforma Tributária 2025 para líderes empresariais tomarem decisões estratégicas.",
      en: "Complete and practical guide on Tax Reform 2025 for business leaders to make strategic decisions."
    },
    category: {
      pt: "Reforma Tributária",
      en: "Tax Reform"
    },
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: {
      pt: "10 min de leitura",
      en: "10 min read"
    },
    keywords: "reforma tributária 2025, guia empresarial, CBS, IBS, planejamento tributário",
    featuredImage: "/images/blog/reforma-tributaria-guia.png",
  },
  {
    slug: "checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria",
    title: {
      pt: "Como preparar sua empresa para a nova lógica tributária: checklist prático da OSP",
      en: "How to prepare your company for the new tax logic: OSP practical checklist"
    },
    description: {
      pt: "Checklist completo para preparar sua empresa para as mudanças da Reforma Tributária com ações práticas e mensuráveis.",
      en: "Complete checklist to prepare your company for Tax Reform changes with practical and measurable actions."
    },
    category: {
      pt: "Reforma Tributária",
      en: "Tax Reform"
    },
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-11",
    readingTime: {
      pt: "9 min de leitura",
      en: "9 min read"
    },
    keywords: "checklist reforma tributária, preparação empresas, CBS IBS, adequação fiscal",
    featuredImage: "/images/blog/checklist-reforma.png",
  },
  {
    slug: "imposto-seletivo-e-regimes-diferenciados-na-reforma-tributaria",
    title: {
      pt: "Imposto Seletivo e regimes diferenciados na Reforma Tributária: riscos, exceções e como se preparar",
      en: "Selective Tax and differentiated regimes in Tax Reform: risks, exceptions and how to prepare"
    },
    description: {
      pt: "Entenda o Imposto Seletivo e os regimes diferenciados da Reforma Tributária e seus impactos em setores específicos.",
      en: "Understand the Selective Tax and differentiated regimes of Tax Reform and their impacts on specific sectors."
    },
    category: {
      pt: "Reforma Tributária",
      en: "Tax Reform"
    },
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: {
      pt: "7 min de leitura",
      en: "7 min read"
    },
    keywords: "imposto seletivo, regimes diferenciados, reforma tributária, tributação específica",
    featuredImage: "/images/blog/imposto-seletivo.png",
  },
  {
    slug: "reforma-tributaria-2025-impactos-praticos-da-ec-132-para-empresas-em-crescimento",
    title: {
      pt: "Reforma Tributária 2025: impactos práticos da EC 132 para empresas em crescimento",
      en: "Tax Reform 2025: practical impacts of EC 132 for growing companies"
    },
    description: {
      pt: "Análise detalhada dos impactos da Emenda Constitucional 132/2023 para empresas que estão expandindo suas operações.",
      en: "Detailed analysis of the impacts of Constitutional Amendment 132/2023 for companies expanding their operations."
    },
    category: {
      pt: "Reforma Tributária",
      en: "Tax Reform"
    },
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: {
      pt: "8 min de leitura",
      en: "8 min read"
    },
    keywords: "EC 132, reforma tributária, empresas crescimento, expansão empresarial",
    featuredImage: "/images/blog/ec-132-crescimento.png",
  },
  {
    slug: "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber",
    title: {
      pt: "Lucro Real com Estratégia: O Que Toda Empresa Precisa Saber Antes de Operar Nesse Regime",
      en: "Real Profit with Strategy: What Every Company Needs to Know Before Operating in This Regime"
    },
    description: {
      pt: "Guia completo sobre o regime de Lucro Real: quando optar, vantagens, desafios e como maximizar benefícios fiscais.",
      en: "Complete guide on the Real Profit regime: when to opt, advantages, challenges and how to maximize tax benefits."
    },
    category: {
      pt: "Lucro Real",
      en: "Real Profit"
    },
    categorySlug: "lucro-real",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-11",
    readingTime: {
      pt: "9 min de leitura",
      en: "9 min read"
    },
    keywords: "lucro real, regime tributário, planejamento tributário, apuração fiscal",
    featuredImage: "/images/blog/lucro-real-estrategia.png",
  },
  {
    slug: "sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio",
    title: {
      pt: "Sua contabilidade está impulsionando ou travando o crescimento do seu negócio?",
      en: "Is your accounting boosting or blocking your business growth?"
    },
    description: {
      pt: "Descubra se sua contabilidade é uma parceira estratégica ou apenas uma obrigação burocrática.",
      en: "Find out if your accounting is a strategic partner or just a bureaucratic obligation."
    },
    category: {
      pt: "Lucro Real",
      en: "Real Profit"
    },
    categorySlug: "lucro-real",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-11",
    readingTime: {
      pt: "6 min de leitura",
      en: "6 min read"
    },
    keywords: "contabilidade estratégica, crescimento empresarial, gestão contábil, contabilidade consultiva",
    featuredImage: "/images/blog/contabilidade-crescimento.png",
  },
  {
    slug: "holding-patrimonial-por-que-ainda-em-2025",
    title: {
      pt: "Holding Patrimonial: Por que agir ainda em 2025",
      en: "Holding Company: Why act still in 2025"
    },
    description: {
      pt: "A janela de oportunidade para estruturar holdings patrimoniais com vantagens fiscais pode estar se fechando. Entenda os motivos da urgência.",
      en: "The window of opportunity to structure holding companies with tax advantages may be closing. Understand the reasons for urgency."
    },
    category: {
      pt: "Reforma Tributária",
      en: "Tax Reform"
    },
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-06-29",
    readingTime: {
      pt: "7 min de leitura",
      en: "7 min read"
    },
    keywords: "holding patrimonial, planejamento sucessório, ITCMD, 2025, urgência fiscal",
    featuredImage: "/images/blog/holding-2025.png",
  },
  {
    slug: "estudo-tributario-tomar-decisoes",
    title: {
      pt: "Estudo Tributário Profundo: como tomar decisões fiscais com segurança, clareza e economia real",
      en: "Deep Tax Study: how to make tax decisions with security, clarity and real savings"
    },
    description: {
      pt: "Entenda a importância de um estudo tributário profundo para tomar decisões estratégicas com segurança e gerar economia real.",
      en: "Understand the importance of a deep tax study to make strategic decisions with security and generate real savings."
    },
    category: {
      pt: "Lucro Real",
      en: "Real Profit"
    },
    categorySlug: "lucro-real",
    author: "Guilherme Pagotto",
    publishedDate: "2025-06-28",
    readingTime: {
      pt: "8 min de leitura",
      en: "8 min read"
    },
    keywords: "estudo tributário, planejamento fiscal, economia tributária, decisões fiscais",
    featuredImage: "/images/blog/estudo-tributario.png",
  },
  {
    slug: "contabilidade-lucro-real-por-que-mudar-de-regime",
    title: {
      pt: "Contabilidade Lucro Real: Por que mudar de regime exige organização e como se preparar",
      en: "Real Profit Accounting: Why changing regimes requires organization and how to prepare"
    },
    description: {
      pt: "Mudança para Lucro Real exige preparação adequada. Saiba como se organizar para uma transição bem-sucedida.",
      en: "Changing to Real Profit requires proper preparation. Learn how to organize for a successful transition."
    },
    category: {
      pt: "Lucro Real",
      en: "Real Profit"
    },
    categorySlug: "lucro-real",
    author: "Guilherme Pagotto",
    publishedDate: "2025-06-28",
    readingTime: {
      pt: "7 min de leitura",
      en: "7 min read"
    },
    keywords: "mudança regime tributário, lucro real, transição fiscal, organização contábil",
    featuredImage: "/images/blog/mudanca-lucro-real.png",
  },
  {
    slug: "holding-familiar-quando-estruturar",
    title: {
      pt: "Holding Familiar: quando estruturar?",
      en: "Family Holding: when to structure?"
    },
    description: {
      pt: "A criação de uma holding familiar é uma das decisões mais estratégicas para proteção patrimonial e planejamento sucessório. Descubra qual o momento certo.",
      en: "Creating a family holding is one of the most strategic decisions for asset protection and succession planning. Discover the right moment."
    },
    category: {
      pt: "Planejamento Patrimonial",
      en: "Asset Planning"
    },
    categorySlug: "planejamento-patrimonial",
    author: "Guilherme Pagotto",
    publishedDate: "2025-03-05",
    readingTime: {
      pt: "8 min de leitura",
      en: "8 min read"
    },
    keywords: "holding familiar, planejamento patrimonial, sucessão familiar, proteção patrimonial",
    featuredImage: "/images/blog/holding-familiar.png",
  },
  {
    slug: "indicadores-financeiros-ceo",
    title: {
      pt: "Indicadores Financeiros que todo CEO deveria acompanhar",
      en: "Financial Indicators that every CEO should track"
    },
    description: {
      pt: "Conheça os principais indicadores financeiros que CEOs e executivos devem monitorar para tomar decisões estratégicas baseadas em dados.",
      en: "Learn the main financial indicators that CEOs and executives should monitor to make data-driven strategic decisions."
    },
    category: {
      pt: "Gestão Financeira",
      en: "Financial Management"
    },
    categorySlug: "gestao-financeira",
    author: "Guilherme Pagotto",
    publishedDate: "2025-02-15",
    readingTime: {
      pt: "10 min de leitura",
      en: "10 min read"
    },
    keywords: "indicadores financeiros, KPIs, gestão financeira, CEO, tomada de decisão",
    featuredImage: "/images/blog/indicadores-ceo.png",
  },
];

export const categoriesBilingual = [
  { 
    name: { pt: "Todos", en: "All" }, 
    slug: "todos" 
  },
  { 
    name: { pt: "Reforma Tributária", en: "Tax Reform" }, 
    slug: "reforma-tributaria" 
  },
  { 
    name: { pt: "Lucro Real", en: "Real Profit" }, 
    slug: "lucro-real" 
  },
  { 
    name: { pt: "Planejamento Patrimonial", en: "Asset Planning" }, 
    slug: "planejamento-patrimonial" 
  },
  { 
    name: { pt: "Gestão Financeira", en: "Financial Management" }, 
    slug: "gestao-financeira" 
  },
];

export const authorInfo = {
  name: "Guilherme Pagotto",
  bio: {
    pt: "Advogado, contador e empresário, atua no mercado contábil há mais de 25 anos. É consultor estrategista da OSP Soluções de Negócio. Também é diretor do Sescon e juiz do Tribunal de Impostos e Taxas (TIT) de Campinas.",
    en: "Lawyer, accountant and entrepreneur, has been working in the accounting market for over 25 years. He is a strategic consultant at OSP Business Solutions. He is also a director at Sescon and judge at the Court of Taxes and Fees (TIT) of Campinas."
  },
  role: {
    pt: "Consultor Estrategista - OSP",
    en: "Strategic Consultant - OSP"
  },
  image: "/images/team/guilherme-pagotto.jpg",
};
