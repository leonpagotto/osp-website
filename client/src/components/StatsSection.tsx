interface StatsSectionProps {
  stats: Array<{
    value: string;
    label: string;
    highlight?: boolean;
  }>;
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-card border-y border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-item-${index}`}>
              <div className={`text-4xl md:text-5xl font-mono font-bold mb-2 ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
