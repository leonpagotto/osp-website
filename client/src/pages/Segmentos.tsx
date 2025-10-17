import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SegmentCard from "@/components/SegmentCard";
import CTASection from "@/components/CTASection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import {
  Network,
  Zap,
  GraduationCap,
  Building,
  Factory,
  Globe,
  Cpu,
  ShoppingCart,
  Heart,
} from "lucide-react";

export default function Segmentos() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("perfil");

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t('segmentsPage.hero.title')}
        subtitle={t('segmentsPage.hero.subtitle')}
        showGradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="perfil" data-testid="tab-perfil">{t('segmentsPage.tabs.profile')}</TabsTrigger>
              <TabsTrigger value="setor" data-testid="tab-setor">{t('segmentsPage.tabs.sector')}</TabsTrigger>
            </TabsList>

            {/* Por Perfil Estratégico */}
            <TabsContent value="perfil" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <SegmentCard
                  icon={Network}
                  title={t('segmentsPage.profile.complexStructure.title')}
                  description={t('segmentsPage.profile.complexStructure.description')}
                  href="/segmentos/estrutura-complexa"
                />
                <SegmentCard
                  icon={Zap}
                  title={t('segmentsPage.profile.intensiveOperation.title')}
                  description={t('segmentsPage.profile.intensiveOperation.description')}
                  href="/segmentos/operacao-intensiva"
                />
                <SegmentCard
                  icon={GraduationCap}
                  title={t('segmentsPage.profile.specializedServices.title')}
                  description={t('segmentsPage.profile.specializedServices.description')}
                  href="/segmentos/servicos-especializados"
                />
                <SegmentCard
                  icon={Building}
                  title={t('segmentsPage.profile.assetExpansion.title')}
                  description={t('segmentsPage.profile.assetExpansion.description')}
                  href="/segmentos/expansao-patrimonial"
                />
              </div>
            </TabsContent>

            {/* Por Setor de Atuação */}
            <TabsContent value="setor" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SegmentCard
                  icon={Factory}
                  title={t('segmentsPage.sector.industry.title')}
                  description={t('segmentsPage.sector.industry.description')}
                  href="/segmentos/industrias"
                />
                <SegmentCard
                  icon={Globe}
                  title={t('segmentsPage.sector.multinationals.title')}
                  description={t('segmentsPage.sector.multinationals.description')}
                  href="/segmentos/multinacionais"
                />
                <SegmentCard
                  icon={Cpu}
                  title={t('segmentsPage.sector.technology.title')}
                  description={t('segmentsPage.sector.technology.description')}
                  href="/segmentos/tecnologia"
                />
                <SegmentCard
                  icon={Heart}
                  title={t('segmentsPage.sector.healthcare.title')}
                  description={t('segmentsPage.sector.healthcare.description')}
                  href="/segmentos/saude"
                />
                <SegmentCard
                  icon={GraduationCap}
                  title={t('segmentsPage.sector.education.title')}
                  description={t('segmentsPage.sector.education.description')}
                  href="/segmentos/educacao"
                />
                <SegmentCard
                  icon={ShoppingCart}
                  title={t('segmentsPage.sector.commerce.title')}
                  description={t('segmentsPage.sector.commerce.description')}
                  href="/segmentos/comercio-servicos"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CTASection
        title={t('segmentsPage.cta.title')}
        description={t('segmentsPage.cta.description')}
        primaryButton={{ text: t('segmentsPage.cta.primaryButton'), href: "/contato" }}
        secondaryButton={{ text: t('segmentsPage.cta.secondaryButton'), href: "/resultados" }}
      />
    </div>
  );
}
