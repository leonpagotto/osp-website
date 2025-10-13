# Performance Optimization Plan - Target: 92%+ Score

## Current Status Analysis

### Build Output Analysis
- **Main Bundle**: 902.75 kB (200.98 kB gzipped)
- **CSS**: 110.34 kB (16.55 kB gzipped)
- **React Vendor**: 314.31 kB (95.81 kB gzipped)
- **Animations (Framer Motion)**: 112.76 kB (36.29 kB gzipped)
- **UI Components (Radix)**: 87.42 kB (28.01 kB gzipped)
- **i18n**: 54.39 kB (17.12 kB gzipped)

### Key Issues Identified
1. ❌ **No Code Splitting**: All routes loaded upfront
2. ❌ **Large Main Bundle**: 902 kB needs splitting
3. ⚠️ **All Blog Posts Imported**: 14 blog posts loaded on every page
4. ⚠️ **Framer Motion**: Heavy animation library (112 kB)
5. ✅ **Good**: Already using manual chunks for vendors
6. ✅ **Good**: Terser minification enabled

---

## 🎯 Optimization Strategy (Priority Order)

### Phase 1: Critical - Code Splitting (Expected: +15-20 points)

#### 1.1 Lazy Load Routes
**Impact**: Reduce initial bundle by ~60%

```typescript
// App.tsx - BEFORE
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";

// App.tsx - AFTER
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Blog = lazy(() => import("@/pages/Blog"));
const Solucoes = lazy(() => import("@/pages/Solucoes"));
// ... all other routes

// Wrap routes in Suspense
<Suspense fallback={<PageLoader />}>
  <Switch>
    <Route path="/" component={Home} />
    {/* ... */}
  </Switch>
</Suspense>
```

**Expected Result**: Initial load reduces from 902 kB → ~300 kB

#### 1.2 Lazy Load Blog Posts
**Impact**: Remove 14 blog posts from main bundle

```typescript
// App.tsx - BEFORE
import TributacaoDividendos from "@/pages/blog/TributacaoDividendos";
import CashbackCestaBasica from "@/pages/blog/CashbackCestaBasica";
// ... 12 more

// App.tsx - AFTER
const blogRoutes = [
  { slug: "tributacao-dividendos", loader: () => import("@/pages/blog/TributacaoDividendos") },
  { slug: "cashback-cesta-basica", loader: () => import("@/pages/blog/CashbackCestaBasica") },
  // ... 12 more
];

blogRoutes.map(({ slug, loader }) => (
  <Route key={slug} path={`/blog/${slug}`} component={lazy(loader)} />
))
```

**Expected Result**: Remove ~200 kB from initial bundle

---

### Phase 2: High Priority - Optimize Dependencies (Expected: +10-15 points)

#### 2.1 Replace Framer Motion with CSS Animations
**Impact**: Remove 112 kB library

**Current Usage Analysis**:
- Hero animations
- Card hover effects
- Scroll animations
- Page transitions

**Solution**: Replace with:
- CSS `@keyframes` + `animation`
- Intersection Observer for scroll animations
- CSS `transition` for hover effects

**Keep Framer Motion for**:
- Complex gestures (if any)
- Can lazy load for specific components only

#### 2.2 Optimize Radix UI Imports
**Current**: Importing entire components

```typescript
// BEFORE
import { Badge } from '@/components/ui/badge';

// AFTER - Tree-shakeable imports
import * as BadgePrimitive from '@radix-ui/react-badge';
```

#### 2.3 Optimize Lucide Icons
**Current**: 14.51 kB (5.09 kB gzipped)

```typescript
// BEFORE
import { Calendar, User, Clock } from 'lucide-react';

// AFTER - Direct imports
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import User from 'lucide-react/dist/esm/icons/user';
```

---

### Phase 3: Medium Priority - Asset Optimization (Expected: +5-10 points)

#### 3.1 Enable Image Optimization
**Current**: Disabled in vite.config.ts

```typescript
// Uncomment and configure
ViteImageOptimizer({
  png: { quality: 80 },
  jpeg: { quality: 80 },
  webp: { quality: 80 },
})
```

#### 3.2 Implement Responsive Images

```tsx
<picture>
  <source srcSet="/images/hero-mobile.webp" media="(max-width: 768px)" />
  <source srcSet="/images/hero-desktop.webp" media="(min-width: 769px)" />
  <img src="/images/hero-desktop.webp" alt="..." loading="lazy" />
</picture>
```

#### 3.3 Lazy Load Images Below Fold

```tsx
<img 
  src="..." 
  alt="..." 
  loading="lazy" 
  decoding="async"
/>
```

---

### Phase 4: Font Optimization (Expected: +5 points)

#### 4.1 Preload Critical Fonts

```html
<!-- In index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" as="font" type="font/woff2" href="/fonts/inter.woff2" crossorigin />
```

#### 4.2 Font Display Strategy

