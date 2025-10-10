import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection
      title="Inteligência contábil para decisões que transformam negócios"
      subtitle="O braço técnico e consultivo de empresas no Lucro Real"
      primaryCTA={{ text: "Fale com Especialista", href: "/contato" }}
      secondaryCTA={{ text: "Diagnóstico Gratuito", href: "/solucoes/osp360" }}
      stats={[
        { value: "+600", label: "Empresas Atendidas" },
        { value: "14", label: "Estados" },
        { value: "12", label: "Países" },
      ]}
    />
  );
}
