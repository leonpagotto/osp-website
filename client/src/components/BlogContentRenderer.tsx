/**
 * Blog Content Renderer Component
 * Dynamically renders blog content based on language selection
 * 
 * This component:
 * - Fetches content from translation files based on language
 * - Renders different content types (headings, paragraphs, lists, cards, etc.)
 * - Maintains consistent styling across all blog posts
 * - Makes translation systematic and maintainable
 */

import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { blogContentPT, blogContentEN, BlogContent, BlogContentSection } from '@/data/blogContent';

interface BlogContentRendererProps {
  slug: string;
  fallbackContent?: React.ReactNode;
}

export function BlogContentRenderer({ slug, fallbackContent }: BlogContentRendererProps) {
  const { i18n } = useTranslation();
  
  // Get content based on current language
  const content: BlogContent | undefined = i18n.language === 'en' 
    ? blogContentEN[slug] 
    : blogContentPT[slug];
  
  // If no translation available, show fallback (original hardcoded content)
  if (!content) {
    return <>{fallbackContent}</>;
  }

  return (
    <>
      {/* Lead Paragraph */}
      <p className="text-xl text-muted-foreground mb-8 lead">
        {content.lead}
      </p>

      {/* Render sections */}
      {content.sections.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </>
  );
}

function SectionRenderer({ section }: { section: BlogContentSection }) {
  switch (section.type) {
    case 'heading':
      return <HeadingRenderer level={section.level || 2} content={section.content as string} />;
    
    case 'paragraph':
      return <p className="mb-4">{section.content}</p>;
    
    case 'list':
      return <ListRenderer items={section.content as string[]} />;
    
    case 'card':
      return <CardRenderer items={section.items || []} />;
    
    case 'callout':
      return <CalloutRenderer items={section.items || []} variant={section.variant} />;
    
    case 'quote':
      return <QuoteRenderer content={section.content as string} author={section.author} />;
    
    default:
      return null;
  }
}

function HeadingRenderer({ level, content }: { level: number; content: string }) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <HeadingTag className="scroll-mt-20">{content}</HeadingTag>;
}

function ListRenderer({ items }: { items: string[] }) {
  return (
    <ul className="my-6 space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function CardRenderer({ items }: { items: Array<{ title?: string; description?: string; highlight?: boolean }> }) {
  return (
    <div className="grid gap-4 not-prose my-8">
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              {item.title}
            </CardTitle>
          </CardHeader>
          {item.description && (
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}

function CalloutRenderer({ 
  items, 
  variant = 'info' 
}: { 
  items: Array<{ title?: string; description?: string }>; 
  variant?: 'info' | 'warning' | 'success';
}) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle2,
  };

  const Icon = icons[variant];

  return (
    <Card className="my-6">
      <CardContent className="pt-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              {item.title && <p className="font-semibold mb-2">{item.title}</p>}
              {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function QuoteRenderer({ content, author }: { content: string; author?: string }) {
  return (
    <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-muted-foreground">
      <p>{content}</p>
      {author && <footer className="mt-2 text-sm not-italic">— {author}</footer>}
    </blockquote>
  );
}
