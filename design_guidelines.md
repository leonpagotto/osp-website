# OSP Contabilidade Digital - Design Guidelines

## Design Approach

**Selected Framework:** Design System Approach with Professional Services Enhancement

**Rationale:** OSP is a B2B professional services platform targeting CFOs and financial decision-makers at large corporations. The site requires information density, trust-building, and professional sophistication while maintaining excellent usability across complex navigation structures.

**Primary System:** Carbon Design System (IBM) - optimized for enterprise applications and data-heavy professional services
**Secondary Influences:** Stripe's restrained elegance, Linear's typography precision

## Core Design Principles

1. **Professional Authority** - Convey expertise through refined visual hierarchy and restrained sophistication
2. **Information Clarity** - Dense content organized with pristine readability and logical structure  
3. **Strategic Trust** - Build confidence through deliberate design choices and social proof integration
4. **Responsive Intelligence** - Seamless experience across all devices for busy executives

## Color Palette

### Primary Brand Colors
**Dark Mode (Primary):**
- Primary Blue: 210 100% 45% (deep corporate blue for trust and stability)
- Secondary Navy: 220 25% 20% (sophisticated dark foundation)
- Background: 220 15% 10% (rich charcoal base)
- Surface: 220 12% 15% (elevated card backgrounds)

**Light Mode Accents:**
- Clean White: 0 0% 100%
- Soft Gray: 220 10% 96% (subtle backgrounds)

### Functional Colors
- Success Green: 145 65% 45% (tax savings, positive results)
- Alert Amber: 35 85% 55% (warnings, attention items)
- Text Primary: 220 15% 95% (high contrast readability)
- Text Secondary: 220 10% 70% (supporting information)

### Strategic Usage
- Primary blue reserved for CTAs, navigation active states, and key metrics
- Navy backgrounds for hero sections and major content blocks
- Subtle gradients only in hero sections (210 100% 45% to 220 25% 20%)
- Avoid excessive color - let whitespace and typography lead

## Typography

### Font Families (Google Fonts CDN)
- **Headlines:** Inter (weights: 600, 700) - modern, authoritative corporate presence
- **Body Text:** Inter (weights: 400, 500) - optimal readability for dense content
- **Accent/Stats:** Space Grotesk (weight: 700) - distinctive presence for metrics

### Type Scale
- Hero Headline: 3.5rem (56px) desktop / 2.25rem (36px) mobile, weight 700
- Section Titles: 2.5rem (40px) desktop / 1.875rem (30px) mobile, weight 600
- Subsection Heads: 1.75rem (28px) desktop / 1.5rem (24px) mobile, weight 600
- Body Large: 1.125rem (18px), weight 400, line-height 1.7
- Body Standard: 1rem (16px), weight 400, line-height 1.6
- Small/Meta: 0.875rem (14px), weight 400

### Strategic Typography Use
- Large, confident headlines that command attention
- Generous line-height for readability in Portuguese text
- Numeric data in Space Grotesk for visual distinction
- Never less than 16px for body text

## Layout System

### Spacing Primitives (Tailwind Units)
**Core Set:** 2, 4, 8, 12, 16, 20, 24, 32
- Micro spacing: 2, 4 (tight element grouping)
- Standard spacing: 8, 12, 16 (component internal padding)
- Section spacing: 20, 24, 32 (vertical rhythm between major blocks)

### Grid Structure
- Container max-width: 1280px (max-w-7xl)
- Content max-width: 1024px (max-w-6xl) for text-heavy pages
- Gutter: 8 (gap-8) desktop / 4 (gap-4) mobile

### Responsive Breakpoints
- Mobile-first approach
- Tablet: 768px (md:)
- Desktop: 1024px (lg:)
- Wide: 1280px (xl:)

## Component Library

### Navigation
- Fixed header with subtle backdrop blur (bg-gray-900/95 backdrop-blur-md)
- Primary nav horizontal on desktop, hamburger mobile
- Mega-menu dropdowns for Solutions and Segments (2-3 column layouts)
- Current page indicator with primary blue accent
- Secondary CTA button in header ("Fale com Especialista")

### Hero Sections
**Home Page Hero:**
- Full-width (not forced height) with gradient background overlay
- Large hero image showing professional business environment (meeting room, executives collaborating)
- Headline + subheadline + 3 key stats in horizontal layout
- Dual CTAs: Primary solid, secondary outline with backdrop blur
- Trust badges below (600+ empresas, 14 estados, 12 países)

**Interior Page Heroes:**
- Reduced height (60vh max) with focused messaging
- Icon or illustration accent (not photo)
- Breadcrumb navigation included

### Cards & Content Blocks
**Solution Cards:**
- Elevated surface with subtle shadow
- Icon + title + short description + arrow link
- Hover state: slight lift and primary blue accent on icon
- Grid: 3 columns desktop, 2 tablet, 1 mobile

**Testimonial Cards:**
- Clean white/light gray background in dark mode context
- Client logo + quote + author + company
- 2-column layout desktop, stack mobile
- Subtle left border in primary blue

