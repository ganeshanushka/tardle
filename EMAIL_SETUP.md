# Email Reminder Setup Guide

## Overview

The subscription tracking is now implemented in `reminder.html`. Users can subscribe/unsubscribe to daily reminder emails, and their preference is stored in Firestore under `users/{userId}` with the field `emailSubscribed: true/false`.

## Part 1: Subscription Tracking (✅ Already Implemented)

- Users can toggle subscription on/off in `reminder.html`
- Subscription status is stored in Firestore: `users/{userId}.emailSubscribed`
- Status is loaded and displayed when user visits `reminder.html`

## Part 2: Sending Daily Emails

Firebase doesn't have built-in email sending. You'll need to use **Firebase Cloud Functions** with an email service provider.

### Option 1: Firebase Cloud Functions + SendGrid (Recommended)

#### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

#### Step 2: Initialize Cloud Functions
```bash
cd /path/to/your/project
firebase init functions
# Choose JavaScript or TypeScript
# Install dependencies? Yes
```

#### Step 3: Install SendGrid
```bash
cd functions
npm install @sendgrid/mail
```

#### Step 4: Get SendGrid API Key
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Go to Settings → API Keys
3. Create an API key with "Mail Send" permissions
4. Copy the API key

#### Step 5: Set SendGrid API Key in Firebase
```bash
firebase functions:config:set sendgrid.key="YOUR_SENDGRID_API_KEY"
```

#### Step 6: Create Cloud Function

Edit `functions/index.js`:

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

// Set SendGrid API key
sgMail.setApiKey(functions.config().sendgrid.key);

// Scheduled function to run daily at midnight (adjust timezone as needed)
exports.sendDailyReminders = functions.pubsub
  .schedule('0 0 * * *') // Runs every day at midnight UTC
  .timeZone('America/New_York') // Adjust to your timezone
  .onRun(async (context) => {
    console.log('Starting daily reminder email job...');
    
    try {
      // Get all users subscribed to emails
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
        
        const msg = {
          to: email,
          from: 'noreply@yourdomain.com', // Change to your verified sender email
          subject: 'Your Daily Tardle Puzzle is Ready!',
          html: `
            <h2>Hello ${username}!</h2>
            <p>Don't forget to solve today's Tardle puzzle and keep your streak alive!</p>
            <p><a href="https://yourdomain.com/play.html" style="background-color: #7BAFD4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Play Now</a></p>
            <p>Keep your Tardle streak alive!</p>
          `,
        };
        
        try {
          await sgMail.send(msg);
          console.log(`Email sent to ${email}`);
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

#### Step 7: Deploy the Function
```bash
firebase deploy --only functions
```

### Option 2: Firebase Cloud Functions + Mailgun

Similar setup, but use Mailgun instead:
```bash
npm install mailgun-js
```

### Option 3: Firebase Extensions

Use the official "Trigger Email" extension:
1. Go to Firebase Console → Extensions
2. Install "Trigger Email" extension
3. Configure to send emails based on Firestore triggers

## Testing

### Test the Cloud Function Locally
```bash
cd functions
npm run serve
```

### Test Email Sending
You can manually trigger the function or create a test function:

```javascript
exports.testEmail = functions.https.onRequest(async (req, res) => {
  // Test email sending logic here
  res.send('Test email sent!');
});
```

## Important Notes

1. **Email Service Limits**: Free tiers have limits (SendGrid: 100 emails/day free)
2. **Sender Verification**: You must verify your sender email address with the email service
3. **Spam Compliance**: Follow CAN-SPAM laws (include unsubscribe links)
4. **Costs**: Cloud Functions have usage-based pricing
5. **Timezone**: Adjust the schedule timezone in the Cloud Function

## Firestore Data Structure

```
users/{userId}
  - email: string
  - username: string
  - emailSubscribed: boolean
  - subscriptionUpdatedAt: timestamp
  - gamesPlayed: number
  - currentStreak: number
  - maxStreak: number
```

## Next Steps

1. Choose an email service provider (SendGrid recommended)
2. Set up Firebase Cloud Functions
3. Deploy the scheduled function
4. Test with a few users
5. Monitor function logs in Firebase Console

