/**
 * Blog Content Translations
 * Component-wise bilingual content for all blog posts
 * 
 * Structure:
 * - Each blog post has a slug-based key
 * - Content is broken into reusable components (headings, paragraphs, lists, cards, quotes)
 * - This makes translation systematic and maintainable
 */

export interface BlogContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'card' | 'quote' | 'divider' | 'callout';
  level?: 2 | 3 | 4; // Heading levels
  title?: string; // For headings
  content?: string | string[]; // For paragraphs and lists
  items?: Array<{
    title?: string;
    description?: string;
    highlight?: boolean;
  }>; // For cards
  author?: string; // For quotes
  cite?: string; // For quotes
  variant?: 'info' | 'warning' | 'success'; // For callouts
}

export interface BlogContent {
  lead: string; // Opening paragraph (lead/intro)
  sections: BlogContentSection[];
}

// ============================================================================
// PORTUGUESE CONTENT
// ============================================================================

export const blogContentPT: Record<string, BlogContent> = {
  // ============================================================================
  // TAX REFORM CATEGORY (7 posts)
  // ============================================================================
  
  // --------------------------------------------------------------------------
  // POST 1: Tributação de Dividendos
  // --------------------------------------------------------------------------
  "tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar": {
    lead: "O Projeto de Lei 1.087/2025 traz mudanças profundas na tributação de dividendos no Brasil. Se aprovado, dividendos passarão a ser tributados a partir de 2026. Entenda o que muda e como proteger seus lucros acumulados.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O Que Mudará na Tributação de Dividendos?'
      },
      {
        type: 'paragraph',
        content: 'Atualmente, dividendos distribuídos por empresas brasileiras são isentos de Imposto de Renda para pessoas físicas. O PL 1.087/2025 propõe acabar com essa isenção, introduzindo alíquotas progressivas que podem chegar a 15% sobre os valores distribuídos.'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Quando Entra em Vigor?',
            description: 'Se aprovado em 2025, as novas regras começam a valer a partir de janeiro de 2026. Isso significa que dividendos distribuídos até 31/12/2025 ainda estarão isentos.'
          },
          {
            title: 'Lucros Acumulados',
            description: 'Empresas com lucros acumulados de anos anteriores podem distribuí-los até o final de 2025 sem tributação, mesmo que gerados há vários anos.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Alíquotas Propostas'
      },
      {
        type: 'paragraph',
        content: 'O projeto prevê tributação progressiva conforme o valor recebido anualmente em dividendos: até R$ 50.000/ano isento, de R$ 50.000 a R$ 200.000 com 10%, e acima de R$ 200.000 com 15%.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Impactos Para Sua Empresa'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Planejamento de Distribuição'
      },
      {
        type: 'paragraph',
        content: 'Empresas precisarão avaliar quando e quanto distribuir aos sócios. A decisão entre reter lucros na empresa ou distribuir aos sócios ganha nova complexidade, exigindo análise tributária mais profunda.'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Lucros Acumulados: Janela de Oportunidade'
      },
      {
        type: 'paragraph',
        content: 'Se sua empresa possui lucros acumulados (reservas de lucros), 2025 é o ano decisivo. Distribuir esses valores antes de 31/12/2025 garante a isenção total de IRPF.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Atenção: Urgência em 2025',
        content: 'Empresas com lucros acumulados significativos devem agir rapidamente. A partir de 2026, a distribuição desses mesmos lucros será tributada. Exemplo: R$ 1 milhão em lucros acumulados distribuídos em 2025 = R$ 0 de IR. Os mesmos R$ 1 milhão distribuídos em 2026 = até R$ 150 mil de IR.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Holding Familiar: Proteção Estratégica'
      },
      {
        type: 'paragraph',
        content: 'A estruturação de holdings familiares pode ser uma estratégia eficiente para gerenciar a distribuição de lucros e minimizar impactos tributários. Holdings permitem maior flexibilidade na retenção e distribuição de resultados.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Como se Preparar?'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Passo 1: Levantamento de Lucros Acumulados',
            description: 'Identifique o saldo de lucros acumulados disponíveis para distribuição. Esse é o patrimônio que pode ser protegido até o final de 2025.'
          },
          {
            title: 'Passo 2: Análise de Capacidade de Distribuição',
            description: 'Avalie a saúde financeira da empresa e defina quanto pode ser distribuído sem comprometer o capital de giro e investimentos planejados.'
          },
          {
            title: 'Passo 3: Planejamento de Distribuições em 2025',
            description: 'Crie um cronograma de distribuições ao longo de 2025, respeitando limites legais e fluxo de caixa. Não deixe para dezembro.'
          },
          {
            title: 'Passo 4: Avalie Estruturas de Holding',
            description: 'Considere criar uma holding familiar para gestão patrimonial mais eficiente e flexível no longo prazo.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Por Que a OSP Pode Ajudar?'
      },
      {
        type: 'paragraph',
        content: 'A OSP possui experiência de mais de 25 anos em planejamento tributário estratégico. Nosso time analisa caso a caso, considerando situação patrimonial completa dos sócios, planejamento de caixa da empresa, estruturas societárias e holdings, impactos de outros tributos (ITCMD, CSLL, etc.), e alternativas legais de otimização.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'A possível tributação de dividendos a partir de 2026 representa uma mudança estrutural no planejamento tributário brasileiro. Empresas e sócios precisam agir estrategicamente em 2025 para proteger patrimônios acumulados e estabelecer novas rotinas de distribuição. Não espere a aprovação final do PL. O planejamento antecipado garante mais alternativas e segurança jurídica.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 2: Cashback Cesta Básica
  // --------------------------------------------------------------------------
  "cashback-cesta-basica-e-justica-fiscal-o-que-muda-na-tributacao": {
    lead: "A Reforma Tributária introduz dois mecanismos importantes de justiça social: o cashback tributário e a Cesta Básica Nacional com alíquota zero. Entenda como esses mecanismos funcionam e os impactos operacionais para empresas.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O Que é o Cashback Tributário?'
      },
      {
        type: 'paragraph',
        content: 'O cashback tributário é uma devolução parcial de impostos (CBS e IBS) paga por famílias de baixa renda inscritas no Cadastro Único (CadÚnico). O objetivo é reduzir o impacto regressivo do IVA (Imposto sobre Valor Agregado) nas famílias mais vulneráveis.'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Quem Recebe o Cashback?',
            description: 'Famílias inscritas no CadÚnico com renda per capita de até meio salário mínimo terão direito à devolução de parte dos tributos pagos em consumo.'
          },
          {
            title: 'Percentual de Devolução',
            description: 'O percentual de cashback será de 20% a 100% dos tributos CBS e IBS pagos, variando conforme o tipo de bem ou serviço consumido.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cesta Básica Nacional: Alíquota Zero'
      },
      {
        type: 'paragraph',
        content: 'A Reforma Tributária cria a Cesta Básica Nacional, uma lista de produtos essenciais que terão alíquota zero de CBS e IBS. Isso significa que esses produtos não sofrerão aumento de preço devido aos novos tributos.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Produtos Incluídos na Cesta Básica'
      },
      {
        type: 'list',
        content: [
          'Arroz, feijão, macarrão',
          'Farinha de trigo e farinha de mandioca',
          'Açúcar, óleo de soja, manteiga, margarina',
          'Café e leite',
          'Pão francês',
          'Carnes (bovina, suína, aves)',
          'Peixes, ovos',
          'Frutas e hortaliças nacionais'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Impactos Para Empresas'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Varejistas e Supermercados'
      },
      {
        type: 'paragraph',
        content: 'Empresas do varejo alimentar precisarão identificar corretamente os produtos da Cesta Básica Nacional para aplicar alíquota zero. Erros na classificação podem gerar cobrança indevida de tributos, perda de direito a créditos fiscais, e passivos tributários em fiscalizações.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Atenção: Classificação Fiscal (NCM)',
        content: 'A correta classificação NCM (Nomenclatura Comum do Mercosul) dos produtos será fundamental. Produtos similares podem ter tratamentos tributários diferentes.'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Indústria e Atacado'
      },
      {
        type: 'paragraph',
        content: 'Fabricantes e atacadistas de produtos da Cesta Básica terão direito a créditos fiscais mesmo com alíquota zero na saída. Isso porque o sistema é não cumulativo. Porém, será necessário segregar produtos da Cesta Básica no sistema, controlar rigorosamente créditos de CBS e IBS, e documentar corretamente toda a cadeia tributária.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Operação do Cashback'
      },
      {
        type: 'paragraph',
        content: 'Para empresas, o cashback será operacionalmente neutro. O próprio governo fará a devolução direta para o consumidor, sem envolvimento do estabelecimento comercial. Porém, sistemas de emissão de notas fiscais precisarão identificar o CPF do consumidor, notas fiscais eletrônicas terão campos específicos para cashback, e consumidores poderão exigir CPF na nota para garantir o benefício.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Como se Preparar?'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Revisar Cadastro de Produtos',
            description: 'Identifique todos os produtos que se enquadram na Cesta Básica Nacional e verifique a classificação NCM correta.'
          },
          {
            title: '2. Atualizar Sistemas Fiscais',
            description: 'Sistemas de ERP e emissão de notas fiscais precisarão diferenciar produtos com alíquota zero e calcular corretamente créditos fiscais.'
          },
          {
            title: '3. Treinar Equipes',
            description: 'Equipes de fiscal, compras e cadastro de produtos devem ser treinadas para entender as novas regras e aplicá-las corretamente.'
          },
          {
            title: '4. Monitorar Regulamentações',
            description: 'A lista final de produtos e detalhes operacionais ainda serão regulamentados. Acompanhe as publicações oficiais.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'Cashback tributário e Cesta Básica Nacional são pilares de justiça social da Reforma Tributária. Para empresas, representam novos desafios operacionais que exigem preparação adequada em sistemas, processos e capacitação de equipes. Comece a preparação agora para garantir conformidade desde o início da vigência das novas regras.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 3: CBS e IBS
  // --------------------------------------------------------------------------
  "cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025": {
    lead: "A Reforma Tributária substitui cinco tributos por dois: a CBS (Contribuição sobre Bens e Serviços) e o IBS (Imposto sobre Bens e Serviços). Entenda como funciona o novo modelo não cumulativo e os impactos práticos para sua empresa.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O Que São CBS e IBS?'
      },
      {
        type: 'card',
        items: [
          {
            title: 'CBS - Contribuição sobre Bens e Serviços',
            description: 'Tributo federal que substitui: PIS (Programa de Integração Social), Cofins (Contribuição para Financiamento da Seguridade Social), e IPI (Imposto sobre Produtos Industrializados).'
          },
          {
            title: 'IBS - Imposto sobre Bens e Serviços',
            description: 'Tributo estadual e municipal que substitui: ICMS (Imposto sobre Circulação de Mercadorias e Serviços) e ISS (Imposto sobre Serviços).'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Modelo Não Cumulativo'
      },
      {
        type: 'paragraph',
        content: 'A principal característica de CBS e IBS é serem plenamente não cumulativos. Isso significa que todo tributo pago em uma etapa da cadeia produtiva gera crédito para abater do tributo devido na próxima etapa.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Como Funciona o Crédito Fiscal?'
      },
      {
        type: 'paragraph',
        content: 'Exemplo prático: Indústria compra matéria-prima por R$ 100 + R$ 20 (CBS/IBS) = R$ 120 total, gerando crédito de R$ 20. Ao vender produto acabado por R$ 200 + R$ 40 (CBS/IBS), tem débito de R$ 40, menos crédito de R$ 20 = R$ 20 a recolher. A indústria só paga sobre o valor agregado (R$ 100), não sobre o valor total da venda.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Impactos Práticos Para Empresas'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Controle de Créditos Mais Rigoroso'
      },
      {
        type: 'paragraph',
        content: 'O aproveitamento de créditos fiscais será fundamental para a competitividade. Empresas precisarão documentar rigorosamente todas as compras, exigir notas fiscais corretas dos fornecedores, manter sistema contábil preciso de créditos e débitos, e reconciliar mensalmente os saldos de créditos.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Atenção: Créditos Mal Aproveitados',
        content: 'Empresas que não aproveitarem corretamente seus créditos fiscais pagarão mais impostos do que o necessário, perdendo competitividade. Um único mês de créditos não aproveitados pode representar milhares de reais perdidos.'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Fim dos Benefícios Estaduais'
      },
      {
        type: 'paragraph',
        content: 'Benefícios fiscais concedidos por estados (como isenções de ICMS) serão gradualmente extintos. Empresas que dependem desses benefícios precisam calcular o impacto real no custo tributário, reavaliar localização de centros de distribuição, renegociar contratos de longo prazo, e buscar alternativas de eficiência operacional.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Princípio do Destino'
      },
      {
        type: 'paragraph',
        content: 'O IBS seguirá o princípio do destino: o tributo será recolhido para o estado/município onde o consumidor final está localizado, não onde a empresa vende. Empresas de e-commerce e varejo com operações interestaduais precisarão ajustar sistemas para recolher o IBS para cada destino de venda.'
      },
      {
        type: 'heading',
        level: 3,
        content: '4. Alíquota Unificada (mas Alta)'
      },
      {
        type: 'paragraph',
        content: 'A alíquota padrão estimada de CBS + IBS ficará entre 26% e 28%. Porém, como o sistema é não cumulativo, o impacto real depende da margem de agregação de valor de cada empresa.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cronograma de Transição'
      },
      {
        type: 'card',
        items: [
          {
            title: '2026: Início da CBS (0,9% teste)',
            description: 'CBS começa com alíquota teste de 0,9%, convivendo com PIS/Cofins.'
          },
          {
            title: '2027: IBS entra (0,1% teste)',
            description: 'IBS inicia com alíquota teste, convivendo com ICMS/ISS.'
          },
          {
            title: '2029-2032: Transição Gradual',
            description: 'Aumento gradual de CBS/IBS e redução proporcional de tributos antigos.'
          },
          {
            title: '2033: Sistema Completo',
            description: 'Apenas CBS e IBS em vigor. ICMS, ISS, PIS/Cofins e IPI extintos.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Como se Preparar?'
      },
      {
        type: 'list',
        content: [
          'Avalie seu fluxo de créditos: Simule quanto de crédito sua empresa terá direito',
          'Atualize sistemas: ERPs precisarão calcular CBS/IBS corretamente',
          'Treine equipes: Fiscal, compras e vendas devem entender o novo modelo',
          'Revise contratos: Cláusulas tributárias precisam ser atualizadas',
          'Faça estudos tributários: Calcule o impacto real no seu negócio'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'CBS e IBS representam a maior transformação tributária em décadas no Brasil. O modelo não cumulativo é mais moderno e eficiente, mas exige controles rigorosos e preparação adequada. Empresas que se prepararem com antecedência terão vantagem competitiva, aproveitando melhor os créditos fiscais e evitando erros custosos.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 4: Reforma Tributária 2025 Guia Prático
  // --------------------------------------------------------------------------
  "reforma-tributaria-2025-guia-pratico-para-empresarios": {
    lead: "A Reforma Tributária aprovada pela EC 132/2023 é a maior transformação do sistema tributário brasileiro em décadas. Este guia reúne o essencial para empresários, diretores e controladores tomarem decisões estratégicas com segurança.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O Que é a Reforma Tributária?'
      },
      {
        type: 'paragraph',
        content: 'A Reforma Tributária substitui cinco tributos sobre consumo por dois novos impostos de modelo mais moderno e eficiente.'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Tributos Extintos',
            description: 'ICMS (estadual), ISS (municipal), PIS (federal), Cofins (federal), IPI (federal)'
          },
          {
            title: 'Novos Tributos',
            description: 'IBS - Imposto sobre Bens e Serviços (estadual e municipal) e CBS - Contribuição sobre Bens e Serviços (federal)'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Princípios Fundamentais'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Não Cumulatividade Plena'
      },
      {
        type: 'paragraph',
        content: 'Todo tributo pago em uma etapa gera crédito fiscal para a próxima. Isso elimina o efeito cascata e torna o sistema mais transparente.'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Princípio do Destino'
      },
      {
        type: 'paragraph',
        content: 'O tributo será recolhido para o estado/município onde está o consumidor final, não onde a empresa vende. Isso acaba com a guerra fiscal entre estados.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Alíquota Unificada'
      },
      {
        type: 'paragraph',
        content: 'Uma única alíquota nacional de CBS + IBS (estimada em 26-28%) para a maioria dos produtos e serviços, com exceções para setores específicos.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cronograma de Implementação'
      },
      {
        type: 'card',
        items: [
          {
            title: '2026',
            description: 'CBS começa com alíquota teste de 0,9%, coexistindo com PIS/Cofins. Empresas começam a acumular créditos de CBS.'
          },
          {
            title: '2027',
            description: 'IBS inicia com alíquota teste de 0,1%, coexistindo com ICMS/ISS. Início gradual da migração.'
          },
          {
            title: '2029-2032',
            description: 'Transição gradual com aumento de CBS/IBS e redução proporcional dos tributos antigos até extinção completa.'
          },
          {
            title: '2033',
            description: 'Sistema completamente implementado. Apenas CBS e IBS em vigor. ICMS, ISS, PIS/Cofins e IPI extintos.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Impactos Por Setor'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comércio e Indústria'
      },
      {
        type: 'list',
        content: [
          'Benefício: Créditos fiscais mais amplos reduzem carga tributária efetiva',
          'Desafio: Necessidade de controle rigoroso de créditos e notas fiscais',
          'Atenção: Fim dos benefícios fiscais estaduais impacta planejamento logístico'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Serviços'
      },
      {
        type: 'list',
        content: [
          'Impacto: Aumento potencial de carga, especialmente para serviços com pouco insumo',
          'Benefício: Créditos sobre aluguel, energia, telecom e outros insumos',
          'Atenção: ISS atual varia de 2% a 5%; novo sistema pode chegar a 26-28%'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'E-commerce'
      },
      {
        type: 'list',
        content: [
          'Mudança: Recolhimento para o estado/município do consumidor',
          'Desafio: Sistemas precisam calcular IBS específico para cada destino',
          'Benefício: Fim da guerra fiscal equaliza competição'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Decisões Estratégicas Necessárias'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Avaliar Impacto Financeiro',
            description: 'Realize estudo tributário detalhado para calcular o impacto real no seu negócio. Considere margem de agregação de valor e direito a créditos.'
          },
          {
            title: '2. Revisar Estrutura Societária',
            description: 'Holdings, filiais e estrutura de distribuição podem precisar ser repensadas considerando o novo princípio do destino.'
          },
          {
            title: '3. Investir em Sistemas',
            description: 'ERPs e sistemas de gestão precisarão ser atualizados para calcular CBS/IBS corretamente e gerenciar créditos fiscais de forma eficiente.'
          },
          {
            title: '4. Capacitar Equipes',
            description: 'Departamentos fiscal, financeiro, compras e comercial precisam entender profundamente o novo sistema tributário.'
          },
          {
            title: '5. Renegociar Contratos',
            description: 'Contratos de longo prazo com cláusulas tributárias precisam ser revistos e atualizados para refletir o novo cenário.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'A Reforma Tributária é inevitável e transformadora. Empresas que se prepararem com antecedência terão vantagem competitiva significativa, aproveitando oportunidades de redução de carga e evitando erros custosos. Não espere 2026 chegar. Comece o planejamento agora para ter tempo de implementar mudanças estruturais com segurança.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 5: Checklist OSP
  // --------------------------------------------------------------------------
  "checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria": {
    lead: "A Reforma Tributária exige preparação estruturada. Este checklist reúne as ações essenciais para sua empresa estar pronta, organizadas por prioridade e prazo.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Por Que Usar um Checklist?'
      },
      {
        type: 'paragraph',
        content: 'A complexidade da Reforma Tributária pode ser paralisante. Um checklist estruturado transforma a preparação em passos concretos e mensuráveis, garantindo que nada crítico seja esquecido.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Checklist de Preparação'
      },
      {
        type: 'heading',
        level: 3,
        content: 'URGENTE: Até Final de 2025'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Distribuir Lucros Acumulados (se aplicável)',
            description: 'Se há lucros acumulados e o PL 1.087/2025 for aprovado, distribua antes de 31/12/2025 para evitar tributação. Ação: Levantar saldo de lucros acumulados e avaliar capacidade de distribuição.'
          },
          {
            title: '2. Realizar Estudo Tributário Detalhado',
            description: 'Calcule o impacto real de CBS/IBS no seu negócio considerando créditos fiscais e margem de agregação de valor. Ação: Contratar especialista ou consultoria para simulação detalhada.'
          },
          {
            title: '3. Avaliar Estrutura de Holdings',
            description: 'Considere estruturação de holding patrimonial antes das mudanças em ITCMD e dividendos. Ação: Consultar especialista em planejamento patrimonial.'
          }
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: '2026: Primeiro Ano de Vigência'
      },
      {
        type: 'card',
        items: [
          {
            title: '4. Atualizar Sistemas de Gestão (ERP)',
            description: 'Sistemas precisam calcular CBS corretamente e gerenciar créditos fiscais desde janeiro/2026. Atualizar ERP para CBS 0,9%, configurar controle de créditos fiscais, testar cálculos com fornecedor do sistema, treinar usuários nas novas funcionalidades.'
          },
          {
            title: '5. Revisar Cadastro de Produtos e Serviços',
            description: 'Classificação fiscal (NCM) precisa estar correta para aplicar alíquotas adequadas. Auditar NCM de todos os produtos, identificar produtos da Cesta Básica, verificar regimes diferenciados aplicáveis, documentar classificações com justificativa.'
          },
          {
            title: '6. Implementar Controle Rigoroso de Notas Fiscais',
            description: 'Todo crédito fiscal depende de nota fiscal correta. Implemente processos de validação. Criar rotina de validação de NF de entrada, treinar equipe de compras para exigir NF corretas, implementar conciliação mensal de créditos.'
          },
          {
            title: '7. Capacitar Equipes Internas',
            description: 'Treinamento específico para cada área impactada pela reforma. Fiscal: Cálculo de CBS/IBS e gestão de créditos. Compras: Validação de notas fiscais. Vendas: Impacto em precificação. Financeiro: Fluxo de caixa com novos tributos.'
          },
          {
            title: '8. Renegociar Contratos de Longo Prazo',
            description: 'Contratos com cláusulas tributárias fixas podem gerar perdas. Revise e atualize. Levantar contratos com cláusulas tributárias, calcular impacto da mudança tributária, propor aditivos com cláusulas atualizadas.'
          }
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: '2027-2028: Planejamento de Médio Prazo'
      },
      {
        type: 'card',
        items: [
          {
            title: '9. Reavaliar Estrutura Logística',
            description: 'Com o princípio do destino e fim da guerra fiscal, a localização de centros de distribuição pode precisar mudar.'
          },
          {
            title: '10. Revisar Política de Precificação',
            description: 'A mudança na carga tributária pode exigir ajustes em margens e estratégia de precificação.'
          },
          {
            title: '11. Otimizar Cadeia de Suprimentos',
            description: 'Aproveite a não cumulatividade plena para reavaliar fornecedores e insumos, considerando créditos fiscais disponíveis.'
          },
          {
            title: '12. Monitorar Regulamentações Complementares',
            description: 'Muitos detalhes ainda serão regulamentados. Mantenha-se atualizado sobre leis complementares e normas do Comitê Gestor do IBS.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Como Usar Este Checklist'
      },
      {
        type: 'list',
        content: [
          'Imprima ou salve este checklist para acompanhamento contínuo',
          'Atribua responsáveis para cada item dentro da empresa',
          'Defina prazos internos anteriores aos prazos legais',
          'Faça revisões mensais do progresso com a diretoria',
          'Documente tudo: decisões, simulações, treinamentos realizados',
          'Conte com especialistas: Não tente fazer tudo sozinho'
        ]
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Atenção: Custo da Não Preparação',
        content: 'Empresas que não se prepararem adequadamente podem enfrentar: Perda de créditos fiscais (dinheiro deixado na mesa), Pagamento a maior de tributos por erro de classificação, Multas e juros por declarações incorretas, Perda de competitividade frente a concorrentes preparados, Problemas de fluxo de caixa por surpresas tributárias. O custo de se preparar é infinitamente menor que o custo de não estar preparado.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'A preparação para a Reforma Tributária não é opcional — é questão de sobrevivência competitiva. Este checklist oferece um roteiro claro, mas cada empresa tem particularidades que exigem análise específica. Comece hoje. Quanto mais cedo iniciar a preparação, mais tempo terá para implementar mudanças com segurança e aproveitar oportunidades.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 6: Imposto Seletivo
  // --------------------------------------------------------------------------
  "imposto-seletivo-e-regimes-diferenciados-na-reforma-tributaria": {
    lead: "Além de CBS e IBS, a Reforma Tributária cria o Imposto Seletivo e diversos regimes diferenciados. Entenda como esses mecanismos funcionam e se sua empresa está no alvo.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O Que é o Imposto Seletivo?'
      },
      {
        type: 'paragraph',
        content: 'O Imposto Seletivo (IS) é um tributo federal adicional sobre bens e serviços considerados prejudiciais à saúde ou ao meio ambiente. É popularmente chamado de "imposto do pecado" e tem caráter extrafiscal — seu objetivo principal não é arrecadar, mas desestimular o consumo.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Produtos e Serviços Sujeitos ao Imposto Seletivo'
      },
      {
        type: 'list',
        content: [
          'Prejudiciais à Saúde: Cigarros e derivados do tabaco, Bebidas alcoólicas, Bebidas açucaradas, Alimentos ultraprocessados',
          'Prejudiciais ao Meio Ambiente: Veículos movidos exclusivamente a combustíveis fósseis, Embarcações e aeronaves (potencialmente), Produtos minerais (a definir)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Características do Imposto Seletivo'
      },
      {
        type: 'list',
        content: [
          'Alíquotas específicas: Variam conforme o grau de nocividade do produto',
          'Não gera crédito: Diferente de CBS/IBS, o IS não é compensável na cadeia',
          'Arrecadação federal: Receita vai para a União',
          'Adicional: Incide junto com CBS e IBS, não substitui'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Impactos Por Setor'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Tabaco e Bebidas Alcoólicas',
            description: 'Impacto: ALTO. Setores mais afetados. Alíquotas do IS podem ser muito elevadas, aumentando significativamente o preço final. Estratégias de precificação e volume de vendas precisarão ser completamente revisadas.',
            highlight: true
          },
          {
            title: 'Bebidas Açucaradas e Ultraprocessados',
            description: 'Impacto: MÉDIO. Refrigerantes, energéticos e alimentos ultraprocessados entram no radar. Empresas devem considerar reformulação de produtos para reduzir açúcar e aditivos prejudiciais.',
            highlight: true
          },
          {
            title: 'Automotivo',
            description: 'Impacto: MÉDIO. Veículos puramente a combustão podem ter IS adicional. Híbridos e elétricos estarão isentos, incentivando transição energética. Montadoras precisam acelerar eletrificação de portfólio.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Regimes Diferenciados (Alíquotas Reduzidas)'
      },
      {
        type: 'paragraph',
        content: 'Para equilibrar o sistema, a Reforma cria regimes com alíquotas reduzidas para setores essenciais ou sensíveis.'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Redução de 60% (aprox. 10-12%)',
            description: 'Serviços de saúde, Serviços de educação, Transporte coletivo de passageiros, Produtos agropecuários, pesqueiros, florestais e extrativistas, Atividades artísticas e culturais, Bens e serviços relacionados a segurança e soberania nacional'
          },
          {
            title: 'Alíquota Zero (0%)',
            description: 'Produtos da Cesta Básica Nacional, Medicamentos e dispositivos médicos essenciais, Produtos agropecuários in natura, Serviços de educação de ensino superior (Prouni)'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Como Saber Se Sua Empresa Está Impactada?'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Passo 1: Classifique Seus Produtos/Serviços'
      },
      {
        type: 'paragraph',
        content: 'Identifique se algum produto ou serviço da sua empresa se enquadra em: Lista do Imposto Seletivo (maior tributação), Regimes diferenciados (menor tributação), Regime padrão CBS+IBS (tributação normal).'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Passo 2: Calcule o Impacto Financeiro'
      },
      {
        type: 'paragraph',
        content: 'Para cada categoria, simule: Aumento no custo tributário, Impacto no preço ao consumidor, Potencial redução de demanda, Necessidade de reformulação de produtos.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Passo 3: Planeje Ações Estratégicas'
      },
      {
        type: 'list',
        content: [
          'Se sujeito ao IS: Considere reformulação para sair da lista (ex: reduzir açúcar), Reavalie portfólio de produtos, Prepare-se para potencial queda de demanda',
          'Se beneficiário de regime diferenciado: Garanta enquadramento correto, Documente requisitos para manter benefício, Aproveite competitividade tributária'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'O Imposto Seletivo e os regimes diferenciados adicionam camadas de complexidade à Reforma Tributária. Empresas precisam entender em qual categoria se enquadram e planejar adequadamente, seja para minimizar impactos negativos ou aproveitar oportunidades de benefícios fiscais. Não espere as regulamentações finais. Comece a análise agora para ter tempo de reagir estrategicamente.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 7: EC 132 Impactos
  // --------------------------------------------------------------------------
  "reforma-tributaria-2025-impactos-praticos-da-ec-132-para-empresas-em-crescimento": {
    lead: "A Emenda Constitucional 132/2023 é a base legal da Reforma Tributária. Para empresas em fase de crescimento acelerado, entender seus impactos práticos é essencial para planejar expansão, investimentos e estratégia competitiva nos próximos anos.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O Que é a EC 132/2023?'
      },
      {
        type: 'paragraph',
        content: 'A Emenda Constitucional 132, aprovada em dezembro de 2023, é o marco legal que permite a implementação da maior reforma tributária em décadas no Brasil. Ela altera 33 artigos da Constituição Federal relacionados ao sistema tributário sobre consumo.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Principais Mudanças Constitucionais'
      },
      {
        type: 'list',
        content: [
          'Extinção futura de ICMS, ISS, IPI, PIS e Cofins',
          'Criação de CBS (federal) e IBS (estadual/municipal)',
          'Criação do Imposto Seletivo',
          'Estabelecimento do princípio do destino',
          'Não cumulatividade plena e ampla',
          'Regimes diferenciados para setores específicos'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Por Que Empresas em Crescimento Devem Se Preocupar Mais?'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Decisões de Hoje Impactam Amanhã',
            description: 'Empresas em expansão tomam decisões estruturantes agora (localização de filiais, estrutura logística, regime tributário) que terão efeito por anos. Ignorar a Reforma pode significar decisões que ficarão obsoletas em 2026-2027.'
          },
          {
            title: '2. Investimentos Precisam Considerar Novo Cenário',
            description: 'Investir em novos centros de distribuição, unidades produtivas ou expansão comercial sem considerar o novo modelo tributário pode resultar em estruturas ineficientes tributariamente a partir de 2026.'
          },
          {
            title: '3. Vantagem Competitiva Para Quem Se Prepara',
            description: 'Concorrentes despreparados enfrentarão caos operacional em 2026-2027. Empresas que se antecipam terão vantagem competitiva clara: melhor aproveitamento de créditos, sistemas ajustados, equipes treinadas.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Impactos Práticos Por Área do Negócio'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Área Fiscal e Contábil'
      },
      {
        type: 'paragraph',
        content: 'Desafios: Complexidade transitória (sistemas precisarão calcular tributos antigos E novos simultaneamente 2026-2032), Controle de créditos fiscais (gestão rigorosa de CBS/IBS para não perder dinheiro), Novas obrigações acessórias (declarações e formatos diferentes dos atuais). Oportunidades: Créditos fiscais mais amplos podem reduzir carga efetiva, Sistema mais simples no longo prazo (após 2033), Menos brechas para guerra fiscal = competição mais justa.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Área Comercial e Precificação'
      },
      {
        type: 'paragraph',
        content: 'Desafios: Revisão de preços (mudança na carga tributária exige recalculação de margens), Contratos de longo prazo (cláusulas tributárias atuais ficarão desatualizadas), Comunicação com clientes (explicar mudanças de preço relacionadas à Reforma). Oportunidades: Reposicionamento de produtos/serviços conforme nova tributação, Produtos antes penalizados por cascata tributária ficam mais competitivos, Transparência tributária como diferencial de marketing.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Área de Logística e Operações'
      },
      {
        type: 'paragraph',
        content: 'Desafios: Fim da guerra fiscal (benefícios de localização em estados específicos desaparecem), Princípio do destino (IBS recolhido onde está o cliente, não onde está a empresa), Reestruturação de malha logística (centros de distribuição podem precisar mudar). Oportunidades: Escolher localização por motivos operacionais (custo, logística) e não fiscais, Simplificação de operações interestaduais, Menos complexidade em substituição tributária.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cronograma de Ação Para Empresas em Crescimento'
      },
      {
        type: 'card',
        items: [
          {
            title: '2025 — Ano de Planejamento',
            description: 'Realizar estudo tributário detalhado do impacto de CBS/IBS no seu negócio, Simular cenários de crescimento com novo sistema tributário, Revisar contratos de longo prazo e incluir cláusulas de revisão tributária, Avaliar se estrutura logística atual será eficiente após a Reforma, Começar treinamento de equipes (fiscal, comercial, compras)'
          },
          {
            title: '2026 — Início da CBS (0,9%)',
            description: 'Implementar sistemas atualizados para cálculo de CBS, Testar processos de aproveitamento de créditos fiscais, Monitorar impacto real vs. projeções, Ajustar precificação conforme necessário'
          },
          {
            title: '2027 — Início do IBS (0,1%)',
            description: 'Adequar sistemas para IBS por destino, Validar se localização de filiais ainda faz sentido, Reavaliar cadeia de suprimentos considerando créditos fiscais'
          },
          {
            title: '2029-2032 — Transição Gradual',
            description: 'Acompanhar aumento progressivo de CBS/IBS e redução de tributos antigos, Ajustar estratégias conforme alíquotas finais são definidas, Aproveitar janelas de oportunidade na transição'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'A EC 132/2023 não é uma mudança distante — seus efeitos começam em 2026. Para empresas em fase de crescimento, ignorar a Reforma é arriscar o futuro. Decisões tomadas hoje sem considerar o novo cenário tributário podem se tornar custosas em poucos anos. Crescimento sustentável exige planejamento tributário inteligente. Antecipe-se, prepare-se e transforme a Reforma em vantagem competitiva.'
      }
    ]
  },
  
  // ============================================================================
  // REAL PROFIT CATEGORY (3 posts)
  // ============================================================================
  
  // --------------------------------------------------------------------------
  // POST 8: Lucro Real Estratégia
  // --------------------------------------------------------------------------
  "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber": {
    lead: "O Lucro Real não é apenas um regime tributário — é uma ferramenta estratégica que, quando bem utilizada, pode gerar economia significativa e insights valiosos sobre o negócio. Entenda como operar com inteligência nesse regime.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O Que é o Lucro Real?'
      },
      {
        type: 'paragraph',
        content: 'Lucro Real é o regime tributário onde IRPJ e CSLL são calculados sobre o lucro contábil efetivamente apurado, ajustado por adições e exclusões previstas na legislação fiscal. Alíquotas: IRPJ 15% + adicional de 10% sobre lucro acima de R$ 20 mil/mês (até 25%), e CSLL 9%. Carga máxima combinada de 34% sobre o lucro, mas pode ser muito menor com planejamento adequado.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quando o Lucro Real é Obrigatório?'
      },
      {
        type: 'paragraph',
        content: 'Algumas empresas devem obrigatoriamente optar pelo Lucro Real:'
      },
      {
        type: 'list',
        content: [
          'Faturamento anual superior a R$ 78 milhões',
          'Instituições financeiras (bancos, cooperativas de crédito, seguradoras)',
          'Empresas com lucros, rendimentos ou ganhos de capital no exterior',
          'Empresas com benefícios fiscais de isenção ou redução de impostos',
          'Factoring e empresas de securitização'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quando o Lucro Real é Vantajoso (Mesmo Não Sendo Obrigatório)?'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Margens de Lucro Baixas',
            description: 'Se sua margem de lucro real é menor que a presumida (8% para comércio/indústria ou 32% para serviços), o Lucro Real pode gerar economia significativa. Exemplo: Empresa de serviços com receita de R$ 10 milhões e lucro real de R$ 1,5 milhão (15%) pagará menos no Lucro Real do que no Presumido.'
          },
          {
            title: 'Despesas Operacionais Elevadas',
            description: 'Empresas com muitas despesas dedutíveis (folha de pagamento, aluguéis, marketing, tecnologia) se beneficiam do Lucro Real, pois todas as despesas legítimas reduzem a base de cálculo.'
          },
          {
            title: 'Prejuízos Fiscais Acumulados',
            description: 'No Lucro Real, prejuízos fiscais podem ser compensados em até 30% do lucro de exercícios futuros, reduzindo tributos por anos após um período de investimento ou crise.'
          },
          {
            title: 'Fase de Investimento',
            description: 'Empresas em expansão com muitos investimentos (contratações, marketing, desenvolvimento) podem ter lucro reduzido ou até prejuízo temporário. No Lucro Real, pagam menos ou nada de IRPJ/CSLL.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Desafios do Lucro Real'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Contabilidade Mais Complexa'
      },
      {
        type: 'paragraph',
        content: 'O Lucro Real exige contabilidade rigorosa e completa: Escrituração contábil detalhada de todas as operações, Conciliação mensal de contas, Controle de LALUR (Livro de Apuração do Lucro Real), Maior volume de obrigações acessórias (ECF, ECD, etc.).'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Custo Contábil Mais Alto'
      },
      {
        type: 'paragraph',
        content: 'Honorários contábeis para Lucro Real são tipicamente 50% a 100% mais altos que para Simples ou Presumido, devido à complexidade.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Exige Organização Financeira'
      },
      {
        type: 'paragraph',
        content: 'Não basta ter contabilidade boa — a empresa precisa de: Controles internos eficientes, Processos de compras e vendas documentados, Conciliação bancária mensal, Gestão de estoques precisa.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Como Maximizar Benefícios no Lucro Real'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Planeje Despesas Dedutíveis',
            description: 'Toda despesa necessária, usual e devidamente comprovada é dedutível. Aproveite: Salários e encargos, Aluguéis e condomínios, Marketing e publicidade, Tecnologia e software, Treinamentos e capacitação, Despesas com veículos (proporcional ao uso empresarial).'
          },
          {
            title: '2. Gerencie Prejuízos Estrategicamente',
            description: 'Se você teve prejuízo fiscal em anos anteriores, pode compensar até 30% do lucro atual. Isso reduz significativamente a base de cálculo por vários anos.'
          },
          {
            title: '3. Controle Rigoroso de Notas Fiscais',
            description: 'Toda despesa só é dedutível com nota fiscal. Implemente processos para garantir que 100% das compras empresariais sejam documentadas corretamente.'
          },
          {
            title: '4. Apuração Trimestral vs. Anual',
            description: 'Você pode escolher entre Trimestral (apuração definitiva a cada 3 meses, menos flexível) ou Anual (pagamentos mensais por estimativa + ajuste no final do ano, mais estratégico). A opção anual geralmente oferece mais oportunidades de planejamento.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Lucro Real + Reforma Tributária'
      },
      {
        type: 'paragraph',
        content: 'Com a Reforma Tributária chegando, o Lucro Real ganha ainda mais relevância: Empresas em Lucro Real terão vantagem no aproveitamento de créditos de CBS/IBS, Contabilidade já estará estruturada para os novos tributos, Controles necessários para Lucro Real são os mesmos exigidos pela Reforma.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quando NÃO Escolher Lucro Real?'
      },
      {
        type: 'paragraph',
        content: 'O Lucro Real pode não ser vantajoso se: Margens de lucro são consistentemente altas (acima de 32% para serviços), Poucas despesas dedutíveis (negócios muito enxutos), Falta de organização financeira e controles internos, Impossibilidade de arcar com honorários contábeis mais altos.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'O Lucro Real é um regime poderoso quando usado estrategicamente. Exige organização e investimento em contabilidade de qualidade, mas pode gerar economia tributária significativa e fornecer informações gerenciais valiosas para decisões empresariais. Não escolha seu regime tributário no "achismo". Faça um estudo técnico comparando as opções e tome uma decisão baseada em números reais.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 9: Contabilidade Crescimento
  // --------------------------------------------------------------------------
  "sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio": {
    lead: "A diferença entre uma contabilidade burocrática e uma estratégica pode significar milhões em economia fiscal e decisões empresariais mais inteligentes. Descubra em qual lado você está.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O Teste Rápido: Responda Honestamente'
      },
      {
        type: 'paragraph',
        content: 'Marque quantas afirmações se aplicam à sua contabilidade atual:'
      },
      {
        type: 'list',
        content: [
          'Meu contador só aparece para entregar guias de impostos ou quando há problema',
          'Não recebo relatórios gerenciais mensais (DRE, fluxo de caixa, análises)',
          'Quando preciso tomar decisões importantes, não consulto meu contador',
          'Nunca fizemos um estudo tributário para ver se estou no regime ideal',
          'Meu contador não entende do meu negócio nem me faz perguntas sobre ele',
          'Pago impostos, mas não sei explicar como são calculados',
          'Nunca recebi sugestões de economia tributária ou otimização fiscal',
          'Meu balanço patrimonial é entregue meses após o fechamento do ano'
        ]
      },
      {
        type: 'card',
        items: [
          {
            title: '0-2 marcadas',
            description: 'Contabilidade Estratégica. Você tem uma parceira que impulsiona crescimento.'
          },
          {
            title: '3-5 marcadas',
            description: 'Contabilidade Mediana. Cumpre obrigações, mas não agrega valor estratégico.'
          },
          {
            title: '6+ marcadas',
            description: 'Contabilidade Burocrática. Está travando seu crescimento. Hora de mudar.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Contabilidade Burocrática vs. Estratégica'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Contabilidade Burocrática (Trava Crescimento)'
      },
      {
        type: 'list',
        content: [
          'Foco apenas em obrigações legais e fiscais',
          'Comunicação reativa (só quando há problema)',
          'Relatórios atrasados ou inexistentes',
          'Não questiona nem sugere melhorias',
          'Cobra pelo menor preço possível',
          'Usa jargão técnico sem explicar',
          'Não conhece o negócio do cliente'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Contabilidade Estratégica (Impulsiona Crescimento)'
      },
      {
        type: 'list',
        content: [
          'Parceira ativa nas decisões empresariais',
          'Reuniões regulares para análise de resultados',
          'Relatórios gerenciais tempestivos e claros',
          'Sugere economia tributária e eficiência',
          'Cobra pelo valor entregue, não pelo mínimo',
          'Explica de forma clara e acessível',
          'Conhece profundamente o negócio e setor'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'O Custo Real de Uma Contabilidade Medíocre'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Você Paga Mais Impostos do Que Deveria',
            description: 'Sem um estudo tributário adequado, muitas empresas pagam 20% a 40% a mais de tributos. Isso pode significar centenas de milhares de reais por ano jogados fora.'
          },
          {
            title: '2. Decisões Baseadas em "Achismo"',
            description: 'Sem informações contábeis confiáveis e atualizadas, você toma decisões importantes (contratações, investimentos, precificação) sem dados reais. É como dirigir vendado.'
          },
          {
            title: '3. Oportunidades Perdidas',
            description: 'Incentivos fiscais, regimes especiais, estruturações societárias vantajosas — tudo isso passa despercebido sem uma contabilidade proativa.'
          },
          {
            title: '4. Riscos Fiscais Escondidos',
            description: 'Passivos tributários não identificados podem explodir anos depois, gerando multas e juros que comprometem o futuro da empresa.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'O Que Esperar de Uma Contabilidade Estratégica'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Serviços Essenciais'
      },
      {
        type: 'list',
        content: [
          'Relatórios gerenciais mensais: DRE, Balanço, Fluxo de Caixa, análise de margens',
          'Reuniões periódicas: Análise de resultados e planejamento',
          'Estudos tributários: Comparativo entre regimes e oportunidades de economia',
          'Planejamento tributário: Estratégias legais de redução de carga fiscal',
          'Consultoria em decisões: Contratações, investimentos, expansão, precificação',
          'Indicadores de desempenho: KPIs financeiros e operacionais acompanhados'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Diferenciais de Excelência'
      },
      {
        type: 'list',
        content: [
          'Atendimento consultivo (não apenas burocrático)',
          'Conhecimento profundo do seu setor',
          'Uso de tecnologia e automação',
          'Comunicação clara e educativa',
          'Proatividade em identificar riscos e oportunidades'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quando Mudar de Contabilidade?'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Sinais de Que É Hora de Mudar',
        content: 'Você não confia nos números apresentados. Informações chegam sempre atrasadas. Contador não retorna ligações ou mensagens. Você paga, mas não sabe exatamente pelo quê. Nunca recebeu uma sugestão de melhoria. Sente que está apenas "cumprindo tabela". Seu negócio cresceu, mas o serviço contábil continua o mesmo.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'Contabilidade não é custo — é investimento estratégico. A diferença entre uma contabilidade medíocre e uma excelente pode ser a diferença entre estagnação e crescimento acelerado. Não aceite o mínimo. Exija uma contabilidade que seja parceira ativa do seu sucesso empresarial.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 10: Contabilidade Lucro Real
  // --------------------------------------------------------------------------
  "contabilidade-lucro-real-por-que-mudar-de-regime": {
    lead: "Migrar para Lucro Real sem preparação adequada pode gerar caos operacional e perda de benefícios fiscais. Entenda por que a transição exige organização estruturada e como se preparar corretamente.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Por Que Mudar Para Lucro Real?'
      },
      {
        type: 'paragraph',
        content: 'A mudança para Lucro Real geralmente acontece em três situações:'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Obrigatoriedade Legal',
            description: 'Faturamento ultrapassou R$ 78 milhões/ano ou empresa se enquadra em outra situação de obrigatoriedade (instituição financeira, lucros no exterior, etc.).'
          },
          {
            title: '2. Vantagem Tributária',
            description: 'Estudo tributário identificou que Lucro Real gerará economia significativa em relação ao Simples ou Presumido (comum em empresas com margens baixas ou muitas despesas dedutíveis).'
          },
          {
            title: '3. Preparação Para Crescimento',
            description: 'Empresa em expansão decide migrar preventivamente para ter controles mais robustos e aproveitar benefícios do Lucro Real (créditos fiscais, compensação de prejuízos).'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Por Que a Mudança Exige Organização?'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Contabilidade Muito Mais Complexa'
      },
      {
        type: 'paragraph',
        content: 'No Lucro Real, a contabilidade deixa de ser simplificada e passa a exigir: Escrituração contábil completa (todos os fatos contábeis precisam ser registrados), Controle de LALUR (Livro de Apuração do Lucro Real com ajustes fiscais), Conciliações mensais (bancos, estoques, contas a receber/pagar), Controle de créditos fiscais (PIS/Cofins, ICMS, IPI).'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Mais Obrigações Acessórias'
      },
      {
        type: 'paragraph',
        content: 'Empresas no Lucro Real precisam entregar: ECF (Escrituração Contábil Fiscal) — anual, ECD (Escrituração Contábil Digital) — anual, EFD-Contribuições (PIS/Cofins) — mensal, DCTF (Declaração de Débitos e Créditos Tributários) — mensal, SPED Fiscal (se aplicável) — mensal.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Exigência de Controles Internos'
      },
      {
        type: 'paragraph',
        content: 'Não basta ter boa contabilidade externa — a empresa precisa ter: Processos internos de compras documentados, Validação de notas fiscais de entrada, Gestão de estoques precisa, Controle de imobilizado (depreciação), Segregação de despesas pessoais vs. empresariais.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Atenção: Transição Mal Feita',
        content: 'Empresas que migram para Lucro Real sem preparação enfrentam: Informações contábeis atrasadas ou incorretas, Perda de créditos fiscais por falta de controle, Multas por obrigações acessórias entregues incorretamente, Pagamento a maior de tributos, Impossibilidade de tomar decisões baseadas em dados.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cronograma de Preparação (6-12 Meses Antes)'
      },
      {
        type: 'card',
        items: [
          {
            title: '12 Meses Antes: Decisão e Estudo',
            description: 'Realizar estudo tributário comparativo (Simples/Presumido vs. Lucro Real), Calcular economia esperada, Avaliar custo de adequação (honorários, sistemas, processos), Tomar decisão formal de mudança.'
          },
          {
            title: '9-10 Meses Antes: Sistemas e Processos',
            description: 'Avaliar se ERP atual suporta Lucro Real (ou contratar novo), Implementar controles de estoque (se ainda não houver), Criar processo de validação de notas fiscais de entrada, Implementar conciliação bancária mensal, Organizar documentação de imobilizado.'
          },
          {
            title: '6 Meses Antes: Contabilidade e Treinamento',
            description: 'Contratar escritório contábil especializado em Lucro Real (se necessário), Iniciar escrituração contábil completa (mesmo ainda em outro regime), Treinar equipe financeira nos novos processos, Educar setor de compras sobre importância de NF corretas.'
          },
          {
            title: '3 Meses Antes: Ajustes Finais',
            description: 'Testar cálculo de IRPJ/CSLL no Lucro Real com dados reais, Simular preenchimento de obrigações acessórias, Validar todos os controles internos, Preparar comunicação para fornecedores (se houver mudanças em NF).'
          },
          {
            title: 'Janeiro (Ano da Mudança): Início Oficial',
            description: 'Comunicar Receita Federal sobre opção pelo Lucro Real, Iniciar apuração mensal de IRPJ/CSLL, Acompanhar rigorosamente créditos fiscais, Reuniões mensais com contabilidade para análise de resultados.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Erros Comuns na Transição'
      },
      {
        type: 'list',
        content: [
          'Migrar sem estudo prévio: Descobrir depois que não há vantagem real',
          'Não investir em sistemas: Tentar fazer Lucro Real com ferramentas inadequadas',
          'Não treinar equipe: Processos novos sem capacitação geram erros',
          'Trocar de contabilidade sem planejamento: Perda de histórico e conhecimento do negócio',
          'Subestimar complexidade: Achar que é "só mudar de regime"'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Custos da Transição'
      },
      {
        type: 'paragraph',
        content: 'Investimentos Necessários: Estudo tributário (R$ 5.000 a R$ 30.000), Upgrade de ERP (R$ 10.000 a R$ 50.000 se necessário), Treinamentos (R$ 3.000 a R$ 10.000), Consultoria de transição (R$ 10.000 a R$ 40.000), Aumento de honorários contábeis (+50% a +100% mensais). Retorno Esperado: Se bem planejado, a economia tributária no Lucro Real deve pagar todos os custos de transição em 6 a 18 meses. Após isso, é economia líquida ano após ano.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'Migrar para Lucro Real é uma decisão estratégica que pode gerar economia significativa, mas exige preparação estruturada. Empresas que se organizam adequadamente colhem os benefícios rapidamente. As que migram sem planejamento enfrentam caos e podem até perder dinheiro. Não subestime a complexidade. Conte com especialistas e siga um cronograma de preparação para garantir uma transição bem-sucedida.'
      }
    ]
  },
  
  // ============================================================================
  // ASSET PLANNING CATEGORY (3 posts)
  // ============================================================================
  
  // --------------------------------------------------------------------------
  // POST 11: Holding Patrimonial 2025
  // --------------------------------------------------------------------------
  "holding-patrimonial-por-que-ainda-em-2025": {
    lead: "A janela de oportunidade para estruturar holdings patrimoniais com vantagens fiscais pode estar se fechando. Entenda os motivos da urgência.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Por Que a Urgência?'
      },
      {
        type: 'paragraph',
        content: 'Três fatores tornam 2025 um ano decisivo para quem considera estruturar holding patrimonial:'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Tributação de Dividendos (PL 1.087/2025)',
            description: 'Se aprovado, dividendos serão tributados a partir de 2026. Holdings estruturadas em 2025 podem distribuir lucros acumulados isentos até 31/12/2025. Após isso, mesmos lucros sofrerão IR de até 15%.',
            highlight: true
          },
          {
            title: '2. Aumento do ITCMD em Vários Estados',
            description: 'Estados como São Paulo discutem aumentar alíquota de ITCMD (imposto sobre herança) de 4% para até 8%. Holdings criadas antes do aumento preservam benefícios da alíquota atual na estruturação inicial.',
            highlight: true
          },
          {
            title: '3. Reforma Tributária e CBS/IBS',
            description: 'Novos tributos podem impactar a gestão de patrimônio imobiliário. Holdings estruturadas antes de 2026 têm mais tempo para se adaptar e planejar os impactos.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'O Que é uma Holding Patrimonial?'
      },
      {
        type: 'paragraph',
        content: 'Holding patrimonial é uma empresa criada para administrar patrimônio familiar. Em vez de imóveis, participações e investimentos estarem em nome de pessoas físicas, ficam em nome da holding (pessoa jurídica).'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Principais Benefícios'
      },
      {
        type: 'list',
        content: [
          'Planejamento sucessório: Evita inventário longo e custoso',
          'Economia tributária: ITCMD pago uma vez na integralização, não a cada sucessão',
          'Proteção patrimonial: Separação entre patrimônio pessoal e empresarial',
          'Governança familiar: Regras claras de gestão e sucessão',
          'Otimização de renda: Alugéis tributados como pessoa jurídica (potencialmente menor)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cenário Urgente: Dividendos'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Janela de Oportunidade: Até 31/12/2025',
        content: 'Situação atual (até 31/12/2025): Dividendos distribuídos por empresas brasileiras são isentos de IR para pessoa física. Isso vale mesmo para lucros acumulados de anos anteriores. Se PL 1.087/2025 for aprovado (a partir de 01/01/2026): Dividendos passam a ser tributados em até 15% de IR. Lucros acumulados distribuídos após 2026 também serão tributados. Estratégia: Estruturar holding em 2025 e distribuir lucros acumulados antes do final do ano preserva a isenção fiscal.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cenário de Risco: ITCMD'
      },
      {
        type: 'paragraph',
        content: 'O ITCMD (Imposto sobre Transmissão Causa Mortis e Doação) incide sobre heranças e doações. Vários estados consideram aumentar as alíquotas: Alíquota Atual (SP): 4% sobre valor de bens e direitos transmitidos por herança ou doação. Proposta Futura (SP): até 8% com alíquota progressiva conforme valor do patrimônio transmitido. Impacto prático: Patrimônio de R$ 10 milhões pagaria R$ 400 mil de ITCMD hoje. Com alíquota de 8%, pagaria R$ 800 mil — o dobro.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Como a Holding Protege?'
      },
      {
        type: 'paragraph',
        content: 'Na holding, o ITCMD é pago uma única vez na integralização inicial dos bens. Depois, a sucessão acontece por transferência de cotas da empresa, sem novo ITCMD a cada geração (se bem estruturada).'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quem Deveria Considerar Urgentemente?'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Famílias com Patrimônio Acima de R$ 5 Milhões',
            description: 'Benefícios fiscais e sucessórios justificam os custos de estruturação e manutenção da holding.'
          },
          {
            title: 'Proprietários de Múltiplos Imóveis',
            description: 'Gestão de aluguéis e futura sucessão imobiliária ficam muito mais eficientes e econômicas em uma holding.'
          },
          {
            title: 'Empresários com Lucros Acumulados',
            description: 'Se sua empresa operacional tem lucros acumulados significativos, pode ser estratégico criar holding e distribuir esses valores em 2025 (isento de IR).'
          },
          {
            title: 'Famílias Planejando Sucessão',
            description: 'Se há preocupação com inventário futuro ou divisão de bens entre herdeiros, a holding resolve esses problemas preventivamente.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Custos vs. Benefícios'
      },
      {
        type: 'paragraph',
        content: 'Custos de Estruturação: Honorários advocatícios e contábeis (R$ 15.000 a R$ 50.000), ITCMD na integralização (4% em SP do valor dos bens), ITBI se houver imóveis (varia por município, geralmente 2-3%), Custos de registro e cartório (R$ 3.000 a R$ 10.000). Custos de Manutenção: Contabilidade mensal (R$ 800 a R$ 3.000/mês), Declarações anuais e obrigações acessórias. Benefícios Típicos: Economia de ITCMD futuro (4% a 8% do patrimônio a cada sucessão evitada), Redução potencial de IR sobre aluguéis (10% a 15% anualmente), Economia de custos de inventário (R$ 50.000 a R$ 200.000+), Velocidade na sucessão (meses vs. anos de inventário).'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Passos Para Estruturar em 2025'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Diagnóstico Patrimonial (1-2 semanas)',
            description: 'Levantamento completo de bens, direitos, empresas, dívidas e análise tributária.'
          },
          {
            title: '2. Planejamento da Estrutura (2-3 semanas)',
            description: 'Definição de modelo societário, governança, cláusulas de proteção e otimização fiscal.'
          },
          {
            title: '3. Constituição da Holding (2-4 semanas)',
            description: 'Elaboração de contratos, registro na Junta Comercial, inscrições fiscais.'
          },
          {
            title: '4. Integralização de Bens (1-3 meses)',
            description: 'Transferência de imóveis, quotas societárias e outros ativos para a holding.'
          },
          {
            title: '5. Distribuição Estratégica (até 31/12/2025)',
            description: 'Se houver lucros acumulados, distribuir antes do final de 2025 garante isenção de IR.'
          }
        ]
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Prazo Realista',
        content: 'Contar com 3 a 6 meses do início ao final. Para garantir conclusão em 2025, inicie o processo até julho/agosto no máximo.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: '2025 é um ano de oportunidade única para estruturação de holdings patrimoniais. A convergência de mudanças tributárias torna a janela de vantagens fiscais cada vez mais estreita. Não há como prever se haverá outra oportunidade similar nos próximos anos. Se você tem patrimônio significativo e está considerando uma holding, 2025 é o ano para agir.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 12: Holding Familiar
  // --------------------------------------------------------------------------
  "holding-familiar-quando-estruturar": {
    lead: "A criação de uma holding familiar é uma das decisões mais estratégicas para proteção patrimonial e planejamento sucessório. Mas qual o momento certo para estruturá-la?",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O que é uma Holding Familiar?'
      },
      {
        type: 'paragraph',
        content: 'Holding familiar é uma empresa criada especificamente para administrar o patrimônio de uma família. Ela pode ser proprietária de outras empresas, imóveis, participações societárias, investimentos financeiros e outros ativos.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quando Estruturar uma Holding?'
      },
      {
        type: 'paragraph',
        content: 'Considere criar uma holding familiar quando:'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Patrimônio Significativo',
            description: 'Quando o patrimônio familiar supera R$ 5 milhões, os benefícios fiscais e de proteção justificam a estruturação de uma holding.'
          },
          {
            title: 'Múltiplos Imóveis',
            description: 'Famílias com diversos imóveis se beneficiam enormemente da holding, especialmente para gestão de aluguéis e futura sucessão.'
          },
          {
            title: 'Planejamento Sucessório',
            description: 'Se há preocupação com a sucessão e divisão de bens entre herdeiros, a holding evita inventários longos e custosos.'
          },
          {
            title: 'Proteção Patrimonial',
            description: 'Empresários que desejam proteger seu patrimônio pessoal dos riscos das atividades empresariais devem considerar a holding.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tipos de Holding Familiar'
      },
      {
        type: 'paragraph',
        content: 'Existem diferentes modelos, cada um com finalidade específica:'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Holding Pura'
      },
      {
        type: 'paragraph',
        content: 'Criada exclusivamente para deter participações em outras empresas ou ativos. Não realiza atividades operacionais.'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Holding Patrimonial'
      },
      {
        type: 'paragraph',
        content: 'Focada na administração de imóveis e outros bens. Ideal para famílias com portfólio imobiliário significativo.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Holding Mista'
      },
      {
        type: 'paragraph',
        content: 'Combina a gestão de participações societárias com administração patrimonial. Modelo mais completo e versátil.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vantagens Fiscais'
      },
      {
        type: 'paragraph',
        content: 'As principais vantagens tributárias incluem:'
      },
      {
        type: 'list',
        content: [
          'Economia no ITCMD: Redução significativa no imposto de transmissão causa mortis',
          'Eficiência em Aluguéis: Tributação otimizada para rendas de locação',
          'Distribuição de Lucros: Possibilidade de distribuição isenta de IR',
          'Reorganização: Reestruturações societárias com benefícios fiscais'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Governança Familiar'
      },
      {
        type: 'paragraph',
        content: 'Além dos benefícios fiscais, a holding permite estabelecer regras claras de governança:'
      },
      {
        type: 'list',
        content: [
          'Acordo de sócios/quotistas bem estruturado',
          'Regras de distribuição de resultados',
          'Sucessão organizada e sem conflitos',
          'Proteção contra casamentos e divórcios',
          'Venda ou saída de sócios de forma planejada'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Processo de Estruturação'
      },
      {
        type: 'paragraph',
        content: 'A criação de uma holding familiar envolve:'
      },
      {
        type: 'list',
        content: [
          'Diagnóstico Patrimonial: Levantamento completo de ativos e passivos',
          'Planejamento Tributário: Análise de regime e estrutura ideal',
          'Constituição: Criação da empresa e integralização de capital',
          'Transferência de Ativos: Migração dos bens para a holding',
          'Acordo de Sócios: Estabelecimento das regras de governança',
          'Operacionalização: Estruturação da gestão e controles'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cuidados Importantes'
      },
      {
        type: 'paragraph',
        content: 'A estruturação de uma holding exige planejamento cuidadoso:'
      },
      {
        type: 'list',
        content: [
          'Escolha correta do regime tributário (Lucro Real, Presumido ou Simples)',
          'Avaliação adequada dos ativos na integralização',
          'Compliance com todas as normas fiscais e societárias',
          'Documentação completa e defensável',
          'Acompanhamento contábil especializado'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'A holding familiar é uma ferramenta poderosa de planejamento patrimonial e sucessório, mas sua estruturação exige conhecimento técnico especializado. Quando bem implementada, proporciona proteção, eficiência fiscal e governança familiar sólida. Na OSP, acumulamos décadas de experiência em estruturação de holdings familiares, garantindo segurança jurídica, eficiência tributária e governança adequada para perpetuar o patrimônio familiar através das gerações.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 13: Estudo Tributário
  // --------------------------------------------------------------------------
  "estudo-tributario-tomar-decisoes": {
    lead: "Decisões tributárias baseadas em achismo custam milhões às empresas brasileiras todos os anos. Um estudo tributário profundo transforma incerteza em dados concretos, gerando economia real e segurança jurídica.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'O Que é um Estudo Tributário Profundo?'
      },
      {
        type: 'paragraph',
        content: 'É uma análise técnica detalhada da situação tributária da empresa, que compara cenários, calcula impactos e identifica oportunidades legais de redução de carga fiscal. Diferente de uma consultoria pontual, o estudo tributário: Analisa histórico completo (3-5 anos de dados reais), Simula múltiplos cenários com projeções futuras, Considera todas as variáveis (regime tributário, estrutura societária, operações), Identifica riscos escondidos e passivos tributários potenciais, Propõe plano de ação específico para sua realidade.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Por Que Muitas Empresas Pagam Mais Impostos do Que Deveriam?'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Regime Tributário Errado',
            description: 'Muitas empresas operam no Simples ou Presumido quando o Lucro Real seria mais vantajoso (ou vice-versa). Exemplo real: Empresa de serviços com R$ 5 milhões de receita anual, operando no Presumido, descobriu que Lucro Real geraria economia de R$ 280 mil/ano.'
          },
          {
            title: '2. Créditos Fiscais Não Aproveitados',
            description: 'Empresas no Lucro Real frequentemente perdem créditos de PIS/Cofins por não identificar todas as despesas elegíveis ou por falta de controle adequado.'
          },
          {
            title: '3. Estrutura Societária Ineficiente',
            description: 'Operações centralizadas em uma única empresa quando a criação de filiais, holdings ou SPEs (Sociedades de Propósito Específico) seria tributariamente mais eficiente.'
          },
          {
            title: '4. Benefícios Fiscais Desconhecidos',
            description: 'Existem dezenas de incentivos fiscais federais, estaduais e municipais que passam despercebidos por falta de análise especializada.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'O Que um Estudo Tributário Profundo Inclui?'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fase 1: Diagnóstico Completo'
      },
      {
        type: 'list',
        content: [
          'Análise de balancetes e demonstrativos dos últimos 3-5 anos',
          'Revisão de contratos sociais e estrutura societária',
          'Levantamento de todas as operações e fluxos de receita',
          'Identificação de despesas dedutíveis não aproveitadas',
          'Auditoria de obrigações acessórias e conformidade fiscal'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fase 2: Simulações e Comparações'
      },
      {
        type: 'list',
        content: [
          'Comparativo entre Simples, Presumido e Lucro Real',
          'Cálculo de economia potencial em cada regime',
          'Projeções para os próximos 3-5 anos',
          'Análise de impacto da Reforma Tributária (CBS/IBS)',
          'Simulação de cenários de crescimento'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fase 3: Identificação de Oportunidades'
      },
      {
        type: 'list',
        content: [
          'Benefícios fiscais aplicáveis (PAT, ROTA 2030, Lei do Bem, etc.)',
          'Créditos fiscais não aproveitados (PIS/Cofins, ICMS, ISS)',
          'Oportunidades de planejamento sucessório (holdings)',
          'Estruturações societárias mais eficientes',
          'Otimizações em folha de pagamento e pró-labore'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fase 4: Plano de Ação'
      },
      {
        type: 'list',
        content: [
          'Recomendações específicas priorizadas por impacto',
          'Cronograma de implementação',
          'Cálculo de ROI (retorno sobre investimento) de cada ação',
          'Riscos e mitigações',
          'Documentação legal necessária'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Casos Reais de Economia'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Caso 1: Indústria — R$ 15 MM receita/ano',
            description: 'Situação: Operava no Presumido há 8 anos. Estudo identificou: Lucro Real + aproveitamento de créditos de IPI e PIS/Cofins. Economia anual: R$ 420.000 (2,8% da receita).'
          },
          {
            title: 'Caso 2: Serviços de TI — R$ 8 MM receita/ano',
            description: 'Situação: Simples Nacional com faturamento crescente. Estudo identificou: Lucro Real + Lei do Bem (incentivo fiscal para P&D). Economia anual: R$ 380.000 (4,75% da receita).'
          },
          {
            title: 'Caso 3: Holding Familiar — R$ 25 MM patrimônio',
            description: 'Situação: Patrimônio em nome de pessoas físicas. Estudo identificou: Estruturação de holding + otimização de distribuição de rendas. Economia em 10 anos: R$ 1.900.000 (ITCMD + IR sobre aluguéis).'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quando Fazer um Estudo Tributário?'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Situações Ideais'
      },
      {
        type: 'list',
        content: [
          'Empresa crescendo: Faturamento aumentando ano a ano',
          'Mudança de regime: Saindo do Simples ou considerando Lucro Real',
          'Margens apertadas: Necessidade de reduzir custos, incluindo tributos',
          'Antes de investimentos: Expansão, compra de ativos, contratações',
          'Planejamento sucessório: Estruturação de holdings ou reorganizações',
          'Reforma Tributária: Preparação para CBS/IBS'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Periodicidade Recomendada'
      },
      {
        type: 'paragraph',
        content: 'Empresas devem fazer um estudo tributário completo a cada 2-3 anos, ou quando houver mudanças significativas no negócio (crescimento acima de 30%, nova linha de produtos, mudança de estrutura).'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Custo vs. Benefício'
      },
      {
        type: 'paragraph',
        content: 'Investimento Típico: Empresas até R$ 5 MM (R$ 5-10 mil - Estudo básico), Empresas R$ 5-30 MM (R$ 15-30 mil - Estudo completo), Empresas acima de R$ 30 MM (R$ 40-80 mil - Estudo aprofundado). ROI Típico: Um estudo tributário bem executado costuma identificar economia de 2% a 8% da receita anual. Exemplo: Empresa com R$ 10 milhões de receita investindo R$ 20 mil no estudo pode economizar R$ 200 mil a R$ 800 mil por ano. O retorno ocorre em menos de 2 meses.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusão'
      },
      {
        type: 'paragraph',
        content: 'Um estudo tributário profundo não é custo — é investimento com ROI mensurável. Em um ambiente tributário complexo como o brasileiro, decisões baseadas em dados concretos são a diferença entre pagar o mínimo necessário e pagar muito mais do que deveria. Não deixe dinheiro na mesa. Faça um estudo tributário e descubra exatamente quanto você pode economizar.'
      }
    ]
  }
};

export const blogContentEN: Record<string, BlogContent> = {
  "holding-familiar-quando-estruturar": {
    lead: "Creating a family holding company is one of the most strategic decisions for asset protection and succession planning. But what is the right time to structure it?",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'What is a Family Holding Company?'
      },
      {
        type: 'paragraph',
        content: 'A family holding company is a business created specifically to manage a family\'s assets. It can own other companies, properties, equity interests, financial investments, and other assets.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'When to Structure a Holding?'
      },
      {
        type: 'paragraph',
        content: 'Consider creating a family holding when:'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Significant Assets',
            description: 'When family assets exceed R$ 5 million, tax and protection benefits justify structuring a holding company.'
          },
          {
            title: 'Multiple Properties',
            description: 'Families with multiple properties benefit greatly from holdings, especially for rental management and future succession.'
          },
          {
            title: 'Succession Planning',
            description: 'If there are concerns about succession and division of assets among heirs, a holding avoids lengthy and costly probate processes.'
          },
          {
            title: 'Asset Protection',
            description: 'Entrepreneurs who want to protect their personal assets from business activity risks should consider a holding.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Types of Family Holding'
      },
      {
        type: 'paragraph',
        content: 'There are different models, each with a specific purpose:'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Pure Holding'
      },
      {
        type: 'paragraph',
        content: 'Created exclusively to hold interests in other companies or assets. Does not conduct operational activities.'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Asset Holding'
      },
      {
        type: 'paragraph',
        content: 'Focused on managing properties and other assets. Ideal for families with significant real estate portfolios.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Mixed Holding'
      },
      {
        type: 'paragraph',
        content: 'Combines management of equity interests with asset administration. Most complete and versatile model.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tax Advantages'
      },
      {
        type: 'paragraph',
        content: 'Main tax advantages include:'
      },
      {
        type: 'list',
        content: [
          'ITCMD Savings: Significant reduction in inheritance and gift tax',
          'Rental Efficiency: Optimized taxation for rental income',
          'Profit Distribution: Possibility of tax-exempt distribution',
          'Reorganization: Corporate restructurings with tax benefits'
        ]
      }
    ]
  },

  // ============================================================================
  // TAX REFORM CATEGORY - ENGLISH (7 posts)
  // ============================================================================
  
  // --------------------------------------------------------------------------
  // POST 1: Dividend Taxation
  // --------------------------------------------------------------------------
  "tributacao-de-dividendos-o-que-muda-em-2026-e-como-se-preparar": {
    lead: "Bill 1,087/2025 proposes taxing dividends starting in 2026. Companies that act in 2025 can still distribute accumulated profits tax-free. Understand what's changing and how to prepare.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'What Changes with PL 1,087/2025?'
      },
      {
        type: 'paragraph',
        content: 'The bill proposes Income Tax on dividends received by individuals starting January 1, 2026. Under current rules, dividends from Brazilian companies are exempt from IR for individuals—a benefit in place since 1996. With the change, dividends will be taxed according to the following progressive table:'
      },
      {
        type: 'list',
        content: [
          'Up to BRL 50,000/month: Exempt',
          'From BRL 50,000 to BRL 150,000/month: 10% on the excess above BRL 50,000',
          'Above BRL 150,000/month: BRL 10,000 + 15% on the excess above BRL 150,000'
        ]
      },
      {
        type: 'paragraph',
        content: 'Important: Dividends below BRL 50,000/month remain exempt. This protects small and medium shareholders.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Strategic Window of 2025'
      },
      {
        type: 'paragraph',
        content: 'Companies that distribute accumulated profits until December 31, 2025, will still enjoy full exemption. This creates a unique opportunity for companies with significant accumulated profits.'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Why Act Before 2026?',
            description: 'Accumulated profits distributed in 2025 are exempt. The same profits distributed in 2026 will be taxed up to 15%.',
            highlight: true
          },
          {
            title: 'Who Should Consider This?',
            description: 'Companies with accumulated profits and partners/shareholders who can receive these amounts strategically.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Practical Impacts by Business Size'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Small Businesses (up to BRL 600k/year)'
      },
      {
        type: 'paragraph',
        content: 'Limited impact. Dividends remain exempt up to BRL 50,000/month (BRL 600,000/year). Most small businesses distribute less than this, so taxation will not apply.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Medium Businesses (BRL 600k to BRL 10MM/year)'
      },
      {
        type: 'paragraph',
        content: 'Moderate to significant impact. Companies distributing BRL 100,000 to BRL 300,000/month will face tax of 10-15%. Strategic planning is essential: should they pay pro-labore or distribute dividends? Holding structures may become more attractive.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Large Businesses (above BRL 10MM/year)'
      },
      {
        type: 'paragraph',
        content: 'High impact. Distributions exceeding BRL 150,000/month will be taxed at 15% (maximum rate). The difference between distributing BRL 10 million in 2025 vs. 2026 can be up to BRL 1.5 million in tax.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Accumulated Profits: The 2025 Urgency'
      },
      {
        type: 'paragraph',
        content: 'Many companies have accumulated profits from previous years (distributed or not). If distributed by December 31, 2025, they remain exempt. If distributed from 2026 onward, they will be taxed.'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Real Example',
            description: 'Company with BRL 5 million in accumulated profits (2020-2024). Distributed in 2025: BRL 0 in tax. Distributed in 2026: Up to BRL 750,000 in IR (15%). Decision deadline: 12/31/2025.',
            highlight: true
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'How to Prepare?'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 1: Map Accumulated Profits'
      },
      {
        type: 'paragraph',
        content: 'Request from your accountant: Complete balance sheet as of 12/31/2024 with accumulated profits. List of profits by year. Legal and accounting availability for distribution.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 2: Evaluate Distribution Capacity'
      },
      {
        type: 'paragraph',
        content: 'Can your company distribute these profits in 2025? Do you need cash for operations? Are there debts or obligations? Is there liquidity to make these payments?'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 3: Consider Holding Structures'
      },
      {
        type: 'paragraph',
        content: 'For business groups, creating a holding company in 2025 and distributing accumulated profits to it is a viable strategy to preserve exemption, allowing partners to receive dividends gradually in future years.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 4: Document Everything'
      },
      {
        type: 'paragraph',
        content: 'All distribution decisions must be formally documented: Partners/shareholders meeting minutes, resolutions approving distributions, updated accounting records and balance sheets. This documentation is essential for defense against future tax audits.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Deadline: December 31, 2025',
        content: 'After this date, the benefit no longer applies. All distribution processes should begin by August/September 2025 to ensure completion within the deadline.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Alternatives to Consider'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Pro-Labore vs. Dividends'
      },
      {
        type: 'paragraph',
        content: 'Pro-labore is already taxed (IR + INSS). With dividend taxation, the gap narrows. A comparative study may reveal that balanced pro-labore + dividends is more tax-efficient than dividends alone.'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Profit Reinvestment'
      },
      {
        type: 'paragraph',
        content: 'Instead of distributing, consider reinvesting in: Business expansion (new branches, products), tangible and intangible assets, reserve funds.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Holdings and Corporate Restructuring'
      },
      {
        type: 'paragraph',
        content: 'Creating holdings or restructuring the corporate group may generate tax and succession advantages that offset or minimize dividend taxation.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Dividend taxation is a reality that will change the strategic decisions of Brazilian companies. Those who act in 2025 still have the opportunity to distribute accumulated profits tax-free. Those who wait will face a new reality with a higher tax burden. Time to act is now.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // POST 2: Basic Basket Cashback
  // --------------------------------------------------------------------------
  "cashback-cesta-basica-e-justica-fiscal-o-que-muda-na-tributacao": {
    lead: "Tax Reform includes cashback mechanisms for low-income families and the National Basic Basket. Understand how these measures work and their impacts on businesses.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'What is Tax Cashback?'
      },
      {
        type: 'paragraph',
        content: 'Tax cashback is the return of part of the taxes paid by low-income families registered in CadÚnico (Single Registry for Social Programs). The aim is to reduce the regressive impact of consumption taxation, ensuring essential goods are accessible to all Brazilians.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'How Does It Work?'
      },
      {
        type: 'paragraph',
        content: 'Low-income families (CadÚnico) will receive partial reimbursement of CBS and IBS paid on: Essential products from the National Basic Basket, cooking gas (LPG), electricity, water, sewage, gas distribution. Reimbursement: Automatic via CPF, no need for applications or bureaucracy. Percentage: Likely 100% of CBS/IBS on basic basket and 50-100% on utilities.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'National Basic Basket'
      },
      {
        type: 'paragraph',
        content: 'The National Basic Basket will have zero CBS and IBS rates. Basic products like rice, beans, milk, bread, meat (basic cuts), fruits, vegetables, cooking oil will be tax-free. Objective: Ensure food security and reduce inequality.'
      },
      {
        type: 'list',
        content: [
          'Rice, beans, cassava flour, corn flour',
          'Milk, cheese, butter',
          'Bread, pasta',
          'Meat (basic cuts), chicken, fish',
          'Eggs',
          'Fruits and vegetables',
          'Coffee, sugar, salt',
          'Cooking oil'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Impact on Retail and Wholesale'
      },
      {
        type: 'heading',
        level: 3,
        content: 'For Supermarkets and Retailers'
      },
      {
        type: 'list',
        content: [
          'More complex product classification: Need to identify which products qualify for zero rate or cashback',
          'New operational controls: Cashback transactions must be tracked by CPF, requiring integration with tax systems',
          'Training: Teams must understand new rules to inform customers and operate systems correctly'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'For Distributors and Suppliers'
      },
      {
        type: 'list',
        content: [
          'Accurate product classification: Zero-rate products must be clearly identified in invoices',
          'Credit management: Companies in the chain can credit CBS/IBS paid on inputs (non-cumulative), creating new controls',
          'System adjustments: ERPs must be updated to calculate taxes correctly'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Practical Challenges'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Product Classification',
            description: 'Determining which products belong to the National Basic Basket requires attention: Products must be classified by NCM (Mercosur Common Nomenclature). Errors in classification can result in incorrect tax calculations.',
            highlight: true
          },
          {
            title: '2. Technology and Systems',
            description: 'Retailers must integrate cashback systems with sales PDVs (point of sale). Identification by CPF at checkout is essential for cashback tracking.'
          },
          {
            title: '3. Education and Communication',
            description: 'Consumers need to understand how cashback works and which products are included. Clear communication prevents frustration and improves customer experience.'
          },
          {
            title: '4. Compliance',
            description: 'Companies must comply with accessory obligations, correctly reporting transactions and qualifying for cashback.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Opportunities for Businesses'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Competitive Differentiation'
      },
      {
        type: 'paragraph',
        content: 'Retailers that clearly communicate cashback benefits and facilitate the process for customers gain competitive advantage. Example: Marketing campaigns highlighting "Buy with tax cashback – register your CPF at checkout."'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Customer Loyalty'
      },
      {
        type: 'paragraph',
        content: 'Offering good cashback experience creates loyalty among low-income customers who will prefer establishments that simplify the benefit.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Social Impact and ESG'
      },
      {
        type: 'paragraph',
        content: 'Companies promoting tax justice and helping vulnerable families access cashback strengthen their ESG (Environmental, Social, and Governance) reputation.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'How to Prepare Your Business?'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Step 1: Identify Zero-Rate Products',
            description: 'Work with your accounting to classify all products in your inventory. Define which fit the National Basic Basket and which qualify for cashback.'
          },
          {
            title: 'Step 2: Update Systems',
            description: 'Ensure your ERP and PDV systems are prepared to: Identify products with zero rate, record CPF at checkout, calculate CBS/IBS correctly, and report cashback transactions.'
          },
          {
            title: 'Step 3: Train Your Team',
            description: 'Train cashiers, sales staff, and management on: How cashback works, how to request CPF at checkout, how to answer customer questions.'
          },
          {
            title: 'Step 4: Communicate with Customers',
            description: 'Create marketing campaigns to educate customers about the benefit and encourage CPF registration at checkout.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Tax cashback and the National Basic Basket are important measures for social justice within Tax Reform. For businesses, they represent an operational challenge, but also an opportunity to differentiate themselves and strengthen ties with customers. Those who prepare early will operate smoothly and reap competitive benefits.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // POST 3: CBS and IBS
  // --------------------------------------------------------------------------
  "cbs-e-ibs-na-reforma-tributaria-impactos-praticos-para-empresas-em-2025": {
    lead: "CBS and IBS replace five current taxes with a simplified, non-cumulative model. Understand the mechanics, practical impacts, and what to expect during the transition.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'What Are CBS and IBS?'
      },
      {
        type: 'paragraph',
        content: 'CBS (Contribution on Goods and Services) is the federal tax replacing PIS, Cofins, and IPI. IBS (Tax on Goods and Services) is the state/municipal tax replacing ICMS and ISS. Combined, they form the dual VAT (Value Added Tax) model.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Non-Cumulative Model'
      },
      {
        type: 'paragraph',
        content: 'Non-cumulative taxation means taxes are charged only on the value added at each stage. Example: Manufacturer buys raw materials for BRL 100 and pays BRL 27 in taxes. Sells finished product for BRL 200 and pays BRL 54 in taxes. Credits the BRL 27 paid on inputs. Net tax due: BRL 54 - BRL 27 = BRL 27.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Credit Control is Critical',
        content: 'Under the new system, rigorous credit management determines your effective tax burden. Companies that fail to properly track and claim credits will pay more than they should.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Transition Timeline'
      },
      {
        type: 'card',
        items: [
          {
            title: '2026: Testing Phase',
            description: 'CBS and IBS begin at 1% to test systems. Companies must issue dual invoices (old and new formats) and adapt processes.',
            highlight: true
          },
          {
            title: '2027-2032: Gradual Increase',
            description: 'Old taxes (PIS, Cofins, ICMS, ISS, IPI) are phased out gradually while CBS and IBS rates increase proportionally each year.'
          },
          {
            title: '2033: Full Implementation',
            description: 'Only CBS and IBS remain. Old taxes are fully replaced.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Standard Rate and Exceptions'
      },
      {
        type: 'paragraph',
        content: 'Standard combined rate (CBS + IBS): Estimated at 26.5% (subject to government adjustment). Reduced rates and exemptions apply to: National Basic Basket (zero rate), healthcare and education (50% reduction), public transport (40% reduction), selected culture and sports services (40-60% reduction).'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Destination Principle'
      },
      {
        type: 'paragraph',
        content: 'IBS is collected where the product or service is consumed (destination), not where it is produced (origin). For interstate commerce: Seller does not collect IBS (or collects and transfers to destination state). Buyer\'s state collects IBS. For export: CBS and IBS are zero-rated (exports are exempt). Importers pay full CBS and IBS on entry.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Practical Impacts by Sector'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Commerce (Retail and Wholesale)'
      },
      {
        type: 'list',
        content: [
          'Higher effective rate: Current PIS/Cofins (3.65%) + ICMS (varies 7-18%) vs. CBS + IBS (26.5%). For many, net burden increases',
          'Credit management: Need to properly track input credits to reduce effective rate',
          'Interstate sales: Must understand destination principle for IBS'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Services'
      },
      {
        type: 'list',
        content: [
          'Increase for most services: Current PIS/Cofins (3.65%) + ISS (2-5%) vs. CBS + IBS (26.5%)',
          'Sectors with reduced rates (healthcare, education): Benefit significantly',
          'Complex services (consulting, technology): Must review pricing to maintain margins'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Industry'
      },
      {
        type: 'list',
        content: [
          'Benefits from full non-cumulative model: Can credit all inputs including services',
          'Loss of IPI credits: IPI is currently creditable; with replacement by CBS, credit dynamics change',
          'Reorganization of production chains: Vertically integrated operations may need reassessment'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'What Companies Should Do Now?'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Map Your Current Tax Burden',
            description: 'Calculate exactly how much you pay today in PIS, Cofins, ICMS, ISS, and IPI. This is your baseline for comparison.'
          },
          {
            title: '2. Simulate CBS + IBS',
            description: 'Apply the 26.5% rate (or specific reduced rate if applicable) to your revenue. Simulate credits from inputs and calculate net effective burden.'
          },
          {
            title: '3. Assess Credit Management Capacity',
            description: 'Do you track all input invoices correctly? Can you identify what is creditable? Your systems must be ready for rigorous credit control.'
          },
          {
            title: '4. Review Pricing and Margins',
            description: 'If your tax burden increases, how will you adjust? Pass on to customers? Absorb and reduce margins? Optimize costs?'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'CBS and IBS represent the biggest change in Brazilian taxation in decades. For some businesses, the impact is positive (full credit, reduced rates). For others, burden increases significantly. What matters is acting early: map, simulate, prepare. Those who wait until 2026 will face crisis. Those who prepare now will adapt smoothly.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 4: Tax Reform 2025 Practical Guide
  // --------------------------------------------------------------------------
  "reforma-tributaria-2025-guia-pratico-para-empresarios": {
    lead: "EC 132/2023 establishes the new Brazilian tax system. Understand how the reform works, what changes for your company, and what to do now.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'What is the Tax Reform?'
      },
      {
        type: 'paragraph',
        content: 'Constitutional Amendment 132/2023, approved in December 2023, is the most comprehensive restructuring of Brazilian taxation in decades. Main change: Replacement of five current taxes with two new value-added taxes (VAT): CBS (federal) and IBS (state/municipal).'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Fundamental Principles'
      },
      {
        type: 'list',
        content: [
          'Non-cumulative: Tax only on value added at each stage',
          'Destination: Tax collected where consumed, not produced',
          'Transparency: Clear, unified rate visible to consumer',
          'Simplification: Two taxes instead of five',
          'Progressiveness: Social mechanisms (cashback, reduced rates)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Implementation Timeline'
      },
      {
        type: 'card',
        items: [
          {
            title: '2026: Testing',
            description: 'CBS and IBS begin at 1% (companies must issue dual invoices)'
          },
          {
            title: '2027-2032: Transition',
            description: 'Gradual increase of CBS/IBS, proportional decrease of old taxes'
          },
          {
            title: '2033: Full Implementation',
            description: 'Only CBS and IBS remain, old taxes extinct'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Impacts by Sector'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Commerce'
      },
      {
        type: 'list',
        content: [
          'Higher effective rate: PIS/Cofins (3.65%) + ICMS (7-18%) vs. CBS+IBS (26.5%)',
          'Credit management critical: Rigorous control needed',
          'Interstate operations: New destination principle'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Services'
      },
      {
        type: 'list',
        content: [
          'Significant increase: PIS/Cofins (3.65%) + ISS (2-5%) vs. CBS+IBS (26.5%)',
          'Healthcare/education: 50% reduction benefit',
          'Pricing review essential'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Industry'
      },
      {
        type: 'list',
        content: [
          'Benefit from full non-cumulative model',
          'Service input credits allowed',
          'IPI replacement dynamics change'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Strategic Decisions for Business Owners'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Tax Regime',
            description: 'Should I stay in Simples, migrate to Presumido or Real Profit?'
          },
          {
            title: '2. Credit Structure',
            description: 'Do I have controls to rigorously manage credits?'
          },
          {
            title: '3. Pricing',
            description: 'How will increased tax burden affect my margins?'
          },
          {
            title: '4. Corporate Structure',
            description: 'Should I reorganize group structure?'
          },
          {
            title: '5. Systems',
            description: 'Are my ERPs ready for dual invoicing and new calculations?'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'What to Do Now?'
      },
      {
        type: 'list',
        content: [
          'Calculate current effective tax burden',
          'Simulate CBS + IBS with and without credits',
          'Identify creditable inputs and expenses',
          'Review systems and integration capacity',
          'Plan pricing adjustments',
          'Consider tax study for regime optimization'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Tax Reform is inevitable and will change the game for all Brazilian companies. Those who prepare early will adapt smoothly and may even benefit. Those who wait will face crisis in 2026. Start planning now.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 5: OSP Checklist
  // --------------------------------------------------------------------------
  "checklist-osp-como-preparar-sua-empresa-para-reforma-tributaria": {
    lead: "A practical, prioritized checklist to prepare your company for Tax Reform step by step.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Why You Need a Checklist?'
      },
      {
        type: 'paragraph',
        content: 'Tax Reform is not a single task, but a complex, multi-year transformation. Without clear prioritization and timeline, many companies will scramble in 2026. This checklist organizes actions by urgency: what to do NOW (2025), what to plan for 2026, and what to monitor through 2027-2028.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Cost of Non-Preparation',
        content: 'Companies entering 2026 unprepared will face operational chaos, tax errors, lost credits, and potential competitive disadvantage. The preparation window is NOW.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Checklist: Urgent Actions (2025)'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Map Current Tax Burden',
            description: 'Calculate exactly how much you pay in PIS, Cofins, ICMS, ISS, IPI. This is your baseline.',
            highlight: true
          },
          {
            title: '2. Simulate CBS + IBS',
            description: 'Apply 26.5% rate (or reduced rate if applicable) and calculate net burden with credits.',
            highlight: true
          },
          {
            title: '3. Identify Creditable Inputs',
            description: 'List ALL expenses that will generate CBS/IBS credits (inputs, services, fixed assets).',
            highlight: true
          },
          {
            title: '4. Assess Systems Capacity',
            description: 'Can your ERP handle dual invoicing and new tax calculations? Update if needed.',
            highlight: true
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Checklist: Prepare for 2026'
      },
      {
        type: 'card',
        items: [
          {
            title: '5. Train Teams',
            description: 'Accounting, sales, purchasing teams must understand new rules and credit dynamics.'
          },
          {
            title: '6. Review Contracts',
            description: 'Supplier and customer contracts may need tax clause updates.'
          },
          {
            title: '7. Test Dual Invoicing',
            description: 'Practice issuing invoices in both old and new formats before it becomes mandatory.'
          },
          {
            title: '8. Establish Credit Controls',
            description: 'Create rigorous processes to track, validate and claim all eligible credits.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Checklist: Monitor Through 2027-2028'
      },
      {
        type: 'card',
        items: [
          {
            title: '9. Adjust Pricing Annually',
            description: 'As tax mix changes, repricing may be necessary to maintain margins.'
          },
          {
            title: '10. Optimize Corporate Structure',
            description: 'Evaluate if holdings, branches or operational restructuring improves tax efficiency.'
          },
          {
            title: '11. Track Regulation Updates',
            description: 'Government will issue complementary laws. Stay informed to adapt quickly.'
          },
          {
            title: '12. Review Tax Regime Annually',
            description: 'As CBS/IBS replace old taxes, Simples vs. Real Profit dynamics change. Reassess regularly.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Preparation is not optional. Companies that follow this checklist methodically will navigate the reform smoothly. Those that ignore it will face chaos, errors, lost money and competitive disadvantage. Start now.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 6: Selective Tax
  // --------------------------------------------------------------------------
  "imposto-seletivo-e-regimes-diferenciados-na-reforma-tributaria": {
    lead: "The Selective Tax targets harmful products. Differentiated regimes benefit strategic sectors. Understand how these mechanisms work.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'What is the Selective Tax?'
      },
      {
        type: 'paragraph',
        content: 'Also called "sin tax", the Selective Tax (IS) is an additional federal tax on products and services harmful to health or the environment. It aims to discourage consumption and generate revenue for healthcare and environmental policies.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Products Subject to IS'
      },
      {
        type: 'list',
        content: [
          'Alcoholic beverages',
          'Tobacco and cigarettes',
          'Sugary drinks',
          'Vehicles (depending on engine/emissions)',
          'Extraction of non-renewable resources (mining)',
          'Other products to be defined by complementary law'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'IS Characteristics'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Extrafiscal',
            description: 'Goal is behavior change, not just revenue generation.'
          },
          {
            title: 'Non-Cumulative',
            description: 'Follows same non-cumulative logic as CBS/IBS (with credits).'
          },
          {
            title: 'Variable Rates',
            description: 'Different rates by product category and harm level.'
          },
          {
            title: 'Progressive Implementation',
            description: 'Gradual rollout alongside general reform timeline.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Differentiated Regimes (Reduced Rates)'
      },
      {
        type: 'paragraph',
        content: 'To avoid excessive burden on essential sectors, the reform includes reduced CBS/IBS rates for:'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Healthcare',
            description: '60% reduction (effective rate ~10.6% instead of 26.5%): medicines, medical devices, health services.'
          },
          {
            title: 'Education',
            description: '60% reduction: educational services, courses, training.'
          },
          {
            title: 'Public Transport',
            description: '40-60% reduction: urban and interstate collective transport.'
          },
          {
            title: 'Culture and Sports',
            description: '40-60% reduction: artistic, cultural and sports activities.'
          },
          {
            title: 'National Basic Basket',
            description: 'Zero rate: Essential food products for low-income population.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Practical Impacts'
      },
      {
        type: 'heading',
        level: 3,
        content: 'For IS-Subject Companies'
      },
      {
        type: 'list',
        content: [
          'Higher total tax burden: CBS + IBS + IS',
          'Product reformulation incentive: Lower sugar, smaller engines, greener alternatives',
          'Competitive repositioning: Companies that adapt faster gain market share'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'For Reduced-Rate Beneficiaries'
      },
      {
        type: 'list',
        content: [
          'Significant competitive advantage: Lower costs than sectors at standard rate',
          'Product classification critical: Ensuring all eligible products/services are correctly classified',
          'Documentation: Proper records to justify reduced rate application'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Selective Tax and differentiated regimes add complexity but also strategic opportunities. Companies that understand and adapt to these mechanisms early will have clear competitive advantages.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 7: EC 132 Impacts for Growing Companies
  // --------------------------------------------------------------------------
  "reforma-tributaria-2025-impactos-praticos-da-ec-132-para-empresas-em-crescimento": {
    lead: "Growing companies face critical decisions with Tax Reform. Understand the impacts and how to turn the reform into competitive advantage.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Why Growing Companies Should Care'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Simples Nacional Ceiling',
            description: 'Companies approaching R$ 4.8MM may find Real Profit more advantageous post-reform',
            highlight: true
          },
          {
            title: 'Investment Decisions',
            description: 'Expansion, acquisitions, new products must consider new tax dynamics'
          },
          {
            title: 'Competitive Window',
            description: 'Prepared companies will gain market share from unprepared competitors'
          },
          {
            title: 'Pricing Power',
            description: 'Understanding true tax burden allows strategic pricing adjustments'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Area-by-Area Impact Analysis'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Finance/CFO'
      },
      {
        type: 'list',
        content: [
          'Cash flow: Tax timing changes, need updated projections',
          'Pricing: Margin review essential with new tax burden',
          'KPIs: Tax metrics must be redesigned',
          'Budgets: 2026-2027 budgets need reform scenarios'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Operations/Procurement'
      },
      {
        type: 'list',
        content: [
          'Supplier selection: Creditable vs. non-creditable inputs matter more',
          'Contracts: Renegotiate with tax adjustment clauses',
          'Inventory: Timing of purchases affects credit availability',
          'Fixed assets: Investment timing optimization for credit benefits'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Commercial/Sales'
      },
      {
        type: 'list',
        content: [
          'Pricing strategy: New tax-inclusive prices',
          'Interstate sales: Destination principle changes dynamics',
          'Product mix: Some products become more/less attractive post-reform',
          'Customer communication: Transparency about tax impacts'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technology/Systems'
      },
      {
        type: 'list',
        content: [
          'ERP upgrades: Dual invoicing, new tax calculations',
          'Integrations: Accounting, invoicing, payment systems',
          'Reporting: New dashboards for credit tracking',
          'Testing: Must test new processes before 2026'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Strategic Action Timeline'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Q4 2025: Foundation',
            description: 'Map current burden, simulate CBS/IBS, identify gaps, plan investments'
          },
          {
            title: 'Q1 2026: Implementation',
            description: 'Launch new processes, train teams, test systems'
          },
          {
            title: 'Q2-Q4 2026: Optimization',
            description: 'Monitor results, adjust pricing, optimize credits'
          },
          {
            title: '2027-2028: Continuous Improvement',
            description: 'Annual reassessment, regime reviews, structure optimization'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Tax Reform is both challenge and opportunity for growing companies. Those that treat it strategically—not just as compliance—will build sustainable competitive advantages. Start preparing now.'
      }
    ]
  },
  
  // ============================================================================
  // REAL PROFIT CATEGORY - ENGLISH (3 posts)
  // ============================================================================
  
  // --------------------------------------------------------------------------
  // POST 8: Real Profit Strategy
  // --------------------------------------------------------------------------
  "lucro-real-com-estrategia-o-que-toda-empresa-precisa-saber": {
    lead: "Real Profit is not just a tax regime, it's a strategic management tool. Companies that master it reduce taxes, improve margins, and gain competitive edge.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'What is Real Profit?'
      },
      {
        type: 'paragraph',
        content: 'Real Profit is the most complete Brazilian tax regime where IRPJ and CSLL are calculated on actual accounting profit (not presumed revenue). Key features: Mandatory for revenues above R$ 78MM/year or specific activities (financial, factoring, etc.). Optional for smaller companies when advantageous. Allows full deduction of expenses and operational costs. Enables PIS/Cofins credit management (non-cumulative). Requires rigorous accounting and documentation.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'When is Real Profit Advantageous?'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Low Margins',
            description: 'Companies with net margins below 8-12% usually save on Real Profit vs. Presumido'
          },
          {
            title: 'High Deductible Expenses',
            description: 'Significant payroll, rent, third-party services reduce taxable base'
          },
          {
            title: 'Tax Credits',
            description: 'Operations with creditable PIS/Cofins inputs generate significant savings'
          },
          {
            title: 'Operational Losses',
            description: 'Loss carryforward allowed, reducing future tax burden'
          },
          {
            title: 'Fiscal Incentives',
            description: 'Access to incentives unavailable in other regimes (Lei do Bem, PAT, ROTA 2030)'
          },
          {
            title: 'Tax Reform Preparation',
            description: 'Companies already in Real Profit have advantage adapting to CBS/IBS'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'How to Maximize Real Profit Benefits'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Rigorous Cost Control',
            description: 'Document and categorize ALL deductible expenses properly'
          },
          {
            title: '2. Credit Management',
            description: 'Track and recover every PIS/Cofins credit from inputs and expenses'
          },
          {
            title: '3. Tax Planning',
            description: 'Strategic timing of revenues and expenses to optimize quarterly results'
          },
          {
            title: '4. Loss Utilization',
            description: 'Carry forward operational losses to offset future profits (up to 30%/year)'
          },
          {
            title: '5. Incentive Access',
            description: 'Leverage available fiscal incentives (R&D, cultural, sports, etc.)'
          },
          {
            title: '6. Professional Accounting',
            description: 'Specialized accountants who understand Real Profit nuances are essential'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Common Mistakes to Avoid'
      },
      {
        type: 'list',
        content: [
          'Poor documentation: Lost deductions due to missing supporting documents',
          'Unclaimed credits: Leaving PIS/Cofins credits on the table',
          'Inadequate systems: ERPs not configured for Real Profit complexity',
          'Weak internal controls: Errors leading to tax risks',
          'Reactive approach: Not planning, just complying',
          'Wrong accounting partner: Accountants inexperienced with Real Profit'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Real Profit + Tax Reform'
      },
      {
        type: 'paragraph',
        content: 'Companies already operating in Real Profit have competitive advantage with Tax Reform: Experience with non-cumulative model and credit management. Accounting infrastructure ready for CBS/IBS complexity. Team trained in rigorous documentation. Systems prepared for detailed tracking. Real Profit companies will adapt faster to CBS/IBS than those transitioning from Simples or Presumido in 2026.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Real Profit is strategic, not just compliance. Companies that master it unlock tax savings, better margins, and competitive advantages. With Tax Reform approaching, Real Profit expertise becomes even more valuable. Is your company ready?'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 9: Accounting as Growth Driver
  // --------------------------------------------------------------------------
  "sua-contabilidade-esta-impulsionando-ou-travando-o-crescimento-do-seu-negocio": {
    lead: "Bureaucratic accounting blocks growth. Strategic accounting unlocks it. Take the test and discover where you stand.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'The Self-Assessment Test'
      },
      {
        type: 'paragraph',
        content: 'Answer honestly:'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Reaction Time',
            description: 'When you request financial information, how long does it take? A) Same day, B) 2-5 days, C) 1-2 weeks, D) Never arrives complete'
          },
          {
            title: '2. Strategic Input',
            description: 'Your accountant has proposed tax savings or structure improvements in the last year? A) Yes, proactively, B) Only when asked, C) No, never'
          },
          {
            title: '3. Tax Regime',
            description: 'When did you last review if your current regime is optimal? A) This year, B) 2-3 years ago, C) Never reviewed, D) Do not know current regime'
          },
          {
            title: '4. Communication',
            description: 'How do you communicate with your accountant? A) Regular meetings + responsive messages, B) Email when needed, C) Only at year-end, D) Almost never'
          },
          {
            title: '5. Results Understanding',
            description: 'Do you clearly understand your monthly financial statements? A) Yes, completely, B) Partially, C) No, too technical, D) Do not receive'
          },
          {
            title: '6. Growth Support',
            description: 'Has your accountant helped with strategic decisions (expansion, investments, financing)? A) Always, B) Sometimes, C) Never, D) Do not know they could help'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Test Results'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Mostly A: Strategic Accounting',
            description: 'Congratulations! Your accounting is a growth partner. Continue this relationship and leverage it for Tax Reform preparation.',
            highlight: true
          },
          {
            title: 'Mostly B: Adequate but Improvable',
            description: 'Your accounting works, but is not proactive. Consider demanding more: regular meetings, strategic proposals, faster response times.'
          },
          {
            title: 'Mostly C: Bureaucratic Accounting',
            description: 'Your accounting is holding you back. Time to evaluate alternatives. You are paying for compliance only when you need strategy.',
            highlight: true
          },
          {
            title: 'Mostly D: Critical Risk',
            description: 'Your accounting is dangerously weak. You face tax risks, missed opportunities, and growth constraints. Change immediately.',
            highlight: true
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Bureaucratic vs. Strategic: Side-by-Side'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Bureaucratic Accounting'
      },
      {
        type: 'list',
        content: [
          'Reactive: Only responds when asked',
          'Compliance-only: Delivers legal obligations, nothing more',
          'Slow: Takes days/weeks to provide information',
          'Generic: Same service for all clients',
          'Technical language: Reports incomprehensible to business owners',
          'No planning: Never proposes tax optimization or improvements',
          'Distant: Minimal contact, usually only email'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Strategic Accounting'
      },
      {
        type: 'list',
        content: [
          'Proactive: Identifies opportunities and proposes solutions',
          'Consultive: Acts as strategic advisor beyond compliance',
          'Fast: Real-time or same-day information delivery',
          'Personalized: Service adapted to your industry and stage',
          'Clear communication: Translates numbers into business insights',
          'Continuous planning: Regular tax and financial reviews',
          'Close partnership: Frequent meetings, responsive communication'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Cost of Mediocre Accounting'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Wrong Tax Regime',
            description: 'Paying 20-40% more tax than necessary annually'
          },
          {
            title: 'Unclaimed Credits',
            description: 'Losing R$ 50,000-500,000/year in PIS/Cofins credits'
          },
          {
            title: 'Missed Opportunities',
            description: 'Not accessing fiscal incentives, restructuring benefits, savings mechanisms'
          },
          {
            title: 'Slow Decisions',
            description: 'Missing market opportunities due to lack of financial information'
          },
          {
            title: 'Tax Risks',
            description: 'Errors leading to fines, penalties, audits'
          },
          {
            title: 'Growth Constraints',
            description: 'Limited access to financing, investors, strategic partnerships due to poor financial reporting'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Signs You Should Change Accounting'
      },
      {
        type: 'list',
        content: [
          'You are never proposed tax savings or improvements',
          'Financial information takes more than 3 days to arrive',
          'You do not understand your own reports',
          'Your accountant never asks about your growth plans',
          'You face the same compliance issues repeatedly',
          'Tax regime was never reviewed',
          'You feel your accountant does not care about your success',
          'Tax Reform was never discussed'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Accounting is not expense, it is investment. Strategic accounting drives growth, saves taxes, mitigates risks, and unlocks opportunities. Bureaucratic accounting does none of this. If you scored poorly on the test, it is time for change. Your business growth depends on it.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 10: Why Change to Real Profit Regime
  // --------------------------------------------------------------------------
  "contabilidade-lucro-real-por-que-mudar-de-regime": {
    lead: "Changing tax regime is complex but can generate significant savings. Understand when, why, and how to migrate safely to Real Profit.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'When to Consider Migration?'
      },
      {
        type: 'paragraph',
        content: 'Migration from Simples or Presumido to Real Profit makes sense when: Net margins are below 10-12%. Deductible expenses are high (payroll, rent, third-party services). Operations generate significant PIS/Cofins credits. Company seeks fiscal incentives unavailable in other regimes. Approaching Simples ceiling (R$ 4.8MM) and needs scalability. Preparing for Tax Reform with advantage.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Transition Timeline (12 Months)'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Months 1-3: Analysis',
            description: 'Comparative simulation, cost-benefit study, impact assessment'
          },
          {
            title: 'Months 4-6: Decision and Planning',
            description: 'Final decision, team alignment, detailed transition plan'
          },
          {
            title: 'Months 7-9: Preparation',
            description: 'System adjustments, process documentation, team training'
          },
          {
            title: 'Months 10-12: Final Adjustments',
            description: 'Final tests, partner communication, last configurations'
          },
          {
            title: 'January Year N+1: Migration',
            description: 'Official regime change, monitoring, continuous optimization'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Required Changes'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Accounting'
      },
      {
        type: 'list',
        content: [
          'Full accounting (balance sheet, income statement, cash flow)',
          'Rigorous documentation of all transactions',
          'Monthly reconciliations (bank, inventory, fixed assets)',
          'Detailed cost centers',
          'Specialized partner experienced in Real Profit'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Systems and Technology'
      },
      {
        type: 'list',
        content: [
          'ERP configured for Real Profit',
          'Integration between invoicing, financial, and accounting systems',
          'Credit tracking tools (PIS/Cofins)',
          'Management dashboards',
          'Digital document storage'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Internal Processes'
      },
      {
        type: 'list',
        content: [
          'Approval and payment controls',
          'Rigorous expense documentation',
          'Purchasing aligned with credit optimization',
          'Invoice validation procedures',
          'Tax calendar with defined responsibilities'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Common Errors in Migration'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Avoid These Mistakes',
        content: 'Migrating without prior simulation (discovering later it was not advantageous). Starting in December (insufficient preparation time). Not adjusting systems (operational chaos from day one). Keeping same accountant (if not specialized in Real Profit). Not training teams (internal errors and rework). Skipping documentation (losing deductions). Not planning cash flow (tax payment mismatches). Not monitoring results (failing to optimize continuously).'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Expected Results'
      },
      {
        type: 'paragraph',
        content: 'Well-executed migration to Real Profit typically delivers: Tax savings: 15-35% reduction in total tax burden. Improved margins: Better net profitability through credit recovery and deduction optimization. Stronger controls: More professional, auditable processes. Strategic data: Better financial information for decision-making. Reform readiness: Head start adapting to CBS/IBS. Scalability: Regime supports sustainable growth without tax constraints.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Migrating to Real Profit is a strategic decision that can generate significant savings, but demands structured preparation. Companies that organize properly reap benefits quickly. Those that migrate without planning face chaos and may even lose money. Do not underestimate complexity. Partner with specialists and follow a preparation timeline to ensure successful transition.'
      }
    ]
  },
  
  // ============================================================================
  // ASSET PLANNING CATEGORY - ENGLISH (3 posts)
  // ============================================================================
  
  // --------------------------------------------------------------------------
  // POST 11: Asset Holding 2025
  // --------------------------------------------------------------------------
  "holding-patrimonial-por-que-ainda-em-2025": {
    lead: "The window of opportunity to structure asset holdings with tax advantages may be closing. Understand why 2025 is urgent.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Why the Urgency?'
      },
      {
        type: 'paragraph',
        content: 'Three factors make 2025 a decisive year for those considering asset holding structuring:'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Dividend Taxation (PL 1,087/2025)',
            description: 'If approved, dividends will be taxed from 2026. Holdings structured in 2025 can distribute accumulated profits tax-free until 12/31/2025. After that, same profits face up to 15% IR.',
            highlight: true
          },
          {
            title: '2. ITCMD Increase in Multiple States',
            description: 'States like São Paulo discuss raising ITCMD (inheritance tax) from 4% to 8%. Holdings created before the increase preserve benefits of current rate in initial structuring.',
            highlight: true
          },
          {
            title: '3. Tax Reform and CBS/IBS',
            description: 'New taxes may impact real estate asset management. Holdings structured before 2026 have more time to adapt and plan impacts.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'What is an Asset Holding?'
      },
      {
        type: 'paragraph',
        content: 'Asset holding is a company created to manage family assets. Instead of properties, participations and investments being in individuals\' names, they stay in the holding\'s name (legal entity).'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Main Benefits'
      },
      {
        type: 'list',
        content: [
          'Succession planning: Avoids lengthy and costly probate',
          'Tax savings: ITCMD paid once at integration, not each succession',
          'Asset protection: Separation between personal and business assets',
          'Family governance: Clear management and succession rules',
          'Income optimization: Rentals taxed as legal entity (potentially lower)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Urgent Scenario: Dividends'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Window of Opportunity: Until 12/31/2025',
        content: 'Current situation (until 12/31/2025): Dividends distributed by Brazilian companies are exempt from IR for individuals. This applies even to accumulated profits from previous years. If PL 1,087/2025 is approved (from 01/01/2026): Dividends become taxable up to 15% IR. Accumulated profits distributed after 2026 also taxed. Strategy: Structure holding in 2025 and distribute accumulated profits before year-end preserves tax exemption.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Risk Scenario: ITCMD'
      },
      {
        type: 'paragraph',
        content: 'ITCMD (Inheritance and Gift Tax) applies to inheritances and donations. Several states consider raising rates: Current Rate (SP): 4% on value of assets and rights transmitted by inheritance or donation. Future Proposal (SP): up to 8% with progressive rate by asset value transmitted. Practical impact: R$ 10 million estate would pay R$ 400k ITCMD today. At 8% rate, would pay R$ 800k — double.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'How Does Holding Protect?'
      },
      {
        type: 'paragraph',
        content: 'In holding, ITCMD is paid once at initial asset integration. Afterwards, succession happens through company share transfer, with no new ITCMD each generation (if well structured).'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Who Should Consider Urgently?'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Families with Assets Above R$ 5 Million',
            description: 'Tax and succession benefits justify holding structuring and maintenance costs.'
          },
          {
            title: 'Multiple Property Owners',
            description: 'Rental management and future real estate succession become much more efficient and economical in holding.'
          },
          {
            title: 'Entrepreneurs with Accumulated Profits',
            description: 'If your operating company has significant accumulated profits, it may be strategic to create holding and distribute these values in 2025 (IR-exempt).'
          },
          {
            title: 'Families Planning Succession',
            description: 'If concerned about future probate or asset division among heirs, holding solves these problems preventively.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Steps to Structure in 2025'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Asset Diagnostic (1-2 weeks)',
            description: 'Complete survey of assets, rights, companies, debts and tax analysis.'
          },
          {
            title: '2. Structure Planning (2-3 weeks)',
            description: 'Definition of corporate model, governance, protection clauses and tax optimization.'
          },
          {
            title: '3. Holding Formation (2-4 weeks)',
            description: 'Contract drafting, commercial registry, tax registrations.'
          },
          {
            title: '4. Asset Integration (1-3 months)',
            description: 'Transfer of properties, corporate shares and other assets to holding.'
          },
          {
            title: '5. Strategic Distribution (until 12/31/2025)',
            description: 'If accumulated profits exist, distribute before end of 2025 to guarantee IR exemption.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: '2025 is a year of unique opportunity for asset holding structuring. Convergence of tax changes makes the window of tax advantages increasingly narrow. No way to predict if there will be another similar opportunity in coming years. If you have significant assets and are considering a holding, 2025 is the year to act.'
      }
    ]
  },
  
  // --------------------------------------------------------------------------
  // POST 12: Family Holding (already complete from before)
  // --------------------------------------------------------------------------
  
  // --------------------------------------------------------------------------
  // POST 13: Tax Study
  // --------------------------------------------------------------------------
  "estudo-tributario-tomar-decisoes": {
    lead: "Tax decisions based on guesswork cost millions to Brazilian companies every year. A deep tax study transforms uncertainty into concrete data, generating real savings and legal security.",
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'What is a Deep Tax Study?'
      },
      {
        type: 'paragraph',
        content: 'It is a detailed technical analysis of company tax situation, comparing scenarios, calculating impacts and identifying legal savings opportunities. Unlike point consulting, tax study: Analyzes complete history (3-5 years real data). Simulates multiple scenarios with future projections. Considers all variables (tax regime, corporate structure, operations). Identifies hidden risks and potential tax liabilities. Proposes specific action plan for your reality.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Why Many Companies Pay More Tax Than They Should?'
      },
      {
        type: 'card',
        items: [
          {
            title: '1. Wrong Tax Regime',
            description: 'Many companies operate in Simples or Presumido when Real Profit would be more advantageous (or vice versa). Real example: Service company with R$ 5 million annual revenue, operating in Presumido, discovered Real Profit would generate R$ 280k/year savings.'
          },
          {
            title: '2. Unclaimed Tax Credits',
            description: 'Real Profit companies frequently lose PIS/Cofins credits by not identifying all eligible expenses or lack of adequate control.'
          },
          {
            title: '3. Inefficient Corporate Structure',
            description: 'Operations centralized in single company when creating branches, holdings or SPEs would be more tax-efficient.'
          },
          {
            title: '4. Unknown Tax Benefits',
            description: 'Dozens of federal, state and municipal tax incentives go unnoticed due to lack of specialized analysis.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'What Does Deep Tax Study Include?'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Phase 1: Complete Diagnostic'
      },
      {
        type: 'list',
        content: [
          'Analysis of balance sheets and statements from last 3-5 years',
          'Review of articles of incorporation and corporate structure',
          'Survey of all operations and revenue streams',
          'Identification of deductible expenses not utilized',
          'Audit of ancillary obligations and tax compliance'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Phase 2: Simulations and Comparisons'
      },
      {
        type: 'list',
        content: [
          'Comparison between Simples, Presumido and Real Profit',
          'Calculation of potential savings in each regime',
          'Projections for next 3-5 years',
          'Tax Reform impact analysis (CBS/IBS)',
          'Growth scenario simulations'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Phase 3: Opportunity Identification'
      },
      {
        type: 'list',
        content: [
          'Applicable tax benefits (PAT, ROTA 2030, Lei do Bem, etc.)',
          'Unutilized tax credits (PIS/Cofins, ICMS, ISS)',
          'Succession planning opportunities (holdings)',
          'More efficient corporate structures',
          'Payroll and pro-labore optimizations'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Phase 4: Action Plan'
      },
      {
        type: 'list',
        content: [
          'Specific recommendations prioritized by impact',
          'Implementation timeline',
          'ROI calculation for each action',
          'Risks and mitigations',
          'Required legal documentation'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Real Savings Cases'
      },
      {
        type: 'card',
        items: [
          {
            title: 'Case 1: Manufacturing — R$ 15MM revenue/year',
            description: 'Situation: Operating in Presumido for 8 years. Study identified: Real Profit + IPI and PIS/Cofins credit utilization. Annual savings: R$ 420,000 (2.8% of revenue).'
          },
          {
            title: 'Case 2: IT Services — R$ 8MM revenue/year',
            description: 'Situation: Simples Nacional with growing revenue. Study identified: Real Profit + Lei do Bem (R&D tax incentive). Annual savings: R$ 380,000 (4.75% of revenue).'
          },
          {
            title: 'Case 3: Family Holding — R$ 25MM assets',
            description: 'Situation: Assets in individuals\' names. Study identified: Holding structuring + rental income optimization. 10-year savings: R$ 1,900,000 (ITCMD + IR on rentals).'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'When to Do Tax Study?'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Ideal Situations'
      },
      {
        type: 'list',
        content: [
          'Growing company: Revenue increasing year after year',
          'Regime change: Leaving Simples or considering Real Profit',
          'Tight margins: Need to reduce costs, including taxes',
          'Before investments: Expansion, asset purchases, hiring',
          'Succession planning: Holding structuring or reorganizations',
          'Tax Reform: CBS/IBS preparation'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Recommended Frequency'
      },
      {
        type: 'paragraph',
        content: 'Companies should do complete tax study every 2-3 years, or when significant business changes occur (growth above 30%, new product line, structure change).'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cost vs. Benefit'
      },
      {
        type: 'paragraph',
        content: 'Typical Investment: Companies up to R$ 5MM (R$ 5-10k - Basic study). Companies R$ 5-30MM (R$ 15-30k - Complete study). Companies above R$ 30MM (R$ 40-80k - Deep study). Typical ROI: Well-executed tax study usually identifies 2% to 8% savings on annual revenue. Example: Company with R$ 10 million revenue investing R$ 20k in study can save R$ 200k to R$ 800k per year. Return happens in less than 2 months.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Deep tax study is not cost — it is investment with measurable ROI. In complex tax environment like Brazil, data-driven decisions are difference between paying minimum necessary and paying much more than you should. Do not leave money on the table. Do tax study and discover exactly how much you can save.'
      }
    ]
  }
};
