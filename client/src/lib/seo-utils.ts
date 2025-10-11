/**
 * SEO and UX Best Practices Utilities
 * 
 * This file contains utility functions to ensure the website follows
 * SEO optimization and UX-first principles.
 */

/**
 * Lazy load images with Intersection Observer
 * Usage: Add 'data-src' attribute instead of 'src' on images
 */
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const dataSrc = img.getAttribute('data-src');
          if (dataSrc) {
            img.src = dataSrc;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Generate slug from text (for URLs)
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Format date for SEO (ISO 8601 format)
 */
export function formatDateForSEO(date: Date): string {
  return date.toISOString();
}

/**
 * Truncate text for meta descriptions (max 160 characters)
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + '...';
}

/**
 * Extract reading time from content (Portuguese)
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de leitura`;
}

/**
 * Generate Open Graph image URL with dynamic text
 * (This would typically call an API that generates OG images)
 */
export function generateOGImageUrl(title: string, subtitle?: string): string {
  const params = new URLSearchParams({
    title,
    ...(subtitle && { subtitle }),
  });
  return `/api/og-image?${params.toString()}`;
}

/**
 * Validate and format phone numbers (Brazilian format)
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return phone;
}

/**
 * Track scroll depth for analytics
 */
export function trackScrollDepth() {
  let maxScroll = 0;
  const milestones = [25, 50, 75, 100];
  const trackedMilestones = new Set<number>();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = ((scrollTop + windowHeight) / documentHeight) * 100;

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
    }

    milestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);
        // Send to analytics
        console.log(`Scroll depth: ${milestone}%`);
        // window.gtag?.('event', 'scroll_depth', { value: milestone });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Check if user prefers reduced motion (accessibility)
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Ensure proper focus management for accessibility
 */
export function manageFocus(selector: string) {
  const element = document.querySelector(selector) as HTMLElement;
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
