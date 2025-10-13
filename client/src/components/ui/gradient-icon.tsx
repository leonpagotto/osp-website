import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GradientIconProps {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "vivid" | "accent";
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

export function GradientIcon({ 
  icon: Icon, 
  className, 
  size = "md",
  variant = "primary" 
}: GradientIconProps) {
  const gradientClass = variant === "vivid" 
    ? "bg-gradient-primary-vivid" 
    : variant === "accent"
    ? "bg-gradient-accent"
    : "bg-gradient-primary";

  return (
    <div className={cn(
      "rounded-lg flex items-center justify-center bg-clip-padding p-2",
      "bg-primary/10",
      className
    )}>
      <Icon 
        className={cn(
          sizeClasses[size],
          gradientClass,
          "bg-clip-text text-transparent"
        )}
        strokeWidth={2.5}
      />
    </div>
  );
}
