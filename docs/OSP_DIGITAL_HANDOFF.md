# 🚀 OSP Digital — Development Handoff Document

**Project Start Date**: October 12, 2025  
**Target Completion**: Phase 1 MVP (2 weeks)  
**Developer**: Replit AI Engineer  
**Project Lead**: Leo Pagotto (UX & Digital Experience Design, Grupo OSP)

---

## 📋 Executive Summary

Build a **premium, dark-mode-first, bilingual (PT/EN) digital consultancy website** for OSP Digital — the innovation arm of Grupo OSP (47-year-old accounting firm). This is a **separate brand** but part of the same corporate group.

**Key Differentiation:**
- OSP Contabilidade (existing) = Traditional, professional, blue palette, accounting focus
- OSP Digital (new) = Innovative, bold, purple/cyan palette, digital transformation focus

---

## 🎯 Project Objectives

1. Create a **modern, high-performance Next.js website** with dark mode as default
2. Implement **bilingual support** (Portuguese primary, English secondary)
3. Build a **design system** with purple/cyan gradients and glassmorphism
4. Set up **Sanity CMS** for blog/insights content management
5. Integrate **Firebase Firestore** for lead capture forms
6. Deploy to **Vercel** with automatic preview deployments
7. Achieve **Lighthouse score ≥ 95** on all metrics

---

## 🛠️ Technical Stack (Mandatory)

| Layer | Technology | Version | Why |
|-------|-----------|---------|-----|
| **Framework** | Next.js (App Router) | 14.x | React Server Components, optimal performance |
| **Language** | TypeScript | 5.x | Type safety, better DX |
| **Styling** | Tailwind CSS | 3.x | Rapid development, consistent with OSP ecosystem |
| **UI Components** | shadcn/ui | Latest | Pre-built accessible components |
| **Animations** | Framer Motion | 11.x | Same as OSP Contabilidade site |
| **CMS** | Sanity.io | 3.x | Headless CMS for blog content |
| **Forms** | React Hook Form + Zod | Latest | Type-safe form validation |
| **Database** | Firebase Firestore | 10.x | Consistency with OSP ecosystem |
| **i18n** | next-intl | 3.x | Native Next.js internationalization |
| **Deployment** | Vercel | Latest | Zero-config Next.js hosting |
| **Analytics** | Vercel Analytics + GA4 | Latest | Performance + user behavior |
| **Email** | Resend + React Email | Latest | Modern email sending |

---

## 🎨 Design System Specifications

### Color Palette

```typescript
// tailwind.config.ts
const colors = {
  // Primary - Innovation & Creativity
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7', // Main purple
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },
  
  // Accent - Technology & Data
  accent: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4', // Main cyan
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  
  // Success - Growth & Transformation
  success: {
    500: '#10b981', // Emerald
  },
  
  // Background & Surfaces (Dark Mode First)
  background: '#0a0a0a',    // Near black
  surface: '#1a1a1a',       // Dark gray
  surfaceHover: '#262626',  // Lighter on hover
  border: '#333333',        // Subtle borders
  
  // Text
  textPrimary: '#fafafa',   // Almost white
  textSecondary: '#d4d4d8', // Lighter gray
  textMuted: '#a1a1aa',     // Muted gray
}
```

### Typography

```typescript
// Font configuration
const fontFamily = {
  sans: ['Inter Variable', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}

const fontSize = {
  // Display (Hero headings)
  'display-xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 72px
  'display-lg': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }], // 60px
  'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],    // 48px
  
  // Headings
  'h1': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }], // 36px
  'h2': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }], // 30px
  'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],   // 24px
  'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],  // 20px
  
  // Body
  'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }], // 18px
  'body': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],        // 16px
  'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],  // 14px
}
```

### Spacing Scale

```typescript
// Custom spacing (extends default Tailwind)
const spacing = {
  '18': '4.5rem',  // 72px
  '22': '5.5rem',  // 88px
  '30': '7.5rem',  // 120px
  '36': '9rem',    // 144px
  '44': '11rem',   // 176px
  '52': '13rem',   // 208px
}
```

### Effects

