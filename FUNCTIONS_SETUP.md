# Firebase Cloud Functions + Resend Setup Guide

## ✅ What You Already Have
- Firebase frontend configured
- Firestore database set up
- User authentication working
- Subscription tracking in `reminder.html` using `emailSubscribed` field

## What You Need to Add

### Part 1: Firebase Console Setup (5 min)

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: `tardle-c0c26`
3. **Firestore Database**: 
   - Your `users` collection already exists ✅
   - Each user document has `emailSubscribed: true/false` ✅
   - No changes needed here!

### Part 2: Install Firebase CLI & Initialize Functions (10 min)

**Run these commands in your terminal:**

```bash
# Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Cloud Functions
cd /Users/anushkaganesh/tardle
firebase init functions
```

**When prompted:**
- ✅ Use an existing project → Select `tardle-c0c26`
- ✅ Language → **JavaScript**
- ✅ ESLint → No (or Yes if you prefer)
- ✅ Install dependencies → **Yes**

This creates a `functions/` directory.

### Part 3: Install Resend (2 min)

```bash
cd functions
npm install resend
cd ..
```

### Part 4: Set Resend API Key Securely (2 min)

```bash
firebase functions:secrets:set RESEND_API_KEY
```

When prompted, paste your Resend API key.

**Verify it's set:**
```bash
firebase functions:secrets:access RESEND_API_KEY
```

### Part 5: Add Function Code

Copy the code from `functions/index.js` (created below) - it's already configured to:
- Query `emailSubscribed: true` (matches your existing code)
- Send emails via Resend
- Run daily at 10am Eastern Time
- Prevent duplicate sends with `lastSent` tracking

### Part 6: Deploy (3 min)

```bash
firebase deploy --only functions
```

### Part 7: Test (5 min)

1. **Add your email to test:**
   - Go to `reminder.html` in your app
   - Log in
   - Toggle subscription ON
   
2. **Manually trigger the function:**
   - Go to Firebase Console → Functions
   - Click `dailyReminder` function
   - Click "Test" tab
   - Click "Test function"
   - Check your email!

3. **Or test locally:**
   ```bash
   cd functions
   npm run serve
   ```

---

## Firestore Rules (Important!)

Go to Firebase Console → Firestore Database → Rules

Make sure your rules allow the function to read user data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      // Users can read/write their own data
      allow read, write: if request.auth != null && request.auth.uid == userId;
      // Cloud Functions can read all user data (for email sending)
      allow read: if request.auth == null; // Functions run without auth
    }
  }
}
```

Actually, Cloud Functions use Admin SDK which bypasses security rules, so your existing rules are fine!

---

## Summary Checklist

- [ ] Run `firebase init functions`
- [ ] Run `npm install resend` in functions directory
- [ ] Set Resend API key: `firebase functions:secrets:set RESEND_API_KEY`
- [ ] Copy function code to `functions/index.js`
- [ ] Deploy: `firebase deploy --only functions`
- [ ] Test by subscribing your email and triggering function
- [ ] Verify email arrives

---

## What the Function Does

1. Runs daily at 10am Eastern Time
2. Queries Firestore for users where `emailSubscribed === true`
3. Sends email to each subscribed user
4. Tracks `lastSent` date to prevent duplicates
5. Logs everything for debugging

---

## Cost

- **Resend**: FREE (3,000 emails/month)
- **Firebase Functions**: FREE (2M invocations/month)
- **Total**: $0/month for up to 100 daily users

