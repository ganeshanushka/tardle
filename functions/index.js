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

// Base URL for all email links - use custom domain once verified
// TODO: Once playtardle.com is verified in Firebase Hosting, this will be used for all emails
const BASE_URL = 'https://playtardle.com';
// Fallback to Firebase Hosting URL if custom domain not ready:
// const BASE_URL = 'https://tardle-c0c26.web.app';

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
                <a href="${BASE_URL}/play.html">Play Tardle</a>
                <p>If you want to unsubscribe, click <a href="${BASE_URL}/unsubscribe.html?email=${encodeURIComponent(email)}">here</a>.</p>
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
// IMPORTANT: This function ONLY sends the email - it does NOT change the email address
// The email will ONLY be changed when completeEmailChange is called after verification
exports.sendEmailChangeVerification = functions.https.onCall(async (data, context) => {
  try {
    const { email, code, currentEmail, username, uid } = data;

    if (!email || !code || !currentEmail) {
      throw new functions.https.HttpsError('invalid-argument', 'Email, code, and currentEmail are required');
    }

    // Verify user is authenticated
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }
    
    // Use uid from data if provided, otherwise use context.auth.uid
    const userId = uid || context.auth.uid;
    
    // IMPORTANT: Do NOT update the email here - only send the verification email
    // The email will be updated by completeEmailChange after the user clicks the link
    console.log(`Sending email change verification to ${email} for user ${userId}`);
    console.log('  Current email:', currentEmail);
    console.log('  New email:', email);
    console.log('  Code:', code);
    console.log('  ⚠️ Email will NOT be changed until user clicks verification link');

    // Use the global resend instance (initialized at module load with config)
    // This is the same approach used by sendVerificationCode
    if (!resend) {
      throw new functions.https.HttpsError('failed-precondition', 'Resend API key is not configured. Please set RESEND_API_KEY in Firebase Functions config.');
    }

    // Build verification URL - include user ID, code, and email as query parameters
    // Uses BASE_URL constant (playtardle.com once verified)
    const verificationUrl = `${BASE_URL}/verify-email-change.html?uid=${userId}&code=${code}&email=${encodeURIComponent(email)}`;

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

// Find user by verification code (for backward compatibility with old links)
exports.findUserByVerificationCode = functions.https.onCall(async (data, context) => {
  try {
    const { code, email } = data;

    if (!code || !email) {
      throw new functions.https.HttpsError('invalid-argument', 'Code and email are required');
    }

    // Search for user with this verification code
    const usersRef = db.collection('users');
    const querySnapshot = await usersRef.get();

    for (const doc of querySnapshot.docs) {
      const userData = doc.data();
      if (userData.emailChangeVerification &&
          userData.emailChangeVerification.code === code &&
          userData.emailChangeVerification.newEmail.toLowerCase() === email.toLowerCase()) {
        console.log(`Found user ${doc.id} by verification code`);
        return { uid: doc.id };
      }
    }

    throw new functions.https.HttpsError('not-found', 'User not found with this verification code');
  } catch (err) {
    console.error("Error finding user by verification code:", err);
    if (err instanceof functions.https.HttpsError) {
      throw err;
    }
    throw new functions.https.HttpsError('internal', 'Failed to find user');
  }
});

// Complete email change verification (works without user being logged in)
exports.completeEmailChange = functions.https.onCall(async (data, context) => {
  try {
    const { uid, code, newEmail } = data;

    if (!uid || !code || !newEmail) {
      throw new functions.https.HttpsError('invalid-argument', 'User ID, code, and new email are required');
    }

    // Get user document from Firestore
    const userDocRef = db.collection('users').doc(uid);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      throw new functions.https.HttpsError('not-found', 'User not found');
    }

    const userData = userDoc.data();
    const emailChangeData = userData.emailChangeVerification;

    if (!emailChangeData) {
      throw new functions.https.HttpsError('not-found', 'Verification code not found or has expired');
    }

    // Verify code matches
    if (emailChangeData.code !== code) {
      throw new functions.https.HttpsError('invalid-argument', 'Invalid verification code');
    }

    // Verify email matches
    if (emailChangeData.newEmail.toLowerCase() !== newEmail.toLowerCase()) {
      throw new functions.https.HttpsError('invalid-argument', 'Email mismatch');
    }

    // Check if code has expired
    const expiresAt = emailChangeData.expiresAt;
    let isExpired = false;
    if (expiresAt) {
      if (expiresAt.toMillis) {
        isExpired = expiresAt.toMillis() < Date.now();
      } else if (typeof expiresAt === 'number') {
        isExpired = expiresAt < Date.now();
      }
    }
    
    if (isExpired) {
      throw new functions.https.HttpsError('deadline-exceeded', 'Verification code has expired');
    }

    const oldEmail = userData.email || 'unknown';
    console.log(`Starting email change for user ${uid}:`);
    console.log(`  Old email: ${oldEmail}`);
    console.log(`  New email: ${newEmail}`);

    // CRITICAL: Check if the new email is already in use by another account
    try {
      const existingUser = await admin.auth().getUserByEmail(newEmail);
      if (existingUser && existingUser.uid !== uid) {
        console.error(`❌ Email ${newEmail} is already in use by user ${existingUser.uid}`);
        throw new functions.https.HttpsError('already-exists', `The email address ${newEmail} is already associated with another account. Please use a different email address.`);
      }
    } catch (checkError) {
      // If it's our custom error, re-throw it
      if (checkError instanceof functions.https.HttpsError) {
        throw checkError;
      }
      // If getUserByEmail throws 'user-not-found', that's good - email is available
      if (checkError.code === 'auth/user-not-found') {
        console.log(`✓ Email ${newEmail} is available (not in use by another account)`);
      } else {
        // Some other error - log it but continue (might be a transient issue)
        console.warn(`⚠️ Could not verify email availability: ${checkError.message}`);
      }
    }

    // Update email in Firebase Authentication using Admin SDK
    await admin.auth().updateUser(uid, {
      email: newEmail,
      emailVerified: true
    });

    console.log(`✓ Email updated in Firebase Auth for user ${uid} to ${newEmail}`);

    // Update Firestore user document - update email first, then delete verification field
    try {
      // First, update the email
      await userDocRef.update({ email: newEmail });
      console.log(`✓ Firestore email updated for user ${uid}`);
      
      // Then, delete the verification field
      await userDocRef.update({
        emailChangeVerification: admin.firestore.FieldValue.delete()
      });
      console.log(`✓ Verification field deleted for user ${uid}`);
    } catch (firestoreError) {
      console.error(`✗ Firestore update error:`, firestoreError);
      console.error(`  Error code:`, firestoreError.code);
      console.error(`  Error message:`, firestoreError.message);
      
      // If update fails, try set with merge (but can't delete field this way)
      try {
        await userDocRef.set({ email: newEmail }, { merge: true });
        console.log(`✓ Firestore email updated using set() with merge`);
        // Delete verification field in separate call
        await userDocRef.update({
          emailChangeVerification: admin.firestore.FieldValue.delete()
        });
        console.log(`✓ Verification field deleted`);
      } catch (retryError) {
        console.error(`✗ Firestore retry also failed:`, retryError);
        // Don't throw - Auth update is still successful
        console.warn(`⚠️ Continuing despite Firestore update failure`);
      }
    }

    // Verify the update worked
    const updatedDoc = await userDocRef.get();
    if (updatedDoc.exists) {
      const updatedData = updatedDoc.data();
      console.log(`✓ Verified Firestore update for user ${uid}`);
      console.log(`  Email in Firestore: ${updatedData.email}`);
      if (updatedData.email !== newEmail) {
        console.error(`  ⚠️ Email mismatch! Expected: ${newEmail}, Got: ${updatedData.email}`);
        // Force update one more time
        await userDocRef.set({ email: newEmail }, { merge: true });
        console.log(`  Force updated Firestore email`);
      } else {
        console.log(`  ✓ Email matches in Firestore`);
      }
    } else {
      console.error(`  ⚠️ User document not found after update!`);
    }

    return { success: true, newEmail: newEmail };
  } catch (err) {
    console.error("Error completing email change:", err);
    if (err instanceof functions.https.HttpsError) {
      throw err;
    }
    throw new functions.https.HttpsError('internal', 'Failed to complete email change');
  }
});

// Mark email as verified after email change
exports.markEmailVerified = functions.https.onCall(async (data, context) => {
  try {
    // Verify user is authenticated
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }

    const uid = context.auth.uid;
    
    // Use Admin SDK to mark email as verified
    await admin.auth().updateUser(uid, {
      emailVerified: true
    });

    console.log(`Email marked as verified for user ${uid}`);
    return { success: true };
  } catch (err) {
    console.error("Error marking email as verified:", err);
    throw new functions.https.HttpsError('internal', 'Failed to mark email as verified');
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

// Check if username is available (for signup validation)
exports.checkUsernameAvailability = functions.https.onCall(async (data, context) => {
  try {
    const { username } = data;
    
    if (!username || typeof username !== 'string') {
      throw new functions.https.HttpsError('invalid-argument', 'Username is required and must be a string');
    }
    
    // Trim and validate username format
    const trimmedUsername = username.trim();
    if (trimmedUsername.length < 3 || trimmedUsername.length > 20) {
      throw new functions.https.HttpsError('invalid-argument', 'Username must be between 3 and 20 characters');
    }
    
    // Check if username already exists
    const usersRef = db.collection('users');
    const usernameQuery = usersRef.where('username', '==', trimmedUsername).limit(1);
    const usernameSnapshot = await usernameQuery.get();
    
    // Return true if available (empty), false if taken
    return {
      available: usernameSnapshot.empty
    };
  } catch (error) {
    console.error('Error checking username availability:', error);
    if (error instanceof functions.https.HttpsError) {
      throw error;
    }
    throw new functions.https.HttpsError('internal', 'Error checking username availability');
  }
});

// Send password reset code
exports.sendPasswordResetCode = functions.https.onCall(async (data, context) => {
  try {
    const { email } = data;

    if (!email) {
      throw new functions.https.HttpsError('invalid-argument', 'Email is required');
    }

    // Find user by email
    let user;
    try {
      user = await admin.auth().getUserByEmail(email);
    } catch (authError) {
      if (authError.code === 'auth/user-not-found') {
        // Don't reveal that email doesn't exist - security best practice
        // Still return success to prevent email enumeration
        console.log(`Password reset requested for non-existent email: ${email}`);
        return { success: true };
      }
      throw authError;
    }

    // Find user document in Firestore
    const userDocRef = db.collection('users').doc(user.uid);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      // User exists in Auth but not in Firestore - still allow password reset
      console.log(`Password reset for user ${user.uid} without Firestore document`);
    }

    // Generate 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + (10 * 60 * 1000); // 10 minutes from now

    // Store verification code in Firestore
    if (userDoc.exists) {
      await userDocRef.update({
        passwordResetVerification: {
          code: verificationCode,
          expiresAt: expiresAt,
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        }
      });
    } else {
      // Create user document if it doesn't exist
      await userDocRef.set({
        passwordResetVerification: {
          code: verificationCode,
          expiresAt: expiresAt,
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        }
      });
    }

    // Send email with code
    if (!resend) {
      throw new functions.https.HttpsError('failed-precondition', 'Resend API key is not configured');
    }

    await resend.emails.send({
      from: "Tardle <no-reply@playtardle.com>",
      to: email,
      subject: "Reset your Tardle password",
      html: `
        <h2>Reset your password</h2>
        <p>You requested to reset your password. Enter the following code to update your login:</p>
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px;">
          <h1 style="font-size: 32px; letter-spacing: 8px; color: #001A57; margin: 0;">${verificationCode}</h1>
        </div>
        <p>This code expires in 10 minutes.</p>
        <p>If you didn't request a password reset, please ignore this email.</p>
        <p>Thanks,<br>The Tardle Team</p>
      `,
    });

    console.log(`Password reset code sent to ${email}`);
    return { success: true };
  } catch (err) {
    console.error("Error sending password reset code:", err);
    if (err instanceof functions.https.HttpsError) {
      throw err;
    }
    throw new functions.https.HttpsError('internal', 'Failed to send password reset code');
  }
});

// Verify password reset code and generate reset token
exports.verifyPasswordResetCode = functions.https.onCall(async (data, context) => {
  try {
    const { email, code } = data;

    if (!email || !code) {
      throw new functions.https.HttpsError('invalid-argument', 'Email and code are required');
    }

    // Find user by email
    let user;
    try {
      user = await admin.auth().getUserByEmail(email);
    } catch (authError) {
      if (authError.code === 'auth/user-not-found') {
        throw new functions.https.HttpsError('not-found', 'Invalid or expired verification code');
      }
      throw authError;
    }

    // Get user document from Firestore
    const userDocRef = db.collection('users').doc(user.uid);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      throw new functions.https.HttpsError('not-found', 'Invalid or expired verification code');
    }

    const userData = userDoc.data();
    const resetData = userData.passwordResetVerification;

    if (!resetData) {
      throw new functions.https.HttpsError('not-found', 'Invalid or expired verification code');
    }

    // Verify code matches
    if (resetData.code !== code) {
      throw new functions.https.HttpsError('invalid-argument', 'Invalid verification code');
    }

    // Check if code has expired
    const expiresAt = resetData.expiresAt;
    let isExpired = false;
    if (expiresAt) {
      if (expiresAt.toMillis) {
        isExpired = expiresAt.toMillis() < Date.now();
      } else if (typeof expiresAt === 'number') {
        isExpired = expiresAt < Date.now();
      }
    }
    
    if (isExpired) {
      throw new functions.https.HttpsError('deadline-exceeded', 'Verification code has expired');
    }

    // Generate reset token (secure random string)
    const resetToken = require('crypto').randomBytes(32).toString('hex');
    const tokenExpiresAt = Date.now() + (10 * 60 * 1000); // 10 minutes

    // Store reset token
    await userDocRef.update({
      passwordResetToken: {
        token: resetToken,
        expiresAt: tokenExpiresAt,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      },
      passwordResetVerification: admin.firestore.FieldValue.delete() // Remove code after verification
    });

    console.log(`Password reset code verified for ${email}`);
    return { success: true, token: resetToken };
  } catch (err) {
    console.error("Error verifying password reset code:", err);
    if (err instanceof functions.https.HttpsError) {
      throw err;
    }
    throw new functions.https.HttpsError('internal', 'Failed to verify password reset code');
  }
});

// Reset password with token
exports.resetPasswordWithToken = functions.https.onCall(async (data, context) => {
  try {
    const { email, token, newPassword } = data;

    if (!email || !token || !newPassword) {
      throw new functions.https.HttpsError('invalid-argument', 'Email, token, and new password are required');
    }

    // Validate password (same rules as signup)
    if (newPassword.length < 8 || newPassword.length > 128) {
      throw new functions.https.HttpsError('invalid-argument', 'Password must be between 8 and 128 characters');
    }

    // Find user by email
    let user;
    try {
      user = await admin.auth().getUserByEmail(email);
    } catch (authError) {
      if (authError.code === 'auth/user-not-found') {
        throw new functions.https.HttpsError('not-found', 'Invalid reset token');
      }
      throw authError;
    }

    // Get user document from Firestore
    const userDocRef = db.collection('users').doc(user.uid);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      throw new functions.https.HttpsError('not-found', 'Invalid reset token');
    }

    const userData = userDoc.data();
    const tokenData = userData.passwordResetToken;

    if (!tokenData) {
      throw new functions.https.HttpsError('not-found', 'Invalid or expired reset token');
    }

    // Verify token matches
    if (tokenData.token !== token) {
      throw new functions.https.HttpsError('invalid-argument', 'Invalid reset token');
    }

    // Check if token has expired
    const expiresAt = tokenData.expiresAt;
    let isExpired = false;
    if (expiresAt) {
      if (expiresAt.toMillis) {
        isExpired = expiresAt.toMillis() < Date.now();
      } else if (typeof expiresAt === 'number') {
        isExpired = expiresAt < Date.now();
      }
    }
    
    if (isExpired) {
      throw new functions.https.HttpsError('deadline-exceeded', 'Reset token has expired');
    }

    // Update password using Admin SDK
    await admin.auth().updateUser(user.uid, {
      password: newPassword
    });

    // Remove reset token from Firestore
    await userDocRef.update({
      passwordResetToken: admin.firestore.FieldValue.delete()
    });

    console.log(`Password reset successful for ${email}`);
    return { success: true };
  } catch (err) {
    console.error("Error resetting password:", err);
    if (err instanceof functions.https.HttpsError) {
      throw err;
    }
    throw new functions.https.HttpsError('internal', 'Failed to reset password');
  }
});