```typescript
// Glassmorphism
const glassEffect = {
  background: 'rgba(26, 26, 26, 0.7)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}

// Gradient (for CTAs, accents)
const gradientPrimary = {
  background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
}

// Shadows (dark mode optimized)
const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
  glow: '0 0 20px rgba(168, 85, 247, 0.3)', // Purple glow
}
```

---

## 🏗️ Project Structure

```
osp-digital/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalization wrapper
│   │   ├── layout.tsx            # Root layout (dark mode, fonts)
│   │   ├── page.tsx              # Home page
│   │   ├── sobre/                # About page
│   │   ├── solucoes/             # Solutions page
│   │   ├── metodologia/          # Methodology page
│   │   ├── cases/                # Case studies page
│   │   ├── insights/             # Blog listing
│   │   │   └── [slug]/           # Blog post detail
│   │   └── contato/              # Contact page
│   ├── api/                      # API routes
│   │   ├── contact/route.ts      # Contact form handler
│   │   └── subscribe/route.ts    # Newsletter handler
│   └── sitemap.ts                # Dynamic sitemap
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   ├── sections/                 # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── CTA.tsx
│   │   └── ...
│   └── forms/                    # Form components
│       ├── ContactForm.tsx
│       └── NewsletterForm.tsx
├── lib/
│   ├── firebase.ts               # Firebase config
│   ├── sanity.ts                 # Sanity client
│   ├── utils.ts                  # Utilities
│   └── validations.ts            # Zod schemas
├── sanity/                       # Sanity Studio
│   ├── schemas/
│   │   ├── post.ts               # Blog post schema
│   │   ├── author.ts             # Author schema
│   │   └── category.ts           # Category schema
│   └── sanity.config.ts
├── messages/                     # i18n translations
│   ├── pt.json                   # Portuguese
│   └── en.json                   # English
├── public/
│   ├── images/
│   └── fonts/
└── styles/
    └── globals.css               # Tailwind imports + custom CSS
```

---

## 📄 Page Requirements

### 1. Home Page (`/` and `/en`)

**Sections (in order):**

1. **Hero Section**
   - Headline: "Transformação Digital Através de Design, Dados e Tecnologia"
   - Subheadline: "Somos a OSP Digital — o braço de inovação do Grupo OSP. Unimos UX, desenvolvimento, BI e automação para empresas que querem trabalhar de forma mais inteligente."
   - Primary CTA: "Transforme Seu Negócio" → /contato
   - Secondary CTA: "Conheça Nossa Metodologia" → /metodologia
   - Background: Dark gradient with subtle grid pattern
   - Animated gradient sphere (glassmorphic)

2. **Stats Section**
   - "Parte do Grupo OSP" (logo link to osp.com.br)
   - Stats: "47 anos de expertise", "600+ empresas atendidas", "14 estados", "12 países"

3. **Services Overview** (4 columns)
   - Design & Experience (icon: Pen Tool)
   - Development & Engineering (icon: Code)
   - Data & Intelligence (icon: Bar Chart)
   - Automation & AI (icon: Zap)
   - Each card links to /solucoes

4. **Methodology Teaser**
   - 4-step process visualization
   - "Descobrir → Projetar → Desenvolver → Evoluir"
   - CTA: "Conheça Nossa Metodologia" → /metodologia

5. **Case Studies Preview**
   - 3 featured cases (placeholder images + titles)
   - CTA: "Ver Todos os Casos" → /cases

6. **Insights Preview**
   - 3 latest blog posts (from Sanity CMS)
   - CTA: "Ler Mais Insights" → /insights

7. **CTA Section**
   - "Pronto para Transformar Seu Negócio?"
   - Form: Name, Email, Company, Message
   - Submit → Firebase Firestore + Email notification

8. **Footer**
   - OSP Digital logo + description
   - Links: Soluções, Metodologia, Cases, Insights, Contato, Sobre
   - "Parte do Grupo OSP desde 1978" + link to osp.com.br
   - Social media: LinkedIn, Instagram
   - Copyright © 2025 OSP Digital

**Design Notes:**
- Dark background throughout
- Purple/cyan gradient accents on CTAs
- Glassmorphic cards with backdrop-blur
- Smooth scroll animations (fade-in on scroll)
- No double animations! (Use PageTransition wrapper only once)

---

### 2. About Page (`/sobre` and `/en/about`)

**Sections:**

