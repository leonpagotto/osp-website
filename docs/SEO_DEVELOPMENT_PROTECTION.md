# SEO Development Protection Setup

## Overview
This document explains how the OSP website prevents search engine indexing during development to avoid duplicate content penalties and protect the production site.

---

## 🚨 Problem Statement

**Issue:** Development/staging sites being indexed by Google can cause:
- Duplicate content penalties (same content as production site)
- Confusion in search results (wrong URLs showing up)
- Loss of SEO value from the main domain
- Potential ranking drops for the production site

**Solution:** Multi-layered protection to block all search engines from development environments.

---

## 🛡️ Protection Layers

### Layer 1: Meta Tags (Client-Side)

**A. Static HTML Meta Tags (Immediate Protection)**
**File:** `client/index.html`

**Protection:**
- Hard-coded in HTML template
- Works instantly, no JavaScript required
- Google sees these immediately on first crawl
```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
<meta name="googlebot" content="noindex, nofollow" />
<meta name="bingbot" content="noindex, nofollow" />
```

**B. Dynamic Meta Tags (React/JavaScript)**
**File:** `client/src/components/SEO/SEOHead.tsx`

**Detection Logic:**
```typescript
const isDevelopment = import.meta.env.DEV || 
                     siteUrl.includes('localhost') || 
                     siteUrl.includes('127.0.0.1') ||
                     siteUrl.includes('web.app') || // Firebase preview
                     siteUrl.includes('firebaseapp.com') || // Firebase hosting
                     siteUrl.includes('preview') ||
                     siteUrl.includes('staging') ||
                     siteUrl.includes('dev-');
```

**Protection:**
- Dynamic meta tags via react-helmet-async
- Canonical URLs disabled in development
- hreflang tags disabled in development

### Layer 2: robots.txt (Server-Side)
**File:** `client/public/robots.txt`

**Development Configuration:**
```
User-agent: *
Disallow: /
```

**Production Configuration:**
**File:** `firebase-robots-production.txt`
```
User-agent: *
Allow: /

Sitemap: https://ospcontabilidade.com.br/sitemap.xml
```

### Layer 3: Dynamic robots.txt Route
**File:** `server/routes.ts`

**Behavior:**
- **Development:** Returns strict "Disallow: /" for all bots
- **Production:** Returns production robots.txt with sitemap

### Layer 4: Sitemap Blocking
**File:** `server/routes.ts`

**Behavior:**
- **Development:** Returns 404 for `/sitemap.xml`
- **Production:** Generates and serves complete sitemap

---

## 🔍 Environment Detection

### Automatic Detection Criteria
Development environment is detected when ANY of the following is true:

1. `process.env.NODE_ENV === 'development'`
2. `import.meta.env.DEV === true`
3. URL contains:
   - `localhost`
   - `127.0.0.1`
   - `web.app` (Firebase preview URLs)
   - `firebaseapp.com` (Firebase hosting URLs)
   - `preview`
   - `staging`
   - `dev-`

### Production Criteria
Production is assumed when:
- `process.env.NODE_ENV === 'production'`
- Domain is `ospcontabilidade.com.br`
- None of the development criteria are met

---

## 📝 Testing

### Verify Development Protection

1. **Start Local Dev Server:**
   ```bash
   npm run dev
   ```

2. **Check robots.txt:**
   ```bash
   curl http://localhost:8080/robots.txt
   ```
   **Expected Output:**
   ```
   User-agent: *
   Disallow: /
   ```

3. **Check Sitemap:**
   ```bash
   curl http://localhost:8080/sitemap.xml
   ```
   **Expected Output:** 404 or "Sitemap disabled in development"

4. **Check Meta Tags:**
   - Open browser DevTools
   - Go to http://localhost:8080
   - View page source or inspect `<head>`
   - Verify:
     ```html
     <meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
     <meta name="googlebot" content="noindex, nofollow">
     <meta name="bingbot" content="noindex, nofollow">
     ```

### Verify Firebase Preview Protection

1. **Deploy to Firebase Preview:**
   ```bash
   firebase hosting:channel:deploy preview
   ```

2. **Check Preview URL:**
   - URL will be like: `osp-website-2026--preview-abc123.web.app`
   - Check robots.txt: Should block all crawlers
   - Check meta tags: Should have noindex

### Verify Production Configuration

1. **Deploy to Production:**
   ```bash
   firebase deploy --only hosting
   ```

2. **Check Production URL:**
   ```bash
   curl https://ospcontabilidade.com.br/robots.txt
   ```
   **Expected:** Production robots.txt with sitemap

3. **Check Sitemap:**
   ```bash
   curl https://ospcontabilidade.com.br/sitemap.xml
   ```
   **Expected:** Full XML sitemap

4. **Check Meta Tags:**
   - Should have: `<meta name="robots" content="index, follow">`
   - Should have: `<link rel="canonical" href="...">`
   - Should have: hreflang tags

---

## 🚀 Deployment Checklist

### Before Deploying to Production

- [ ] Verify `NODE_ENV=production` in production environment
- [ ] Test robots.txt on production URL
- [ ] Test sitemap.xml on production URL
- [ ] Verify meta tags show "index, follow"
- [ ] Check canonical URLs are present
- [ ] Verify hreflang tags for bilingual content
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### Firebase Hosting Configuration

**File:** `firebase.json`

Ensure headers are configured correctly:
```json
{
  "hosting": {
    "headers": [
      {
        "source": "/robots.txt",
        "headers": [
          {
            "key": "Content-Type",
            "value": "text/plain; charset=utf-8"
          },
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600"
          }
        ]
      },
      {
        "source": "/sitemap.xml",
        "headers": [
          {
            "key": "Content-Type",
            "value": "application/xml; charset=utf-8"
          },
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600"
          }
        ]
      }
    ]
  }
}
```

---

## 🐛 Troubleshooting

### Problem: Development site showing in Google
**Solutions:**
1. Check if meta tags are present: `view-source:http://localhost:8080`
2. Use Google Search Console "Remove URLs" tool
3. Verify robots.txt is blocking crawlers
4. Check for any sitemaps pointing to dev URLs

### Problem: Production site not indexed
**Solutions:**
1. Verify `NODE_ENV=production` is set
2. Check robots.txt allows crawling: `curl https://ospcontabilidade.com.br/robots.txt`
3. Submit sitemap in Google Search Console
4. Check for noindex meta tags in production (there shouldn't be any)

### Problem: Sitemap returns 404 in production
**Solutions:**
1. Verify `NODE_ENV=production` environment variable
2. Check server logs for errors
3. Test locally with `NODE_ENV=production npm start`
4. Redeploy with proper environment variables

---

## 📚 References

- [Google: Block Search Indexing](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [Google: robots.txt Specifications](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Google: Meta robots tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)

---

## 🔐 Security Notes

**IMPORTANT:** Never deploy with development protection enabled to production!

**Production Checklist:**
- ✅ robots.txt allows crawling
- ✅ Sitemap is accessible
- ✅ Meta robots = "index, follow"
- ✅ Canonical URLs present
- ✅ NODE_ENV=production

**Development Checklist:**
- ✅ robots.txt blocks all crawlers
- ✅ Sitemap returns 404
- ✅ Meta robots = "noindex, nofollow"
- ✅ No canonical URLs
- ✅ NODE_ENV=development
