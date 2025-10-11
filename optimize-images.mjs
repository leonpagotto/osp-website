#!/usr/bin/env node

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const BLOG_IMAGES_DIR = 'client/public/images/blog';
const MAX_WIDTH = 1200;
const MAX_HEIGHT = 630;
const QUALITY = 85; // Balance between quality and file size

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
  
  try {
    // Read the image and get its metadata
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Optimize the PNG
    await image
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .png({
        quality: QUALITY,
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true // Use palette-based PNG for smaller file size
      })
      .toFile(filePath + '.tmp');
    
    // Replace original with optimized
    await sharp(filePath + '.tmp').toFile(filePath + '.optimized');
    
    const optimizedSize = await getFileSize(filePath + '.optimized');
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    
    // Only replace if the optimized version is smaller
    if (optimizedSize < originalSize) {
      await sharp(filePath + '.optimized').toFile(filePath);
      
      return {
        success: true,
        originalSize,
        optimizedSize,
        savings: `${savings}%`
      };
    } else {
      return {
        success: false,
        message: 'Optimized version was larger, keeping original'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

async function optimizeAllImages() {
  console.log('🖼️  PNG Image Optimization Tool');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📁 Scanning: ${BLOG_IMAGES_DIR}`);
  console.log(`⚙️  Settings: ${MAX_WIDTH}x${MAX_HEIGHT}px, Quality: ${QUALITY}, Compression: Max`);
  console.log('');
  
  try {
    const files = await readdir(BLOG_IMAGES_DIR);
    const pngFiles = files.filter(file => file.endsWith('.png') && !file.includes('.tmp') && !file.includes('.optimized'));
    
    console.log(`📊 Found ${pngFiles.length} PNG files to optimize`);
    console.log('');
    
    let totalOriginal = 0;
    let totalOptimized = 0;
    let successCount = 0;
    
    for (const file of pngFiles) {
      const filePath = join(BLOG_IMAGES_DIR, file);
      process.stdout.write(`🔄 Optimizing: ${file.padEnd(40)} `);
      
      const result = await optimizeImage(filePath);
      
      if (result.success) {
        totalOriginal += result.originalSize;
        totalOptimized += result.optimizedSize;
        successCount++;
        console.log(`✅ ${formatBytes(result.originalSize)} → ${formatBytes(result.optimizedSize)} (saved ${result.savings})`);
      } else {
        console.log(`⚠️  ${result.message || result.error}`);
      }
    }
    
    console.log('');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 OPTIMIZATION SUMMARY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✅ Files optimized:    ${successCount}/${pngFiles.length}`);
    console.log(`📦 Total original:     ${formatBytes(totalOriginal)}`);
    console.log(`📦 Total optimized:    ${formatBytes(totalOptimized)}`);
    console.log(`💾 Total saved:        ${formatBytes(totalOriginal - totalOptimized)}`);
    console.log(`📉 Reduction:          ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
    console.log('');
    console.log('🎉 Optimization complete!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the optimization
optimizeAllImages();
