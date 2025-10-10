import FeatureGrid from '../FeatureGrid';
import { Users, TrendingUp, Shield, Zap } from 'lucide-react';

export default function FeatureGridExample() {
  return (
    <div className="p-8">
      <FeatureGrid
        features={[
          {
            icon: Users,
            title: "Atendimento Consultivo",
            description: "Relacionamento direto com sócios e gestores especializados"
          },
          {
            icon: TrendingUp,
            title: "Visão Estratégica",
            description: "BI com indicadores personalizados para tomada de decisão"
          },
          {
            icon: Shield,
            title: "Segurança Tributária",
            description: "Especialistas em Lucro Real e planejamento fiscal"
          },
          {
            icon: Zap,
            title: "Integração Total",
            description: "Conexão com ERP, sistemas financeiros e bancos"
          },
        ]}
        columns={4}
      />
    </div>
  );
}
