# Firebase Hosting Deployment Guide
## OSP Contabilidade Digital - Complete Setup & Deployment

**Date:** October 12, 2025  
**Hosting Platform:** Google Firebase Hosting  
**Application:** React + Vite SPA  
**Status:** Ready for Deployment 🚀

---

## 📊 Overview

This guide covers complete Firebase Hosting setup and deployment for your OSP website. Firebase provides:

- ✅ **Global CDN**: Fast content delivery worldwide
- ✅ **Automatic SSL**: Free HTTPS certificates
- ✅ **Custom Domain**: Support for ospcontabilidade.com.br
- ✅ **Zero Configuration**: No server management needed
- ✅ **Instant Rollback**: Easy version management
- ✅ **Preview URLs**: Test before going live

**Estimated Setup Time:** 15-20 minutes  
**Monthly Cost:** Free tier (10GB storage, 360MB/day bandwidth)

---

## 🎯 Prerequisites

Before starting, ensure you have:

- [ ] Google account (Gmail)
- [ ] Firebase CLI installed
- [ ] Node.js 18+ installed
- [ ] Project built and tested locally
- [ ] Domain access (for custom domain setup)

---

## 🚀 Part 1: Initial Setup (One-Time)

### Step 1: Install Firebase CLI

Open your VS Code terminal and run:

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Verify installation
firebase --version
# Should show: 13.x.x or higher
```

**If you get permission errors on macOS:**
```bash
sudo npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
# Login to your Google account
firebase login

# This will open a browser window
# Sign in with your Google account
# Grant Firebase CLI permissions
```

**Expected Output:**
```
✔ Success! Logged in as your-email@gmail.com
```

### Step 3: Create Firebase Project

**Option A: Via Firebase Console (Recommended)**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `osp-website-2026`
4. Accept terms and click "Continue"
5. Disable Google Analytics (or enable if you want it)
6. Click "Create project"
7. Wait for project creation (30-60 seconds)
8. Click "Continue" when ready

**Option B: Via CLI**

```bash
# Create a new project
firebase projects:create osp-website-2026

# Follow the prompts
```

### Step 4: Initialize Firebase in Your Project

Navigate to your project folder and initialize:

```bash
# Make sure you're in the project root
cd /Users/leo.de.souza1/OSPWebsite2026

# Initialize Firebase Hosting
firebase init hosting
```

**Initialization Prompts:**

```
? Please select an option: Use an existing project

? Select a default Firebase project: osp-website-2026

? What do you want to use as your public directory? dist/public

? Configure as a single-page app (rewrite all urls to /index.html)? Yes

? Set up automatic builds and deploys with GitHub? No

? File dist/public/index.html already exists. Overwrite? No
```

**What This Does:**
- Creates `firebase.json` (already created for you)
- Creates `.firebaserc` with your project ID
- Links your local project to Firebase

### Step 5: Update .firebaserc with Your Project ID

Edit `.firebaserc` file:

```json
{
  "projects": {
    "default": "osp-website-2026"
  }
}
```

**Replace `osp-website-2026` with YOUR actual Firebase project ID from the console.**

---

## 🏗️ Part 2: Build Configuration

### Verify Build Settings

Your project is already configured! Here's what's set up:

**vite.config.ts:**
```typescript
build: {
  outDir: path.resolve(import.meta.dirname, "dist/public"), // ✅ Correct
  emptyOutDir: true,
}
```

**firebase.json:**
```json
{
  "hosting": {
    "public": "dist/public", // ✅ Matches Vite output
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html" // ✅ SPA routing
      }
    ]
  }
}
```

### Build Your Project

```bash
# Clean build for production
rm -rf dist/
npm run build
```

**Expected Output:**
```
✓ built in 15s
✓ dist/public/index.html                 2.45 kB │ gzip: 1.21 kB
✓ dist/public/assets/index-abc123.css    45.2 kB │ gzip: 10.8 kB
✓ dist/public/assets/index-def456.js     350 kB  │ gzip: 120 kB
```

**Verify Build:**
```bash
# Check build output exists
ls -lh dist/public/

# Should see:
# - index.html
# - assets/ folder with CSS and JS files
# - images/ folder (if you have images)
```

---

## 🚢 Part 3: Deployment

### First Deployment

```bash
# Deploy to Firebase Hosting
firebase deploy --only hosting
```

**Deployment Process:**
```
=== Deploying to 'osp-website-2026'...

