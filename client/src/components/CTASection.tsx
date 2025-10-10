import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
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

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-section-mobile md:text-section mb-4">{title}</h2>
          <p className="text-body-lg text-muted-foreground mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButton.href}>
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-cta-primary">
                {primaryButton.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {secondaryButton && (
              <Link href={secondaryButton.href}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-cta-secondary">
                  {secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
