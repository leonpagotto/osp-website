import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const solutions = [
  { name: "OSP360", href: "/solucoes/osp360", description: "Diagnóstico estratégico completo" },
  { name: "FUNDAR360", href: "/solucoes/fundar360", description: "Estruturação de negócios" },
  { name: "TRIBUTA360", href: "/solucoes/tributa360", description: "Planejamento tributário" },
  { name: "GESTÃO360", href: "/solucoes/gestao360", description: "Suporte à gestão executiva" },
  { name: "BPO Financeiro", href: "/solucoes/bpo-financeiro", description: "Terceirização financeira" },
  { name: "PRECIFICA360", href: "/solucoes/precifica360", description: "Análise de margem e precificação" },
  { name: "HOLDING360", href: "/solucoes/holding360", description: "Estrutura patrimonial" },
  { name: "Contabilidade", href: "/solucoes/contabilidade", description: "Serviços contábeis especializados" },
];

const segments = [
  { name: "Estrutura Complexa", href: "/segmentos/estrutura-complexa" },
  { name: "Operação Intensiva", href: "/segmentos/operacao-intensiva" },
  { name: "Serviços Especializados", href: "/segmentos/servicos-especializados" },
  { name: "Expansão Patrimonial", href: "/segmentos/expansao-patrimonial" },
  { name: "Indústrias", href: "/segmentos/industrias" },
  { name: "Multinacionais", href: "/segmentos/multinacionais" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileSegmentsOpen, setMobileSegmentsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setMobileSegmentsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <img 
              src="/images/osp-logo-white.svg" 
              alt="OSP Logo" 
              className="h-10 w-10 shrink-0"
              style={{ filter: 'brightness(0) saturate(100%) invert(33%) sepia(97%) saturate(1947%) hue-rotate(198deg) brightness(94%) contrast(101%)' }}
            />
            <div className="text-2xl font-bold text-primary leading-tight">OSP</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`} data-testid="link-home">
              Home
            </Link>
            
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="button-solucoes-menu">
                Soluções
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-card border border-card-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 grid grid-cols-1 gap-2">
                  {solutions.map((solution) => (
                    <Link key={solution.href} href={solution.href} data-testid={`link-${solution.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="p-3 rounded-md hover-elevate active-elevate-2 cursor-pointer">
                        <div className="font-medium text-sm">{solution.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{solution.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="button-segmentos-menu">
                Segmentos
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-card border border-card-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 grid grid-cols-1 gap-2">
                  {segments.map((segment) => (
                    <Link key={segment.href} href={segment.href} data-testid={`link-${segment.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="p-2 rounded-md hover-elevate active-elevate-2 cursor-pointer text-sm">
                        {segment.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/resultados" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/resultados") ? "text-primary" : "text-foreground"}`} data-testid="link-resultados">
              Resultados
            </Link>
            <Link href="/sobre-nos" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/sobre-nos") ? "text-primary" : "text-foreground"}`} data-testid="link-sobre-nos">
              Sobre Nós
            </Link>
            <Link href="/blog" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/blog") ? "text-primary" : "text-foreground"}`} data-testid="link-blog">
              Blog
            </Link>
            <Link href="/contato" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contato") ? "text-primary" : "text-foreground"}`} data-testid="link-contato">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contato">
              <Button data-testid="button-contact-cta">Fale com Especialista</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Sidebar Menu */}
        <div 
          className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background border-l border-border shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <img 
                src="/images/osp-logo-white.svg" 
                alt="OSP Logo" 
                className="h-8 w-8"
                style={{ filter: 'brightness(0) saturate(100%) invert(33%) sepia(97%) saturate(1947%) hue-rotate(198deg) brightness(94%) contrast(101%)' }}
              />
              <span className="text-xl font-bold text-primary">OSP</span>
            </div>
            <button
              className="p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              data-testid="button-mobile-menu-close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col h-[calc(100%-73px)] overflow-y-auto">
            <div className="flex-1 py-4 px-4 space-y-1">
              <Link 
                href="/" 
                className={`flex items-center justify-between text-base font-medium py-3 px-4 rounded-lg transition-colors min-h-[48px] ${
                  isActive("/") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
                data-testid="link-mobile-home"
              >
                Home
                <ChevronRight className="h-5 w-5" />
              </Link>
              
              {/* Soluções Dropdown */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-base font-medium py-3 px-4 rounded-lg hover:bg-accent transition-colors min-h-[48px]"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  data-testid="button-mobile-solucoes"
                >
                  Soluções
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileSolutionsOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 pr-2 py-2 space-y-1">
                    {solutions.map((solution) => (
                      <Link 
                        key={solution.href} 
                        href={solution.href}
                        className={`block py-3 px-4 text-sm rounded-lg transition-colors min-h-[48px] ${
                          isActive(solution.href) ? "bg-primary/10 text-primary" : "hover:bg-accent"
                        }`}
                        data-testid={`link-mobile-${solution.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div className="font-medium">{solution.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{solution.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Segmentos Dropdown */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-base font-medium py-3 px-4 rounded-lg hover:bg-accent transition-colors min-h-[48px]"
                  onClick={() => setMobileSegmentsOpen(!mobileSegmentsOpen)}
                  data-testid="button-mobile-segmentos"
                >
                  Segmentos
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileSegmentsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileSegmentsOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 pr-2 py-2 space-y-1">
                    {segments.map((segment) => (
                      <Link 
                        key={segment.href} 
                        href={segment.href}
                        className={`block py-3 px-4 text-sm rounded-lg transition-colors min-h-[48px] ${
                          isActive(segment.href) ? "bg-primary/10 text-primary" : "hover:bg-accent"
                        }`}
                        data-testid={`link-mobile-${segment.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {segment.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                href="/resultados" 
                className={`flex items-center justify-between text-base font-medium py-3 px-4 rounded-lg transition-colors min-h-[48px] ${
                  isActive("/resultados") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
                data-testid="link-mobile-resultados"
              >
                Resultados
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/sobre-nos" 
                className={`flex items-center justify-between text-base font-medium py-3 px-4 rounded-lg transition-colors min-h-[48px] ${
                  isActive("/sobre-nos") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
                data-testid="link-mobile-sobre-nos"
              >
                Sobre Nós
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/blog" 
                className={`flex items-center justify-between text-base font-medium py-3 px-4 rounded-lg transition-colors min-h-[48px] ${
                  isActive("/blog") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
                data-testid="link-mobile-blog"
              >
                Blog
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/contato" 
                className={`flex items-center justify-between text-base font-medium py-3 px-4 rounded-lg transition-colors min-h-[48px] ${
                  isActive("/contato") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
                data-testid="link-mobile-contato"
              >
                Contato
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Sidebar Footer CTA */}
            <div className="p-4 border-t border-border">
              <Link href="/contato">
                <Button className="w-full min-h-[52px] text-base font-semibold" size="lg" data-testid="button-mobile-contact">
                  Fale com Especialista
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
