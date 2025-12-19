const functions = require("firebase-functions");
const { Resend } = require("resend");
const admin = require("firebase-admin");
require("dotenv").config(); // Load .env variables

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// Initialize Resend with API key from .env
const resend = new Resend(process.env.RESEND_API_KEY);

// Daily email function (runs at 8am ET)
exports.sendDailyTardleEmail = functions.pubsub
  .schedule("0 8 * * *") // Runs every day at 8am
  .timeZone("America/New_York")
  .onRun(async (context) => {
    console.log("Starting daily reminder email job...");
    
    try {

      // Query Firestore for all users subscribed to emails
      // Using emailSubscribed field (matches your existing code)
      const snapshot = await db
        .collection("users")
        .where("emailSubscribed", "==", true)
        .get();
      
      if (snapshot.empty) {
        console.log("No subscribed users found.");
        return null;
      }
      
      console.log(`Found ${snapshot.size} subscribed users.`);
      
      const sendPromises = [];
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        const email = data.email;
        const username = data.username || "Tardle Player";
        
        if (!email) {
          console.log(`Skipping user ${doc.id} - no email address`);
          return;
        }
        
        // Optional: Filter for UNC emails only (uncomment if needed)
        // if (!email.endsWith("@unc.edu")) {
        //   console.log(`Skipping ${email} - not a UNC email`);
        //   return;
        // }
        
        sendPromises.push(
          resend.emails.send({
            from: "Tardle <onboarding@resend.dev>", // Change to your domain later
            to: email,
            subject: "🟩 Today's Tardle is live",
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="UTF-8">
                <style>
                  body {
                    font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                  }
                  .container {
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 8px;
                  }
                  h2 {
                    color: #1a1a1a;
                    margin-top: 0;
                  }
                  .button {
                    background-color: #7BAFD4;
                    color: white;
                    padding: 12px 24px;
                    text-decoration: none;
                    border-radius: 6px;
                    display: inline-block;
                    margin: 20px 0;
                    font-weight: bold;
                  }
                  .button:hover {
                    background-color: #6a9fc0;
                  }
                  .footer {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    font-size: 12px;
                    color: #666;
                  }
                  .footer a {
                    color: #7BAFD4;
                    text-decoration: none;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <h2>Hello ${username}!</h2>
                  <p>Your daily Tardle puzzle is ready! Can you keep your streak alive?</p>
                  <a href="https://tardle-c0c26.web.app/play.html" class="button">Play Now</a>
                  <p>Keep your Tardle streak alive!</p>
                  <div class="footer">
                    <p>
                      <a href="https://tardle-c0c26.web.app/unsubscribe.html?email=${encodeURIComponent(email)}">
                        Unsubscribe from daily reminders
                      </a>
                    </p>
                  </div>
                </div>
              </body>
              </html>
            `,
          })
        );
      });
      
      await Promise.all(sendPromises);
      console.log(`Sent ${sendPromises.length} emails.`);
      return null;
    } catch (err) {
      console.error("Error sending Tardle emails:", err);
      return null;
    }
  });

