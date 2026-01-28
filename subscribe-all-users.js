/**
 * Script to subscribe all existing users to reminder emails
 * 
 * This script calls the Cloud Function to subscribe all existing users.
 * Run this once after deploying the function.
 * 
 * Usage:
 * 1. Make sure you're authenticated: firebase login
 * 2. Run: node subscribe-all-users.js
 */

const admin = require('firebase-admin');
const functions = require('firebase-functions');

// Initialize Firebase Admin (you may need to set up service account)
// For local execution, you can use Application Default Credentials
// or set GOOGLE_APPLICATION_CREDENTIALS environment variable

async function subscribeAllUsers() {
  try {
    // Initialize admin if not already initialized
    if (!admin.apps.length) {
      // Try to use default credentials (works if you're logged in with firebase login)
      admin.initializeApp({
        projectId: 'tardle-c0c26'
      });
    }

    // Get the function URL
    // For callable functions, you need to call them via HTTP or use the Firebase SDK
    // Since this is a callable function, we'll use a direct Firestore approach instead
    
    console.log('Fetching all users from Firestore...');
    const db = admin.firestore();
    const usersSnapshot = await db.collection('users').get();
    
    console.log(`Found ${usersSnapshot.size} total users`);
    
    let subscribedCount = 0;
    let alreadySubscribedCount = 0;
    let errorCount = 0;
    const batchSize = 500;
    
    const users = usersSnapshot.docs;
    for (let i = 0; i < users.length; i += batchSize) {
      const batch = db.batch();
      const batchUsers = users.slice(i, i + batchSize);
      
      for (const userDoc of batchUsers) {
        const userData = userDoc.data();
        const currentSubscriptionStatus = userData.emailSubscribed;
        
        if (currentSubscriptionStatus !== true) {
          batch.update(userDoc.ref, {
            emailSubscribed: true,
            subscriptionUpdatedAt: admin.firestore.FieldValue.serverTimestamp()
          });
          subscribedCount++;
        } else {
          alreadySubscribedCount++;
        }
      }
      
      try {
        await batch.commit();
        console.log(`Processed batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(users.length / batchSize)}`);
      } catch (batchError) {
        console.error(`Error committing batch ${Math.floor(i / batchSize) + 1}:`, batchError);
        errorCount += batchUsers.length;
      }
    }
    
    console.log('\n=== Results ===');
    console.log(`Total users: ${usersSnapshot.size}`);
    console.log(`Newly subscribed: ${subscribedCount}`);
    console.log(`Already subscribed: ${alreadySubscribedCount}`);
    console.log(`Errors: ${errorCount}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the function
subscribeAllUsers().then(() => {
  console.log('\nDone!');
  process.exit(0);
}).catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
