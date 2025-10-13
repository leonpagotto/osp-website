/**
 * Blog Helper Functions
 * Utilities for working with bilingual blog posts
 */

import { blogPostsBilingual, authorInfo } from "@/data/blogPostsBilingual";
import i18n from '@/i18n';

export function useBlogPost(slug: string) {
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';
  const lang: 'pt' | 'en' = isEnglish ? 'en' : 'pt';
  
  const postData = blogPostsBilingual.find(p => p.slug === slug);
  
  if (!postData) {
    return null;
  }

  return {
    postData,
    lang,
    isEnglish,
    title: postData.title[lang],
    description: postData.description[lang],
    category: postData.category[lang],
    readingTime: postData.readingTime[lang],
    author: {
      name: authorInfo.name,
      bio: authorInfo.bio[lang],
      role: authorInfo.role[lang],
      image: authorInfo.image
    },
    // Helper to get translated post by slug
    getRelatedPost: (relatedSlug: string) => {
      const related = blogPostsBilingual.find(p => p.slug === relatedSlug);
      if (!related) return null;
      return {
        title: related.title[lang],
        slug: related.slug,
        category: related.category[lang]
      };
    }
  };
}
