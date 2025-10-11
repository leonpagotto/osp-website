#!/usr/bin/env node

import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join } from 'path';

const BLOG_IMAGES_DIR = 'client/public/images/blog';
const MAX_WIDTH = 1200;
const MAX_HEIGHT = 630;
const QUALITY = 85;

async function getFileSize(filePath) {
  const stats = await stat(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function optimizeImage(filePath) {
  const originalSize = await getFileSize(filePath);
  const tempPath = filePath + '.tmp';
  
  try {
    await sharp(filePath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .png({
        quality: QUALITY,
        compressionLevel: 9,
        effort: 10
      })
      .toFile(tempPath);
    
    const optimizedSize = await getFileSize(tempPath);
    
    if (optimizedSize < originalSize) {
      await rename(tempPath, filePath);
      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      return { success: true, originalSize, optimizedSize, savings };
    } else {
      await unlink(tempPath);
      return { success: false, message: 'Already optimized' };
    }
  } catch (error) {
    try { await unlink(tempPath); } catch {}
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🖼️  PNG Image Optimization');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  const files = await readdir(BLOG_IMAGES_DIR);
  const pngFiles = files.filter(f => f.endsWith('.png') && !f.includes('.tmp'));
  
  console.log(`📊 Found ${pngFiles.length} PNG files\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let count = 0;
  
  for (const file of pngFiles) {
    const filePath = join(BLOG_IMAGES_DIR, file);
    const result = await optimizeImage(filePath);
    
    if (result.success) {
      totalOriginal += result.originalSize;
      totalOptimized += result.optimizedSize;
      count++;
      console.log(`✅ ${file.slice(0, 35).padEnd(35)} ${formatBytes(result.originalSize).padStart(10)} → ${formatBytes(result.optimizedSize).padStart(10)} (-${result.savings}%)`);
    } else if (result.error) {
      console.log(`❌ ${file.slice(0, 35).padEnd(35)} Error: ${result.error}`);
    }
  }
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Optimized: ${count}/${pngFiles.length} files`);
  console.log(`📦 Original:  ${formatBytes(totalOriginal)}`);
  console.log(`📦 Final:     ${formatBytes(totalOptimized)}`);
  console.log(`💾 Saved:     ${formatBytes(totalOriginal - totalOptimized)} (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

main().catch(console.error);