1. **Hero**
   - "Inovação com Propósito"
   - Brief intro about OSP Digital's mission

2. **Story**
   - Connection to Grupo OSP (47 years)
   - Why OSP Digital was created
   - Philosophy: Design thinking + Data-driven + Technology

3. **Values**
   - Innovation, Excellence, Partnership, Results (4 cards)

4. **Team Section** (Optional for MVP)
   - "Time de Especialistas"
   - Placeholder for future team photos
   - For now: "Nosso time reúne especialistas em UX, desenvolvimento, BI e automação"

5. **CTA**
   - "Vamos Conversar?" → /contato

---

### 3. Solutions Page (`/solucoes` and `/en/solutions`)

**Layout:**

1. **Hero**
   - "Soluções para Cada Desafio Digital"
   - "Do design à execução, da estratégia aos resultados"

2. **Service Categories** (5 sections, each with icon + description + benefits list)

   **A. Design & Experience**
   - UX Research & Strategy
   - Service Design & Journey Mapping
   - Design Systems & Brand Architecture
   - Interface Design (Web/Mobile)
   - Prototyping & User Testing
   
   **B. Development & Engineering**
   - Custom Web Applications
   - Mobile Apps (iOS/Android)
   - Dashboard & Admin Panels
   - API Development & Integration
   - Technical Architecture
   
   **C. Data & Intelligence**
   - Business Intelligence & Analytics
   - Data Visualization & Dashboards
   - Predictive Analytics & ML
   - Data Strategy & Governance
   - Real-time Reporting Systems
   
   **D. Automation & AI**
   - Workflow Automation
   - AI Copilots & Assistants
   - RPA (Robotic Process Automation)
   - Integration Platforms
   - Intelligent Document Processing
   
   **E. Strategy & Transformation**
   - Digital Transformation Roadmaps
   - Technology Assessment & Selection
   - Change Management & Training
   - Innovation Workshops
   - Continuous Improvement Programs

3. **Process Preview**
   - "Como Trabalhamos" (link to /metodologia)

4. **CTA**
   - "Fale com um Especialista" → /contato

---

### 4. Methodology Page (`/metodologia` and `/en/methodology`)

**Layout:**

1. **Hero**
   - "Nossa Metodologia"
   - "Do problema à solução, com design e dados no centro"

2. **4-Step Process** (Large visual cards)

   **Descobrir (Discover)**
   - Research & analysis
   - Stakeholder interviews
   - Data audit
   - Current state mapping
   
   **Projetar (Design)**
   - Service blueprints
   - User journeys
   - Prototyping
   - Testing & validation
   
   **Desenvolver (Develop)**
   - Agile development
   - Iterative builds
   - Quality assurance
   - Integration
   
   **Evoluir (Evolve)**
   - Training & handoff
   - Monitoring & analytics
   - Continuous improvement
   - Ongoing support

3. **Frameworks & Tools**
   - Design Thinking, Lean UX, Agile
   - Tools: Figma, React, Python, Power BI, etc.

4. **CTA**
   - "Vamos Aplicar Essa Metodologia ao Seu Negócio" → /contato

---

### 5. Cases Page (`/cases` and `/en/work`)

**For MVP:** Simple grid layout with placeholder case studies

**Structure:**
- Hero: "Transformações Que Entregam Resultados"
- Grid: 6 case study cards (3 rows × 2 columns)
- Each card: Image, title, category, brief description, "Ver Caso" button
- Clicking opens a modal or goes to a detail page (simple for now)

**Placeholder Cases:**
1. "Automação de Processos Financeiros" (Automation)
2. "Dashboard BI para Tomada de Decisão" (Data)
3. "Redesign de App Mobile" (UX/Development)
4. "Sistema de Gestão Integrado" (Development)
5. "AI Copilot para Atendimento" (AI)
6. "Transformação Digital Completa" (Strategy)

---

### 6. Insights Page (`/insights` and `/en/insights`)

**Powered by Sanity CMS**

**Layout:**

1. **Hero**
   - "Insights & Artigos"
   - "Aprenda com nossos especialistas"

2. **Blog Post Grid**
   - Cards: Featured image, title, excerpt, author, date, read time, category tags
   - Pagination (10 posts per page)
   - Filter by category (optional for MVP)

