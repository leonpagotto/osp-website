import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateSitemap, generateRobotsTxt } from "./sitemap";

export async function registerRoutes(app: Express): Promise<Server> {
  // SEO Routes
  app.get('/sitemap.xml', (req, res) => {
    console.log('[SEO] Sitemap requested');
    res.header('Content-Type', 'application/xml');
    res.send(generateSitemap());
  });

  app.get('/robots.txt', (req, res) => {
    console.log('[SEO] Robots.txt requested');
    res.header('Content-Type', 'text/plain');
    res.send(generateRobotsTxt());
  });

  // API routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
