import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    // Image optimization with 100% quality (lossless optimization only)
    ViteImageOptimizer({
      png: {
        quality: 100, // Lossless
      },
      jpeg: {
        quality: 100, // Maximum quality
      },
      jpg: {
        quality: 100, // Maximum quality
      },
      webp: {
        quality: 100, // Lossless WebP
        lossless: true,
      },
    }),
    // Bundle analyzer (only in build mode)
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('jsx-runtime')) {
              return 'react-vendor';
            }
            if (id.includes('wouter')) {
              return 'router';
            }
            if (id.includes('i18next') || id.includes('react-i18next') || id.includes('languagedetector')) {
              return 'i18n';
            }
            if (id.includes('@radix-ui')) {
              return 'ui';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('react-hook-form') || id.includes('hookform') || id.includes('zod')) {
              return 'forms';
            }
          }
          // Split blog data into separate chunk (only loaded on blog pages)
          if (id.includes('blogPostsBilingual') || id.includes('blogPosts.ts')) {
            return 'blog-data';
          }
          // Split blog helpers
          if (id.includes('blogHelpers')) {
            return 'blog-utils';
          }
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 5000,
    host: true,
    open: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