```css
@font-face {
  font-family: 'Inter';
  font-display: swap; /* Prevents FOIT */
  src: url('/fonts/inter.woff2') format('woff2');
}
```

---

### Phase 5: Runtime Performance (Expected: +5-10 points)

#### 5.1 Reduce Re-renders

```typescript
// Memoize expensive components
import { memo } from 'react';

const BlogCard = memo(({ post }) => {
  // Component logic
});

// Memoize callbacks
const handleClick = useCallback(() => {
  // Handler logic
}, []);
```

#### 5.2 Virtualize Long Lists

```typescript
// For blog list with many posts
import { useVirtual } from '@tanstack/react-virtual';
```

#### 5.3 Debounce Search/Filters

```typescript
import { useDebouncedValue } from '@/hooks/useDebounce';

const debouncedSearch = useDebouncedValue(search, 300);
```

---

### Phase 6: Build Configuration (Expected: +3-5 points)

#### 6.1 Optimize Terser Settings

```typescript
// vite.config.ts
terserOptions: {
  compress: {
    drop_console: true,
    drop_debugger: true,
    pure_funcs: ['console.log', 'console.info'],
    passes: 2, // More aggressive
  },
  mangle: {
    safari10: true,
  },
}
```

#### 6.2 Enable Brotli Compression

```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      // Better compression
      compact: true,
    }
  }
}
```

#### 6.3 Preload Critical Resources

```html
<!-- index.html -->
<link rel="modulepreload" href="/src/main.tsx" />
<link rel="prefetch" href="/src/pages/Blog.tsx" />
```

---

## 📊 Expected Results

| Optimization | Before | After | Improvement |
|--------------|--------|-------|-------------|
| Initial JS Load | 902 kB | ~280 kB | **-69%** |
| Time to Interactive | ~4.5s | ~1.8s | **-60%** |
| Lighthouse Performance | 65-75 | **92+** | **+20-27** |
| First Contentful Paint | ~2.1s | ~1.0s | **-52%** |
| Cumulative Layout Shift | 0.15 | <0.1 | **-33%** |

---

## 🚀 Implementation Priority Queue

### Week 1 (Critical - Target: 85% score)
1. ✅ Implement lazy loading for all routes
2. ✅ Lazy load all blog posts
3. ✅ Create loading skeleton components
4. ✅ Test and measure improvements

### Week 2 (High Priority - Target: 90% score)
1. ✅ Replace Framer Motion animations with CSS
2. ✅ Optimize icon imports (lucide-react)
3. ✅ Enable image optimization
4. ✅ Add lazy loading to images

### Week 3 (Medium Priority - Target: 92%+ score)
1. ✅ Font optimization (preload, font-display)
2. ✅ Implement component memoization
3. ✅ Optimize Radix UI imports
4. ✅ Add resource hints (preconnect, prefetch)

### Week 4 (Polish - Target: 95%+ score)
1. ✅ Implement virtual scrolling for lists
2. ✅ Add service worker for caching
3. ✅ Optimize third-party scripts
4. ✅ Monitor and fine-tune

---

## 🛠 Quick Wins (Implement First)

### 1. Loading Component
```tsx
// components/PageLoader.tsx
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );
}
```

### 2. Error Boundary for Lazy Routes
```tsx
// components/ErrorBoundary.tsx
export class ErrorBoundary extends Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### 3. Preload Critical Routes
```typescript
// Preload home page resources
const preloadHome = () => {
  import('@/pages/Home');
};

// Trigger on user intent
<Link href="/" onMouseEnter={preloadHome}>Home</Link>
```

---

## 📈 Monitoring & Testing

### Tools to Use
1. **Lighthouse CI** - Automated testing
2. **Chrome DevTools** - Performance profiling
3. **WebPageTest** - Real-world testing
4. **Bundle Analyzer** - Already configured (stats.html)

### Metrics to Track
- ✅ Lighthouse Performance Score (Target: 92+)
- ✅ Time to Interactive (Target: <2s)
- ✅ First Contentful Paint (Target: <1.2s)
- ✅ Cumulative Layout Shift (Target: <0.1)
- ✅ Total Bundle Size (Target: <300 kB initial)

---

## 🎯 Success Criteria

- ✅ **Lighthouse Performance**: 92+ on mobile
- ✅ **Lighthouse Performance**: 95+ on desktop
- ✅ **Initial Load**: <300 kB JavaScript
- ✅ **Time to Interactive**: <2 seconds
- ✅ **First Contentful Paint**: <1.2 seconds
- ✅ **Cumulative Layout Shift**: <0.1

---

## 🔗 Resources

- [Web Vitals](https://web.dev/vitals/)
- [React Lazy Loading Guide](https://react.dev/reference/react/lazy)
- [Vite Code Splitting](https://vitejs.dev/guide/build.html#chunking-strategy)
- [Lighthouse Performance Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)

---

**Next Steps**: Start with Phase 1 (Code Splitting) - this alone should get you from ~70% to ~85% score.
