import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function SolutionCard({ icon: Icon, title, description, href }: SolutionCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 group" data-testid={`card-solution-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base mb-4">{description}</CardDescription>
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            Saiba mais
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
