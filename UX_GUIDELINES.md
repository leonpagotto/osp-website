# UX-First Development Guidelines

## 🎯 Core UX Principles

### 1. **User-Centered Design**
Every decision should prioritize the user's needs and goals. For OSP's B2B audience (CFOs, financial decision-makers):
- Clear, professional communication
- Easy access to key information
- Minimal friction in conversion paths
- Trust-building elements prominently displayed

### 2. **Simplicity Over Complexity**
- One clear action per page
- Reduce cognitive load
- Progressive disclosure (show details on demand)
- White space is your friend

### 3. **Accessibility First**
- WCAG AA compliance minimum
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratios met
- Touch targets ≥ 44px

## 📱 Responsive Design Best Practices

### Mobile-First Approach
```tsx
// ✅ GOOD: Mobile first, enhance for desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ❌ BAD: Desktop first, reduce for mobile
<div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
```

### Breakpoint Strategy
- **Mobile**: < 768px (1 column, stacked content)
- **Tablet**: 768px - 1024px (2 columns, hybrid layout)
- **Desktop**: > 1024px (3+ columns, full layout)

### Touch Targets
```css
/* Minimum touch target size */
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 24px;
}
```

## 🎨 Visual Hierarchy

### Typography Scale
Follow the design system hierarchy:
- **H1**: 56px/700 - Page title (one per page)
- **H2**: 40px/600 - Section titles
- **H3**: 28px/600 - Subsections
- **Body**: 18px/400 - Content (16px minimum)

### Spacing System
Use consistent spacing from Tailwind:
```tsx
// ✅ GOOD: Consistent spacing
<div className="space-y-8">
  <section className="mb-12">
  <div className="px-4 md:px-8 lg:px-12">

// ❌ BAD: Random spacing
<div style={{ marginBottom: '37px' }}>
```

### Color Usage
- **Primary Blue**: CTAs, links, key actions
- **Dark Navy**: Backgrounds, headers
- **White/Gray**: Text, supporting content
- **Green**: Success states, positive metrics
- **Amber**: Warnings, attention items

## 🚀 Performance = UX

### Core Web Vitals Goals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Implementation
```tsx
// ✅ GOOD: Optimized image with dimensions
<OptimizedImage
  src="/images/hero.jpg"
  alt="Professional consultation"
  width={1920}
  height={1080}
  priority={true}
/>

// ❌ BAD: No dimensions (causes layout shift)
<img src="/images/hero.jpg" alt="Hero" />
```

### Loading States
Always provide feedback:
```tsx
// ✅ GOOD: Clear loading state
{isLoading ? (
  <div className="flex items-center gap-2">
    <Loader className="animate-spin" />
    <span>Carregando...</span>
  </div>
) : (
  <Content />
)}
```

## 📝 Form Design Best Practices

### Structure
```tsx
// ✅ GOOD: Clear labels, validation, feedback
<form className="space-y-6">
  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Email Corporativo *
    </label>
    <input
      id="email"
      type="email"
      required
      aria-describedby="email-error"
      className="w-full px-4 py-3 rounded-lg border"
    />
    {error && (
      <p id="email-error" className="mt-1 text-sm text-red-500">
        {error}
      </p>
    )}
  </div>
</form>
```

### Form Validation
- **Real-time**: Validate on blur, not on every keystroke
- **Clear errors**: Specific, actionable messages
- **Success states**: Confirm when correct
- **Required fields**: Mark clearly with asterisk (*)

### Best Practices
- Group related fields
- Use appropriate input types
- Provide examples (placeholders)
- Enable autocomplete
- Save progress (for long forms)
- Show character limits
- Disable submit until valid

## 🔍 Navigation & Information Architecture

### Primary Navigation
```tsx
// Clear, consistent navigation
<nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      {/* Main Nav */}
      {/* CTA Button */}
    </div>
  </div>
</nav>
```

### Breadcrumbs
Always show users where they are:
```tsx
<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-2 text-sm">
    <li><Link to="/">Home</Link></li>
    <li aria-hidden="true">/</li>
    <li><Link to="/solucoes">Soluções</Link></li>
    <li aria-hidden="true">/</li>
    <li aria-current="page">TRIBUTA360</li>
  </ol>
</nav>
```

### Footer Navigation
- Quick links to key pages
- Contact information
- Social media links
- Legal links (Privacy, Terms)
- Newsletter signup

## 🎯 Call-to-Action Design

### Button Hierarchy
```tsx
// Primary CTA (one per section)
<button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
  Fale com Especialista
</button>

// Secondary CTA
<button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50">
  Saiba Mais
</button>

// Tertiary (text link)
<a className="text-blue-600 hover:underline">
  Ver mais soluções →
</a>
```

### CTA Best Practices
- Use action verbs ("Fale", "Solicite", "Baixe")
- Create urgency when appropriate
- One primary CTA per viewport
- High contrast and visibility
- Show what happens next

## ✍️ Content Guidelines

### Writing for B2B
- **Professional tone**: Authoritative but approachable
- **Clarity**: Avoid jargon unless necessary
- **Brevity**: Get to the point quickly
- **Value-focused**: Benefits before features
- **Social proof**: Use stats, testimonials, case studies

