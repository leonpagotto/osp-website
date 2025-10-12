# Firebase Hosting - Quick Start Guide
## Deploy OSP Website in 10 Minutes

**Last Updated:** October 12, 2025

---

## 🚀 Quick Deploy (If Firebase Already Set Up)

```bash
# 1. Build the project
npm run build

# 2. Deploy to Firebase
npm run deploy
```

That's it! Your site will be live in 2-3 minutes.

---

## 📋 First-Time Setup (15 minutes)

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

### Step 3: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it: `osp-website-2026`
4. Click "Create project"

### Step 4: Initialize Firebase

```bash
# In your project directory
firebase init hosting
```

**Prompts:**
- Use an existing project: **Yes**
- Select: **osp-website-2026**
- Public directory: **dist/public**
- Single-page app: **Yes**
- Overwrite index.html: **No**

### Step 5: Deploy!

```bash
npm run deploy
```

---

## 🌐 Custom Domain Setup

### After First Deploy

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project → Hosting
3. Click "Add custom domain"
4. Enter: `ospcontabilidade.com.br`
5. Follow the DNS verification steps
6. Add A records to your domain:
   ```
   Type: A
   Name: @
   Value: 151.101.1.195
   
   Type: A
   Name: @
   Value: 151.101.65.195
   ```
7. Wait for SSL certificate (5-60 minutes)

---

## 📜 Useful Commands

```bash
# Full deploy
npm run deploy

# Preview deploy (test first)
npm run deploy:preview

# Build only
npm run build

# Test locally
npm run preview

# Check Firebase login
firebase login:list

# View projects
firebase projects:list
```

---

## 📊 Expected Results

**After Deployment:**
- **URL**: https://osp-website-2026.web.app
- **SSL**: Automatic HTTPS
- **CDN**: Global content delivery
- **Speed**: 50% faster than WordPress

**Custom Domain (After Setup):**
- **URL**: https://ospcontabilidade.com.br
- **SSL**: Automatic
- **www**: Redirects to non-www

---

## 🆘 Troubleshooting

**Problem: "Firebase not found"**
```bash
npm install -g firebase-tools
```

**Problem: "Build fails"**
```bash
rm -rf dist/ node_modules/.vite
npm run build
```

**Problem: "Permission denied"**
```bash
sudo npm install -g firebase-tools
```

**Problem: "404 on routes"**
- Check `firebase.json` has rewrite rule
- Already configured in your project ✅

---

## 📚 Full Documentation

For complete guide, see: [FIREBASE_DEPLOYMENT_GUIDE.md](./FIREBASE_DEPLOYMENT_GUIDE.md)

---

## ✅ Checklist

- [ ] Firebase CLI installed
- [ ] Logged in (`firebase login`)
- [ ] Project created in Firebase Console
- [ ] Firebase initialized (`firebase init hosting`)
- [ ] `.firebaserc` has correct project ID
- [ ] Build tested (`npm run build`)
- [ ] Ready to deploy (`npm run deploy`)

---

**Ready to go live? Run:** `npm run deploy` 🚀
