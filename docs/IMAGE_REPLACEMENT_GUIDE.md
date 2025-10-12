# 🖼️ Image Replacement Guide

## Current Status

✅ **15 placeholder images generated** with OSP branding
- All images are professional-looking placeholders
- Proper dimensions for web optimization
- Brand colors and OSP watermark included

## Placeholder Images Created

### Backgrounds (1)
- `osp-building.jpg` (1920x1080px) - For homepage hero section

### Blog Images (14)
All images are 1200x630px (optimal for social media sharing):
- `tributacao-dividendos.jpg`
- `cashback-cesta-basica.jpg`
- `cbs-ibs-reforma.jpg`
- `reforma-tributaria-2025.jpg`
- `checklist-osp.jpg`
- `imposto-seletivo.jpg`
- `ec-132-impactos.jpg`
- `lucro-real-estrategia.jpg`
- `contabilidade-crescimento.jpg`
- `holding-patrimonial-2025.jpg`
- `holding-familiar.jpg`
- `indicadores-ceo.jpg`
- `estudo-tributario.jpg`
- `contabilidade-lucro-real.jpg`

## How to Replace with Real Images

### Option 1: Manual Replacement (Recommended)
1. **Prepare your images:**
   - Match the filename exactly
   - Use recommended dimensions (or larger)
   - Optimize before adding (use TinyPNG, Squoosh, or ImageOptim)

2. **Replace files:**
   ```bash
   # Simply overwrite the placeholder with the same filename
   cp your-image.jpg client/public/images/backgrounds/osp-building.jpg
   cp your-blog-image.jpg client/public/images/blog/tributacao-dividendos.jpg
   ```

3. **The build system will automatically:**
   - Optimize images (85% quality)
   - Generate WebP versions
   - Apply lazy loading

### Option 2: Download from Current Website
If you want to use images from https://ospcontabilidade.com.br:

```bash
# Example using curl (you may need to inspect the actual image URLs)
cd client/public/images/blog
curl -O https://ospcontabilidade.com.br/wp-content/uploads/2024/XX/image.jpg
mv image.jpg tributacao-dividendos.jpg
```

### Option 3: Use AI Generation
Generate custom images using:
- **DALL-E** (OpenAI)
- **Midjourney**
- **Stable Diffusion**
- **Adobe Firefly**

Example prompts:
- "Modern office building exterior, corporate photography, professional lighting"
- "Tax documents and calculator on desk, business photo, professional"
- "Growth chart with business people, corporate photography, modern office"

### Option 4: Stock Photos
Free sources:
- **Unsplash** (unsplash.com)
- **Pexels** (pexels.com)
- **Pixabay** (pixabay.com)

Paid sources:
- **Shutterstock**
- **Getty Images**
- **Adobe Stock**

## Image Specifications

### Background Image
- **File:** `osp-building.jpg`
- **Size:** 1920x1080px minimum (can be larger)
- **Format:** JPG or WebP
- **Subject:** OSP office building
- **Usage:** Homepage hero with 82% dark overlay + blue gradient

### Blog Images
- **Size:** 1200x630px (Open Graph standard)
- **Format:** JPG or WebP
- **Aspect ratio:** 1.91:1
- **Max file size:** <500KB (will be optimized during build)
- **Usage:** 
  - Featured images in blog cards
  - Hero images in blog posts
  - Social media sharing (Open Graph)

## Testing After Replacement

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Check pages:**
   - Homepage: http://localhost:5000
   - Blog: http://localhost:5000/blog
   - Individual posts: http://localhost:5000/blog/[slug]

3. **Verify:**
   - Images load correctly
   - No broken image icons
   - Images look professional
   - Mobile responsive
   - Social sharing previews work

## Optimization Tips

### Before Adding:
- Crop to exact dimensions
- Adjust brightness/contrast for web
- Reduce file size (aim for <300KB for blog, <500KB for backgrounds)

### The Build Process Handles:
- ✅ WebP conversion
- ✅ Quality compression (85%)
- ✅ Lazy loading
- ✅ Responsive image serving

## Regenerate Placeholders

If you need to regenerate placeholders:

```bash
npm run generate-placeholders
# or
node scripts/generate-placeholder-images.js
```

## Current Website Works With Placeholders!

✅ The site is fully functional with these placeholder images
✅ All links work, blog system works, SEO is optimized
✅ You can deploy with placeholders and replace later
✅ Images will be cached by CDN, easy to update

## Image Locations

```
client/public/images/
├── backgrounds/
│   └── osp-building.jpg (1920x1080)
├── blog/
│   ├── tributacao-dividendos.jpg (1200x630)
│   ├── cashback-cesta-basica.jpg (1200x630)
│   ├── cbs-ibs-reforma.jpg (1200x630)
│   ├── reforma-tributaria-2025.jpg (1200x630)
│   ├── checklist-osp.jpg (1200x630)
│   ├── imposto-seletivo.jpg (1200x630)
│   ├── ec-132-impactos.jpg (1200x630)
│   ├── lucro-real-estrategia.jpg (1200x630)
│   ├── contabilidade-crescimento.jpg (1200x630)
│   ├── holding-patrimonial-2025.jpg (1200x630)
│   ├── holding-familiar.jpg (1200x630)
│   ├── indicadores-ceo.jpg (1200x630)
│   ├── estudo-tributario.jpg (1200x630)
│   └── contabilidade-lucro-real.jpg (1200x630)
└── osp-logo-white.svg
```

---

**Ready to develop and deploy!** Replace placeholders with real images anytime. 🎨