i  deploying hosting
i  hosting[osp-website-2026]: beginning deploy...
i  hosting[osp-website-2026]: found 150 files in dist/public
✔  hosting[osp-website-2026]: file upload complete
i  hosting[osp-website-2026]: finalizing version...
✔  hosting[osp-website-2026]: version finalized
i  hosting[osp-website-2026]: releasing new version...
✔  hosting[osp-website-2026]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/osp-website-2026/overview
Hosting URL: https://osp-website-2026.web.app
```

### Verify Deployment

1. **Open the Hosting URL** from the deployment output
2. **Test critical pages**:
   ```
   https://osp-website-2026.web.app/
   https://osp-website-2026.web.app/blog
   https://osp-website-2026.web.app/contato
   https://osp-website-2026.web.app/solucoes/osp360
   ```
3. **Check mobile responsiveness**
4. **Verify forms work**
5. **Test language switching**

---

## 🌐 Part 4: Custom Domain Setup

### Add Your Custom Domain

#### Step 1: Go to Firebase Console

1. Open [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `osp-website-2026`
3. Click "Hosting" in the left menu
4. Click "Add custom domain"

#### Step 2: Enter Your Domain

```
ospcontabilidade.com.br
```

Click "Continue"

#### Step 3: Verify Ownership

Firebase will provide a TXT record:

```
Type: TXT
Name: @
Value: firebase=osp-website-2026-verification-code
```

**Add this to your DNS provider:**
1. Log in to your domain registrar (Registro.br, GoDaddy, etc.)
2. Go to DNS settings
3. Add the TXT record provided by Firebase
4. Wait 5-10 minutes for DNS propagation
5. Click "Verify" in Firebase Console

#### Step 4: Add DNS Records

Once verified, Firebase will provide A records:

```
Type: A
Name: @
Value: 151.101.1.195

Type: A
Name: @
Value: 151.101.65.195
```

**For www subdomain:**
```
Type: A
Name: www
Value: 151.101.1.195

