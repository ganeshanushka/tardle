# How to Make Emails Look More Official and Trustworthy

## Step 1: Set Up Custom Domain (Required)

This makes emails come from `noreply@playtardle.com` instead of `noreply@tardle-c0c26.firebaseapp.com`.

### Instructions:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **tardle-c0c26**
3. Go to **Authentication** → **Templates**
4. Click on **"Email address verification"** template
5. Look for **"Customize domain"** section
6. Click **"Add custom domain"**
7. Enter: `playtardle.com`
8. Follow Firebase's instructions to add DNS records (TXT and CNAME)
9. Wait for verification (24-48 hours)
10. Once verified, apply the custom domain

**Result:** Emails will come from `noreply@playtardle.com`

---

## Step 2: Customize Email Template Content

### In Firebase Console:
1. Go to **Authentication** → **Templates**
2. Click on **"Email address verification"** template
3. Click **"Edit"** or **"Customize"**

### Recommended Professional Template:

**Subject Line:**
```
Verify your Tardle account
```

**Email Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo {
      font-size: 32px;
      font-weight: bold;
      color: #7BAFD4;
      margin-bottom: 10px;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
    }
    .button {
      display: inline-block;
      background-color: #7BAFD4;
      color: white;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      margin: 20px 0;
    }
    .button:hover {
      background-color: #5a9bc4;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      font-size: 14px;
      color: #666;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">Tardle</div>
  </div>
  
  <div class="content">
    <h2>Welcome to Tardle!</h2>
    
    <p>Thank you for creating your account. To complete your registration and start playing, please verify your email address by clicking the button below:</p>
    
    <div style="text-align: center;">
      <a href="%LINK%" class="button">Verify Email Address</a>
    </div>
    
    <p style="font-size: 14px; color: #666; margin-top: 30px;">
      Or copy and paste this link into your browser:<br>
      <a href="%LINK%" style="color: #7BAFD4; word-break: break-all;">%LINK%</a>
    </p>
    
    <p style="font-size: 14px; color: #666; margin-top: 20px;">
      This verification link will expire in 3 days. If you didn't create a Tardle account, you can safely ignore this email.
    </p>
  </div>
  
  <div class="footer">
    <p>Happy playing!</p>
    <p><strong>The Tardle Team</strong></p>
    <p style="font-size: 12px; color: #999;">
      <a href="https://playtardle.com" style="color: #7BAFD4;">playtardle.com</a> | 
      <a href="https://playtardle.com/privacy-policy.html" style="color: #7BAFD4;">Privacy Policy</a>
    </p>
  </div>
</body>
</html>
```

**Plain Text Version:**
```
Welcome to Tardle!

Thank you for creating your account. To complete your registration and start playing, please verify your email address by clicking the link below:

%LINK%

This verification link will expire in 3 days. If you didn't create a Tardle account, you can safely ignore this email.

Happy playing!
The Tardle Team

playtardle.com | Privacy Policy: https://playtardle.com/privacy-policy.html
```

### Important Notes:
- `%LINK%` is a placeholder that Firebase will automatically replace with the actual verification link
- You can customize colors, fonts, and styling to match your brand
- The template supports HTML for rich formatting

---

## Step 3: Add Branding/Logo (Optional)

### Option A: Use Gravatar
1. Create a Gravatar account with `noreply@playtardle.com`
2. Upload your Tardle logo as the profile picture
3. Many email clients will automatically display it

### Option B: Add Logo to Email Template
You can add an image URL in the email template:
```html
<img src="https://playtardle.com/logo.png" alt="Tardle" style="max-width: 200px; height: auto;">
```

---

## Step 4: Customize Other Email Templates

Also customize these templates in Firebase Console → Authentication → Templates:
- **Password reset** - Make it match your brand
- **Email change verification** - Keep consistent styling
- **Email address change** - Professional appearance

---

## Quick Checklist

- [ ] Set up custom domain in Firebase Console
- [ ] Add DNS records and verify domain
- [ ] Customize "Email address verification" template
- [ ] Add professional HTML template with branding
- [ ] Test by creating a new account
- [ ] Verify email looks professional
- [ ] Set up Gravatar for profile picture (optional)
- [ ] Customize other email templates (password reset, etc.)

---

## Testing

After customization:
1. Create a test account
2. Check the verification email
3. Verify:
   - Sender shows as `noreply@playtardle.com`
   - Email has professional styling
   - Logo/branding appears (if added)
   - Links work correctly
   - Email doesn't go to spam

