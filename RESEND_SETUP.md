# Resend Email Setup Guide

## ✅ Step 1: Create Resend Account (COMPLETED)
- You've signed up at resend.com
- You have your API key
- You can use Resend's default domain for now

## Step 2: Install Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

## Step 3: Initialize Cloud Functions

```bash
cd /Users/anushkaganesh/tardle
firebase init functions
```

When prompted:
- **Use an existing project?** → Yes, select your Firebase project
- **What language?** → JavaScript
- **Do you want to use ESLint?** → No (or Yes if you prefer)
- **Do you want to install dependencies?** → Yes

## Step 4: Install Resend Package

```bash
cd functions
npm install resend
```

## Step 5: Set Resend API Key

```bash
firebase functions:config:set resend.key="YOUR_RESEND_API_KEY_HERE"
```

Replace `YOUR_RESEND_API_KEY_HERE` with your actual Resend API key.

## Step 6: Create the Email Function

The function code is in `functions/index.js` (see below).

## Step 7: Deploy

```bash
firebase deploy --only functions
```

## Step 8: Test

After deployment, the function will run daily at midnight (timezone configurable). You can also test it manually in Firebase Console → Functions → sendDailyReminders → Test.

---

## Function Code

Copy this into `functions/index.js`:

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Resend } = require('resend');

admin.initializeApp();

// Initialize Resend with API key from Firebase config
const resend = new Resend(functions.config().resend.key);

// Scheduled function to send daily reminder emails
exports.sendDailyReminders = functions.pubsub
  .schedule('0 0 * * *') // Runs every day at midnight UTC
  .timeZone('America/New_York') // Adjust to your timezone
  .onRun(async (context) => {
    console.log('Starting daily reminder email job...');
    
    try {
      // Get all users subscribed to emails from Firestore
      const usersRef = admin.firestore().collection('users');
      const snapshot = await usersRef
        .where('emailSubscribed', '==', true)
        .get();
      
      if (snapshot.empty) {
        console.log('No subscribed users found.');
        return null;
      }
      
      console.log(`Found ${snapshot.size} subscribed users.`);
      
      // Send email to each subscribed user
      const promises = snapshot.docs.map(async (doc) => {
        const userData = doc.data();
        const email = userData.email;
        const username = userData.username || 'Tardle Player';
        
        if (!email) {
          console.log(`Skipping user ${doc.id} - no email address`);
          return;
        }
        
        try {
          const { data, error } = await resend.emails.send({
            from: 'Tardle <onboarding@resend.dev>', // Change to your verified domain later
            to: email,
            subject: 'Your Daily Tardle Puzzle is Ready!',
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="UTF-8">
                <style>
                  body { font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .button { background-color: #7BAFD4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
                </style>
              </head>
              <body>
                <div class="container">
                  <h2>Hello ${username}!</h2>
                  <p>Don't forget to solve today's Tardle puzzle and keep your streak alive!</p>
                  <a href="https://yourdomain.com/play.html" class="button">Play Now</a>
                  <p>Keep your Tardle streak alive!</p>
                </div>
              </body>
              </html>
            `,
          });
          
          if (error) {
            console.error(`Error sending email to ${email}:`, error);
          } else {
            console.log(`Email sent successfully to ${email}:`, data);
          }
        } catch (error) {
          console.error(`Error sending email to ${email}:`, error);
        }
      });
      
      await Promise.all(promises);
      console.log('Daily reminder emails sent successfully.');
      return null;
    } catch (error) {
      console.error('Error in sendDailyReminders:', error);
      return null;
    }
  });
```

## Important Notes

1. **Update the "from" email**: Change `onboarding@resend.dev` to your verified domain email once you add a domain
2. **Update the play.html link**: Change `https://yourdomain.com/play.html` to your actual domain
3. **Timezone**: Adjust `.timeZone('America/New_York')` to your preferred timezone
4. **Free Tier**: Resend free tier allows 3,000 emails/month - perfect for daily reminders!

## Troubleshooting

- **Function not deploying?** Make sure you're logged in: `firebase login`
- **API key error?** Verify the key is set: `firebase functions:config:get`
- **No emails sent?** Check Firebase Console → Functions → Logs for errors

