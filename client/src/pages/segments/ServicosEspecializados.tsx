import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { GraduationCap, Shield, FileCheck, Users } from "lucide-react";

export default function ServicosEspecializados() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Serviços com Alta Complexidade"
        subtitle="Soluções para setores regulados ou com alta exigência técnica: saúde, educação, tecnologia e serviços especializados"
        primaryCTA={{ text: "Falar com Especialista", href: "/contato" }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-section-mobile md:text-section mb-4">Expertise em serviços complexos</h2>
            <p className="text-body-lg text-muted-foreground">
              Setores como saúde, educação, tecnologia e serviços profissionais possuem particularidades 
              tributárias, regulatórias e operacionais que exigem conhecimento especializado.
            </p>
          </div>

          <FeatureGrid
            features={[
              {
                icon: GraduationCap,
                title: "Compliance Regulatório",
                description: "Adequação a normas setoriais específicas",
              },
              {
                icon: Shield,
                title: "Segurança Jurídica",
                description: "Estruturação fiscal defensável e segura",
              },
              {
                icon: FileCheck,
                title: "Obrigações Setoriais",
                description: "Gestão de exigências específicas do setor",
              },
              {
                icon: Users,
                title: "Consultoria Especializada",
                description: "Time com expertise no seu segmento",
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Seu setor exige conhecimento especializado"
        description="Converse com especialistas que entendem as particularidades do seu negócio"
        primaryButton={{ text: "Agendar Consultoria", href: "/contato" }}
        variant="accent"
      />
    </div>
  );
}
