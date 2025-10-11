import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageTransition from "@/components/PageTransition";
import Home from "@/pages/Home";
import Solucoes from "@/pages/Solucoes";
import Segmentos from "@/pages/Segmentos";
import Resultados from "@/pages/Resultados";
import SobreNos from "@/pages/SobreNos";
import Contato from "@/pages/Contato";
import Blog from "@/pages/Blog";
import FacaParte from "@/pages/FacaParte";
import Materiais from "@/pages/Materiais";

// Solution Pages
import OSP360 from "@/pages/solutions/OSP360";
import FUNDAR360 from "@/pages/solutions/FUNDAR360";
import TRIBUTA360 from "@/pages/solutions/TRIBUTA360";
import GESTAO360 from "@/pages/solutions/GESTAO360";
import BPOFinanceiro from "@/pages/solutions/BPOFinanceiro";
import PRECIFICA360 from "@/pages/solutions/PRECIFICA360";
import HOLDING360 from "@/pages/solutions/HOLDING360";
import Contabilidade from "@/pages/solutions/Contabilidade";

// Segment Pages
import EstruturaComplexa from "@/pages/segments/EstruturaComplexa";
import OperacaoIntensiva from "@/pages/segments/OperacaoIntensiva";
import Industrias from "@/pages/segments/Industrias";
import ServicosEspecializados from "@/pages/segments/ServicosEspecializados";
import ExpansaoPatrimonial from "@/pages/segments/ExpansaoPatrimonial";
import Multinacionais from "@/pages/segments/Multinacionais";

// Blog
import BlogPost from "@/pages/BlogPost";
import IndicadoresFinanceirosCEO from "@/pages/blog/IndicadoresFinanceirosCEO";
import HoldingFamiliar from "@/pages/blog/HoldingFamiliar";
import TributacaoDividendos from "@/pages/blog/TributacaoDividendos";
import CashbackCestaBasica from "@/pages/blog/CashbackCestaBasica";
import CBSIBS from "@/pages/blog/CBSIBS";
import ReformaTributaria2025 from "@/pages/blog/ReformaTributaria2025";
import ChecklistOSP from "@/pages/blog/ChecklistOSP";
import ImpostoSeletivo from "@/pages/blog/ImpostoSeletivo";
import EC132Impactos from "@/pages/blog/EC132Impactos";
import LucroRealEstrategia from "@/pages/blog/LucroRealEstrategia";
import ContabilidadeCrescimento from "@/pages/blog/ContabilidadeCrescimento";
import HoldingPatrimonial2025 from "@/pages/blog/HoldingPatrimonial2025";
import EstudoTributario from "@/pages/blog/EstudoTributario";
import ContabilidadeLucroReal from "@/pages/blog/ContabilidadeLucroReal";

import NotFound from "@/pages/not-found";

// Scroll to top component
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
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
  );
}

function App() {
  const [location] = useLocation();
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <PageTransition key={location}>
                  <Router />
                </PageTransition>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
          <FloatingCTA />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
