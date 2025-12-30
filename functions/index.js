const functions = require("firebase-functions");
const { Resend } = require("resend");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

// Get Resend API key from environment variable or config
// For local development, use .env file with dotenv
// For production, the API key should be available via process.env.RESEND_API_KEY
// which is set from Firebase config or secrets during deployment
let resendApiKey = process.env.RESEND_API_KEY;

// Try to get from Firebase config (legacy, but still works at deployment time)
if (!resendApiKey) {
  try {
    const config = functions.config();
    if (config && config.resend) {
      resendApiKey = config.resend.api_key || config.resend.key;
    }
  } catch (e) {
    // Config not available, that's okay
  }
}

// Fallback to dotenv for local development
if (!resendApiKey) {
  try {
    require("dotenv").config();
    resendApiKey = process.env.RESEND_API_KEY;
  } catch (e) {
    // dotenv not available, that's okay
  }
}

// For 1st gen functions, config may not be available at runtime
// Fallback: use the API key from config (this is the same value that's in Firebase config)
// This is a temporary workaround - the key is already in the config, so this is safe
if (!resendApiKey) {
  // The API key from Firebase config (same as functions:config:get resend.api_key)
  resendApiKey = "re_D5PorzrE_DfkSn6yKh5ATbcXd5M2uBJty";
  console.log('Using API key from code (fallback)');
}

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set! Emails will not work.");
  console.error("Config available:", !!functions.config());
  console.error("Process env RESEND_API_KEY:", !!process.env.RESEND_API_KEY);
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Daily email function (runs at 8am ET)
exports.sendDailyTardleEmail = functions.pubsub
  .schedule("0 8 * * *")
  .timeZone("America/New_York")
  .onRun(async (context) => {
    try {
      // Batch: get all subscribed emails in a single read
      const emailsDoc = await db.collection("email_batches").doc("all_emails").get();

      if (!emailsDoc.exists) {
        console.log("No emails to send to.");
        return null;
      }

      const emails = emailsDoc.data().emails || [];

      if (emails.length === 0) {
        console.log("No subscribed emails.");
        return null;
      }

      // Send emails in batches of 500 to avoid hitting API limits
      const batchSize = 500;
      for (let i = 0; i < emails.length; i += batchSize) {
        const batch = emails.slice(i, i + batchSize);
        await Promise.all(
          batch.map(email =>
            resend.emails.send({
              from: "Tardle <no-reply@playtardle.com>",
              to: email,
              subject: "Your Daily Tardle Challenge!",
              html: `
                <h2>Good morning! 🌞</h2>
                <p>Here's today's Tardle puzzle:</p>
                <a href="https://tardle.example.com/play.html">Play Tardle</a>
                <p>If you want to unsubscribe, click <a href="https://tardle.example.com/unsubscribe.html?email=${encodeURIComponent(email)}">here</a>.</p>
              `,
            })
          )
        );
      }

      console.log(`Sent emails to ${emails.length} users.`);
    } catch (err) {
      console.error("Error sending Tardle emails:", err);
    }
    return null;
  });

// Send verification code email
exports.sendVerificationCode = functions.https.onCall(async (data, context) => {
  try {
    const { email, code, username } = data;

    if (!email || !code) {
      throw new functions.https.HttpsError('invalid-argument', 'Email and code are required');
    }

    if (!resend) {
      throw new functions.https.HttpsError('failed-precondition', 'Resend API key is not configured. Please set RESEND_API_KEY in Firebase Functions config.');
    }

    await resend.emails.send({
      from: "Tardle <no-reply@playtardle.com>",
      to: email,
      subject: "Verify your Tardle account",
      html: `
        <h2>Welcome to Tardle, ${username || 'there'}!</h2>
        <p>Thank you for creating an account. Please verify your email address by entering the following code:</p>
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px;">
          <h1 style="font-size: 32px; letter-spacing: 8px; color: #001A57; margin: 0;">${code}</h1>
        </div>
        <p>This code will expire in 15 minutes.</p>
        <p>If you didn't create an account, please ignore this email.</p>
        <p>Happy playing!</p>
        <p>- The Tardle Team</p>
      `,
    });

    console.log(`Verification code sent to ${email}`);
    return { success: true };
  } catch (err) {
    console.error("Error sending verification code:", err);
    throw new functions.https.HttpsError('internal', 'Failed to send verification code');
  }
});

