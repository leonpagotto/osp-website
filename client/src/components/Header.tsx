import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">OSP</div>
            <div className="hidden sm:block text-sm text-muted-foreground">Contabilidade Digital</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}>
              Home
            </Link>
            
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                Soluções
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-card border border-card-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 grid grid-cols-1 gap-2">
                  {solutions.map((solution) => (
                    <Link key={solution.href} href={solution.href}>
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
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                Segmentos
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-card border border-card-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 grid grid-cols-1 gap-2">
                  {segments.map((segment) => (
                    <Link key={segment.href} href={segment.href}>
                      <div className="p-2 rounded-md hover-elevate active-elevate-2 cursor-pointer text-sm">
                        {segment.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/resultados" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/resultados") ? "text-primary" : "text-foreground"}`}>
              Resultados
            </Link>
            <Link href="/sobre-nos" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/sobre-nos") ? "text-primary" : "text-foreground"}`}>
              Sobre Nós
            </Link>
            <Link href="/blog" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/blog") ? "text-primary" : "text-foreground"}`}>
              Blog
            </Link>
            <Link href="/contato" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contato") ? "text-primary" : "text-foreground"}`}>
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
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/solucoes" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Soluções
              </Link>
              <Link href="/segmentos" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Segmentos
              </Link>
              <Link href="/resultados" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Resultados
              </Link>
              <Link href="/sobre-nos" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Sobre Nós
              </Link>
              <Link href="/blog" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full" data-testid="button-mobile-contact">Fale com Especialista</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