3. **Blog Post Detail Page** (`/insights/[slug]`)
   - Hero image
   - Title, author, date, read time
   - Table of contents (auto-generated from H2/H3)
   - Rich text content (Portable Text from Sanity)
   - Related posts (3 recommendations)
   - CTA: "Quer implementar isso?" → /contato
   - Share buttons (LinkedIn, Twitter, Copy link)

**Initial Content (3 posts minimum):**
1. "Como Unir Design e BI para Decisões Mais Inteligentes"
2. "Service Design e Automação: O Novo Eixo da Eficiência"
3. "Por Que 70% das Transformações Digitais Falham"

---

### 7. Contact Page (`/contato` and `/en/contact`)

**Layout:**

1. **Hero**
   - "Vamos Transformar Juntos?"
   - "Conte-nos sobre seu desafio"

2. **Two-Column Layout**

   **Left: Contact Form**
   - Name (required)
   - Email (required)
   - Company (required)
   - Phone (optional)
   - Service Interest (dropdown: Design, Development, Data, Automation, Strategy, Outro)
   - Message (required, textarea)
   - Privacy policy checkbox (required)
   - Submit button → "Enviar Mensagem"
   
   **Right: Contact Info**
   - Address (Campinas office)
   - Email: contato@ospdigital.com.br
   - Phone: +55 (19) 3251-7676
   - WhatsApp: +55 (19) 99321-6091
   - Business hours: Seg-Sex, 8h-18h
   
3. **Form Submission:**
   - Save to Firebase Firestore (collection: `contact_submissions`)
   - Send email notification via Resend
   - Success message: "Mensagem enviada! Retornaremos em até 24h"
   - Error handling with toast notifications

---

## 🔧 Technical Implementation Details

### 1. Internationalization Setup

```typescript
// next.config.js
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
  },
});

// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  localePrefix: 'as-needed', // /pt is hidden, /en is shown
});

export const config = {
  matcher: ['/', '/(pt|en)/:path*'],
};
```

**Translation Files:**

```json
// messages/pt.json
{
  "home": {
    "hero": {
      "headline": "Transformação Digital Através de Design, Dados e Tecnologia",
      "subheadline": "Somos a OSP Digital — o braço de inovação do Grupo OSP...",
      "ctaPrimary": "Transforme Seu Negócio",
      "ctaSecondary": "Conheça Nossa Metodologia"
    },
    "services": {
      "design": {
        "title": "Design & Experience",
        "description": "..."
      }
      // ...
    }
  },
  "nav": {
    "home": "Início",
    "about": "Sobre",
    "solutions": "Soluções",
    "methodology": "Metodologia",
    "cases": "Cases",
    "insights": "Insights",
    "contact": "Contato"
  },
  "footer": {
    "tagline": "Parte do Grupo OSP desde 1978",
    "copyright": "© 2025 OSP Digital. Todos os direitos reservados."
  }
}

// messages/en.json
{
  "home": {
    "hero": {
      "headline": "Digital Transformation Through Design, Data & Technology",
      "subheadline": "We are OSP Digital — the innovation arm of Grupo OSP...",
      "ctaPrimary": "Transform Your Business",
      "ctaSecondary": "Explore Our Methodology"
    }
    // ... (English translations)
  }
}
```

---

### 2. Firebase Firestore Setup

```typescript
// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// lib/firestore.ts
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export async function submitContactForm(data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  message: string;
  locale: string;
}) {
  return await addDoc(collection(db, 'contact_submissions_digital'), {
    ...data,
    createdAt: Timestamp.now(),
    status: 'new',
    source: 'ospdigital.com.br',
  });
}

export async function subscribeNewsletter(email: string, locale: string) {
  return await addDoc(collection(db, 'newsletter_subscriptions_digital'), {
    email,
    locale,
    subscribedAt: Timestamp.now(),
    source: 'ospdigital.com.br',
  });
}
```

