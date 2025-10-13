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
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          'router': ['wouter'],
          'i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          // Only include Radix UI components that are actually used
          'ui': ['@radix-ui/react-label', '@radix-ui/react-slot', '@radix-ui/react-tabs', '@radix-ui/react-toast', '@radix-ui/react-dropdown-menu'],
          'icons': ['lucide-react'],
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Aggressive minification for Phase 2 optimization
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'], // Remove more console methods
        passes: 2, // Multiple compression passes for better results
        dead_code: true, // Remove unreachable code
        conditionals: true, // Optimize if/else conditions
        booleans: true, // Optimize boolean expressions
        unused: true, // Remove unused variables
        toplevel: true, // Drop unreferenced top-level functions
        if_return: true, // Optimize if/return statements
      },
      mangle: {
        safari10: true, // Better Safari 10+ compatibility
        toplevel: true, // Mangle top-level names
      },
      format: {
        comments: false, // Remove all comments
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
