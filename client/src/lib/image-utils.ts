/**
 * Performance and Image Optimization Utilities
 */

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(imagePath: string, sizes: number[] = [320, 640, 960, 1280, 1920]): string {
  const extension = imagePath.split('.').pop();
  const basePath = imagePath.replace(`.${extension}`, '');
  
  return sizes
    .map((size) => `${basePath}-${size}w.${extension} ${size}w`)
    .join(', ');
}

/**
 * Get optimal image size based on screen width
 */
export function getOptimalImageSize(): number {
  const width = window.innerWidth;
  const dpr = window.devicePixelRatio || 1;
  
  const breakpoints = [320, 640, 960, 1280, 1920];
  const targetWidth = width * dpr;
  
  return breakpoints.find((bp) => bp >= targetWidth) || 1920;
}

/**
 * Convert image path to WebP format
 */
export function toWebP(imagePath: string): string {
  return imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

/**
 * Create picture element sources for modern image formats
 */
export function createPictureSources(imagePath: string) {
  const webpPath = toWebP(imagePath);
  
  return {
    webp: webpPath,
    fallback: imagePath,
  };
}

/**
 * Preload critical images
 */
export function preloadImage(url: string, as: 'image' = 'image') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = url;
  document.head.appendChild(link);
}

/**
 * Preload critical fonts
 */
export function preloadFont(url: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.href = url;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}

/**
 * Defer non-critical CSS
 */
export function deferCSS(href: string) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = function() {
    link.media = 'all';
  };
  document.head.appendChild(link);
}
