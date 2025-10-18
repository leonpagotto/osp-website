#!/usr/bin/env node

/**
 * Simple Sitemap & URL Extractor - OSP Contabilidade
 * Extracts URLs from sitemap.xml (faster and more reliable)
 */

const https = require('https');
const fs = require('fs');

const SITEMAP_URL = 'https://www.ospcontabilidade.com.br/sitemap.xml';
const BASE_URL = 'https://www.ospcontabilidade.com.br';

/**
 * Fetch content from URL
 */
function fetchURL(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

/**
 * Extract URLs from sitemap XML
 */
function extractURLsFromSitemap(xml) {
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  
  return urls;
}

/**
 * Classify URL by type
 */
function classifyURL(url) {
  const path = url.replace(BASE_URL, '');
  
  if (path.includes('/blog/')) return 'Blog';
  if (path.includes('/soluc') || path.includes('/servic')) return 'Solução';
  if (path.includes('/calculadora') || path.includes('/simul')) return 'Ferramenta';
  if (path.includes('/sobre') || path.includes('/contato')) return 'Institucional';
  if (path.includes('/industria') || path.includes('/tecnologia') || path.includes('/saude')) return 'Segmento';
  if (path === '/' || path === '') return 'Home';
  
  return 'Outros';
}

/**
 * Suggest new React URL
 */
function suggestNewURL(oldURL) {
  const path = oldURL.replace(BASE_URL, '');
  
  // Common mappings
  const mappings = {
    '/contabilidade-para-industrias': '/solucoes/industrias',
    '/contabilidade-lucro-real': '/solucoes/lucro-real',
    '/calculadora-lucro-real': '/ferramentas/calculadora-tributaria',
    '/sobre-a-osp': '/sobre',
    '/sobre-nos': '/sobre',
    '/contato': '/contato',
    '/servicos': '/solucoes',
  };
  
  // Check direct mappings
  for (const [old, newPath] of Object.entries(mappings)) {
    if (path.includes(old)) {
      return newPath;
    }
  }
  
  // Generic mappings
  if (path.includes('/blog/')) return path; // Keep blog structure
  if (path.includes('/calculadora')) return path.replace('/calculadora', '/ferramentas');
  
  return ''; // Manual mapping needed
}

/**
 * Generate CSV
 */
function generateCSV(urls) {
  const headers = [
    'URL Antiga (WordPress)',
    'Caminho',
    'Tipo de Página',
    'URL Nova (React)',
    'Tráfego Mensal',
    'Conversões',
    'Prioridade',
    'Status 301',
    'Notas'
  ];
  
  let csv = headers.join(',') + '\n';
  
  urls.forEach(url => {
    const path = url.replace(BASE_URL, '');
    const type = classifyURL(url);
    const suggestedURL = suggestNewURL(url);
    
    const row = [
      `"${url}"`,
      `"${path}"`,
      type,
      `"${suggestedURL}"`,
      '', // Traffic - add from GA4
      '', // Conversions - add from GA4
      type === 'Home' || type === 'Solução' || type === 'Ferramenta' ? 'ALTA' : type === 'Institucional' ? 'MÉDIA' : 'BAIXA',
      'Pendente',
      suggestedURL ? 'Mapeamento automático' : 'Precisa mapeamento manual'
    ];
    
    csv += row.join(',') + '\n';
  });
  
  return csv;
}

/**
 * Main
 */
async function main() {
  console.log('🗺️  OSP Contabilidade - Sitemap URL Extractor');
  console.log('==============================================\n');
  
  try {
    console.log(`Fetching sitemap from: ${SITEMAP_URL}`);
    const sitemap = await fetchURL(SITEMAP_URL);
    
    console.log('Extracting URLs...');
    const urls = extractURLsFromSitemap(sitemap);
    
    console.log(`\n✅ Found ${urls.length} URLs\n`);
    
    // Generate CSV
    const csv = generateCSV(urls);
    const filename = `osp-url-inventory-${new Date().toISOString().split('T')[0]}.csv`;
    
    fs.writeFileSync(filename, csv, 'utf8');
    
    console.log(`📊 CSV generated: ${filename}\n`);
    
    // Summary
    const types = urls.reduce((acc, url) => {
      const type = classifyURL(url);
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});
    
    console.log('📋 Summary by type:');
    Object.entries(types).forEach(([type, count]) => {
      console.log(`   ${type}: ${count} páginas`);
    });
    
    console.log('\n🎯 Next steps:');
    console.log('   1. Open CSV in Google Sheets');
    console.log('   2. Add GA4 traffic data (visitas/mês)');
    console.log('   3. Review and adjust "URL Nova" suggestions');
    console.log('   4. Sort by Prioridade and focus on ALTA first');
    console.log('   5. Create 301 redirects for all URLs');
    
    console.log('\n✨ Done!\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.message.includes('ENOTFOUND') || error.message.includes('404')) {
      console.log('\n💡 Tip: The sitemap might not be at the standard location.');
      console.log('   Try these alternatives:');
      console.log('   - https://www.ospcontabilidade.com.br/sitemap_index.xml');
      console.log('   - https://www.ospcontabilidade.com.br/wp-sitemap.xml');
      console.log('   - Or check in WordPress: SEO plugin settings');
    }
  }
}

main();
