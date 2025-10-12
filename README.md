# OSP Contabilidade Digital - Website 2026

Modern, SEO-optimized website for OSP Contabilidade Digital, featuring a comprehensive blog system, dynamic content management, and professional B2B design.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-teal)](https://tailwindcss.com/)

## 🌟 Features

- ✅ **Full SEO Optimization**: Meta tags, Open Graph, Twitter Cards, Schema.org structured data
- ✅ **Advanced Blog System**: Category filtering, real-time search, featured posts
- ✅ **Image Optimization**: Automatic WebP conversion, lazy loading, responsive images
- ✅ **Responsive Design**: Mobile-first approach with perfect tablet and desktop layouts
- ✅ **Dark Mode**: Professional dark theme with corporate blue accents
- ✅ **Type-Safe**: Full TypeScript implementation with zero compile errors
- ✅ **Component Library**: shadcn/ui with custom OSP styling
- ✅ **Performance**: Code splitting, lazy loading, optimized builds
- ✅ **Accessibility**: WCAG AA compliant, keyboard navigation, screen reader support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5000
```

## 📋 Tech Stack

### Frontend
- **Framework**: React 18.3.1 with TypeScript 5.6.3
- **Build Tool**: Vite 5.4.20
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: Wouter 3.3.5 (lightweight client-side routing)
- **State Management**: TanStack Query 5.60.5

### Backend
- **Runtime**: Node.js 18+
- **Server**: Express 4.21.2
- **Database**: PostgreSQL with Drizzle ORM 0.39.1
- **Session**: express-session with PostgreSQL store

### SEO & Performance
- **SEO**: react-helmet-async 1.3.0
- **Structured Data**: Custom Schema.org implementation
- **Image Optimization**: vite-plugin-image-optimizer + Sharp
- **Sitemap**: sitemap 8.0.0

## 📁 Project Structure

```
OSPWebsite2026/
├── client/                          # Frontend application
│   ├── public/
│   │   └── images/                 # Static images
│   │       ├── blog/               # Blog post featured images (14 images needed)
│   │       └── backgrounds/        # Hero backgrounds (osp-building.jpg needed)
│   ├── src/
│   │   ├── components/             # React components
│   │   │   ├── SEO/               # SEO components (SEOHead, StructuredData)
│   │   │   ├── ui/                # shadcn/ui components (42 components)
│   │   │   ├── BlogPostTemplate.tsx  # Reusable blog template
│   │   │   ├── OptimizedImage.tsx    # Image optimization component
│   │   │   ├── Header.tsx            # Navigation with OSP logo
│   │   │   ├── Footer.tsx            # Site footer
│   │   │   ├── HeroSection.tsx       # Hero with background support
│   │   │   └── ...                   # Feature components
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Blog.tsx           # Blog listing (search & filtering)
│   │   │   ├── Contato.tsx
│   │   │   ├── SobreNos.tsx
│   │   │   ├── blog/              # Individual blog posts
│   │   │   │   ├── HoldingFamiliar.tsx          ✅ Complete
│   │   │   │   ├── IndicadoresFinanceirosCEO.tsx ✅ Complete
│   │   │   │   └── ...            # 12 more posts to create
│   │   │   ├── segments/          # Segment pages
│   │   │   └── solutions/         # Solution pages
│   │   ├── data/
│   │   │   └── blogPosts.ts       # Blog metadata (14 posts catalogued)
│   │   ├── lib/
│   │   │   ├── seo-utils.ts       # SEO utilities
│   │   │   ├── image-utils.ts     # Image optimization utilities
│   │   │   └── utils.ts           # General utilities
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── App.tsx                # App root with routing
│   │   └── main.tsx               # Entry point
│   └── index.html
├── server/                         # Backend Express server
│   ├── index.ts                   # Server entry point
│   ├── routes.ts                  # API routes
│   ├── vite.ts                    # Vite dev middleware
│   └── storage.ts                 # Database logic
├── shared/
│   └── schema.ts                  # Shared types and schemas
├── .github/
│   └── copilot-instructions.md    # AI coding assistant guidelines
├── docs/                           # Project documentation (30+ files)
│   ├── README.md                  # Documentation index
│   ├── WORDPRESS_MIGRATION_PLAN.md      # WordPress → React migration guide
│   ├── POST_LAUNCH_ENHANCEMENTS_COMPLETE.md  # Post-launch summary
│   ├── SEO_ENHANCEMENT_COMPLETE.md      # SEO implementation
│   ├── PERFORMANCE_OPTIMIZATION_COMPLETE.md  # Performance guide
│   ├── BLOG_IMPLEMENTATION_COMPLETE.md  # Blog system overview
│   ├── I18N_IMPLEMENTATION_GUIDE.md     # Internationalization guide
│   ├── IMAGE_SETUP_INSTRUCTIONS.md      # Image requirements
│   ├── SEO_CHECKLIST.md                 # SEO optimization guide
│   ├── UX_GUIDELINES.md                 # Design principles
│   └── ... (20+ more documentation files)
└── README.md                      # This file
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#0066CC` (Corporate Blue)
- **Navy**: `#212B3D` (Dark backgrounds)
- **Accent**: Deep blue gradients
- **Text**: White/Gray hierarchy on dark backgrounds

### Typography
- **Headings**: Inter (700, 600)
- **Body**: Inter (400, 500)
- **Numbers/Stats**: Space Grotesk (700)
- **Responsive**: 4xl → 5xl on desktop

### Logo
- **Icon**: OSP symbol SVG (`/images/osp-logo-white.svg`)
- **Variants**: White for dark backgrounds, blue filter for light
- **Size**: 40x40px (10 with padding)

### Components
All components from shadcn/ui are customized with OSP branding:
- Cards with subtle elevation
- Buttons with hover states
- Badges for categories
- Forms with validation
- Navigation with dropdowns

## 🔍 Blog System

### Features
- **14 Posts Catalogued**: Complete metadata in `client/src/data/blogPosts.ts`
- **Category Filtering**: 5 categories (Reforma Tributária, Lucro Real, etc.)
- **Real-time Search**: Searches titles, descriptions, and keywords
- **Featured Posts**: Top 3 posts highlighted
- **SEO Optimized**: Each post has meta tags, OG images, structured data
- **Related Posts**: 3 recommendations per post
- **Social Sharing**: WhatsApp, LinkedIn, Email buttons
- **Reading Time**: Estimated reading time displayed
- **Author Attribution**: Guilherme Pagotto bio with photo

### Blog Post Status
✅ **Complete (2/14)**:
1. Holding Familiar (`/blog/holding-familiar`)
2. Indicadores Financeiros CEO (`/blog/indicadores-financeiros-ceo`)

⏳ **Catalogued (12/14)**: Metadata ready, pages need creation

### Creating New Blog Posts

Use the `BlogPostTemplate` component:

```tsx
import { BlogPostTemplate } from "@/components/BlogPostTemplate";
import { authorInfo } from "@/data/blogPosts";

export default function YourPost() {
  const relatedPosts = [
    { slug: "...", title: "...", category: "..." },
    { slug: "...", title: "...", category: "..." },
    { slug: "...", title: "...", category: "..." }
  ];

  return (
    <BlogPostTemplate
      title="Your Post Title"
      description="SEO description"
      keywords="keyword1, keyword2, keyword3"
      canonicalUrl="/blog/your-post-slug"
      ogImage="/images/blog/your-post.jpg"
      category="Category Name"
      categorySlug="category-slug"
      publishedDate="2025-XX-XX"
      readingTime="X min de leitura"
      author={authorInfo}
      heroImage="/images/blog/your-post.jpg"
      relatedPosts={relatedPosts}
    >
      <p>Your article content here...</p>
      <h2>Section Title</h2>
      <p>More content...</p>
    </BlogPostTemplate>
  );
}
```

## 🖼️ Image Requirements

### Required Images

**See `/docs/IMAGE_SETUP_INSTRUCTIONS.md` for complete details.**

#### Background Image
- `client/public/images/backgrounds/osp-building.jpg`
- Size: 1920x1080px or larger
- Used in homepage hero with 82% dark overlay

#### Blog Images (14 files)
All in `client/public/images/blog/`, size 1200x630px:
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

### Image Optimization
All images are automatically optimized during build:
- **Quality**: 85%
- **Format**: WebP conversion + original
- **Lazy Loading**: Automatic below the fold
- **Responsive**: srcset generation

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18 or higher
- npm 9+ or yarn
- PostgreSQL (optional, for database features)
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/leonpagotto/osp-website.git
cd osp-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/ospwebsite"
SESSION_SECRET="your-secure-random-string-here"
GOOGLE_API_KEY="your-google-api-key" # Optional
```

4. **Initialize database** (if using database features)
```bash
npm run db:push
```

5. **Start development server**
```bash
npm run dev
```

Visit http://localhost:5000

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload (port 5000)

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run check        # TypeScript type checking
npm run db:push      # Push database schema changes

# Database
npm run db:studio    # Open Drizzle Studio (database GUI)
```

## 🌐 Deployment

### Environment Setup
Set these variables in your production environment:
```env
NODE_ENV=production
DATABASE_URL=your_production_database_url
SESSION_SECRET=strong_random_secret_key
```

### Build & Deploy
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Deployment Platforms
Compatible with:
- Vercel
- Netlify
- Railway
- Heroku
- AWS
- DigitalOcean
- Any Node.js hosting

## 🔧 Configuration

### Vite Configuration
- **Base URL**: `/`
- **Port**: 5000
- **Image Optimization**: Enabled (85% quality)
- **Build**: ES2020 target, code splitting

### Tailwind Configuration
- **Dark Mode**: `class` strategy
- **Custom Colors**: OSP brand colors
- **Animations**: Custom keyframes
- **Container**: Responsive with padding

### TypeScript Configuration
- **Target**: ES2020
- **Strict Mode**: Enabled
- **Path Aliases**: `@/*` → `./client/src/*`

## 📊 SEO Implementation

### On Every Page
```tsx
import { SEOHead } from '@/components/SEO';

<SEOHead
  title="Page Title | OSP"
  description="Page description for search engines"
  keywords="keyword1, keyword2, keyword3"
  canonicalUrl="/page-url"
  ogImage="/images/og-image.jpg"
/>
```

### Structured Data
```tsx
import { StructuredData, createOrganizationSchema } from '@/components/SEO';

<StructuredData
  type="organization"
  data={createOrganizationSchema()}
/>
```

### SEO Checklist
- ✅ Unique meta title (50-60 chars)
- ✅ Meta description (150-160 chars)
- ✅ Keywords (5-10 relevant)
- ✅ Canonical URL (prevent duplicates)
- ✅ Open Graph image (1200x630px)
- ✅ Twitter Cards
- ✅ Schema.org markup
- ✅ Alt text on images
- ✅ Semantic HTML (h1-h6 hierarchy)
- ✅ Mobile responsive

## 🧪 Testing

### Manual Testing
```bash
# Start dev server
npm run dev

# Test URLs
http://localhost:5000          # Homepage
http://localhost:5000/blog     # Blog with filtering
http://localhost:5000/blog/holding-familiar  # Blog post
http://localhost:5000/contato  # Contact page
```

### SEO Testing
```bash
# Lighthouse audit
npx lighthouse http://localhost:5000 --view

# Check structured data
# Visit: https://validator.schema.org/
```

### Type Checking
```bash
npm run check
```

## 🐛 Troubleshooting

### Port 5000 Already in Use
```bash
# macOS/Linux
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Build Fails
```bash
# Clear cache
rm -rf node_modules dist .vite
npm install
npm run build
```

### Images Not Loading
1. Check image paths (must start with `/images/`)
2. Verify files exist in `client/public/images/`
3. Clear browser cache
4. Restart dev server

### TypeScript Errors
```bash
# Run type check
npm run check

# Check specific file
npx tsc --noEmit client/src/pages/YourPage.tsx
```

## 📚 Documentation

All documentation is organized in the `/docs` folder. See [docs/README.md](./docs/README.md) for the complete index.

### Key Documents
- **[WordPress Migration Plan](./docs/WORDPRESS_MIGRATION_PLAN.md)**: Complete migration strategy from WordPress to React
- **[Post-Launch Enhancements](./docs/POST_LAUNCH_ENHANCEMENTS_COMPLETE.md)**: Week 3-4 improvements summary
- **[SEO Enhancement](./docs/SEO_ENHANCEMENT_COMPLETE.md)**: Complete SEO implementation guide
- **[Performance Optimization](./docs/PERFORMANCE_OPTIMIZATION_COMPLETE.md)**: Code splitting and optimization
- **[Blog System](./docs/BLOG_IMPLEMENTATION_COMPLETE.md)**: Complete blog features overview
- **[i18n Guide](./docs/I18N_IMPLEMENTATION_GUIDE.md)**: Bilingual implementation guide
- **[Image Setup](./docs/IMAGE_SETUP_INSTRUCTIONS.md)**: Image requirements and instructions
- **[SEO Checklist](./docs/SEO_CHECKLIST.md)**: SEO optimization guide
- **[UX Guidelines](./docs/UX_GUIDELINES.md)**: Design principles

### Quick Links
- 📖 [Documentation Index](./docs/README.md) - Browse all 30+ documentation files
- 🚀 [Quick Start Guide](./docs/QUICKSTART.md) - Get started quickly
- 🔍 [SEO Checklist](./docs/SEO_CHECKLIST.md) - Optimize every page
- 🎨 [Design Guidelines](./docs/design_guidelines.md) - Follow the design system
- 🌍 [Translation Guide](./docs/I18N_IMPLEMENTATION_GUIDE.md) - Add translations

## 🤝 Contributing

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Add comments for complex logic
- Maintain consistent formatting (Prettier)

### Commit Messages
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

### Pull Request Process
1. Create feature branch from `main`
2. Make changes with descriptive commits
3. Run `npm run check` to verify types
4. Test locally with `npm run dev`
5. Submit PR with clear description

## 📞 Support

For questions, issues, or contributions:
- **GitHub**: [github.com/leonpagotto/osp-website](https://github.com/leonpagotto/osp-website)
- **Issues**: Use GitHub Issues for bug reports
- **Discussions**: Use GitHub Discussions for questions

## 📄 License

Proprietary - © 2025 OSP Contabilidade Digital

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Status**: Production Ready ✅

Built with ❤️ for OSP Contabilidade Digital
