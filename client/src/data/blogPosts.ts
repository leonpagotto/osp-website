/**
 * Blog Posts Data
 * Central repository for all blog posts metadata
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  readingTime: string;
  keywords: string;
  featuredImage: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar",
    title: "Tributação de Dividendos: o que muda em 2026 e como se preparar",
    description: "O PL 1.087/2025 prevê mudanças significativas na tributação de dividendos a partir de 2026. Entenda os impactos para sua empresa e lucros acumulados.",
    category: "Reforma Tributária",
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-18",
    readingTime: "7 min de leitura",
    keywords: "tributação dividendos, PL 1.087/2025, IRPF, lucros acumulados, reforma tributária, holding, OSP",
    featuredImage: "/images/blog/tributacao-dividendos.png",
    featured: true,
  },
  {
    slug: "cashback-cesta-basica-e-justica-fiscal-o-que-muda-na-tributacao",
    title: "Cashback, Cesta Básica e Justiça Fiscal: o que muda na tributação",
    description: "Cashback tributário e Cesta Básica Nacional representam avanços de justiça fiscal. Entenda os impactos operacionais para sua empresa.",
    category: "Reforma Tributária",
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: "6 min de leitura",
    keywords: "cashback tributário, cesta básica, CBS, IBS, reforma tributária, NCM, classificação fiscal",
    featuredImage: "/images/blog/cashback-cesta-basica.png",
    featured: true,
  },
  {
    slug: "cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025",
    title: "CBS e IBS na Reforma Tributária: impactos práticos para empresas em 2025",
    description: "CBS substitui PIS/Cofins/IPI e IBS substitui ICMS/ISS. Entenda o novo modelo não cumulativo e seus impactos práticos.",
    category: "Reforma Tributária",
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: "8 min de leitura",
    keywords: "CBS, IBS, reforma tributária, não cumulativo, crédito tributário, EC 132/2023",
    featuredImage: "/images/blog/cbs-ibs.png",
    featured: true,
  },
  {
    slug: "reforma-tributaria-2025-guia-pratico-para-empresarios",
    title: "Reforma Tributária 2025: Guia Prático para Empresários, Diretores e Controladores",
    description: "Guia completo e prático sobre a Reforma Tributária 2025 para líderes empresariais tomarem decisões estratégicas.",
    category: "Reforma Tributária",
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: "10 min de leitura",
    keywords: "reforma tributária 2025, guia empresarial, CBS, IBS, planejamento tributário",
    featuredImage: "/images/blog/reforma-tributaria-guia.png",
  },
  {
    slug: "checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria",
    title: "Como preparar sua empresa para a nova lógica tributária: checklist prático da OSP",
    description: "Checklist completo para preparar sua empresa para as mudanças da Reforma Tributária com ações práticas e mensuráveis.",
    category: "Reforma Tributária",
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-11",
    readingTime: "9 min de leitura",
    keywords: "checklist reforma tributária, preparação empresas, CBS IBS, adequação fiscal",
    featuredImage: "/images/blog/checklist-reforma.png",
  },
  {
    slug: "imposto-seletivo-e-regimes-diferenciados-na-reforma-tributaria",
    title: "Imposto Seletivo e regimes diferenciados na Reforma Tributária: riscos, exceções e como se preparar",
    description: "Entenda o Imposto Seletivo e os regimes diferenciados da Reforma Tributária e seus impactos em setores específicos.",
    category: "Reforma Tributária",
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: "7 min de leitura",
    keywords: "imposto seletivo, regimes diferenciados, reforma tributária, tributação específica",
    featuredImage: "/images/blog/imposto-seletivo.png",
  },
  {
    slug: "reforma-tributaria-2025-impactos-praticos-da-ec-132-para-empresas-em-crescimento",
    title: "Reforma Tributária 2025: impactos práticos da EC 132 para empresas em crescimento",
    description: "Análise detalhada dos impactos da Emenda Constitucional 132/2023 para empresas que estão expandindo suas operações.",
    category: "Reforma Tributária",
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-13",
    readingTime: "8 min de leitura",
    keywords: "EC 132, reforma tributária, empresas crescimento, expansão empresarial",
    featuredImage: "/images/blog/ec-132-crescimento.png",
  },
  {
    slug: "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber",
    title: "Lucro Real com Estratégia: O Que Toda Empresa Precisa Saber Antes de Operar Nesse Regime",
    description: "Guia completo sobre o regime de Lucro Real: quando optar, vantagens, desafios e como maximizar benefícios fiscais.",
    category: "Lucro Real",
    categorySlug: "lucro-real",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-11",
    readingTime: "9 min de leitura",
    keywords: "lucro real, regime tributário, planejamento tributário, apuração fiscal",
    featuredImage: "/images/blog/lucro-real-estrategia.png",
  },
  {
    slug: "sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio",
    title: "Sua contabilidade está impulsionando ou travando o crescimento do seu negócio?",
    description: "Descubra se sua contabilidade é uma parceira estratégica ou apenas uma obrigação burocrática.",
    category: "Lucro Real",
    categorySlug: "lucro-real",
    author: "Guilherme Pagotto",
    publishedDate: "2025-07-11",
    readingTime: "6 min de leitura",
    keywords: "contabilidade estratégica, crescimento empresarial, gestão contábil, contabilidade consultiva",
    featuredImage: "/images/blog/contabilidade-crescimento.png",
  },
  {
    slug: "holding-patrimonial-por-que-ainda-em-2025",
    title: "Holding Patrimonial: Por que agir ainda em 2025",
    description: "A janela de oportunidade para estruturar holdings patrimoniais com vantagens fiscais pode estar se fechando. Entenda os motivos da urgência.",
    category: "Reforma Tributária",
    categorySlug: "reforma-tributaria",
    author: "Guilherme Pagotto",
    publishedDate: "2025-06-29",
    readingTime: "7 min de leitura",
    keywords: "holding patrimonial, planejamento sucessório, ITCMD, 2025, urgência fiscal",
    featuredImage: "/images/blog/holding-2025.png",
  },
  {
    slug: "estudo-tributario-tomar-decisoes",
    title: "Estudo Tributário Profundo: como tomar decisões fiscais com segurança, clareza e economia real",
    description: "Entenda a importância de um estudo tributário profundo para tomar decisões estratégicas com segurança e gerar economia real.",
    category: "Lucro Real",
    categorySlug: "lucro-real",
    author: "Guilherme Pagotto",
    publishedDate: "2025-06-28",
    readingTime: "8 min de leitura",
    keywords: "estudo tributário, planejamento fiscal, economia tributária, decisões fiscais",
    featuredImage: "/images/blog/estudo-tributario.png",
  },
  {
    slug: "contabilidade-lucro-real-por-que-mudar-de-regime",
    title: "Contabilidade Lucro Real: Por que mudar de regime exige organização e como se preparar",
    description: "Mudança para Lucro Real exige preparação adequada. Saiba como se organizar para uma transição bem-sucedida.",
    category: "Lucro Real",
    categorySlug: "lucro-real",
    author: "Guilherme Pagotto",
    publishedDate: "2025-06-28",
    readingTime: "7 min de leitura",
    keywords: "mudança regime tributário, lucro real, transição fiscal, organização contábil",
    featuredImage: "/images/blog/mudanca-lucro-real.png",
  },
  {
    slug: "holding-familiar-quando-estruturar",
    title: "Holding Familiar: quando estruturar?",
    description: "A criação de uma holding familiar é uma das decisões mais estratégicas para proteção patrimonial e planejamento sucessório. Descubra qual o momento certo.",
    category: "Planejamento Patrimonial",
    categorySlug: "planejamento-patrimonial",
    author: "Guilherme Pagotto",
    publishedDate: "2025-03-05",
    readingTime: "8 min de leitura",
    keywords: "holding familiar, planejamento patrimonial, sucessão familiar, proteção patrimonial",
    featuredImage: "/images/blog/holding-familiar.png",
  },
  {
    slug: "indicadores-financeiros-ceo",
    title: "Indicadores Financeiros que todo CEO deveria acompanhar",
    description: "Conheça os principais indicadores financeiros que CEOs e executivos devem monitorar para tomar decisões estratégicas baseadas em dados.",
    category: "Gestão Financeira",
    categorySlug: "gestao-financeira",
    author: "Guilherme Pagotto",
    publishedDate: "2025-02-15",
    readingTime: "10 min de leitura",
    keywords: "indicadores financeiros, KPIs, gestão financeira, CEO, tomada de decisão",
    featuredImage: "/images/blog/indicadores-ceo.png",
  },
];

export const categories = [
  { name: "Todos", slug: "todos" },
  { name: "Reforma Tributária", slug: "reforma-tributaria" },
  { name: "Lucro Real", slug: "lucro-real" },
  { name: "Planejamento Patrimonial", slug: "planejamento-patrimonial" },
  { name: "Gestão Financeira", slug: "gestao-financeira" },
];

export const authorInfo = {
  name: "Guilherme Pagotto",
  bio: "Advogado, contador e empresário, atua no mercado contábil há mais de 25 anos. É consultor estrategista da OSP Soluções de Negócio. Também é diretor do Sescon e juiz do Tribunal de Impostos e Taxas (TIT) de Campinas.",
  role: "Consultor Estrategista - OSP",
  image: "/images/team/guilherme-pagotto.jpg",
};
