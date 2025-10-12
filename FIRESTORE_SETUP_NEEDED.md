# 🔥 Firestore Forms - Setup Required

## ⚠️ Action Needed Before Forms Work

Your contact form and newsletter subscription are configured to save to Firebase Firestore, but you need to complete the setup in Firebase Console first.

---

## ⚡ Quick Setup (15 minutes)

### 1️⃣ Enable Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **osp-website-2026**
3. Click **"Firestore Database"** in left menu
4. Click **"Create database"**
5. Select location: **southamerica-east1 (São Paulo)**
6. Mode: **Production mode**
7. Click **"Enable"**

### 2️⃣ Get Your Firebase Configuration

1. In Firebase Console, click **⚙️ Settings** (Project Settings)
2. Scroll to **"Your apps"** section
3. If no web app exists:
   - Click **"Add app"** → Web icon (</>)
   - Name: **OSP Website**
   - Click **"Register app"**
4. Copy the **firebaseConfig** values

### 3️⃣ Create .env File

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` and add your Firebase credentials:

```bash
VITE_FIREBASE_API_KEY=AIzaSy...your-key-here
VITE_FIREBASE_AUTH_DOMAIN=osp-website-2026.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=osp-website-2026
VITE_FIREBASE_STORAGE_BUCKET=osp-website-2026.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abc123...
```

### 4️⃣ Deploy Security Rules

```bash
firebase deploy --only firestore:rules
```

### 5️⃣ Test Your Forms

```bash
npm run dev
```

Visit:
- Contact form: http://localhost:5000/contato
- Newsletter: Any page footer

### 6️⃣ View Submissions

Go to Firebase Console → Firestore Database

You'll see two collections:
- **contact_submissions** - Contact form data
- **newsletter_subscriptions** - Newsletter emails

---

## 📚 Documentation

- **Quick Start:** `/docs/FIRESTORE_QUICK_START.md`
- **Complete Guide:** `/docs/FIRESTORE_FORMS_SETUP.md`
- **Implementation Details:** `/docs/FIRESTORE_IMPLEMENTATION.md`

---

## ✅ What's Already Done

- ✅ Firebase SDK installed
- ✅ Form components updated
- ✅ Loading states added
- ✅ Error handling implemented
- ✅ Security rules created
- ✅ Translations updated
- ✅ Documentation written

**What YOU need to do:** Follow steps 1-4 above (15 minutes)

---

## 🐛 Troubleshooting

**"Firestore is not initialized" error?**
- Create `.env` file with credentials
- Restart: `npm run dev`

**Forms not saving?**
- Deploy rules: `firebase deploy --only firestore:rules`
- Check Firestore is enabled in console

**Need help?** Check `/docs/FIRESTORE_FORMS_SETUP.md`

---

**Status:** ⚠️ Setup Required  
**Time:** 15 minutes  
**Next:** Follow steps above
