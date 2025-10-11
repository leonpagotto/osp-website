# OSP Website Internationalization (i18n) Implementation Guide

## ✅ Completed Tasks

### 1. **i18n Infrastructure Setup**
- ✅ Installed `react-i18next`, `i18next`, `i18next-browser-languagedetector`
- ✅ Created `/client/src/i18n.ts` configuration file
- ✅ Created translation files:
  - `/client/src/locales/pt-BR/translation.json` (Portuguese - Brazil)
  - `/client/src/locales/en/translation.json` (English)
- ✅ Created `LanguageSwitcher` component

### 2. **Leadership Team Images**
- ✅ Added placeholder SVG images for Gervásio, Jonas, and Guilherme
- ✅ Updated SobreNos page to display images instead of icons
- ✅ Images ready to be replaced with actual professional photos

### 3. **Smooth Page Transitions**
- ✅ Implemented Framer Motion AnimatePresence for page transitions
- ✅ Created `PageTransition` wrapper component
- ✅ Optimized animations (0.3s duration) for performance

---

## 🔧 Implementation Steps to Complete

### Step 1: Initialize i18n in main.tsx

Update `/client/src/main.tsx`:

```typescript
import './index.css';
import './i18n'; // Add this import
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Step 2: Add Language Switcher to Header

Update `/client/src/components/Header.tsx`:

```typescript
// Add import
import LanguageSwitcher from '@/components/LanguageSwitcher';

// Inside the Header component, add to the desktop navigation (around line 120):
<div className="flex items-center gap-4">
  <LanguageSwitcher />
  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <Button>Falar com Especialista</Button>
  </a>
</div>

// For mobile menu, add before the CTA button:
<div className="px-4 pb-4">
  <LanguageSwitcher />
</div>
```

### Step 3: Update Components to Use Translations

Example for Header navigation:

```typescript
import { useTranslation } from 'react-i18next';

// Inside component:
const { t } = useTranslation();

// Replace hardcoded text:
<Link href="/">{t('nav.home')}</Link>
<Link href="/solucoes">{t('nav.solutions')}</Link>
// etc.
```

---

## 📝 Translation File Structure

Add these sections to both `pt-BR/translation.json` and `en/translation.json`:

### Navigation & Common Elements
```json
{
  "nav": { ... },
  "common": { ... },
  "hero": { ... },
  "footer": { ... }
}
```

### Home Page
```json
{
  "home": {
    "hero": {
      "title": "...",
      "subtitle": "..."
    },
    "stats": {
      "years": "47 anos",
      "clients": "600+ clientes",
      "saved": "R$ 100M+ economizados"
    },
    "solutions": {
      "title": "Nossas Soluções",
      "subtitle": "..."
    }
  }
}
```

### Solutions Page
```json
{
  "solutions": {
    "osp360": {
      "title": "OSP360 - Diagnóstico Estratégico",
      "description": "...",
      "features": [...]
    }
  }
}
```

### Blog
```json
{
  "blog": {
    "title": "Blog OSP",
    "readingTime": "min de leitura",
    "author": "Por",
    "published": "Publicado em",
    "relatedPosts": "Artigos Relacionados"
  }
}
```

---

## 🌍 Pages Requiring Translation

### High Priority (User-Facing Content)
1. **Header** - Navigation menu, CTA buttons
2. **Footer** - Links, copyright, social media
3. **Home** - Hero, stats, solutions overview, testimonials
4. **Sobre Nós** - Company history, team, values
5. **Contato** - Form labels, contact information
6. **Soluções** - Solution cards, descriptions
7. **Segmentos** - Segment cards, descriptions

### Medium Priority (Content Pages)
8. **Resultados** - Case studies, metrics
9. **Faça Parte** - Careers page, job listings
10. **Materiais** - Resources, downloads
11. **Blog** - Post listings, categories

### Lower Priority (Individual Pages)
12. **Solution Detail Pages** (8 pages)
13. **Segment Detail Pages** (6 pages)
14. **Blog Post Pages** (14 posts) - *Can be pt-BR only initially*

---

## 🎯 Translation Priority Strategy

### Phase 1: Core Infrastructure (Now)
- ✅ i18n setup
- ✅ Language switcher
- ⏳ Header navigation
- ⏳ Footer
- ⏳ Common CTAs and buttons

### Phase 2: Landing Pages (Week 1)
- Home page
- About Us (Sobre Nós)
- Contact (Contato)
- Solutions overview
- Segments overview

### Phase 3: Detail Pages (Week 2)
- Individual solution pages
- Individual segment pages
- Results page
- Careers page

### Phase 4: Content (Week 3-4)
- Blog listing page
- Materials page
- Selected blog posts (start with most popular)

---

## 💡 Best Practices

### 1. **Keep Keys Organized**
```json
{
  "page": {
    "section": {
      "element": "text"
    }
  }
}
```

### 2. **Use Interpolation for Dynamic Content**
```json
{
  "greeting": "Olá, {{name}}!"
}
```

```typescript
t('greeting', { name: 'João' });
```

### 3. **Handle Pluralization**
```json
{
  "items": "{{count}} item",
  "items_plural": "{{count}} itens"
}
```

### 4. **SEO Considerations**
- Use `lang` attribute: `<html lang={i18n.language}>`
- Update meta tags per language
- Consider separate URLs for English content (e.g., `/en/about`)

### 5. **Context-Specific Translations**
```json
{
  "button": {
    "submit": "Enviar",
    "submit_form": "Enviar Formulário",
    "submit_application": "Enviar Candidatura"
  }
}
```

---

## 🔍 Testing Checklist

- [ ] Language persists after page reload (localStorage)
- [ ] All navigation links work in both languages
- [ ] Forms validate correctly in both languages
- [ ] Date/number formatting adapts to locale
- [ ] SEO meta tags update per language
- [ ] URLs remain accessible (no language in URL initially)
- [ ] Language switcher visible on all pages
- [ ] Mobile menu shows language switcher
- [ ] Fallback to Portuguese if translation missing

---

## 📚 Useful Commands

### Add Translation Everywhere
```typescript
import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();

// Use in JSX:
<h1>{t('home.hero.title')}</h1>

// Change language programmatically:
i18n.changeLanguage('en');
```

### Get Current Language
```typescript
const currentLang = i18n.language; // 'pt-BR' or 'en'
```

---

## 🎨 Example: Translating a Component

**Before:**
```typescript
export default function Hero() {
  return (
    <div>
      <h1>Contabilidade Estratégica</h1>
      <p>47 anos de experiência</p>
      <Button>Falar com Especialista</Button>
    </div>
  );
}
```

**After:**
```typescript
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <Button>{t('common.contact')}</Button>
    </div>
  );
}
```

---

## 📦 File Structure

```
client/src/
├── i18n.ts                    # i18n configuration
├── locales/
│   ├── pt-BR/
│   │   └── translation.json   # Portuguese translations
│   └── en/
│       └── translation.json   # English translations
├── components/
│   └── LanguageSwitcher.tsx   # Language selector component
```

---

## 🚀 Quick Start

1. Import i18n in main.tsx (Step 1 above)
2. Add LanguageSwitcher to Header
3. Start translating Header and Footer
4. Test language switching works
5. Gradually translate other components
6. Test thoroughly before deploying

---

## 🔗 Resources

- [react-i18next Documentation](https://react.i18next.com/)
- [i18next Documentation](https://www.i18next.com/)
- [Best Practices](https://react.i18next.com/latest/using-with-hooks)

---

**Status:** Infrastructure ready. Ready to begin translating components.

**Next Action:** Import i18n in main.tsx and add LanguageSwitcher to Header.
