import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function SolutionCard({ icon: Icon, title, description, href }: SolutionCardProps) {
  const { t } = useTranslation();
  
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="h-full hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 group relative overflow-hidden hover:bg-gradient-to-br hover:from-primary/5 hover:via-accent/5 hover:to-background" data-testid={`card-solution-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {/* Animated gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <CardHeader className="relative z-10">
            <motion.div 
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:via-accent/30 group-hover:to-primary/20 transition-all duration-500 backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20"
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative">
                <Icon className="h-7 w-7 text-primary group-hover:text-primary transition-colors duration-300" strokeWidth={2.5} />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary opacity-30 blur-xl group-hover:opacity-70 transition-opacity duration-300"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </motion.div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <CardDescription className="text-base mb-4 group-hover:text-foreground/80 transition-colors duration-300">{description}</CardDescription>
            <div className="flex items-center text-primary group-hover:text-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
              {t('common.learnMore')}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
