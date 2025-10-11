import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Fique por dentro das novidades</h3>
            <p className="text-muted-foreground mb-6">Receba insights sobre gestão tributária e contábil direto no seu e-mail</p>
            <form className="flex gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); console.log('Newsletter signup'); }}>
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" data-testid="button-newsletter-submit">Inscrever</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">OSP</div>
            <p className="text-sm text-muted-foreground mb-4">
              Inteligência contábil para decisões que transformam negócios
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solucoes/osp360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-osp360">OSP360</Link></li>
              <li><Link href="/solucoes/fundar360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-fundar360">FUNDAR360</Link></li>
              <li><Link href="/solucoes/tributa360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-tributa360">TRIBUTA360</Link></li>
              <li><Link href="/solucoes/gestao360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-gestao360">GESTÃO360</Link></li>
              <li><Link href="/solucoes/holding360" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-holding360">HOLDING360</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre-nos" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-sobre">Sobre Nós</Link></li>
              <li><Link href="/resultados" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-resultados">Resultados</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">Blog</Link></li>
              <li><Link href="/faca-parte" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-carreiras">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Campinas/SP | São Paulo/SP</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <a href="https://wa.me/5519993216091" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-phone">
                  +55 (19) 99321-6091
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:contato@ospcontabilidade.com.br" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-email">
                  contato@ospcontabilidade.com.br
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
              © {new Date().getFullYear()} OSP. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacidade">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-termos">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