**Environment Variables (.env.local):**
```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Resend (Email)
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=contato@ospdigital.com.br
RESEND_TO_EMAIL=atendimento@osp.com.br

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

### 3. Sanity CMS Setup

**Install Sanity:**
```bash
npm install @sanity/client @sanity/image-url next-sanity
npm install -D @sanity/vision
```

**Sanity Schemas:**

```typescript
// sanity/schemas/post.ts
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Portuguese', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Portuguese', type: 'slug', options: { source: 'title.pt' } },
        { name: 'en', title: 'English', type: 'slug', options: { source: 'title.en' } },
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Portuguese', type: 'text', rows: 3 },
        { name: 'en', title: 'English', type: 'text', rows: 3 },
      ],
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Portuguese', type: 'blockContent' },
        { name: 'en', title: 'English', type: 'blockContent' },
      ],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
    },
  ],
};

// sanity/schemas/author.ts
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'bio', title: 'Bio', type: 'object', fields: [
      { name: 'pt', type: 'text' },
      { name: 'en', type: 'text' },
    ]},
  ],
};

// sanity/schemas/category.ts
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'pt', type: 'string' },
        { name: 'en', type: 'string' },
      ],
    },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.pt' } },
  ],
};
```

**Sanity Client:**

```typescript
// lib/sanity.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Fetch blog posts
export async function getPosts(locale: 'pt' | 'en') {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      "title": title.${locale},
      "slug": slug.${locale}.current,
      "excerpt": excerpt.${locale},
      coverImage,
      publishedAt,
      readTime,
      "author": author->{name, image},
      "categories": categories[]->{"title": title.${locale}}
    }
  `);
}

export async function getPost(slug: string, locale: 'pt' | 'en') {
  return client.fetch(`
    *[_type == "post" && slug.${locale}.current == $slug][0] {
      _id,
      "title": title.${locale},
      "slug": slug.${locale}.current,
      "excerpt": excerpt.${locale},
      coverImage,
      "content": content.${locale},
      publishedAt,
      readTime,
      "author": author->{name, image, "bio": bio.${locale}},
      "categories": categories[]->{"title": title.${locale}}
    }
  `, { slug });
}
```

---

### 4. Email Integration (Resend)

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { submitContactForm } from '@/lib/firestore';
import ContactEmail from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, locale } = body;

    // Save to Firestore
    await submitContactForm({ name, email, company, phone, service, message, locale });

    // Send email notification
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `[OSP Digital] Novo contato de ${name}`,
      react: ContactEmail({ name, email, company, phone, service, message }),
    });

    // Send auto-response to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: locale === 'pt' 
        ? 'Recebemos sua mensagem - OSP Digital' 
        : 'We received your message - OSP Digital',
      react: AutoResponseEmail({ name, locale }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}

// emails/ContactEmail.tsx
import { Html, Head, Body, Container, Heading, Text } from '@react-email/components';

export default function ContactEmail(props: any) {
  const { name, email, company, phone, service, message } = props;
  
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container>
          <Heading>Novo contato - OSP Digital</Heading>
          <Text><strong>Nome:</strong> {name}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          <Text><strong>Empresa:</strong> {company}</Text>
          {phone && <Text><strong>Telefone:</strong> {phone}</Text>}
          <Text><strong>Interesse:</strong> {service}</Text>
          <Text><strong>Mensagem:</strong></Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
```

---

### 5. SEO & Metadata

```typescript
// app/[locale]/layout.tsx
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  const titles = {
    pt: 'OSP Digital — Design, Dados e Tecnologia | Grupo OSP',
    en: 'OSP Digital — Design, Data & Technology | Grupo OSP',
  };
  
  const descriptions = {
    pt: 'Transformação digital através de UX, desenvolvimento, BI e automação. Parte do Grupo OSP — 47 anos de expertise empresarial.',
    en: 'Digital transformation through UX, development, BI, and automation. Part of Grupo OSP — 47 years of business expertise.',
  };
  
  return {
    title: {
      default: titles[locale as keyof typeof titles],
      template: `%s | OSP Digital`,
    },
    description: descriptions[locale as keyof typeof descriptions],
    keywords: locale === 'pt'
      ? 'design thinking, UX, desenvolvimento web, business intelligence, automação, transformação digital'
      : 'design thinking, UX, web development, business intelligence, automation, digital transformation',
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      url: `https://ospdigital.com.br/${locale === 'en' ? 'en' : ''}`,
      siteName: 'OSP Digital',
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'OSP Digital',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `https://ospdigital.com.br/${locale === 'en' ? 'en' : ''}`,
      languages: {
        'pt-BR': 'https://ospdigital.com.br',
        'en': 'https://ospdigital.com.br/en',
      },
    },
  };
}
```

---

## 🎨 Key Components to Build

### 1. PageTransition Component

```typescript
// components/layout/PageTransition.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
```

### 2. Header Component

```typescript
// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: t('about'), href: `/${locale === 'en' ? 'en/' : ''}sobre` },
    { name: t('solutions'), href: `/${locale === 'en' ? 'en/' : ''}solucoes` },
    { name: t('methodology'), href: `/${locale === 'en' ? 'en/' : ''}metodologia` },
    { name: t('cases'), href: `/${locale === 'en' ? 'en/' : ''}cases` },
    { name: t('insights'), href: `/${locale === 'en' ? 'en/' : ''}insights` },
  ];
  
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale === 'en' ? 'en' : ''}`} className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              OSP Digital
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <Link
              href={locale === 'pt' ? '/en' : '/'}
              className="text-sm font-medium text-textMuted hover:text-textPrimary"
            >
              {locale === 'pt' ? 'EN' : 'PT'}
            </Link>
            
            {/* CTA Button */}
            <Button 
              asChild
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white"
            >
              <Link href={`/${locale === 'en' ? 'en/' : ''}contato`}>
                {t('contact')}
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu (implement with animation) */}
    </header>
  );
}
```

