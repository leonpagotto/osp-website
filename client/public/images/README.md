# Image Assets Guide

## Directory Structure

```
public/images/
├── hero/           # Hero section images (1920x1080)
├── solutions/      # Solution page images (800x600)
├── blog/          # Blog post images (1200x630)
├── team/          # Team member photos
├── clients/       # Client logos
└── og-images/     # Open Graph images (1200x630)
```

## Image Optimization Checklist

### Before Adding Images:
- [ ] Resize to appropriate dimensions
- [ ] Compress images (use TinyPNG, ImageOptim, or similar)
- [ ] Convert to WebP format (primary) with JPEG/PNG fallback
- [ ] Add descriptive alt text
- [ ] Name files descriptively (e.g., `hero-business-meeting.jpg`)

### Naming Convention:
- Use lowercase
- Use hyphens for spaces
- Be descriptive: `solution-tributa360-hero.jpg`
- Include dimensions if multiple sizes: `hero-1920.jpg`, `hero-1280.jpg`

### Recommended Tools:
- **Compression**: https://tinypng.com/
- **Format Conversion**: https://squoosh.app/
- **Batch Processing**: Sharp CLI, ImageMagick

### Usage in Components:
```tsx
import { OptimizedImage } from '@/components/OptimizedImage';

<OptimizedImage
  src="/images/hero/business-meeting.jpg"
  alt="Professional business meeting with OSP consultants"
  priority={true}
/>
```

## Required Images (Priority)

### Home Page
- [ ] Hero image: Professional business scene (1920x1080)
- [ ] About section: Team/office photo (1600x900)
- [ ] OG image: Brand logo with tagline (1200x630)

### Solution Pages (8 pages)
- [ ] OSP360 hero image
- [ ] FUNDAR360 hero image
- [ ] TRIBUTA360 hero image
- [ ] GESTAO360 hero image
- [ ] BPO Financeiro hero image
- [ ] PRECIFICA360 hero image
- [ ] HOLDING360 hero image
- [ ] Contabilidade hero image

### Blog
- [ ] Default blog thumbnail (1200x630)
- [ ] Author avatar placeholders

### Brand Assets
- [ ] Logo (SVG + PNG)
- [ ] Favicon (multiple sizes)
- [ ] Apple touch icon (180x180)

## Image Sources

### Recommended Stock Photo Sites:
- Unsplash (free, high quality)
- Pexels (free)
- Adobe Stock (premium)
- Getty Images (premium)

### Search Keywords:
- "business professionals meeting"
- "financial consulting"
- "corporate strategy"
- "executive team"
- "modern office"
- "business analytics"
- "tax planning"

## Performance Tips

1. **Use WebP format** with JPEG/PNG fallback
2. **Lazy load** below-the-fold images
3. **Use CDN** for image delivery (Cloudflare, Cloudinary)
4. **Implement responsive images** with srcset
5. **Preload critical images** (hero images only)

---

Place all image files in their respective directories and follow the naming conventions above.
