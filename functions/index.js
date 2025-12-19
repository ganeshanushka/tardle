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

