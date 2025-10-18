#!/usr/bin/env node

/**
 * SEO Inventory Extractor - OSP Contabilidade
 * 
 * This script crawls www.ospcontabilidade.com.br and extracts:
 * - All URLs
 * - Page titles
 * - Meta descriptions
 * - H1 tags
 * - Word count
 * - Internal/external links
 * 
 * Output: CSV file ready for analysis
 */

const https = require('https');
const { parse } = require('node-html-parser');
const fs = require('fs');

const BASE_URL = 'https://www.ospcontabilidade.com.br';
const visited = new Set();
const pages = [];
const MAX_PAGES = 100; // Limit for initial scan

/**
 * Fetch HTML content from URL
 */
async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
      
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Extract SEO data from HTML
 */
function extractSEOData(html, url) {
  const root = parse(html);
  
  // Title
  const title = root.querySelector('title')?.text || '';
  
  // Meta Description
  const metaDesc = root.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  
  // H1
  const h1 = root.querySelector('h1')?.text?.trim() || '';
  
  // H2s
  const h2s = root.querySelectorAll('h2').map(h => h.text?.trim()).filter(Boolean);
  
  // Word count (approximate)
  const bodyText = root.querySelector('body')?.text || '';
  const wordCount = bodyText.split(/\s+/).filter(Boolean).length;
  
  // Internal links
  const links = root.querySelectorAll('a');
  const internalLinks = [];
  const externalLinks = [];
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    if (href.startsWith(BASE_URL) || href.startsWith('/')) {
      const fullUrl = href.startsWith('/') ? BASE_URL + href : href;
      internalLinks.push(fullUrl);
    } else if (href.startsWith('http')) {
      externalLinks.push(href);
    }
  });
  
  return {
    url,
    title,
    metaDescription: metaDesc,
    h1,
    h2Count: h2s.length,
    wordCount,
    internalLinksCount: internalLinks.length,
    externalLinksCount: externalLinks.length,
    internalLinks: internalLinks.slice(0, 10) // First 10 only
  };
}

/**
 * Crawl website recursively
 */
async function crawl(url, depth = 0) {
  if (depth > 3 || visited.has(url) || pages.length >= MAX_PAGES) {
    return;
  }
  
  visited.add(url);
  console.log(`[${pages.length + 1}/${MAX_PAGES}] Crawling: ${url}`);
  
  try {
    const html = await fetchPage(url);
    const data = extractSEOData(html, url);
    pages.push(data);
    
    // Crawl internal links (depth-first, limited)
    if (depth < 2) {
      for (const link of data.internalLinks.slice(0, 5)) {
        await crawl(link, depth + 1);
        await sleep(500); // Be respectful, 500ms delay
      }
    }
    
  } catch (error) {
    console.error(`Error crawling ${url}:`, error.message);
  }
}

/**
 * Sleep helper
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Convert data to CSV
 */
function generateCSV(data) {
  const headers = [
    'URL',
    'Title',
    'Meta Description',
    'H1',
    'H2 Count',
    'Word Count',
    'Internal Links',
    'External Links',
    'Priority',
    'New URL (React)',
    'Status 301',
    'Notes'
  ];
  
  let csv = headers.join(',') + '\n';
  
  data.forEach(page => {
    const row = [
      `"${page.url}"`,
      `"${page.title.replace(/"/g, '""')}"`,
      `"${page.metaDescription.replace(/"/g, '""')}"`,
      `"${page.h1.replace(/"/g, '""')}"`,
      page.h2Count,
      page.wordCount,
      page.internalLinksCount,
      page.externalLinksCount,
      '', // Priority - to be filled manually
      '', // New URL - to be filled manually
      'Pendente',
      ''
    ];
    
    csv += row.join(',') + '\n';
  });
  
  return csv;
}

/**
 * Main execution
 */
async function main() {
  console.log('🕷️  OSP Contabilidade - SEO Inventory Extractor');
  console.log('================================================\n');
  console.log(`Starting crawl of: ${BASE_URL}`);
  console.log(`Max pages: ${MAX_PAGES}\n`);
  
  // Start crawling
  await crawl(BASE_URL);
  
  console.log(`\n✅ Crawl complete! Found ${pages.length} pages.\n`);
  
  // Generate CSV
  const csv = generateCSV(pages);
  const filename = `osp-seo-inventory-${new Date().toISOString().split('T')[0]}.csv`;
  
  fs.writeFileSync(filename, csv);
  
  console.log(`📊 CSV file generated: ${filename}`);
  console.log('\n📋 Summary:');
  console.log(`   Total pages: ${pages.length}`);
  console.log(`   Avg word count: ${Math.round(pages.reduce((sum, p) => sum + p.wordCount, 0) / pages.length)}`);
  console.log(`   Pages with H1: ${pages.filter(p => p.h1).length}`);
  console.log(`   Pages with Meta Desc: ${pages.filter(p => p.metaDescription).length}`);
  
  console.log('\n🎯 Next steps:');
  console.log('   1. Open the CSV file in Google Sheets');
  console.log('   2. Sort by word count (descending) to find main pages');
  console.log('   3. Add GA4 traffic data');
  console.log('   4. Classify priority (ALTA/MÉDIA/BAIXA)');
  console.log('   5. Define new React URLs');
  console.log('\n✨ Done!\n');
}

// Run
main().catch(console.error);
