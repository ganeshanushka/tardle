# Email Reminder Setup Guide

## Overview

The subscription tracking is now implemented in `reminder.html`. Users can subscribe/unsubscribe to daily reminder emails, and their preference is stored in Firestore under `users/{userId}` with the field `emailSubscribed: true/false`.

## Part 1: Subscription Tracking (✅ Already Implemented)

- Users can toggle subscription on/off in `reminder.html`
- Subscription status is stored in Firestore: `users/{userId}.emailSubscribed`
- Status is loaded and displayed when user visits `reminder.html`

## Part 2: Sending Daily Emails

Firebase doesn't have built-in email sending. You'll need to use **Firebase Cloud Functions** with an email service provider.

## 🆓 Free Email Service Options

Here are the best **FREE** options for sending daily reminder emails:

### Best Free Options (Ranked)

1. **Brevo (formerly Sendinblue)** ⭐ **BEST FREE TIER**
   - **Free tier**: 300 emails/day (9,000/month)
   - **Perfect for**: Daily reminders for up to 300 users
   - **Setup**: Easy, good documentation
   - **Link**: https://www.brevo.com/

2. **Resend**
   - **Free tier**: 3,000 emails/month
   - **Perfect for**: Up to 100 daily active users
   - **Setup**: Modern API, great developer experience
   - **Link**: https://resend.com/

3. **SendGrid**
   - **Free tier**: 100 emails/day (3,000/month) forever
   - **Perfect for**: Small user base (up to 100 daily users)
   - **Setup**: Well-documented, reliable
   - **Link**: https://sendgrid.com/

4. **AWS SES** (Amazon Simple Email Service)
   - **Free tier**: 1,000 emails/month (or 62,000 if on EC2)
   - **Perfect for**: If you already use AWS
   - **Setup**: More complex, requires AWS account
   - **Link**: https://aws.amazon.com/ses/

5. **Mailgun**
   - **Free tier**: 5,000 emails/month for first 3 months, then paid
   - **Perfect for**: Short-term testing
   - **Setup**: Easy setup
   - **Link**: https://www.mailgun.com/

### Recommendation for Daily Reminders

For a **daily reminder service**, I recommend:
- **Brevo** if you expect 300+ daily users (best free tier)
- **Resend** if you expect 100-300 daily users (modern, easy)
- **SendGrid** if you expect <100 daily users (most reliable, forever free)

---

### Option 1: Firebase Cloud Functions + Brevo (Best Free Option)

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

### Option 2: Firebase Cloud Functions + Brevo (300 emails/day FREE) ⭐

#### Step 1-2: Same as SendGrid (Install Firebase CLI and Initialize Functions)

#### Step 3: Install Brevo SDK
```bash
cd functions
npm install @getbrevo/brevo
```

#### Step 4: Get Brevo API Key
1. Sign up at [Brevo](https://www.brevo.com/) (free account)
2. Go to Settings → SMTP & API → API Keys
3. Create a new API key
4. Copy the API key

#### Step 5: Set Brevo API Key in Firebase
```bash
firebase functions:config:set brevo.key="YOUR_BREVO_API_KEY"
```

#### Step 6: Create Cloud Function

Edit `functions/index.js`:

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const brevo = require('@getbrevo/brevo');

admin.initializeApp();

// Initialize Brevo API client
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.ApiKeyApi.constructFromObject({
  'apiKey': functions.config().brevo.key
}));

// Scheduled function to run daily at midnight
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
        
        const sendSmtpEmail = new brevo.SendSmtpEmail();
        sendSmtpEmail.subject = 'Your Daily Tardle Puzzle is Ready!';
        sendSmtpEmail.htmlContent = `
          <h2>Hello ${username}!</h2>
          <p>Don't forget to solve today's Tardle puzzle and keep your streak alive!</p>
          <p><a href="https://yourdomain.com/play.html" style="background-color: #7BAFD4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Play Now</a></p>
          <p>Keep your Tardle streak alive!</p>
        `;
        sendSmtpEmail.sender = {name: 'Tardle', email: 'noreply@yourdomain.com'};
        sendSmtpEmail.to = [{email: email, name: username}];
        
        try {
          await apiInstance.sendTransacEmail(sendSmtpEmail);
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

### Option 3: Firebase Cloud Functions + Resend (3,000 emails/month FREE)

#### Step 1-2: Same as above

#### Step 3: Install Resend
```bash
cd functions
npm install resend
```

#### Step 4: Get Resend API Key
1. Sign up at [Resend](https://resend.com/)
2. Go to API Keys
3. Create a new API key
4. Copy the API key

#### Step 5: Set Resend API Key
```bash
firebase functions:config:set resend.key="YOUR_RESEND_API_KEY"
```

#### Step 6: Create Cloud Function

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Resend } = require('resend');

admin.initializeApp();
const resend = new Resend(functions.config().resend.key);

exports.sendDailyReminders = functions.pubsub
  .schedule('0 0 * * *')
  .timeZone('America/New_York')
  .onRun(async (context) => {
    // Similar structure as Brevo example above
    // Use resend.emails.send() instead
  });
```

### Option 4: Firebase Extensions

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

### Free Tier Limits

**Email Services (FREE):**
- **Brevo**: 300 emails/day (9,000/month) - Best for daily reminders
- **Resend**: 3,000 emails/month
- **SendGrid**: 100 emails/day (3,000/month) - Forever free
- **AWS SES**: 1,000 emails/month (or 62,000 if on EC2)

**Firebase Cloud Functions (FREE Spark Plan):**
- **2 million invocations/month** (plenty for daily reminders)
- **400,000 GB-seconds compute time/month**
- **5 GB egress/month**
- **Scheduled functions**: Included in free tier ✅

**Total Cost for Daily Reminders: $0/month** (if you stay within free tiers)

### Setup Requirements

1. **Sender Verification**: You must verify your sender email address with the email service
2. **Spam Compliance**: Follow CAN-SPAM laws (include unsubscribe links in emails)
3. **Timezone**: Adjust the schedule timezone in the Cloud Function to match your users
4. **Domain**: For better deliverability, use a custom domain email (e.g., noreply@yourdomain.com)

### Cost Breakdown (Free Tier)

- **Brevo**: FREE (300 emails/day)
- **Firebase Functions**: FREE (2M invocations/month)
- **Firestore**: FREE (1 GB storage, 50K reads/day)
- **Total**: **$0/month** for up to 300 daily users

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