### 3. Hero Component

```typescript
// components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero({ 
  headline, 
  subheadline, 
  ctaPrimary, 
  ctaSecondary 
}: {
  headline: string;
  subheadline: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1
          className="text-display-lg md:text-display-xl font-bold mb-6 bg-gradient-to-r from-textPrimary via-primary-500 to-accent-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {headline}
        </motion.h1>
        
        <motion.p
          className="text-body-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subheadline}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-6 text-lg"
          >
            <Link href={ctaPrimary.href}>{ctaPrimary.text}</Link>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-500 text-primary-500 hover:bg-primary-500/10 px-8 py-6 text-lg"
          >
            <Link href={ctaSecondary.href}>{ctaSecondary.text}</Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-textMuted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-textMuted rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
```

### 4. Contact Form Component

```typescript
// components/forms/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useLocale, useTranslations } from 'next-intl';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'Nome da empresa obrigatório'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Selecione um serviço'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const locale = useLocale();
  const t = useTranslations('contact.form');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      });
      
      if (!response.ok) throw new Error('Failed to submit');
      
      toast({
        title: t('successTitle'),
        description: t('successMessage'),
      });
      
      reset();
    } catch (error) {
      toast({
        title: t('errorTitle'),
        description: t('errorMessage'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          placeholder={t('namePlaceholder')}
          {...register('name')}
          error={errors.name?.message}
        />
      </div>
      
      <div>
        <Input
          type="email"
          placeholder={t('emailPlaceholder')}
          {...register('email')}
          error={errors.email?.message}
        />
      </div>
      
      <div>
        <Input
          placeholder={t('companyPlaceholder')}
          {...register('company')}
          error={errors.company?.message}
        />
      </div>
      
      <div>
        <Input
          placeholder={t('phonePlaceholder')}
          {...register('phone')}
        />
      </div>
      
      <div>
        <Select {...register('service')}>
          <SelectTrigger>
            <SelectValue placeholder={t('servicePlaceholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="design">Design & Experience</SelectItem>
            <SelectItem value="development">Development</SelectItem>
            <SelectItem value="data">Data & BI</SelectItem>
            <SelectItem value="automation">Automation & AI</SelectItem>
            <SelectItem value="strategy">Strategy</SelectItem>
            <SelectItem value="other">Outro</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>}
      </div>
      
      <div>
        <Textarea
          placeholder={t('messagePlaceholder')}
          rows={6}
          {...register('message')}
          error={errors.message?.message}
        />
      </div>
      
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary-500 to-accent-500"
      >
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>
    </form>
  );
}
```

---

## 🚀 Deployment Instructions

