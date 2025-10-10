import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface SegmentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function SegmentCard({ icon: Icon, title, description, href }: SegmentCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full hover-elevate active-elevate-2 cursor-pointer transition-all group" data-testid={`card-segment-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            Ver mais
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
