import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { submitNewsletterSubscription } from "@/lib/firestore";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitNewsletterSubscription(email);
      
      toast({
        title: t('footer.newsletter.successTitle') || "Inscrição realizada!",
        description: t('footer.newsletter.successDescription') || "Obrigado por se inscrever em nossa newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Erro ao inscrever",
        description: "Não foi possível realizar sua inscrição. Por favor, tente novamente.",
        variant: "destructive",
      });
      console.error("Error subscribing to newsletter:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-secondary border-t border-border" role="contentinfo" aria-label="Site footer">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">{t('footer.newsletter.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('footer.newsletter.subtitle')}</p>
            <form 
              className="flex gap-4 max-w-md mx-auto" 
              onSubmit={handleNewsletterSubmit}
              aria-label={t('footer.newsletter.formLabel')}
            >
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1"
                data-testid="input-newsletter-email"
                aria-label={t('footer.newsletter.inputLabel')}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                data-testid="button-newsletter-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  t('footer.newsletter.button')
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4" aria-label="OSP Logo">OSP</div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.tagline')}
            </p>
            <nav aria-label={t('footer.socialMedia')}>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover-elevate active-elevate-2 p-2 rounded-md" 
                  data-testid="link-linkedin"
                  aria-label={t('footer.linkedinLabel')}
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover-elevate active-elevate-2 p-2 rounded-md" 
                  data-testid="link-instagram"
                  aria-label={t('footer.instagramLabel')}
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover-elevate active-elevate-2 p-2 rounded-md" 
                  data-testid="link-facebook"
                  aria-label={t('footer.facebookLabel')}
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>

          {/* Company & Segments Column */}
          <div>
            <nav aria-label={t('footer.companyNav')}>
              <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-sm mb-6">
                <li><Link href="/sobre-nos" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-sobre">{t('nav.about')}</Link></li>
                <li><Link href="/resultados" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-resultados">{t('nav.results')}</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">{t('nav.blog')}</Link></li>
                <li><Link href="/faca-parte" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-carreiras">{t('footer.careers')}</Link></li>
              </ul>
            </nav>

            <nav aria-label={t('footer.segmentsNav')}>
              <h4 className="font-semibold mb-4">{t('footer.segments')}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/segmentos/tecnologia" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-tecnologia">{t('segments.technology.name')}</Link></li>
                <li><Link href="/segmentos/saude" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-saude">{t('segments.health.name')}</Link></li>
                <li><Link href="/segmentos/educacao" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-educacao">{t('segments.education.name')}</Link></li>
                <li><Link href="/segmentos/industria" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-industria">{t('segments.industry.name')}</Link></li>
                <li><Link href="/segmentos/comercio-servicos" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-comercio">{t('segments.commerce.name')}</Link></li>
              </ul>
            </nav>
          </div>

          {/* Solutions Column */}
          <nav aria-label={t('footer.solutionsNav')}>
            <h4 className="font-semibold mb-4">{t('nav.solutions')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solucoes/osp360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-osp360">{t('solutions.osp360.name')}</Link></li>
              <li><Link href="/solucoes/fundar360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-fundar360">{t('solutions.fundar360.name')}</Link></li>
              <li><Link href="/solucoes/tributa360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-tributa360">{t('solutions.tributa360.name')}</Link></li>
              <li><Link href="/solucoes/gestao360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-gestao360">{t('solutions.gestao360.name')}</Link></li>
              <li><Link href="/solucoes/bpo-financeiro" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-bpo">{t('solutions.bpoFinanceiro.name')}</Link></li>
              <li><Link href="/solucoes/precifica360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-precifica360">{t('solutions.precifica360.name')}</Link></li>
              <li><Link href="/solucoes/holding360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-holding360">{t('solutions.holding360.name')}</Link></li>
              <li><Link href="/solucoes/contabilidade" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contabilidade">{t('solutions.contabilidade.name')}</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-4 text-sm">
              {/* Campinas Office */}
              <li>
                <div className="flex items-start space-x-2 mb-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="font-medium text-foreground">{t('footer.campinasOffice')}</span>
                </div>
                <p className="text-muted-foreground ml-6 whitespace-pre-line leading-relaxed">
                  {t('footer.campinasAddress')}
                </p>
              </li>
              
              {/* São Paulo Office */}
              <li>
                <div className="flex items-start space-x-2 mb-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="font-medium text-foreground">{t('footer.saoPauloOffice')}</span>
                </div>
                <p className="text-muted-foreground ml-6 whitespace-pre-line leading-relaxed">
                  {t('footer.saoPauloAddress')}
                </p>
              </li>
              
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-primary" aria-hidden="true" />
                <a 
                  href="https://wa.me/5519993216091" 
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-footer-phone"
                  aria-label={t('footer.phoneLabel')}
                >
                  +55 (19) 99321-6091
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-primary" aria-hidden="true" />
                <a 
                  href="mailto:atendimento@osp.com.br" 
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-footer-email"
                  aria-label={t('footer.emailLabel')}
                >
                  atendimento@osp.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <nav aria-label={t('footer.legalNav')}>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacidade">
                  {t('footer.privacy')}
                </Link>
                <Link href="/termos" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-termos">
                  {t('footer.terms')}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
