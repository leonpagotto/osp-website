# Image Setup Instructions

## Required Images

To complete the OSP website, you need to add the following images to the specified directories.

## 1. Brand Assets

### Logo Icon (Already Created Programmatically)
✅ The fountain pen nib logo is already created as an SVG component (`LogoIcon.tsx`)

### Background Images
**Directory:** `/client/public/images/backgrounds/`

- **osp-building.jpg** - The OSP office building photograph
  - Recommended size: 1920x1080px or larger
  - Format: JPG or WebP
  - Used in: Homepage hero section with 82% dark overlay

## 2. Blog Post Images

**Directory:** `/client/public/images/blog/`

All blog post featured images should be approximately **1200x630px** (optimal for social media sharing).

### Required Blog Images:

1. **tributacao-dividendos.jpg**
   - Post: "Tributação de Dividendos: o que muda em 2026 e como se preparar"
   - Suggested theme: Calculator, money, tax documents

2. **cashback-cesta-basica.jpg**
   - Post: "Cashback, cesta básica e justiça fiscal"
   - Suggested theme: Shopping cart, groceries, receipt

3. **cbs-ibs-reforma.jpg**
   - Post: "CBS e IBS na Reforma Tributária"
   - Suggested theme: Tax forms, business documents

4. **reforma-tributaria-2025.jpg**
   - Post: "Reforma Tributária 2025: Guia prático para empresários"
   - Suggested theme: Calendar 2025, business meeting

5. **checklist-osp.jpg**
   - Post: "Checklist OSP: Como preparar sua empresa para reforma tributária"
   - Suggested theme: Checklist, business planning

6. **imposto-seletivo.jpg**
   - Post: "Imposto Seletivo e Regimes Diferenciados"
   - Suggested theme: Tax categories, selection concept

7. **ec-132-impactos.jpg**
   - Post: "Reforma Tributária 2025: Impactos práticos da EC 132"
   - Suggested theme: Government building, law books

8. **lucro-real-estrategia.jpg**
   - Post: "Lucro Real com Estratégia"
   - Suggested theme: Strategy board, chess pieces, charts

9. **contabilidade-crescimento.jpg**
   - Post: "Sua contabilidade está impulsionando ou travando o crescimento?"
   - Suggested theme: Growth arrow, business expansion

10. **holding-patrimonial-2025.jpg**
    - Post: "Holding Patrimonial: Por que ainda em 2025?"
    - Suggested theme: Family, real estate, protection

11. **holding-familiar.jpg** (HoldingFamiliar blog post)
    - Post: "Holding Familiar: Planejamento Patrimonial Inteligente"
    - Suggested theme: Family business, succession planning

12. **indicadores-ceo.jpg** (IndicadoresFinanceirosCEO blog post)
    - Post: "Indicadores Financeiros que todo CEO deveria acompanhar"
    - Suggested theme: Dashboard, KPIs, business metrics

13. **estudo-tributario.jpg**
    - Post: "Estudo tributário: Como usar dados para tomar decisões"
    - Suggested theme: Data analysis, charts, tax planning

14. **contabilidade-lucro-real.jpg**
    - Post: "Contabilidade no Lucro Real: Por que mudar de regime"
    - Suggested theme: Accounting documents, regime comparison

## 3. General Images

**Directory:** `/client/public/images/`

- **og-blog.jpg** (1200x630px) - Default Open Graph image for blog listing page
  - Suggested: OSP logo + "Blog" text on branded background

## How to Add Images

### Option 1: Use Existing Images from Current Website
1. Download images from https://ospcontabilidade.com.br/blog/
2. Rename them according to the list above
3. Optimize them (recommended tools: TinyPNG, Squoosh, ImageOptim)
4. Place them in the appropriate directories

### Option 2: Create Placeholder Images
For development purposes, you can use placeholder services:

```bash
# Create placeholder files with correct names (will show broken images until replaced)
cd /Users/leo.de.souza1/OSPWebsite2026/client/public/images/blog
touch tributacao-dividendos.jpg cashback-cesta-basica.jpg cbs-ibs-reforma.jpg
# ... etc for all images
```

### Option 3: Generate with AI
Use AI image generation tools (DALL-E, Midjourney, Stable Diffusion) with the suggested themes above.

## Image Optimization

All images are automatically optimized during build using `vite-plugin-image-optimizer`:
- **Quality:** 85%
- **Formats:** Original + WebP conversion
- **Plugins:** mozjpeg, optipng, svgo

For best results:
1. Start with high-quality source images (1920px width or larger)
2. Use JPG for photographs, PNG for graphics with transparency
3. The build process will handle compression and WebP conversion

## Verification

After adding images, check:

1. **Development server:** Images should load at http://localhost:5000
2. **Blog page:** Featured images should appear in blog post cards
3. **Individual posts:** Hero images should display at top of each post
4. **Homepage:** Building background should show with dark overlay

## Current Status

✅ Directories created: `/client/public/images/blog/` and `/client/public/images/backgrounds/`
✅ Image optimization configured in `vite.config.ts`
✅ OptimizedImage component created with lazy loading
⏳ Actual image files need to be added by you

## Notes

- The website will work without images (they'll show as broken links)
- Blog posts are fully functional even without images
- SEO metadata is complete and ready
- Once images are added, they'll be automatically optimized on build
