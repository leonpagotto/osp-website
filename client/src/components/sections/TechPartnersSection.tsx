import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function AnimatedPartner({ partner, index }: { partner: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex items-center justify-center p-6 bg-background border border-border rounded-lg hover-elevate scroll-animate ${isVisible ? 'visible' : ''} animate-delay-${Math.floor(index / 2) * 100}`}
    >
      <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
    </div>
  );
}

export default function TechPartnersSection() {
  const { t } = useTranslation();
  const partners = ["TOTVS", "SAP", "Sankhya", "Omie", "Power BI", "Qlik", "Tableau", "Conta Azul"];
  
  return (
    <section className="py-20 bg-card" aria-labelledby="technology-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="technology-heading" className="text-section-mobile md:text-section mb-4">{t('home.technology.title')}</h2>
          <p className="text-body-lg text-muted-foreground">
            {t('home.technology.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <AnimatedPartner key={partner} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
