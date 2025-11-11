# Firebase Setup Instructions

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

## Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication** → **Get started**
2. Click on **Sign-in method** tab
3. Enable **Email/Password** authentication
4. Click **Save**

## Step 3: Enable Firestore Database

1. In Firebase Console, go to **Firestore Database** → **Create database**
2. Start in **test mode** (for development) or **production mode** (for production)
3. Choose a location for your database
4. Click **Enable**

## Step 4: Get Your Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click the **Web** icon (`</>`) to add a web app
4. Register your app with a nickname
5. Copy the Firebase configuration object

## Step 5: Update firebase-config.js

Open `firebase-config.js` and replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 6: Set Up Firestore Security Rules (Important!)

Go to **Firestore Database** → **Rules** and add these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      // Users can only read/write their own data
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Click **Publish** to save the rules.

## Step 7: Test Your Setup

1. Open `login.html` in your browser
2. Enter an email address
3. Click "Continue"
4. If the email doesn't exist, you'll be redirected to sign up
5. Create an account and test the login flow

## What's Integrated

- ✅ Firebase Authentication (Email/Password)
- ✅ Firestore Database (User stats storage)
- ✅ Automatic auth state management
- ✅ User stats sync (gamesPlayed, currentStreak, maxStreak)

## Troubleshooting

- **"firebase is not defined"**: Make sure `firebase-config.js` is loaded before `app.js`
- **Authentication errors**: Check that Email/Password is enabled in Firebase Console
- **Firestore errors**: Check that Firestore is enabled and security rules are set correctly

