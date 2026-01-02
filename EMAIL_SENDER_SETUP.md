# How to Customize Verification Email Sender

## Current Situation

You're seeing verification emails from: `noreply@tardle-c0c26.firebaseapp.com`

This happens because Firebase's built-in `sendEmailVerification()` function uses Firebase's default email service.

## Solution: Set Up Custom Domain in Firebase Authentication

### Step 1: Go to Firebase Console

1. Open [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **tardle-c0c26**
3. Go to **Authentication** → **Templates** (or **Settings** → **Templates**)

### Step 2: Customize Email Templates

1. Click on **"Email address verification"** template
2. Look for **"Customize domain"** or **"Authorized domains"** section
3. Click **"Add custom domain"** or **"Customize domain"**
4. Enter your domain: `playtardle.com`
5. Click **"Continue"**

### Step 3: Add DNS Records

Firebase will provide you with DNS records to add:

**You'll need to add these to your domain registrar (where you manage playtardle.com):**

1. **TXT Record** (for domain verification)
   - Name: `@` or `playtardle.com`
   - Value: (provided by Firebase)
   - TTL: 3600 (or default)

2. **CNAME Record** (for email delivery)
   - Name: (provided by Firebase, usually something like `mail`)
   - Value: (provided by Firebase, usually `mail.firebaseapp.com`)
   - TTL: 3600 (or default)

### Step 4: Verify Domain

1. After adding DNS records, wait 24-48 hours for propagation
2. Go back to Firebase Console → Authentication → Templates
3. Firebase should automatically verify your domain
4. Once verified, click **"Apply custom domain"**

### Step 5: Result

After verification, Firebase verification emails will be sent from:
- **From:** `noreply@playtardle.com` (or similar)
- Instead of: `noreply@tardle-c0c26.firebaseapp.com`

---

## Adding Profile Picture/Icon

The profile picture/icon is managed by your email service provider, not Firebase.

### Option 1: If you have email service for playtardle.com

1. Log into your email provider (Google Workspace, Microsoft 365, etc.)
2. Find the user account: `noreply@playtardle.com` (or create it if needed)
3. Upload a profile picture to that email account
4. The profile picture will appear in email clients that support it

### Option 2: Using Resend (for custom emails)

Your Cloud Functions already use Resend for daily emails. You could:
1. Create a sender profile in Resend dashboard
2. Upload a logo/image
3. This will appear in emails sent via Resend (daily emails, etc.)

**Note:** Firebase's built-in verification emails won't use Resend's profile picture - they'll use whatever is set for the email address in your email provider.

### Option 3: Use Gravatar

If you create an email address like `noreply@playtardle.com`, you can:
1. Create a Gravatar account with that email
2. Upload a profile picture to Gravatar
3. Many email clients will automatically display the Gravatar image

---

## Alternative: Use Custom Email Service for All Emails

If you want full control, you could replace Firebase's `sendEmailVerification` with your own Resend-based solution (similar to your `sendVerificationCode` function). However, this requires more code changes and you'd lose Firebase's built-in email verification link handling.

---

## Quick Checklist

- [ ] Go to Firebase Console → Authentication → Templates
- [ ] Add custom domain: `playtardle.com`
- [ ] Add TXT and CNAME DNS records to your domain registrar
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Verify domain in Firebase Console
- [ ] Apply custom domain
- [ ] Set up email account (noreply@playtardle.com) with your email provider
- [ ] Upload profile picture to email account or create Gravatar

---

## Testing

After setup:
1. Create a test account
2. Check verification email sender address
3. Verify it shows as `noreply@playtardle.com` (or your custom domain)
4. Check if profile picture appears (may vary by email client)

