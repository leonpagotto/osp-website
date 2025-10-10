# OSP Contabilidade Digital - Website

## Overview

OSP Contabilidade Digital is a B2B professional services website targeting CFOs and financial decision-makers at large corporations operating under "Lucro Real" tax regime. The platform serves as a comprehensive digital presence showcasing specialized accounting and consulting services for mid-to-large enterprises across 14 Brazilian states and 12 countries, with over 600 clients served.

The website is built as a modern, information-dense marketing platform that emphasizes professional authority, trust-building through social proof, and clear presentation of complex accounting services tailored to enterprises with sophisticated tax and financial needs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 19.1.1 with TypeScript as the core UI framework
- Vite 6.2.0 for fast development and optimized production builds
- React Router (wouter) for client-side routing

**UI Design System:**
- shadcn/ui component library with Radix UI primitives for accessible, composable components
- Tailwind CSS for utility-first styling with custom design tokens
- Dark mode as primary theme with Carbon Design System influence for enterprise aesthetics
- Custom color palette: Primary Blue (210 100% 45%), Navy backgrounds, with HSL-based theming system
- Typography: Inter for headlines/body, Space Grotesk for accent/stats (Google Fonts)

**Component Architecture:**
- Reusable presentation components: HeroSection, CTASection, SolutionCard, SegmentCard, TestimonialCard, FeatureGrid, StatsSection
- Layout components: Header (with nested navigation menus), Footer (with newsletter signup)
- Form components: ContactForm with validation
- All components follow atomic design principles with TypeScript interfaces for props

**State Management:**
- React Query (@tanstack/react-query) for server state management
- React Hook Form with Zod validation for form handling
- Context API for theme and toast notifications

**Page Structure:**
- Home: Main landing with hero, solutions overview, testimonials, stats
- Solucoes (Solutions): 8 specialized service offerings (OSP360, FUNDAR360, TRIBUTA360, etc.)
- Segmentos (Segments): Client profiles by strategic type and industry sector
- Resultados (Results): Case studies and client testimonials
- SobreNos (About): Company history, team, timeline
- Contato (Contact): Contact form and information
- Blog: Content marketing with article listings
- FacaParte (Careers): Job listings and benefits
- Materiais (Materials): Downloadable resources

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for REST API
- Custom middleware for request logging and error handling
- Vite integration for SSR and HMR in development

**Data Layer:**
- Drizzle ORM configured for PostgreSQL
- Schema definition in shared/schema.ts with Zod validation
- Connection via @neondatabase/serverless for edge-compatible database access
- Currently implements basic user management (authentication skeleton)

**Storage Interface:**
- Abstract IStorage interface for CRUD operations
- MemStorage implementation for development/testing
- Designed for easy migration to Neon Postgres or other providers

**Development Architecture:**
- Monorepo structure: client/ (frontend), server/ (backend), shared/ (types/schemas)
- Path aliases: @/ for client, @shared/ for shared types, @assets/ for static assets
- Hot module replacement in development via Vite middleware

### External Dependencies

**UI & Styling:**
- Radix UI component primitives (accordion, dialog, dropdown, navigation, etc.)
- Tailwind CSS with PostCSS for processing
- Lucide React for iconography
- class-variance-authority and clsx for conditional styling utilities

**Data & Forms:**
- React Hook Form with @hookform/resolvers for form validation
- Zod for runtime schema validation
- date-fns for date manipulation
- drizzle-zod for schema-to-validation bridge

**AI Integration:**
- @google/genai package integrated (Google Gemini AI capability)

**Database:**
- Neon Postgres (serverless PostgreSQL)
- Drizzle Kit for migrations
- connect-pg-simple for session storage

**Development Tools:**
- TypeScript for type safety
- ESBuild for production server bundling
- Replit-specific plugins for development environment (@replit/vite-plugin-cartographer, dev-banner, runtime-error-modal)

**Design Guidelines:**
- Documented design system in design_guidelines.md
- Carbon Design System as primary influence with Stripe/Linear refinements
- Comprehensive color palette, typography scale, and component specifications
- Focus on professional authority, information clarity, strategic trust, and responsive intelligence