# Blog Color System Fixes

## Problem
Blog posts are using colors outside the design system palette (amber, orange, red, green)

## Design System Colors
- **Primary:** Blue (#1e40af, #3b82f6) - Trust, professionalism
- **Accent:** Light backgrounds for info/neutral callouts  
- **Destructive:** For urgent/error states
- **Muted:** Neutral backgrounds
- **Card:** Content containers

## New Alert/Callout Classes

### Alert Components
- `alert-info` - General information (accent background)
- `alert-warning` - Important notices (primary/10 background)
- `alert-success` - Positive outcomes (accent with primary border)
- `alert-urgent` - Critical items (destructive/10 background)

### Badge Components  
- `badge-urgent` - Critical status (destructive colors)
- `badge-warning` - Important status (primary colors)
- `badge-info` - Neutral status (accent colors)

### Card Variants
- `card-info` - Information cards
- `card-warning` - Warning cards  
- `card-success` - Success/positive cards
- `card-urgent` - Urgent/critical cards

## Color Replacement Map

### Amber/Yellow → Warning (Primary-based)
```
bg-amber-50 → bg-primary/5
bg-amber-100 → bg-primary/10  
bg-amber-200 → border-primary/30
border-amber-200 → border-primary/30
text-amber-700 → text-primary
```

### Orange → Warning (Primary-based)
```
bg-orange-50 → bg-primary/5
bg-orange-200 → border-primary/30
border-orange-200 → border-primary/30
```

### Red → Urgent (Destructive)
```
bg-red-50 → bg-destructive/5
bg-red-100 → bg-destructive/10
bg-red-200 → border-destructive/30
border-red-200 → border-destructive/30
text-red-700 → text-destructive
```

### Green → Success (Accent with primary tint)
```
bg-green-50 → bg-accent
bg-green-200 → border-primary/40
border-green-200 → border-primary/40
```

## Files to Update
All blog posts in: `/client/src/pages/blog/`

