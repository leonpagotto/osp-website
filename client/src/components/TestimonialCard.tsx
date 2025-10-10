import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  role: string;
}

export default function TestimonialCard({ quote, author, company, role }: TestimonialCardProps) {
  return (
    <Card className="h-full" data-testid={`testimonial-${company.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="text-base text-foreground mb-6 leading-relaxed">"{quote}"</p>
        <div className="border-l-4 border-primary pl-4">
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
          <div className="text-sm text-primary font-medium mt-1">{company}</div>
        </div>
      </CardContent>
    </Card>
  );
}
