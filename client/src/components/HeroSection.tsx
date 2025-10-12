import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

type GradientVariant = 'default' | 'blue' | 'cyan' | 'indigo' | 'none';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  showGradient?: boolean;
  gradientVariant?: GradientVariant;
  backgroundImage?: string;
  overlayOpacity?: number;
}

const gradientClasses: Record<GradientVariant, string> = {
  default: 'bg-gradient-to-br from-primary/10 via-background to-background',
  blue: 'bg-gradient-to-br from-blue-500/10 via-background to-blue-500/5',
  cyan: 'bg-gradient-to-br from-cyan-500/10 via-background to-cyan-500/5',
  indigo: 'bg-gradient-to-br from-indigo-500/10 via-background to-indigo-500/5',
  none: 'bg-background',
};

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  stats,
  showGradient = true,
  gradientVariant = 'default',
  backgroundImage,
  overlayOpacity = 0.85,
}: HeroSectionProps) {
  const gradientClass = !backgroundImage && showGradient 
    ? gradientClasses[gradientVariant] 
    : 'bg-background';

  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${gradientClass}`}>
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
          {/* Dark Overlay */}
          <div 
            className="absolute inset-0 bg-gray-900"
            style={{ opacity: overlayOpacity }}
          />
          {/* Subtle Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"
          />
        </>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero-mobile md:text-hero font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-primary">
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto backdrop-blur-md" data-testid="button-hero-secondary">
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </div>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