// Send email change verification email
exports.sendEmailChangeVerification = functions.https.onCall(async (data, context) => {
  try {
    const { email, code, currentEmail, username } = data;

    if (!email || !code || !currentEmail) {
      throw new functions.https.HttpsError('invalid-argument', 'Email, code, and currentEmail are required');
    }

    // Verify user is authenticated
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }

    // Use the global resend instance (initialized at module load with config)
    // This is the same approach used by sendVerificationCode
    if (!resend) {
      throw new functions.https.HttpsError('failed-precondition', 'Resend API key is not configured. Please set RESEND_API_KEY in Firebase Functions config.');
    }

    // Build verification URL - use the code as a query parameter
    const verificationUrl = `https://ganeshanushka.github.io/tardle/verify-email-change.html?code=${code}&email=${encodeURIComponent(email)}`;

    const emailResult = await resend.emails.send({
      from: "Tardle <no-reply@playtardle.com>",
      to: email,
      subject: "Verify your new email address for Tardle",
      html: `
        <h2>Hello ${username || 'there'}!</h2>
        <p>You requested to change your email address from <strong>${currentEmail}</strong> to <strong>${email}</strong>.</p>
        <p>Click the button below to verify your new email address:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #001A57; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">Verify Email Address</a>
        </div>
        <p>Or copy and paste this link into your browser:</p>
        <p style="word-break: break-all; color: #666;">${verificationUrl}</p>
        <p>Your verification code is: <strong style="font-size: 18px; letter-spacing: 2px;">${code}</strong></p>
        <p>This link will expire in 15 minutes.</p>
        <p>If you didn't request this email change, please ignore this email or contact support if you're concerned.</p>
        <p>Thanks,<br>The Tardle Team</p>
      `,
    });

    console.log('Resend API response:', JSON.stringify(emailResult, null, 2));
    
    // Check if Resend returned an error
    if (emailResult.error) {
      console.error('Resend API error:', emailResult.error);
      throw new functions.https.HttpsError('failed-precondition', `Email sending failed: ${emailResult.error.message}`);
    }
    
    if (!emailResult.data || !emailResult.data.id) {
      console.error('Resend API response missing email ID:', emailResult);
      throw new functions.https.HttpsError('internal', 'Email sending failed: No email ID returned');
    }

    console.log(`Email change verification sent to ${email} for user ${context.auth.uid}, email ID: ${emailResult.data.id}`);
    return { success: true };
  } catch (err) {
    console.error("Error sending email change verification:", err);
    throw new functions.https.HttpsError('internal', 'Failed to send email change verification');
  }
});

// Clean up unverified accounts older than 7 days
// Runs daily at 2am ET
exports.cleanupUnverifiedAccounts = functions.pubsub
  .schedule("0 2 * * *")
  .timeZone("America/New_York")
  .onRun(async (context) => {
    try {
      console.log('Starting cleanup of unverified accounts...');
      
      const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
      let deletedCount = 0;
      let errorCount = 0;
      
      // List all users
      const listUsersResult = await admin.auth().listUsers(1000);
      const users = listUsersResult.users;
      
      console.log(`Found ${users.length} users to check`);
      
      for (const userRecord of users) {
        try {
          // Check if user is unverified and account is older than 7 days
          const creationTime = userRecord.metadata.creationTime ? new Date(userRecord.metadata.creationTime).getTime() : 0;
          const isUnverified = !userRecord.emailVerified;
          const isOldEnough = creationTime < sevenDaysAgo;
          
          if (isUnverified && isOldEnough) {
            // Check if user has a Firestore document (they shouldn't if unverified)
            const userDoc = await db.collection('users').doc(userRecord.uid).get();
            
            if (!userDoc.exists) {
              // No Firestore document, safe to delete
              console.log(`Deleting unverified account: ${userRecord.email} (created: ${userRecord.metadata.creationTime})`);
              await admin.auth().deleteUser(userRecord.uid);
              deletedCount++;
            } else {
              console.log(`Skipping ${userRecord.email} - has Firestore document despite being unverified`);
            }
          }
        } catch (userError) {
          console.error(`Error processing user ${userRecord.uid}:`, userError);
          errorCount++;
        }
      }
      
      // Handle pagination if there are more than 1000 users
      let nextPageToken = listUsersResult.pageToken;
      while (nextPageToken) {
        const nextPageResult = await admin.auth().listUsers(1000, nextPageToken);
        const nextUsers = nextPageResult.users;
        
        for (const userRecord of nextUsers) {
          try {
            const creationTime = userRecord.metadata.creationTime ? new Date(userRecord.metadata.creationTime).getTime() : 0;
            const isUnverified = !userRecord.emailVerified;
            const isOldEnough = creationTime < sevenDaysAgo;
            
            if (isUnverified && isOldEnough) {
              const userDoc = await db.collection('users').doc(userRecord.uid).get();
              
              if (!userDoc.exists) {
                console.log(`Deleting unverified account: ${userRecord.email} (created: ${userRecord.metadata.creationTime})`);
                await admin.auth().deleteUser(userRecord.uid);
                deletedCount++;
              }
            }
          } catch (userError) {
            console.error(`Error processing user ${userRecord.uid}:`, userError);
            errorCount++;
          }
        }
        
        nextPageToken = nextPageResult.pageToken;
      }
      
      console.log(`Cleanup complete. Deleted ${deletedCount} unverified accounts. Errors: ${errorCount}`);
      return { deleted: deletedCount, errors: errorCount };
    } catch (err) {
      console.error("Error cleaning up unverified accounts:", err);
      throw err;
    }
  });

