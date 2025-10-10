import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Solucoes from "@/pages/Solucoes";
import Segmentos from "@/pages/Segmentos";
import Resultados from "@/pages/Resultados";
import SobreNos from "@/pages/SobreNos";
import Contato from "@/pages/Contato";
import Blog from "@/pages/Blog";
import FacaParte from "@/pages/FacaParte";
import Materiais from "@/pages/Materiais";
import NotFound from "@/pages/not-found";

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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
