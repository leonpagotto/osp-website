import { useTranslation } from 'react-i18next';

export default function TechPartnersSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-section-mobile md:text-section mb-4">{t('home.technology.title')}</h2>
          <p className="text-body-lg text-muted-foreground">
            {t('home.technology.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["TOTVS", "SAP", "Sankhya", "Omie", "Power BI", "Qlik", "Tableau", "Conta Azul"].map((partner, index) => (
            <div
              key={partner}
              className={`flex items-center justify-center p-6 bg-background border border-border rounded-lg hover-elevate scroll-animate animate-delay-${Math.floor(index / 2) * 100}`}
            >
              <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
