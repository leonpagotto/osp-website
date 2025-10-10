import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <TestimonialCard
        quote="A OSP nos ajudou a gerar caixa já nos primeiros 45 dias e estruturar nossa operação de forma profissional."
        author="Carlos Silva"
        role="CEO"
        company="Tubesteel"
      />
    </div>
  );
}
