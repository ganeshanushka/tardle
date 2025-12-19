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

# 6. Create .env file with your Resend API key
cd functions
echo "RESEND_API_KEY=your_resend_api_key_here" > .env
# Then edit .env and replace 'your_resend_api_key_here' with your actual key
cd ..
```

**Important:** Create `functions/.env` file with:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

### Step 2: Create .env File

Create `functions/.env` file:
```bash
cd functions
nano .env  # or use your preferred editor
```

Add your Resend API key:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

Save and exit.

### Step 3: Update Function Code (Optional)

The function code is already created in `functions/index.js` ✅

**Optional updates:**
- Line 56: Change `onboarding@resend.dev` to your verified email (or keep it for now)
- Line 112: Change `tardle-c0c26.web.app` to your actual domain
- Line 48-52: Uncomment to filter for UNC emails only (`@unc.edu`)

### Step 4: Deploy

```bash
firebase deploy --only functions
```

### Step 5: Test

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

