# Fix Email Not Sending Issue

## Problem
`verifyBeforeUpdateEmail` completes successfully but no email is received.

## ✅ Domain Already Authorized
Your domain `ganeshanushka.github.io` is already in the authorized domains list, so that's not the issue.

## Other Things to Check:

### 1. **Check Email Templates** (Most Important Next Step)
   - In Firebase Console → Authentication → Settings
   - Look for "Email templates" section (usually in the left sidebar or main content)
   - Click on "Email address verification" template
   - Make sure it's **enabled** and not disabled
   - Verify the template content looks correct
   - If it's disabled, enable it and save

### 2. **Check Firebase Usage/Quotas**
   - Go to: Firebase Console → Project Settings → Usage and billing
   - Check if you've hit any email sending limits
   - Free tier has daily limits on emails sent

### 3. **Verify ContinueUrl Format**
   When testing, open browser console and check:
   - Look for: "Continue URL for email verification:"
   - It should show: `https://ganeshanushka.github.io/tardle/verify-email.html`
   - The URL domain must match an authorized domain (it does: `ganeshanushka.github.io`)

### 4. **Check Email Provider Settings**
   - Gmail sometimes filters Firebase emails
   - Check spam/junk folder thoroughly
   - Wait 5-10 minutes (email delivery can be delayed)
   - Try with a different email provider to test

### 5. **Firebase Console Activity Logs**
   - Go to: Firebase Console → Authentication → Users
   - Look for any error indicators
   - Check if Firebase is actually attempting to send emails

### 6. **Try Without continueUrl**
   As a test, we could try calling `verifyBeforeUpdateEmail` without the `actionCodeSettings` to see if that works. However, the link won't redirect properly.

## Most Likely Issue
Since the domain is authorized and the function succeeds, the most likely remaining issues are:
1. **Email template is disabled** - Check Authentication → Settings → Email templates
2. **Firebase email quota exceeded** - Check Usage and billing
3. **Email is in spam** - Check spam folder, wait longer
4. **Gmail filtering** - Try a different email address

## Quick Links
- Authorized domains: https://console.firebase.google.com/project/tardle-c0c26/authentication/settings
- Email templates: https://console.firebase.google.com/project/tardle-c0c26/authentication/emails
- Usage/billing: https://console.firebase.google.com/project/tardle-c0c26/settings/usage
