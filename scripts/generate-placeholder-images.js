#!/usr/bin/env node

/**
 * Generate placeholder images with OSP branding for development
 * These will be replaced with actual images later
 */

import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// OSP Brand Colors
const COLORS = {
  primary: '#0066CC',
  navy: '#212B3D',
  gray: '#64748B',
  white: '#F3F1EE',
  dark: '#0F1419'
};

// Image specifications
const IMAGES = {
  backgrounds: [
    { name: 'osp-building.jpg', width: 1920, height: 1080, text: 'OSP Building' }
  ],
  blog: [
    { name: 'tributacao-dividendos.jpg', width: 1200, height: 630, text: 'Tributação\nDividendos' },
    { name: 'cashback-cesta-basica.jpg', width: 1200, height: 630, text: 'Cashback\nCesta Básica' },
    { name: 'cbs-ibs-reforma.jpg', width: 1200, height: 630, text: 'CBS e IBS' },
    { name: 'reforma-tributaria-2025.jpg', width: 1200, height: 630, text: 'Reforma\nTributária 2025' },
    { name: 'checklist-osp.jpg', width: 1200, height: 630, text: 'Checklist OSP' },
    { name: 'imposto-seletivo.jpg', width: 1200, height: 630, text: 'Imposto\nSeletivo' },
    { name: 'ec-132-impactos.jpg', width: 1200, height: 630, text: 'EC 132\nImpactos' },
    { name: 'lucro-real-estrategia.jpg', width: 1200, height: 630, text: 'Lucro Real\nEstratégia' },
    { name: 'contabilidade-crescimento.jpg', width: 1200, height: 630, text: 'Contabilidade\nCrescimento' },
    { name: 'holding-patrimonial-2025.jpg', width: 1200, height: 630, text: 'Holding\nPatrimonial 2025' },
    { name: 'holding-familiar.jpg', width: 1200, height: 630, text: 'Holding\nFamiliar' },
    { name: 'indicadores-ceo.jpg', width: 1200, height: 630, text: 'Indicadores\nFinanceiros CEO' },
    { name: 'estudo-tributario.jpg', width: 1200, height: 630, text: 'Estudo\nTributário' },
    { name: 'contabilidade-lucro-real.jpg', width: 1200, height: 630, text: 'Contabilidade\nLucro Real' }
  ]
};

function createPlaceholderImage(width, height, text, outputPath) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, COLORS.navy);
  gradient.addColorStop(0.5, COLORS.primary);
  gradient.addColorStop(1, COLORS.navy);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add subtle pattern
  ctx.globalAlpha = 0.1;
  for (let i = 0; i < 50; i++) {
    ctx.fillStyle = COLORS.white;
    ctx.fillRect(
      Math.random() * width,
      Math.random() * height,
      Math.random() * 100 + 50,
      2
    );
  }
  ctx.globalAlpha = 1;

  // Add OSP watermark
  ctx.fillStyle = COLORS.white;
  ctx.globalAlpha = 0.3;
  ctx.font = 'bold 60px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('OSP', width / 2, 80);
  ctx.globalAlpha = 1;

  // Main text
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 72px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  const lines = text.split('\n');
  const lineHeight = 90;
  const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;
  
  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, startY + index * lineHeight);
  });

  // Add "Placeholder" label
  ctx.font = '24px Arial';
  ctx.fillStyle = COLORS.gray;
  ctx.fillText('(Placeholder - Replace with actual image)', width / 2, height - 40);

  // Save as JPEG
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(outputPath, buffer);
  console.log(`✓ Created: ${path.basename(outputPath)}`);
}

// Generate images
console.log('🎨 Generating placeholder images with OSP branding...\n');

// Backgrounds
console.log('📸 Background images:');
const bgDir = path.join(__dirname, '../client/public/images/backgrounds');
if (!fs.existsSync(bgDir)) {
  fs.mkdirSync(bgDir, { recursive: true });
}
IMAGES.backgrounds.forEach(img => {
  createPlaceholderImage(img.width, img.height, img.text, path.join(bgDir, img.name));
});

// Blog images
console.log('\n📝 Blog images:');
const blogDir = path.join(__dirname, '../client/public/images/blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}
IMAGES.blog.forEach(img => {
  createPlaceholderImage(img.width, img.height, img.text, path.join(blogDir, img.name));
});

console.log('\n✅ All placeholder images generated!');
console.log('\nThese are temporary placeholders. Replace them with actual images when ready.');
console.log('Images are saved in:');
console.log('  - client/public/images/backgrounds/');
console.log('  - client/public/images/blog/');
