import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";

// Eager load: Home page (critical for initial paint)
import Home from "@/pages/Home";

// Lazy load: Main pages
const Solucoes = lazy(() => import("@/pages/Solucoes"));
const Segmentos = lazy(() => import("@/pages/Segmentos"));
const Resultados = lazy(() => import("@/pages/Resultados"));
const SobreNos = lazy(() => import("@/pages/SobreNos"));
const Contato = lazy(() => import("@/pages/Contato"));
const Blog = lazy(() => import("@/pages/Blog"));
const FacaParte = lazy(() => import("@/pages/FacaParte"));
const Materiais = lazy(() => import("@/pages/Materiais"));

// Lazy load: Solution Pages
const OSP360 = lazy(() => import("@/pages/solutions/OSP360"));
const FUNDAR360 = lazy(() => import("@/pages/solutions/FUNDAR360"));
const TRIBUTA360 = lazy(() => import("@/pages/solutions/TRIBUTA360"));
const GESTAO360 = lazy(() => import("@/pages/solutions/GESTAO360"));
const BPOFinanceiro = lazy(() => import("@/pages/solutions/BPOFinanceiro"));
const PRECIFICA360 = lazy(() => import("@/pages/solutions/PRECIFICA360"));
const HOLDING360 = lazy(() => import("@/pages/solutions/HOLDING360"));
const Contabilidade = lazy(() => import("@/pages/solutions/Contabilidade"));

// Lazy load: Segment Pages
const EstruturaComplexa = lazy(() => import("@/pages/segments/EstruturaComplexa"));
const OperacaoIntensiva = lazy(() => import("@/pages/segments/OperacaoIntensiva"));
const Industrias = lazy(() => import("@/pages/segments/Industrias"));
const ServicosEspecializados = lazy(() => import("@/pages/segments/ServicosEspecializados"));
const ExpansaoPatrimonial = lazy(() => import("@/pages/segments/ExpansaoPatrimonial"));
const Multinacionais = lazy(() => import("@/pages/segments/Multinacionais"));

// Lazy load: Blog Posts
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const IndicadoresFinanceirosCEO = lazy(() => import("@/pages/blog/IndicadoresFinanceirosCEO"));
const HoldingFamiliar = lazy(() => import("@/pages/blog/HoldingFamiliar"));
const TributacaoDividendos = lazy(() => import("@/pages/blog/TributacaoDividendos"));
const CashbackCestaBasica = lazy(() => import("@/pages/blog/CashbackCestaBasica"));
const CBSIBS = lazy(() => import("@/pages/blog/CBSIBS"));
const ReformaTributaria2025 = lazy(() => import("@/pages/blog/ReformaTributaria2025"));
const ChecklistOSP = lazy(() => import("@/pages/blog/ChecklistOSP"));
const ImpostoSeletivo = lazy(() => import("@/pages/blog/ImpostoSeletivo"));
const EC132Impactos = lazy(() => import("@/pages/blog/EC132Impactos"));
const LucroRealEstrategia = lazy(() => import("@/pages/blog/LucroRealEstrategia"));
const ContabilidadeCrescimento = lazy(() => import("@/pages/blog/ContabilidadeCrescimento"));
const HoldingPatrimonial2025 = lazy(() => import("@/pages/blog/HoldingPatrimonial2025"));
const EstudoTributario = lazy(() => import("@/pages/blog/EstudoTributario"));
const ContabilidadeLucroReal = lazy(() => import("@/pages/blog/ContabilidadeLucroReal"));

const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/solucoes" component={Solucoes} />
        <Route path="/segmentos" component={Segmentos} />
        <Route path="/resultados" component={Resultados} />
        <Route path="/sobre-nos" component={SobreNos} />
        <Route path="/contato" component={Contato} />
        <Route path="/blog" component={Blog} />
        <Route path="/faca-parte" component={FacaParte} />
        <Route path="/materiais" component={Materiais} />
        
        {/* Solution Pages */}
        <Route path="/solucoes/osp360" component={OSP360} />
        <Route path="/solucoes/fundar360" component={FUNDAR360} />
        <Route path="/solucoes/tributa360" component={TRIBUTA360} />
        <Route path="/solucoes/gestao360" component={GESTAO360} />
        <Route path="/solucoes/bpo-financeiro" component={BPOFinanceiro} />
        <Route path="/solucoes/precifica360" component={PRECIFICA360} />
        <Route path="/solucoes/holding360" component={HOLDING360} />
        <Route path="/solucoes/contabilidade" component={Contabilidade} />
        
        {/* Segment Pages */}
        <Route path="/segmentos/estrutura-complexa" component={EstruturaComplexa} />
        <Route path="/segmentos/operacao-intensiva" component={OperacaoIntensiva} />
        <Route path="/segmentos/servicos-especializados" component={ServicosEspecializados} />
        <Route path="/segmentos/expansao-patrimonial" component={ExpansaoPatrimonial} />
        <Route path="/segmentos/industrias" component={Industrias} />
        <Route path="/segmentos/multinacionais" component={Multinacionais} />
        
        {/* Blog Posts */}
        <Route path="/blog/tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar" component={TributacaoDividendos} />
        <Route path="/blog/cashback-cesta-basica-e-justica-fiscal-o-que-muda-na-tributacao" component={CashbackCestaBasica} />
        <Route path="/blog/cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025" component={CBSIBS} />
        <Route path="/blog/reforma-tributaria-2025-guia-pratico-para-empresarios" component={ReformaTributaria2025} />
        <Route path="/blog/checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria" component={ChecklistOSP} />
        <Route path="/blog/imposto-seletivo-e-regimes-diferenciados-na-reforma-tributaria" component={ImpostoSeletivo} />
        <Route path="/blog/reforma-tributaria-2025-impactos-praticos-da-ec-132-para-empresas-em-crescimento" component={EC132Impactos} />
        <Route path="/blog/lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber" component={LucroRealEstrategia} />
        <Route path="/blog/sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio" component={ContabilidadeCrescimento} />
        <Route path="/blog/holding-patrimonial-por-que-ainda-em-2025" component={HoldingPatrimonial2025} />
        <Route path="/blog/estudo-tributario-tomar-decisoes" component={EstudoTributario} />
        <Route path="/blog/contabilidade-lucro-real-por-que-mudar-de-regime" component={ContabilidadeLucroReal} />
        <Route path="/blog/holding-familiar-quando-estruturar" component={HoldingFamiliar} />
        <Route path="/blog/indicadores-financeiros-ceo" component={IndicadoresFinanceirosCEO} />
        <Route path="/blog/:slug" component={BlogPost} />
        
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
