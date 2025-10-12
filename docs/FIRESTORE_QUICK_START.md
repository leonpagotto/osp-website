# 🚀 Firestore Forms - Quick Start

## ⚡ 5-Minute Setup

### 1. Enable Firestore in Firebase Console
```
1. Go to console.firebase.google.com
2. Select: osp-website-2026
3. Click: Firestore Database → Create Database
4. Location: southamerica-east1 (São Paulo)
5. Mode: Production mode
```

### 2. Get Firebase Config
```
1. Firebase Console → Project Settings (⚙️)
2. Scroll to "Your apps" → Web app
3. Copy the firebaseConfig values
```

### 3. Create .env File
```bash
cp .env.example .env
```

Edit `.env` with your Firebase credentials:
```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=osp-website-2026.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=osp-website-2026
VITE_FIREBASE_STORAGE_BUCKET=osp-website-2026.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 4. Deploy Security Rules
```bash
firebase deploy --only firestore:rules
```

### 5. Test Forms
```bash
npm run dev
```

Visit:
- Contact Form: http://localhost:5000/contato
- Newsletter: Any page footer

### 6. View Submissions
```
Firebase Console → Firestore Database

Collections:
- contact_submissions
- newsletter_subscriptions
```

---

## 📊 What's Saved

### Contact Form
```json
{
  "name": "João Silva",
  "company": "Tech Company",
  "role": "CEO",
  "email": "joao@example.com",
  "phone": "(19) 99999-9999",
  "message": "Need help with tax planning",
  "createdAt": "2025-01-15T14:30:00Z",
  "status": "new"
}
```

### Newsletter
```json
{
  "email": "cliente@example.com",
  "createdAt": "2025-01-15T14:30:00Z",
  "status": "active"
}
```

---

## 🔐 Security

✅ Anyone can submit forms (create)  
❌ Public cannot read others' submissions  
✅ You manage data via Firebase Console

---

## 🐛 Troubleshooting

**Forms not working?**
1. Check `.env` exists in project root
2. Restart: `npm run dev`
3. Deploy rules: `firebase deploy --only firestore:rules`

**Can't see data?**
1. Check Firestore is enabled (not Realtime Database)
2. Look for collections: `contact_submissions` & `newsletter_subscriptions`

---

## 📦 Files Modified

✅ `client/src/lib/firebase.ts` - Firebase init  
✅ `client/src/lib/firestore.ts` - Save functions  
✅ `client/src/components/ContactForm.tsx` - Contact form  
✅ `client/src/components/Footer.tsx` - Newsletter  
✅ `firestore.rules` - Security rules  
✅ `firebase.json` - Firebase config  
✅ `.env.example` - Environment template

---

## 🚀 Deploy to Production

```bash
# Build and deploy
npm run build
firebase deploy

# Or deploy just hosting + rules
firebase deploy --only hosting,firestore:rules
```

---

## 📚 Full Documentation

See: `/docs/FIRESTORE_FORMS_SETUP.md`

---

**Status:** ✅ Ready to use!  
**Next:** Set up Firebase Console access and test forms
