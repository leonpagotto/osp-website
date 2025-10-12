// Quick test to verify sitemap generation works
import { generateSitemap, generateRobotsTxt } from './server/sitemap.ts';

console.log('Testing sitemap generation...');
try {
  const sitemap = generateSitemap();
  console.log('✓ Sitemap generated successfully');
  console.log('  Length:', sitemap.length, 'characters');
  console.log('  First 200 chars:', sitemap.substring(0, 200));
  
  const robots = generateRobotsTxt();
  console.log('\n✓ Robots.txt generated successfully');
  console.log('  Content:', robots);
} catch (error) {
  console.error('✗ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
