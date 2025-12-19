const { onSchedule } = require("firebase-functions/v2/scheduler");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { Resend } = require("resend");

// Initialize Firebase Admin
initializeApp();
const db = getFirestore();

// Daily reminder email function
exports.dailyReminder = onSchedule(
  {
    schedule: "0 10 * * *", // Runs every day at 10am
    timeZone: "America/New_York",
    secrets: ["RESEND_API_KEY"],
  },
  async (event) => {
    console.log("Starting daily reminder email job...");
    
    try {
      // Initialize Resend with API key from secrets
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      // Get today's date in YYYY-MM-DD format
      const today = new Date().toISOString().slice(0, 10);
      
      // Query Firestore for all users subscribed to emails
      // Using emailSubscribed field (matches your existing code)
      const usersSnap = await db
        .collection("users")
        .where("emailSubscribed", "==", true)
        .get();
      
      if (usersSnap.empty) {
        console.log("No subscribed users found.");
        return null;
      }
      
      console.log(`Found ${usersSnap.size} subscribed users.`);
      
      // Send email to each subscribed user
      for (const doc of usersSnap.docs) {
        const userData = doc.data();
        const email = userData.email;
        const username = userData.username || "Tardle Player";
        const lastSent = userData.lastSent;
        
        // Skip if email was already sent today
        if (lastSent === today) {
          console.log(`Skipping ${email} - already sent today`);
          continue;
        }
        
        if (!email) {
          console.log(`Skipping user ${doc.id} - no email address`);
          continue;
        }
        
        try {
          // Send email via Resend
          const { data, error } = await resend.emails.send({
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
          });
          
          if (error) {
            console.error(`Error sending email to ${email}:`, error);
          } else {
            console.log(`Email sent successfully to ${email}:`, data);
            
            // Update lastSent date to prevent duplicate sends
            await doc.ref.update({
              lastSent: today,
            });
          }
        } catch (error) {
          console.error(`Error sending email to ${email}:`, error);
        }
      }
      
      console.log("Daily reminder emails sent successfully.");
      return null;
    } catch (error) {
      console.error("Error in dailyReminder function:", error);
      return null;
    }
  }
);

