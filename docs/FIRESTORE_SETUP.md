# Firestore Database Setup Guide

## Issue
Getting `400 Bad Request` errors when submitting contact forms because Firestore database hasn't been initialized yet.

## Solution

### Step 1: Create Firestore Database in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/project/osp-website-2026/firestore)
2. Navigate to **Firestore Database** in the left sidebar
3. Click **"Create database"**
4. Choose a location:
   - **Recommended:** `southamerica-east1` (São Paulo) - closest to your users
   - Alternative: `us-central1` (Iowa)
5. Start in **Production mode** (security rules are already configured in `firestore.rules`)
6. Click **"Create"**

### Step 2: Verify Environment Variables

Make sure your `.env` file has the Firebase configuration:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=osp-website-2026.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=osp-website-2026
VITE_FIREBASE_STORAGE_BUCKET=osp-website-2026.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

You can find these values in:
- Firebase Console → Project Settings → General → Your apps → Web app

### Step 3: Collections Will Be Auto-Created

Once Firestore is initialized, the collections will be automatically created when:
1. Someone submits a contact form → `contact_submissions` collection created
2. Someone subscribes to newsletter → `newsletter_subscriptions` collection created

### Step 4: Verify Security Rules Are Deployed

The security rules have been deployed and allow:
- ✅ Anyone can **create** (submit forms)
- ❌ Only Firebase Console can **read/update/delete**

```bash
firebase deploy --only firestore:rules
```

## Current Collections Structure

### `contact_submissions`
```json
{
  "name": "string",
  "company": "string",
  "role": "string (optional)",
  "email": "string",
  "phone": "string",
  "message": "string",
  "createdAt": "timestamp",
  "status": "string (new/contacted/resolved)"
}
```

### `newsletter_subscriptions`
```json
{
  "email": "string (lowercase)",
  "createdAt": "timestamp",
  "status": "string (active/unsubscribed)"
}
```

## Viewing Submissions

1. Go to [Firebase Console → Firestore](https://console.firebase.google.com/project/osp-website-2026/firestore)
2. Click on collection name to view documents
3. Each submission is stored as a separate document with auto-generated ID

## Testing

After creating the database:
1. Rebuild: `npm run build`
2. Deploy: `firebase deploy --only hosting`
3. Test forms at: https://osp-website-2026.web.app/contato
4. Check Firebase Console to see submissions appear

## Troubleshooting

### Still getting 400 errors?
1. Clear browser cache
2. Check browser console for specific error messages
3. Verify Firestore is in "Production mode" (not test mode)
4. Make sure security rules are deployed: `firebase deploy --only firestore:rules`

### Can't see submissions?
1. Open Firebase Console → Firestore
2. Collections won't appear until first document is created
3. Try submitting a test form

### Need to export data?
```bash
# Export all Firestore data
firebase firestore:export gs://osp-website-2026.firebasestorage.app/exports
```

## Next Steps (Optional)

### Set up email notifications
Consider setting up Firebase Cloud Functions to send email notifications when forms are submitted:
- Contact form → Email to atendimento@osp.com.br
- Newsletter → Add to Mailchimp/SendGrid

### Create admin dashboard
Build an authenticated admin panel to:
- View all submissions
- Mark as contacted/resolved
- Export to CSV
- Analytics on form submissions
