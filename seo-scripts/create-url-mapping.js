const fs = require('fs');

// Read the raw URLs file
const urls = fs.readFileSync('osp-urls-raw.txt', 'utf-8').split('\n').filter(Boolean);

// Create CSV header
let csv = 'URL Antiga,URL Nova Sugerida,Tipo,Tráfego/mês (GA4),Conversões (GA4),Cliques (GSC),Impressões (GSC),Posição Média (GSC),Prioridade,Status 301,Notas\n';

// Classify and map each URL
urls.forEach(url => {
  let newUrl = '';
  let type = '';
  let priority = '';
  let notes = '';
  
  const path = url.replace('https://ospcontabilidade.com.br', '').replace(/\/$/, '');
  
  // Home
  if (path === '' || path === '/') {
    newUrl = '/';
    type = 'Home';
    priority = 'ALTA';
    notes = 'Homepage principal';
  }
  // Services/Solutions
  else if (path.includes('/servicos-contabeis/')) {
    type = 'Solução';
    priority = 'ALTA';
    
    if (path.includes('assessoria-tributaria-fiscal')) {
      newUrl = '/solucoes/tributa360';
      notes = 'TRIBUTA360 - Assessoria Tributária';
    } else if (path.includes('gestao-empresarial')) {
      newUrl = '/solucoes/gestao360';
      notes = 'GESTÃO360 - Gestão Empresarial';
    } else if (path.includes('contador-online')) {
      newUrl = '/solucoes/contabilidade-digital';
      notes = 'Contabilidade Digital';
    } else if (path.includes('consultoria-e-treinamento')) {
      newUrl = '/solucoes/consultoria';
      notes = 'Consultoria e Treinamento';
    } else if (path.includes('valuation')) {
      newUrl = '/solucoes/valuation';
      notes = 'Valuation';
    } else if (path.includes('assessoria-trabalhista')) {
      newUrl = '/solucoes/trabalhista';
      notes = 'Assessoria Trabalhista';
    } else {
      newUrl = path.replace('/servicos-contabeis/', '/solucoes/');
      notes = 'Serviço adicional';
    }
  }
  // Segments
  else if (path.includes('/segmentos/')) {
    type = 'Segmento';
    priority = 'ALTA';
    
    if (path.includes('construcao-civil')) {
      newUrl = '/segmentos/construcao-civil';
      notes = 'Construção Civil';
    } else if (path.includes('farmacia')) {
      newUrl = '/segmentos/farmacia';
      notes = 'Farmácia';
    } else if (path.includes('comercio')) {
      newUrl = '/segmentos/comercio';
      notes = 'Comércio';
    } else if (path.includes('ecommerce')) {
      newUrl = '/segmentos/ecommerce';
      notes = 'E-commerce';
    } else if (path.includes('supermercado')) {
      newUrl = '/segmentos/supermercado';
      notes = 'Supermercado';
    } else if (path.includes('terceiro-setor')) {
      newUrl = '/segmentos/terceiro-setor';
      notes = 'Terceiro Setor';
    } else if (path.includes('industria')) {
      newUrl = '/segmentos/industria';
      notes = 'Indústria';
    } else if (path.includes('clinicas')) {
      newUrl = '/segmentos/clinicas';
      notes = 'Clínicas';
    } else {
      // Clean up segment URL
      newUrl = path.replace('contabilidade-especializada-em-', '').replace('contabilidade-para-', '').replace('assessoria-contabil-para-', '');
      notes = newUrl.split('/').pop().replace(/-/g, ' ');
    }
  }
  // Blog posts
  else if (path.match(/^\/[a-z0-9-]+\/$/) && path !== '/trabalhe-conosco' && path !== '/politica-de-privacidade' && path !== '/indicacao') {
    type = 'Blog';
    priority = 'BAIXA';
    newUrl = '/blog' + path;
    notes = 'Post de blog - analisar tráfego GA4';
  }
  // Institutional
  else if (path.includes('trabalhe-conosco')) {
    type = 'Institucional';
    priority = 'MÉDIA';
    newUrl = '/trabalhe-conosco';
    notes = 'Carreiras';
  }
  else if (path.includes('politica-de-privacidade')) {
    type = 'Institucional';
    priority = 'MÉDIA';
    newUrl = '/privacidade';
    notes = 'Política de Privacidade';
  }
  else if (path.includes('indicacao')) {
    type = 'Institucional';
    priority = 'MÉDIA';
    newUrl = '/indicacao';
    notes = 'Programa de Indicação';
  }
  // Thank you pages
  else if (path.includes('obrigado') || path.includes('pagina-de-obrigado')) {
    type = 'Thank You';
    priority = 'BAIXA';
    newUrl = '/obrigado';
    notes = 'Página de agradecimento';
  }
  // Test pages
  else if (path.includes('teste')) {
    type = 'Teste';
    priority = 'BAIXA';
    newUrl = '/';
    notes = 'Deletar - página de teste';
  }
  // Default for blog posts
  else {
    type = 'Blog';
    priority = 'BAIXA';
    newUrl = '/blog' + path;
    notes = 'Post de blog - verificar tráfego';
  }
  
  // Escape commas in fields
  const escapeCsv = (str) => str.includes(',') ? '"' + str + '"' : str;
  
  csv += `${escapeCsv(url)},${escapeCsv(newUrl)},${type},,,,,,${priority},Pendente,${escapeCsv(notes)}\n`;
});

// Save to file
fs.writeFileSync('osp-url-mapping-complete.csv', csv);

// Count by type
const types = {};
urls.forEach(url => {
  const path = url.replace('https://ospcontabilidade.com.br', '');
  let type = 'Blog';
  if (path === '/' || path === '') type = 'Home';
  else if (path.includes('/servicos-contabeis/')) type = 'Solução';
  else if (path.includes('/segmentos/')) type = 'Segmento';
  else if (path.includes('trabalhe') || path.includes('politica') || path.includes('indicacao')) type = 'Institucional';
  else if (path.includes('obrigado') || path.includes('pagina-de-obrigado')) type = 'Thank You';
  else if (path.includes('teste')) type = 'Teste';
  
  types[type] = (types[type] || 0) + 1;
});

console.log('✅ CSV criado com sucesso!');
console.log('📊 Total de URLs:', urls.length);
console.log('\n📋 Distribuição por tipo:');
Object.entries(types).forEach(([type, count]) => {
  console.log(`   ${type}: ${count}`);
});
console.log('\n📁 Arquivo: osp-url-mapping-complete.csv');
console.log('\n🎯 Próximos passos:');
console.log('   1. Abra o CSV no Google Sheets');
console.log('   2. Adicione dados do GA4 (tráfego, conversões)');
console.log('   3. Adicione dados do Search Console (cliques, impressões)');
console.log('   4. Revise as URLs novas sugeridas');
console.log('   5. Ajuste as prioridades conforme necessário');
