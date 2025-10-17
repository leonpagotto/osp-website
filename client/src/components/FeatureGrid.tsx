import { LucideIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const Icon = feature.icon;
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-center scroll-animate ${isVisible ? 'visible' : ''} animate-delay-${index * 100}`}
      data-testid={`feature-${index}`}
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-primary/10 hover-scale transition-all duration-200">
        <div className="relative">
          <Icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
          <div className="absolute inset-0 bg-gradient-primary-vivid opacity-50 blur-xl" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </div>
  );
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  );
}
