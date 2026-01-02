// Script to check password reset code in Firestore
// Run from functions directory: node check-reset-code.js <email>

const admin = require('firebase-admin');

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'tardle-c0c26'
  });
}

const db = admin.firestore();

async function checkPasswordResetCode(email) {
  try {
    console.log(`Looking up password reset code for: ${email}\n`);
    
    // Find user by email
    const user = await admin.auth().getUserByEmail(email);
    console.log(`✓ Found user: ${user.uid}\n`);
    
    // Get user document from Firestore
    const userDoc = await db.collection('users').doc(user.uid).get();
    
    if (!userDoc.exists) {
      console.log('✗ User document not found in Firestore');
      return;
    }
    
    const userData = userDoc.data();
    const resetData = userData.passwordResetVerification;
    
    if (!resetData) {
      console.log('✗ No password reset verification data found');
      return;
    }
    
    console.log('=== Password Reset Code ===');
    console.log(`Code: ${resetData.code}`);
    
    if (resetData.createdAt) {
      const createdDate = resetData.createdAt.toDate ? resetData.createdAt.toDate() : new Date(resetData.createdAt);
      console.log(`Created: ${createdDate.toLocaleString()}`);
    }
    
    // Check expiration
    if (resetData.expiresAt) {
      const expiresDate = typeof resetData.expiresAt === 'number' 
        ? new Date(resetData.expiresAt) 
        : (resetData.expiresAt.toDate ? resetData.expiresAt.toDate() : new Date(resetData.expiresAt));
      console.log(`Expires: ${expiresDate.toLocaleString()}`);
      
      const now = new Date();
      if (expiresDate > now) {
        const minutesLeft = Math.floor((expiresDate - now) / 1000 / 60);
        console.log(`Status: ✓ VALID (expires in ${minutesLeft} minutes)`);
      } else {
        console.log(`Status: ✗ EXPIRED`);
      }
    }
    
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    if (error.code === 'auth/user-not-found') {
      console.error(`User not found with email: ${email}`);
    }
  } finally {
    process.exit(0);
  }
}

// Get email from command line argument
const email = process.argv[2];
if (!email) {
  console.error('Usage: node check-reset-code.js <email>');
  console.error('Example: node check-reset-code.js user@example.com');
  process.exit(1);
}

checkPasswordResetCode(email);

