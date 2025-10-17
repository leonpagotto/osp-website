import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateSitemap, generateRobotsTxt } from "./sitemap";

export async function registerRoutes(app: Express): Promise<Server> {
  // Environment detection
  const isDevelopment = process.env.NODE_ENV === 'development' || 
                       process.env.NODE_ENV !== 'production';
  
  // SEO Routes - Disabled in development to prevent indexing
  app.get('/sitemap.xml', (req, res) => {
    if (isDevelopment) {
      console.log('[SEO] Sitemap blocked in development environment');
      res.status(404).send('Sitemap disabled in development');
      return;
    }
    
    console.log('[SEO] Sitemap requested');
    res.header('Content-Type', 'application/xml');
    res.send(generateSitemap());
  });

  app.get('/robots.txt', (req, res) => {
    console.log('[SEO] Robots.txt requested');
    res.header('Content-Type', 'text/plain');
    
    if (isDevelopment) {
      // Block all crawlers in development
      const devRobots = `# Development Environment - Block All Crawlers
# This prevents accidental indexing of development/staging sites

User-agent: *
Disallow: /

# Explicitly block major search engines
User-agent: Googlebot
Disallow: /

User-agent: Bingbot
Disallow: /

User-agent: Slurp
Disallow: /

User-agent: DuckDuckBot
Disallow: /

User-agent: Baiduspider
Disallow: /

User-agent: YandexBot
Disallow: /
`;
      res.send(devRobots);
      return;
    }
    
    res.send(generateRobotsTxt());
  });

  // API routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
