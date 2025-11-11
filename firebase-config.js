// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ-sNiiGZqM6PF2WMf9rxx166oW8btFaE",
  authDomain: "tardle-c0c26.firebaseapp.com",
  projectId: "tardle-c0c26",
  storageBucket: "tardle-c0c26.firebasestorage.app",
  messagingSenderId: "1067984572977",
  appId: "1:1067984572977:web:ed3abe48d5f74cde12fb10",
  measurementId: "G-C0R98KC5RF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = firebase.auth();
const db = firebase.firestore();

