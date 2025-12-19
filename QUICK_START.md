# Quick Start: Add Resend Email to Your Existing Firebase Project

## ✅ What You Already Have
- Firebase frontend ✅
- Firestore database ✅  
- User authentication ✅
- Subscription tracking in `reminder.html` ✅

## 🚀 What You Need to Do

### Step 1: Terminal Commands (Run These)

```bash
# 1. Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# 2. Login to Firebase
firebase login

# 3. Navigate to your project
cd /Users/anushkaganesh/tardle

# 4. Initialize Cloud Functions
firebase init functions
```
**When prompted:**
- Use existing project → Select `tardle-c0c26`
- Language → JavaScript
- ESLint → No
- Install dependencies → Yes

```bash
# 5. Install Resend package
cd functions
npm install resend
cd ..

# 6. Set your Resend API key (paste your key when prompted)
firebase functions:secrets:set RESEND_API_KEY
```

### Step 2: Update Function Code

The function code is already created in `functions/index.js` ✅

**Just update these 2 lines with your actual domain:**
- Line 62: Change `onboarding@resend.dev` to your verified email (or keep it for now)
- Line 118: Change `tardle-c0c26.web.app` to your actual domain

### Step 3: Deploy

```bash
firebase deploy --only functions
```

### Step 4: Test

1. Go to your app → `reminder.html`
2. Log in
3. Toggle subscription ON
4. Go to Firebase Console → Functions → `dailyReminder` → Test tab → Test function
5. Check your email!

---

## 📋 Firebase Console Checklist

- [ ] **Firestore Database**: Already set up ✅
- [ ] **Users collection**: Already exists ✅
- [ ] **emailSubscribed field**: Already being used ✅
- [ ] **No changes needed in Firebase Console!** ✅

---

## 📁 Files Created/Modified

**New Files:**
- `functions/index.js` - Email sending function
- `functions/package.json` - Dependencies
- `unsubscribe.html` - Unsubscribe page
- `FUNCTIONS_SETUP.md` - Detailed guide
- `QUICK_START.md` - This file

**Modified Files:**
- `firebase-config.js` - Added `getDocs`, `query`, `where` exports

---

## 🔧 Configuration

**Function Schedule:**
- Runs daily at 10am Eastern Time
- Change in `functions/index.js` line 11: `schedule: "0 10 * * *"`

**Email Template:**
- Edit HTML in `functions/index.js` lines 65-120
- Update domain URLs (lines 118, 125)

---

## 🧪 Testing Checklist

- [ ] Function deploys successfully
- [ ] Subscribe your email in `reminder.html`
- [ ] Manually trigger function in Firebase Console
- [ ] Email arrives in inbox
- [ ] Click "Play Now" link → works
- [ ] Click "Unsubscribe" link → works
- [ ] Unsubscribe page updates Firestore correctly

---

## 💰 Cost

- **Resend**: FREE (3,000 emails/month)
- **Firebase Functions**: FREE (2M invocations/month)
- **Total**: $0/month

---

## 🆘 Troubleshooting

**Function won't deploy?**
- Check: `firebase login`
- Check: `firebase use tardle-c0c26`

**API key error?**
- Verify: `firebase functions:secrets:access RESEND_API_KEY`

**No emails sent?**
- Check Firebase Console → Functions → Logs
- Verify users have `emailSubscribed: true` in Firestore

**Unsubscribe not working?**
- Check `unsubscribe.html` is deployed
- Verify Firestore rules allow updates

---

## ✨ Next Steps (Optional)

1. Add custom domain to Resend
2. Customize email template design
3. Add analytics (open/click tracking)
4. Add rate limiting for free tier
5. Personalize emails with user stats

