import CTASection from '../CTASection';

export default function CTASectionExample() {
  return (
    <CTASection
      title="Pronto para transformar sua gestão contábil?"
      description="Agende uma conversa com nossos especialistas e descubra como podemos ajudar sua empresa a crescer de forma sustentável"
      primaryButton={{ text: "Falar com Especialista", href: "/contato" }}
      secondaryButton={{ text: "Solicitar Diagnóstico", href: "/solucoes/osp360" }}
      variant="accent"
    />
  );
}
