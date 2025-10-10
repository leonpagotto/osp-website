import StatsSection from '../StatsSection';

export default function StatsSectionExample() {
  return (
    <StatsSection
      stats={[
        { value: "R$ 100M+", label: "Em economia tributária gerada", highlight: true },
        { value: "100+", label: "Migrações seguras para Lucro Real" },
        { value: "600+", label: "Empresas atendidas" },
        { value: "98%", label: "Taxa de retenção", highlight: true },
      ]}
    />
  );
}
