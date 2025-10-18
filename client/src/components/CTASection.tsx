import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
    isExternal?: boolean;
    icon?: "arrow" | "whatsapp";
  };
  secondaryButton?: {
    text: string;
    href: string;
    isExternal?: boolean;
  };
  variant?: "default" | "accent";
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "default",
}: CTASectionProps) {
  const bgClass = variant === "accent" ? "bg-primary/5" : "bg-card";
  const PrimaryIcon = primaryButton.icon === "whatsapp" ? MessageCircle : ArrowRight;

  const PrimaryButtonContent = () => (
    <Button size="lg" className="w-full sm:w-auto" data-testid="button-cta-primary">
      {primaryButton.text}
      <PrimaryIcon className="ml-2 h-5 w-5" />
    </Button>
  );

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-section-mobile md:text-section mb-4">{title}</h2>
          <p className="text-body-lg text-muted-foreground mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton.isExternal ? (
              <a href={primaryButton.href} target="_blank" rel="noopener noreferrer">
                <PrimaryButtonContent />
              </a>
            ) : (
              <Link href={primaryButton.href}>
                <PrimaryButtonContent />
              </Link>
            )}
            {secondaryButton && (
              secondaryButton.isExternal ? (
                <a href={secondaryButton.href} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-cta-secondary">
                    {secondaryButton.text}
                  </Button>
                </a>
              ) : (
                <Link href={secondaryButton.href}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-cta-secondary">
                    {secondaryButton.text}
                  </Button>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
