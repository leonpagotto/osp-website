# Firestore Form Submission Setup Guide
**OSP Contabilidade Digital**

## 📋 Overview

This guide explains how to configure Firebase Firestore to save form submissions from your website. Form data is now saved to two Firestore collections:

- **`contact_submissions`** - Contact form data (name, company, email, phone, message)
- **`newsletter_subscriptions`** - Newsletter email subscriptions

---

## 🚀 Quick Setup (15 minutes)

### Step 1: Create Firebase Project (if not done)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `osp-website-2026`
3. If you haven't created it yet, click "Add project" and follow the wizard

### Step 2: Enable Firestore Database

1. In Firebase Console, click **"Firestore Database"** in the left menu
2. Click **"Create database"**
3. Choose **"Start in production mode"** (we'll deploy security rules next)
4. Select location: **`southamerica-east1` (São Paulo)** for best performance in Brazil
5. Click **"Enable"**

### Step 3: Get Firebase Configuration

1. In Firebase Console, click the **gear icon** ⚙️ (Project Settings)
2. Scroll down to **"Your apps"**
3. If you don't have a web app, click **"Add app"** → Select **Web** (</>) icon
4. Give it a nickname: `OSP Website`
5. Click **"Register app"**
6. Copy the `firebaseConfig` object

### Step 4: Set Up Environment Variables

1. Create a `.env` file in the project root (copy from `.env.example`):

```bash
cp .env.example .env
```

2. Edit `.env` and fill in your Firebase credentials:

```bash
VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=osp-website-2026.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=osp-website-2026
VITE_FIREBASE_STORAGE_BUCKET=osp-website-2026.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

### Step 5: Deploy Firestore Security Rules

```bash
# Deploy security rules
firebase deploy --only firestore:rules
```

This will deploy the security rules from `firestore.rules` that:
- ✅ Allow anyone to submit forms (create documents)
- ❌ Prevent public reading/editing (you manage via Firebase Console)

### Step 6: Test the Forms

1. Start the development server:
```bash
npm run dev
```

2. Test the **Contact Form** at `http://localhost:5000/contato`
3. Test the **Newsletter subscription** in the footer of any page

### Step 7: Deploy to Production

```bash
# Build and deploy everything (hosting + firestore rules)
npm run build
firebase deploy
```

---

## 📊 Viewing Form Submissions

### Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click **"Firestore Database"**
4. You'll see two collections:
   - **contact_submissions** - All contact form entries
   - **newsletter_subscriptions** - All newsletter signups

### Data Structure

**Contact Submissions:**
```json
{
  "name": "João Silva",
  "company": "Tech Company",
  "role": "CEO",
  "email": "joao@example.com",
  "phone": "(19) 99999-9999",
  "message": "Preciso de ajuda com planejamento tributário",
  "createdAt": "2025-01-15T14:30:00Z",
  "status": "new"
}
```

**Newsletter Subscriptions:**
```json
{
  "email": "cliente@example.com",
  "createdAt": "2025-01-15T14:30:00Z",
  "status": "active"
}
```

---

## 🔐 Security Rules Explained

Our Firestore security rules (`firestore.rules`) protect your data:

```javascript
// Anyone can submit forms (create)
allow create: if true;

// Only admins can read/edit/delete (via Firebase Console)
allow read, update, delete: if false;
```

This means:
- ✅ Website visitors can submit forms
- ❌ Visitors cannot read others' submissions
- ✅ You manage data through Firebase Console

---

## 📤 Exporting Form Data

### Method 1: Firebase Console (Manual)

1. Go to Firestore Database
2. Select a collection
3. Click on documents
4. Copy data manually

### Method 2: Export to BigQuery (Automatic)

For automated exports and analytics:

1. In Firebase Console → **Project Settings**
2. Click **"Integrations"**
3. Enable **"BigQuery"**
4. Set up automatic daily exports

### Method 3: Cloud Functions (Advanced)

Create a Cloud Function to automatically:
- Send email notifications when forms are submitted
- Export to Google Sheets
- Integrate with CRM

---

## 🔧 Configuration Files

### Files Created/Modified:

1. **`client/src/lib/firebase.ts`** - Firebase initialization
2. **`client/src/lib/firestore.ts`** - Form submission functions
3. **`firestore.rules`** - Security rules
4. **`firestore.indexes.json`** - Database indexes
5. **`firebase.json`** - Firebase configuration (updated)
6. **`.env.example`** - Environment variable template
7. **`client/src/components/ContactForm.tsx`** - Updated with Firestore
8. **`client/src/components/Footer.tsx`** - Newsletter form updated

---

## 🐛 Troubleshooting

### Forms not submitting

**Error: "Firestore is not initialized"**

✅ **Solution:**
1. Check `.env` file exists and has correct values
2. Restart dev server: `npm run dev`
3. Verify Firebase project ID matches in `.firebaserc`

**Error: "Missing or insufficient permissions"**

✅ **Solution:**
1. Deploy security rules: `firebase deploy --only firestore:rules`
2. Check rules allow `create: if true`

### Can't see submissions in Firebase Console

✅ **Solution:**
1. Make sure Firestore is enabled (not Realtime Database)
2. Check you're looking at the right project
3. Look for collections: `contact_submissions` and `newsletter_subscriptions`

### Environment variables not loading

✅ **Solution:**
1. Make sure `.env` is in project root (same level as `package.json`)
2. Restart development server
3. Check variable names start with `VITE_`

---

## 📧 Email Notifications (Optional)

To receive email notifications when forms are submitted:

### Option 1: Zapier Integration

1. Create a Zapier account
2. Create a new Zap
3. Trigger: **Firestore** → **New Document in Collection**
4. Action: **Gmail/Email** → **Send Email**

### Option 2: Firebase Cloud Functions

Create `functions/index.js`:

```javascript
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendContactNotification = functions.firestore
  .document('contact_submissions/{docId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    
    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
      }
    });
    
    await transporter.sendMail({
      from: 'noreply@ospcontabilidade.com.br',
      to: 'atendimento@osp.com.br',
      subject: `Novo contato: ${data.name}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <p><strong>Mensagem:</strong> ${data.message}</p>
      `
    });
  });
```

Deploy:
```bash
firebase deploy --only functions
```

---

## 📊 Analytics & Monitoring

### Track Form Submissions

In Firebase Console → **Analytics**, you can track:
- Number of form submissions per day
- Conversion rates
- User behavior

### Set Up Alerts

1. Go to Firebase Console → **Alerts**
2. Create alert for new documents in collections
3. Receive notifications via email or Slack

---

## 🚀 Production Deployment Checklist

Before deploying to production:

- [ ] `.env` file configured with production Firebase credentials
- [ ] Firestore database enabled in Firebase Console
- [ ] Security rules deployed: `firebase deploy --only firestore:rules`
- [ ] Forms tested in development
- [ ] Email notifications configured (optional)
- [ ] Data export strategy in place

---

## 📱 Next Steps

1. **Test forms thoroughly** in development
2. **Set up email notifications** (Zapier or Cloud Functions)
3. **Create a dashboard** to view submissions (Firebase Console or custom)
4. **Export data regularly** for CRM or backup
5. **Monitor form submission rates** with Analytics

---

## 🔗 Useful Links

- [Firebase Console](https://console.firebase.google.com/)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Cloud Functions Documentation](https://firebase.google.com/docs/functions)

---

## ✅ Summary

Your form submission system is now configured to:
- ✅ Save contact form submissions to Firestore
- ✅ Save newsletter subscriptions to Firestore  
- ✅ Show loading states while submitting
- ✅ Display success/error messages
- ✅ Protect data with security rules
- ✅ Allow you to manage submissions in Firebase Console

**Next:** Set up email notifications and test in production!
