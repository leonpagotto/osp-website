# Fix Firestore 400 Error - Quick Guide

## Problem
Getting `400 Bad Request` error when submitting contact forms because **Firestore database doesn't exist yet**.

## ⚡ Quick Fix (5 minutes)

### Step 1: Create Firestore Database

1. **Open Firebase Console:**
   - Go to: https://console.firebase.google.com/project/osp-website-2026/firestore

2. **Create Database:**
   - Click the **"Create database"** button
   - **Location:** Choose `southamerica-east1` (São Paulo, Brazil) - closest to your users
   - **Security mode:** Choose **"Start in production mode"** 
     - ✅ Security rules are already configured
     - ✅ Already deployed with: `firebase deploy --only firestore:rules`
   - Click **"Enable"**

3. **Wait for creation:**
   - Takes 1-2 minutes
   - You'll see "Cloud Firestore" screen when ready

### Step 2: That's It! 🎉

The collections (`contact_submissions` and `newsletter_subscriptions`) will be created automatically when someone submits a form.

### Step 3: Test the Fix

1. Go to your website: https://osp-website-2026.web.app/contato
2. Fill out the contact form
3. Submit
4. Check Firebase Console → Firestore to see the submission appear

## What Was Wrong?

The Firebase project was created, but Firestore database was never initialized. It's like having a house (Firebase project) but no furniture (Firestore database).

## Security Rules (Already Deployed ✅)

```
contact_submissions/
  ✅ Anyone can CREATE (submit forms)
  ❌ Only admins can READ/UPDATE/DELETE

newsletter_subscriptions/
  ✅ Anyone can CREATE (subscribe)
  ❌ Only admins can READ/UPDATE/DELETE
```

## Viewing Form Submissions

After someone submits a form:

1. Go to: https://console.firebase.google.com/project/osp-website-2026/firestore/databases/-default-/data

2. Click on collection:
   - `contact_submissions` - See contact form submissions
   - `newsletter_subscriptions` - See email subscriptions

3. Each submission is a document with:
   - Name, email, phone, message, company, role
   - Timestamp (when submitted)
   - Status (new/contacted/resolved)

## Alternative: Firestore Emulator (For Local Testing)

If you want to test locally without touching production:

```bash
# Install Firebase tools
npm install -g firebase-tools

# Start emulator
firebase emulators:start --only firestore

# Update .env for local development
VITE_FIREBASE_USE_EMULATOR=true
```

## Still Having Issues?

### Error: "Missing or insufficient permissions"
- Make sure you deployed the rules: `firebase deploy --only firestore:rules`
- Security rules should allow `create: if true` for form collections

### Error: "Failed to get document"  
- Firestore database not created yet
- Follow Step 1 above

### Error: "CORS policy"
- Add your domain to authorized domains in Firebase Console
- Go to: Authentication → Settings → Authorized domains
- Add: `osp-website-2026.web.app`

## What Happens Next?

Once Firestore is created and working:

1. ✅ Contact forms will work
2. ✅ Newsletter signups will work  
3. ✅ All submissions saved to Firebase
4. ✅ You can view/export data from Firebase Console
5. ❌ No email notifications yet (optional feature)

### Optional Enhancements (Later):

1. **Email Notifications:**
   - Set up Firebase Cloud Functions
   - Send email when form submitted
   - Requires Firebase Blaze plan (pay-as-you-go)

2. **Admin Dashboard:**
   - Build authenticated admin interface
   - View all submissions in one place
   - Mark as contacted/resolved
   - Export to CSV

3. **Analytics:**
   - Track form submission rates
   - A/B test form variations
   - Identify drop-off points
