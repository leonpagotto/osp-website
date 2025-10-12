import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div 
            key={index} 
            className="text-center" 
            data-testid={`feature-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div 
              className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-primary/10"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <Icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
                <div className="absolute inset-0 bg-gradient-primary-vivid opacity-50 blur-xl" />
              </div>
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
