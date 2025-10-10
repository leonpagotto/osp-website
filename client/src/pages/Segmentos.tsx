import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SegmentCard from "@/components/SegmentCard";
import CTASection from "@/components/CTASection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Network,
  Zap,
  GraduationCap,
  Building,
  Factory,
  Globe,
  Sprout,
  Cpu,
  ShoppingCart,
  Hammer,
  Truck,
  Heart,
  Users,
} from "lucide-react";

export default function Segmentos() {
  const [activeTab, setActiveTab] = useState("perfil");

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Segmentos Atendidos"
        subtitle="Soluções especializadas por perfil estratégico e setor de atuação"
        showGradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="perfil" data-testid="tab-perfil">Por Perfil Estratégico</TabsTrigger>
              <TabsTrigger value="setor" data-testid="tab-setor">Por Setor</TabsTrigger>
            </TabsList>

            {/* Por Perfil Estratégico */}
            <TabsContent value="perfil" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <SegmentCard
                  icon={Network}
                  title="Estrutura Complexa"
                  description="Empresas com múltiplas entidades, CNPJs, sócios ou operações que exigem governança e visão consolidada"
                  href="/segmentos/estrutura-complexa"
                />
                <SegmentCard
                  icon={Zap}
                  title="Operação Intensiva"
                  description="Alto volume de transações, notas fiscais e movimentações que demandam automação e controles robustos"
                  href="/segmentos/operacao-intensiva"
                />
                <SegmentCard
                  icon={GraduationCap}
                  title="Serviços com Alta Complexidade"
                  description="Setores regulados ou com alta exigência técnica: saúde, educação, tecnologia e serviços especializados"
                  href="/segmentos/servicos-especializados"
                />
                <SegmentCard
                  icon={Building}
                  title="Expansão Patrimonial e Familiar"
                  description="Grupos familiares, holdings e empresas em processo de estruturação patrimonial e sucessória"
                  href="/segmentos/expansao-patrimonial"
                />
              </div>
            </TabsContent>

            {/* Por Setor de Atuação */}
            <TabsContent value="setor" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SegmentCard
                  icon={Factory}
                  title="Indústrias"
                  description="Manufatura, produção e transformação industrial"
                  href="/segmentos/industrias"
                />
                <SegmentCard
                  icon={Globe}
                  title="Multinacionais e Grupos Internacionais"
                  description="Empresas com operações cross-border e complexidade fiscal"
                  href="/segmentos/multinacionais"
                />
                <SegmentCard
                  icon={Sprout}
                  title="Agro e Distribuição"
                  description="Agronegócio, distribuição e cadeia de suprimentos"
                  href="/segmentos/agro"
                />
                <SegmentCard
                  icon={Cpu}
                  title="Tecnologia e Plataformas Digitais"
                  description="Startups, SaaS, fintechs e empresas de tecnologia"
                  href="/segmentos/tecnologia"
                />
                <SegmentCard
                  icon={ShoppingCart}
                  title="eCommerce, Comércio e Atacado"
                  description="Varejo físico, online e operações atacadistas"
                  href="/segmentos/comercio"
                />
                <SegmentCard
                  icon={Hammer}
                  title="Construção Civil e Incorporação"
                  description="Construtoras, incorporadoras e engenharia"
                  href="/segmentos/construcao"
                />
                <SegmentCard
                  icon={Truck}
                  title="Transporte, Logística e Frotas"
                  description="Transportadoras, logística e gestão de frotas"
                  href="/segmentos/logistica"
                />
                <SegmentCard
                  icon={Heart}
                  title="Saúde - Clínicas e Laboratórios"
                  description="Estabelecimentos de saúde e diagnóstico"
                  href="/segmentos/saude"
                />
                <SegmentCard
                  icon={GraduationCap}
                  title="Educação e Serviços Especializados"
                  description="Instituições de ensino e serviços profissionais"
                  href="/segmentos/educacao"
                />
                <SegmentCard
                  icon={Users}
                  title="Grupos Patrimoniais e Famílias"
                  description="Holdings familiares e gestão patrimonial"
                  href="/segmentos/grupos-familiares"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CTASection
        title="Seu segmento tem desafios únicos"
        description="Conheça nossas soluções especializadas para seu setor de atuação"
        primaryButton={{ text: "Falar com Especialista", href: "/contato" }}
        secondaryButton={{ text: "Ver Casos de Sucesso", href: "/resultados" }}
      />
    </div>
  );
}
