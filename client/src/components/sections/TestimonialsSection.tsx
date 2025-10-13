import { useTranslation } from 'react-i18next';
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-section-mobile md:text-section mb-4">{t('home.testimonials.title')}</h2>
          <p className="text-body-lg text-muted-foreground">
            {t('home.testimonials.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`scroll-animate animate-delay-${index * 100}`}
            >
              <TestimonialCard
                quote={t(`home.testimonials.items.${index}.quote`)}
                author={t(`home.testimonials.items.${index}.author`)}
                company={t(`home.testimonials.items.${index}.company`)}
                role={t(`home.testimonials.items.${index}.role`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