**Case Study Cards:**
- Large format with image thumbnail
- Company name + challenge + result metrics
- CTA to full case study
- Asymmetric layout for visual interest

### Forms
**Contact Form:**
- Clean, single-column layout (max-w-2xl)
- Generous field spacing (mb-6)
- Clear labels with proper contrast
- Input backgrounds slightly lighter than page background
- Primary CTA button full-width mobile, auto desktop
- Success/error states with appropriate colors

### Data Display
**Stats/Metrics Showcase:**
- Large numerals in Space Grotesk
- Secondary descriptor text below
- 4-column grid desktop, 2 tablet, 1 mobile
- Subtle dividers between items
- Icons optional but effective for quick scanning

**Timeline (About Page):**
- Vertical line with year markers
- Alternating left/right content blocks
- Mobile: single column, all left-aligned

### CTAs & Buttons
**Primary Button:**
- bg-blue (primary color), white text
- Rounded corners (rounded-lg)
- Generous padding (px-8 py-4)
- Font weight 600
- Built-in hover/active states (never override)

**Secondary Button:**
- Outline variant with primary blue border
- When on images: backdrop-blur-md bg-white/10
- Text color matches border
- No custom hover states (respect default)

**Button Sizing:**
- Default: px-8 py-4 text-base
- Large: px-10 py-5 text-lg
- Small: px-6 py-3 text-sm

### Footer
**Multi-Column Layout:**
- 4 columns desktop: Company info, Solutions, Segments, Contact
- Logo + tagline in first column
- Quick links in middle columns
- Contact info + social links in last column
- Newsletter signup row above columns
- Legal links and copyright in bottom bar
- Dark background (bg-gray-950)

## Page-Specific Guidelines

### Home Page Structure
1. Hero with gradient + stats + dual CTAs + hero image
2. "O Que Fazemos" - 3-column icon cards
3. "Desafios" - problem/solution pairs in 2-column layout
4. Solutions grid - 8 cards in 4-2-1 responsive grid
5. Segments preview - dual-axis navigation tease
6. Results section - large metrics + testimonial carousel
7. Case studies - 3 featured cards
8. Technology partners - logo grid with hover effects
9. Final CTA - full-width with contrasting background

### Solutions Pages
- Breadcrumb navigation
- Hero with solution icon
- "What it is" section - clear explanation
- "Who it's for" - target audience cards
- "How it works" - numbered process steps
- "What's included" - checklist format
- Pricing/contact CTA section
- Related solutions sidebar (desktop) or bottom (mobile)

### Segments Pages
- Dual navigation interface: Profile vs Industry tabs
- Each segment: icon + description + relevant solutions
- Case study snippet if available
- Industry-specific imagery
- Clear CTA to contact or diagnostic

## Images & Visual Assets

### Hero Images
**Home Page:** Large (1920x1080) professional business scene - diverse executives in modern meeting room reviewing data visualizations, conveying strategic partnership and expertise. Subtle blue color grade to match brand.

**Solution Pages:** Medium (1200x600) conceptual images - abstract representations of each solution (e.g., TRIBUTA360 shows tax documents with calculator and charts, HOLDING360 shows family business succession concept)

**About Page:** Team photo (1600x900) showing OSP leadership and key team members in professional but approachable setting

### Icons
**Library:** Heroicons (outline for general UI, solid for emphasis)
**Custom Context:** Use solid blue background circles for solution/segment icons
**Sizes:** 24px standard UI, 48px feature highlights, 64px solution cards

### Photography Style
- Professional but approachable
- Diverse, modern business environments
- Natural lighting with slight desaturation
- Blue color grade overlay for brand consistency
- Avoid generic stock photo aesthetic

## Accessibility & Technical

### Dark Mode Implementation
- Primary interface in dark mode
- Maintain WCAG AA contrast ratios (minimum 4.5:1 for text)
- Form inputs with slightly lighter backgrounds for visibility
- Focus states clearly visible (primary blue outline)

### Performance
- Lazy load images below fold
- Optimize hero images (WebP format with fallback)
- CDN for fonts and icons
- Minimal animation (subtle fades and slides only)

### Responsive Behavior
- Mobile-first CSS
- Touch-friendly tap targets (minimum 44px)
- Readable text without zoom on mobile
- Collapsible mega-menus on tablet/mobile
- Hamburger menu with smooth slide-in animation

## Animation Guidelines

**Use Sparingly:**
- Subtle fade-in on scroll for section reveals (duration: 0.6s)
- Smooth transitions on button hovers (duration: 0.2s)
- Card lift on hover (transform: translateY(-4px), duration: 0.3s)
- Page transitions: simple fade (duration: 0.3s)

**Avoid:**
- Parallax scrolling
- Complex scroll-triggered animations
- Autoplay carousels (use manual controls)
- Distracting motion effects

## Final Notes

This design system creates a sophisticated, trustworthy B2B professional services experience that respects the complexity of OSP's offerings while maintaining excellent usability. The dark mode foundation with strategic blue accents conveys expertise and modernity, while the generous spacing and clear typography ensure information-dense content remains digestible. Every element serves the goal of converting qualified leads through clarity, credibility, and strategic design choices.