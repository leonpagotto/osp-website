import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n';

export default function Contato() {
  const { t } = useTranslation();
  const currentLang = i18n.language as 'pt-BR' | 'en';
  const isEnglish = currentLang === 'en';

  return (
    <div className="min-h-screen">
      <SEOHead
        title={isEnglish ? "Contact OSP - Get in Touch" : "Contato OSP - Fale Conosco"}
        description={isEnglish
          ? "Contact OSP Digital Accounting. Offices in São Paulo and Campinas. Schedule a consultation with our experts to discuss your business needs."
          : "Entre em contato com a OSP Contabilidade Digital. Escritórios em São Paulo e Campinas. Agende uma consulta com nossos especialistas para discutir as necessidades do seu negócio."
        }
        keywords={isEnglish
          ? "contact OSP, accounting consultation, São Paulo office, Campinas office, business consulting, schedule meeting"
          : "contato OSP, consulta contábil, escritório São Paulo, escritório Campinas, consultoria empresarial, agendar reunião"
        }
        canonicalUrl={isEnglish ? "/en/contact" : "/contato"}
        locale={currentLang}
        alternateUrls={{
          'pt-BR': '/contato',
          'en': '/en/contact'
        }}
        ogImage="/images/og/contact.jpg"
      />
      
      <HeroSection
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        showGradient={true}
        gradientVariant="cyan"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{t('contact.info.addresses.title')}</h3>
                          <p className="text-sm text-muted-foreground">{t('contact.info.addresses.campinas')}</p>
                          <p className="text-sm text-muted-foreground">{t('contact.info.addresses.saoPaulo')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          <MessageCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{t('contact.info.whatsapp.title')}</h3>
                          <a
                            href="https://wa.me/5519993216091"
                            className="text-sm text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="link-whatsapp"
                            aria-label={t('footer.phoneLabel')}
                          >
                            +55 (19) 99321-6091
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{t('contact.info.email.title')}</h3>
                          <a
                            href="mailto:contato@ospcontabilidade.com.br"
                            className="text-sm text-primary hover:underline"
                            data-testid="link-email"
                            aria-label={t('footer.emailLabel')}
                          >
                            contato@ospcontabilidade.com.br
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{t('contact.info.hours.title')}</h3>
                          <p className="text-sm text-muted-foreground">{t('contact.info.hours.schedule')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-card-border">
                <h3 className="font-semibold mb-2">{t('contact.info.coverage.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('contact.info.coverage.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