Type: A
Name: www
Value: 151.101.65.195
```

**Important:** Remove any existing A records pointing to old servers!

#### Step 5: SSL Certificate

Firebase automatically provisions SSL certificates:
- Usually takes 5-15 minutes
- Can take up to 24 hours
- You'll receive an email when ready
- HTTPS will be automatic

#### Step 6: Add www Redirect (Optional)

In Firebase Console:
1. Go to Hosting → Domains
2. Click "Add custom domain"
3. Enter: `www.ospcontabilidade.com.br`
4. Select "Redirect to an existing website"
5. Choose: `ospcontabilidade.com.br`

This redirects www to non-www (or vice versa).

---

## 🔧 Part 5: Advanced Configuration

### Caching Strategy

Your `firebase.json` is already optimized:

```json
{
  "headers": [
    {
      "source": "**/*.@(jpg|jpeg|gif|png|webp|svg|ico)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "**/*.@(js|css)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

**What This Does:**
- **Images/Assets**: Cached for 1 year (immutable)
- **JS/CSS**: Cached for 1 year (immutable)
- **HTML**: No cache (always fresh)
- **Perfect for Vite's hash-based file names**

### Add Sitemap and Robots.txt

Since your sitemap is generated by Express, you need to:

**Option 1: Generate Static Files (Recommended)**

Create a script to generate static sitemap:

```bash
# Add to package.json scripts:
"generate-sitemap": "node scripts/generate-sitemap-static.js"
```

**Option 2: Use Firebase Cloud Functions**

Deploy your Express backend as Cloud Functions (covered later).

**Temporary Solution:**

Create static files in `dist/public/`:

```bash
# After build, copy static files
npm run build
cp server/static/sitemap.xml dist/public/
cp server/static/robots.txt dist/public/
```

### Environment Variables

For production-specific configs:

```bash
# Create .env.production
VITE_API_URL=https://your-cloud-function-url
VITE_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

Rebuild with:
```bash
NODE_ENV=production npm run build
```

---

## 📜 Part 6: Deployment Scripts

### Update package.json

Add deployment scripts:

```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "preview": "vite preview",
    "deploy": "npm run build && firebase deploy --only hosting",
    "deploy:preview": "npm run build && firebase hosting:channel:deploy preview",
    "firebase:login": "firebase login",
    "firebase:logout": "firebase logout"
  }
}
```

### Deployment Commands

```bash
# Full deployment (build + deploy)
npm run deploy

# Preview deployment (test channel)
npm run deploy:preview

# Manual steps
npm run build
firebase deploy --only hosting

# Deploy specific version
firebase deploy --only hosting -m "Version 1.0.0"
```

---

## 🧪 Part 7: Testing & Preview

### Preview Channels

Test deployments before going live:

```bash
# Deploy to preview channel
firebase hosting:channel:deploy preview

# Deploy to staging channel
firebase hosting:channel:deploy staging

# Deploy with custom expiry (default: 7 days)
firebase hosting:channel:deploy preview --expires 30d
```

**Preview URLs:**
```
https://osp-website-2026--preview-abc123.web.app
https://osp-website-2026--staging-xyz789.web.app
```

Share these URLs with your team for testing!

### Local Preview

Test your build locally before deploying:

```bash
# Build the project
npm run build

# Serve with Firebase emulator
firebase serve --only hosting

# Or use Vite preview
npm run preview
```

Open: http://localhost:5000

### Testing Checklist

Before deploying to production:

- [ ] Build completes without errors
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms submit correctly
- [ ] Language switching works
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] No console errors
- [ ] Core Web Vitals good

---

## 🔄 Part 8: Version Management

### Rollback to Previous Version

If something goes wrong:

```bash
# List recent deployments
firebase hosting:releases:list

# Rollback to previous version
firebase hosting:rollback
```

### Deploy Specific Version

```bash
# With message
firebase deploy --only hosting -m "v1.0.1 - Bug fixes"

# View deployment history
firebase hosting:releases:list --site osp-website-2026
```

---

## 📊 Part 9: Monitoring & Analytics

### Firebase Hosting Metrics

View in Firebase Console:
1. Go to Hosting
2. Click "Usage" tab
3. See:
   - Total requests
   - Bandwidth used
   - Geographic distribution
   - Response times

### Google Analytics Integration

Add GA4 to your site:

```typescript
// client/src/main.tsx
import { useEffect } from 'react';
import { useLocation } from 'wouter';

function Analytics() {
  const [location] = useLocation();
  
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location,
      });
    }
  }, [location]);
  
  return null;
}

// Add to your App
<Analytics />
```

### Performance Monitoring

```bash
# Install Firebase Performance Monitoring
npm install firebase

# Add to your app
import { initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';

const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);
```

---

## 🚨 Part 10: Troubleshooting

### Common Issues & Solutions

#### Issue 1: Build Fails

```bash
# Clear cache and rebuild
rm -rf dist/ node_modules/.vite
npm run build
```

#### Issue 2: 404 on Routes

Check `firebase.json`:
```json
"rewrites": [
  {
    "source": "**",
    "destination": "/index.html"
  }
]
```

#### Issue 3: Images Not Loading

```bash
# Verify images are in build output
ls -R dist/public/images/

# Check image paths (must be absolute)
<img src="/images/blog/post.jpg" />
```

#### Issue 4: Deployment Hangs

```bash
# Cancel and retry
Ctrl+C
firebase deploy --only hosting --debug
```

#### Issue 5: Custom Domain Not Working

1. Verify DNS records in domain registrar
2. Wait 24-48 hours for full propagation
3. Check Firebase Console for SSL status
4. Use [whatsmydns.net](https://www.whatsmydns.net/) to verify

#### Issue 6: Cache Not Updating

```bash
# Clear Firebase cache
firebase hosting:channel:deploy temp
firebase hosting:channel:delete temp

# Or in browser
Ctrl+Shift+R (hard refresh)
```

---

## 💰 Part 11: Pricing & Limits

### Free Tier (Spark Plan)

**Includes:**
- 10 GB storage
- 360 MB/day bandwidth (10.8 GB/month)
- Custom domain
- SSL certificates
- Multiple sites
- Rollback versions

**Good For:**
- Small to medium websites
- ~10,000 page views/month
- Perfect for your OSP website initially

### Paid Tier (Blaze Plan - Pay as you go)

**When You Need:**
- More than 10 GB/month bandwidth
- More than 10 GB storage
- Cloud Functions (for backend)

**Pricing:**
- Storage: $0.026 per GB
- Bandwidth: $0.15 per GB
- Cloud Functions: Based on invocations

**Estimate for OSP:**
- 50,000 page views/month
- ~15 GB bandwidth
- Cost: ~$1-2/month

---

## 📋 Part 12: Deployment Checklist

### Pre-Deployment

- [ ] Firebase CLI installed
- [ ] Logged in to Firebase
- [ ] Project created in Firebase Console
- [ ] `.firebaserc` updated with project ID
- [ ] Build tested locally (`npm run build`)
- [ ] Preview tested (`npm run preview`)
- [ ] All environment variables set

### First Deployment

- [ ] Run `npm run build`
- [ ] Verify `dist/public/` has files
- [ ] Run `firebase deploy --only hosting`
- [ ] Test staging URL
- [ ] Verify all pages work
- [ ] Check mobile responsiveness
- [ ] Test forms and interactions

### Custom Domain

- [ ] Domain verified in Firebase
- [ ] A records added to DNS
- [ ] Wait for SSL certificate
- [ ] Test domain access
- [ ] Set up www redirect

### Post-Deployment

- [ ] Update Google Search Console with new URL
- [ ] Submit new sitemap
- [ ] Test Core Web Vitals
- [ ] Monitor Firebase Analytics
- [ ] Set up alerts for errors

---

## 🎯 Quick Reference

### Essential Commands

```bash
# Login
firebase login

# Initialize
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy --only hosting

# Deploy with message
firebase deploy --only hosting -m "Version 1.0.0"

# Preview
firebase hosting:channel:deploy preview

# Rollback
firebase hosting:rollback

# List releases
firebase hosting:releases:list

# Serve locally
firebase serve --only hosting
```

### File Structure

```
OSPWebsite2026/
├── firebase.json          # Firebase configuration
├── .firebaserc           # Firebase project ID
├── dist/
│   └── public/           # Build output (deployed)
│       ├── index.html
│       ├── assets/
│       └── images/
└── client/               # Source code
```

### Useful Links

- **Firebase Console**: https://console.firebase.google.com/
- **Project Dashboard**: https://console.firebase.google.com/project/osp-website-2026/overview
- **Hosting Dashboard**: https://console.firebase.google.com/project/osp-website-2026/hosting
- **Documentation**: https://firebase.google.com/docs/hosting

---

## 🎓 Best Practices

### 1. Always Test Before Deploy

```bash
# Build and preview locally
npm run build
npm run preview

# Or use Firebase emulator
firebase serve --only hosting
```

### 2. Use Preview Channels

```bash
# Deploy to preview first
npm run deploy:preview

# Test thoroughly
# Then deploy to production
npm run deploy
```

### 3. Version Your Deploys

```bash
firebase deploy --only hosting -m "v1.0.0 - Initial launch"
firebase deploy --only hosting -m "v1.0.1 - Bug fixes"
firebase deploy --only hosting -m "v1.1.0 - New blog posts"
```

### 4. Monitor Performance

- Check Firebase Console weekly
- Monitor bandwidth usage
- Review error rates
- Track response times

### 5. Keep Backups

```bash
# Export Firebase config
firebase projects:list > firebase-projects.txt

# Backup dist folder
tar -czf dist-backup-$(date +%Y%m%d).tar.gz dist/
```

---

## 🚀 Next Steps After First Deploy

1. **Set up custom domain** (ospcontabilidade.com.br)
2. **Configure Google Analytics** tracking
3. **Submit sitemap** to Google Search Console
4. **Set up monitoring** and alerts
5. **Consider Cloud Functions** for backend (if needed)
6. **Implement CI/CD** with GitHub Actions (optional)

---

## 📞 Support Resources

### Firebase Support

- **Documentation**: https://firebase.google.com/docs/hosting
- **Stack Overflow**: [firebase-hosting] tag
- **Community**: https://firebase.google.com/community
- **Status**: https://status.firebase.google.com/

### Project Documentation

- **Main README**: `/README.md`
- **Migration Plan**: `/docs/WORDPRESS_MIGRATION_PLAN.md`
- **SEO Guide**: `/docs/SEO_ENHANCEMENT_COMPLETE.md`
- **Performance Guide**: `/docs/PERFORMANCE_OPTIMIZATION_COMPLETE.md`

---

## ✅ Summary

You now have:
- ✅ Firebase Hosting configured
- ✅ Optimized caching strategy
- ✅ SPA routing set up
- ✅ Deployment scripts ready
- ✅ Preview channel capability
- ✅ Custom domain instructions
- ✅ Rollback strategy

**Ready to deploy!** 🎉

Run this command to deploy:
```bash
npm run deploy
```

Your website will be live at:
```
https://osp-website-2026.web.app
```

After custom domain setup:
```
https://ospcontabilidade.com.br
```

---

**Document Version:** 1.0  
**Last Updated:** October 12, 2025  
**Next Review:** After first deployment
