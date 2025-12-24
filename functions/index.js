const functions = require("firebase-functions");
const { Resend } = require("resend");
const admin = require("firebase-admin");
require("dotenv").config(); // Load .env variables

admin.initializeApp();
const db = admin.firestore();

const resend = new Resend(process.env.RESEND_API_KEY);

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
              from: "Tardle <no-reply@tardle.com>",
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

    await resend.emails.send({
      from: "Tardle <no-reply@tardle.com>",
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