### 1. Vercel Setup

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
vercel --prod
```

### 2. Environment Variables in Vercel

Add all environment variables from `.env.local` to Vercel dashboard:
- Settings → Environment Variables
- Add all `NEXT_PUBLIC_*` and other vars
- Redeploy after adding

### 3. Domain Setup

1. Add `ospdigital.com.br` in Vercel dashboard
2. Configure DNS:
   - A Record: `@` → Vercel IP
   - CNAME: `www` → `cname.vercel-dns.com`
3. Wait for SSL certificate (automatic)

---

## ✅ Definition of Done (MVP Checklist)

### Pages
- [ ] Home page (7 sections, fully responsive)
- [ ] About page (story, values, CTA)
- [ ] Solutions page (5 service categories)
- [ ] Methodology page (4-step process)
- [ ] Cases page (6 placeholder case studies)
- [ ] Insights page (blog listing + detail)
- [ ] Contact page (form + info)

### Functionality
- [ ] Bilingual routing (PT/EN) working
- [ ] Contact form saves to Firestore
- [ ] Email notifications via Resend
- [ ] Blog posts fetching from Sanity
- [ ] Language switcher functional
- [ ] Mobile menu working
- [ ] All CTAs linked correctly

### Design
- [ ] Dark mode applied throughout
- [ ] Purple/cyan gradient on CTAs
- [ ] Glassmorphic effects on cards
- [ ] Smooth page transitions (NO double animations!)
- [ ] Hover states on all interactive elements
- [ ] Responsive on mobile/tablet/desktop

### Performance
- [ ] Lighthouse score ≥ 90 (all metrics)
- [ ] Images optimized (next/image)
- [ ] Fonts optimized (next/font)
- [ ] No console errors
- [ ] No accessibility warnings

### SEO
- [ ] Meta tags on all pages
- [ ] Open Graph images
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] hreflang tags for PT/EN

### Content
- [ ] All placeholder text in PT/EN
- [ ] 3 initial blog posts published
- [ ] Contact info correct
- [ ] Footer links working
- [ ] Privacy policy page (simple)

---

## 🎯 Success Metrics (Post-Launch)

**Week 1:**
- Deploy successful ✅
- No critical bugs 🐛
- Forms working correctly 📝
- Blog posts displaying 📰

**Month 1:**
- 10+ contact form submissions
- 500+ unique visitors
- Lighthouse score maintained
- 5+ blog posts published

---

## 📞 Handoff & Support

**Primary Contact:**
- Leo Pagotto (UX & Digital Experience Design)
- Email: leo@osp.com.br

**Repository:**
- GitHub: https://github.com/osp-digital
- Repo name: `ospdigital-website`
- Branch: `main` (production), `develop` (staging)

**Questions?**
- Create GitHub Issues for bugs/features
- Use GitHub Discussions for questions
- Tag @leopagotto for urgent items

---

## 🎨 Design Assets

**Figma Prototype:** (To be shared separately)
- Homepage design
- Component library
- Responsive layouts

**Brand Assets:**
- OSP Digital logo (SVG)
- Grupo OSP logo (for footer)
- Placeholder images for case studies
- Blog post cover images (3 minimum)

---

## 🔐 Access Required

Please request access to:
1. **Firebase Project**: `osp-digital` (or create new)
2. **Sanity Project**: Create new via sanity.io
3. **Vercel Account**: osp-digital organization
4. **Resend Account**: For email API
5. **GitHub Org**: https://github.com/osp-digital

---

## 🚀 Timeline Expectations

**Phase 1 (Week 1):**
- Project setup complete
- Design system implemented
- Home page built
- Contact form working

**Phase 2 (Week 2):**
- All remaining pages built
- Sanity CMS configured
- Blog system working
- Testing & bug fixes
- Deploy to production

**Total MVP Delivery:** 2 weeks from start

---

## 💡 Important Notes

1. **NO Double Animations**: Use PageTransition wrapper once at app level, don't add animations to individual sections
2. **Dark Mode First**: All designs should look perfect in dark mode (light mode is optional for v1)
3. **Performance Priority**: Keep bundle size small, lazy load images, use ISR for blog
4. **Accessibility**: Test with keyboard navigation, ensure WCAG AA compliance
5. **Mobile First**: Design and test mobile experience first, then scale up
6. **Consistency with OSP**: Reuse patterns from OSP Contabilidade where possible (Firebase, forms, etc.)

---

**Ready to build? Let's create something amazing! 🚀**

**Questions before starting? Create a GitHub Discussion and tag @leopagotto**