### Content Structure
```
1. Hook: Compelling headline (what's in it for them)
2. Problem: Identify the pain point
3. Solution: How OSP solves it
4. Evidence: Proof (stats, testimonials)
5. CTA: Clear next step
```

### Writing Checklist
- [ ] Headline clearly states benefit
- [ ] First paragraph hooks reader
- [ ] Scannable (headings, bullets, short paragraphs)
- [ ] Action-oriented language
- [ ] No grammatical errors
- [ ] Appropriate reading level (8th-10th grade)

## 🎭 Micro-interactions

### Hover States
```tsx
// ✅ GOOD: Subtle, informative hover
<button className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">

// ❌ BAD: Distracting, slow
<button className="transition-all duration-1000 hover:rotate-360 hover:scale-200">
```

### Loading Indicators
- Skeleton screens for content areas
- Spinners for actions
- Progress bars for multi-step processes
- Optimistic UI updates

### Feedback
Every action needs feedback:
- **Click**: Visual response (color change, scale)
- **Submit**: Loading state, then success/error
- **Error**: Clear message with how to fix
- **Success**: Confirmation message

## ♿ Accessibility Guidelines

### Keyboard Navigation
```tsx
// ✅ GOOD: Keyboard accessible
<button
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>

// Use native elements when possible
<button> (not <div onClick>)
<a href> (not <span onClick>)
```

### ARIA Labels
```tsx
// ✅ GOOD: Descriptive for screen readers
<button aria-label="Close dialog">
  <X className="w-6 h-6" />
</button>

// ✅ GOOD: Live regions for dynamic content
<div role="alert" aria-live="polite">
  {statusMessage}
</div>
```

### Focus Management
- Visible focus indicators
- Logical tab order
- Skip to main content link
- Focus trap in modals

## 📊 Data Visualization

### Stats Display
```tsx
// ✅ GOOD: Clear hierarchy, context
<div className="text-center">
  <div className="text-5xl font-bold text-blue-600">600+</div>
  <div className="text-lg text-gray-400 mt-2">Empresas Atendidas</div>
</div>
```

### Best Practices
- Large, bold numbers (Space Grotesk font)
- Descriptive labels below
- Use color for meaning (green = positive)
- Animate on scroll (subtle)
- Provide context (% change, timeframe)

## 🧪 Testing UX

### User Testing Checklist
- [ ] Can users find what they need in < 3 clicks?
- [ ] Are CTAs obvious and compelling?
- [ ] Is the value proposition clear in 5 seconds?
- [ ] Do forms work smoothly?
- [ ] Is navigation intuitive?
- [ ] Does the site work on mobile?
- [ ] Are loading times acceptable?

### A/B Testing Ideas
- CTA button text variations
- Headline variations
- Form length (long vs. short)
- Page layout options
- Image vs. video hero

### Analytics to Track
- **Bounce rate**: High = poor UX
- **Time on page**: Low = confusing content
- **Scroll depth**: Shows engagement
- **Form abandonment**: Where users drop off
- **Click heatmaps**: What users interact with

## 🚨 Common UX Mistakes to Avoid

### ❌ DON'T
- Use auto-playing videos/audio
- Hide important content in carousels
- Use tiny font sizes (< 16px)
- Make users zoom on mobile
- Have unclear error messages
- Use ambiguous icons without labels
- Create horizontal scrolling
- Ignore loading states
- Use generic CTAs ("Click here", "Submit")
- Bury contact information

### ✅ DO
- Provide immediate feedback
- Use clear, descriptive labels
- Make clickable elements obvious
- Maintain consistency across pages
- Test on real devices
- Optimize for speed
- Write clear error messages
- Make forms easy to fill
- Use white space effectively
- Put users first, always

## 📱 Mobile-Specific UX

### Mobile Navigation
- Hamburger menu for secondary items
- Sticky header with key actions
- Bottom navigation for primary actions (optional)
- Swipe gestures (where appropriate)

### Mobile Forms
- One column layout
- Large input fields
- Use appropriate keyboards (email, phone, number)
- Minimize typing (use selects, checkboxes)
- Autofill enabled

### Mobile Content
- Shorter paragraphs (2-3 lines)
- Larger touch targets
- Thumb-friendly placement
- Collapsible sections (accordions)
- Click-to-call phone numbers

## 🎯 Conversion Optimization

### Above the Fold
- Clear value proposition
- Strong visual (image or video)
- Primary CTA
- Trust indicators (logos, stats)

### Persuasion Techniques
- **Social proof**: "600+ empresas confiam"
- **Urgency**: "Vagas limitadas"
- **Authority**: Certifications, awards
- **Reciprocity**: Free resources
- **Scarcity**: "Apenas 3 vagas restantes"

### Landing Page Formula
1. Headline (clear benefit)
2. Subheadline (elaborate)
3. Hero image/video
4. Trust badges
5. Features/benefits
6. Social proof
7. CTA (multiple times)
8. FAQ
9. Final CTA

---

## 🔄 Continuous Improvement

UX is never "done". Continuously:
- Monitor analytics
- Gather user feedback
- Test new ideas
- Fix pain points
- Update content
- Improve performance

**Remember: The best UX is invisible. Users shouldn't think about the interface—they should accomplish their goals effortlessly.**

---

Last Updated: October 11, 2025
