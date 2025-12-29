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

// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signOut, reauthenticateWithCredential, EmailAuthProvider, updateEmail, updatePassword, sendEmailVerification, applyActionCode, verifyBeforeUpdateEmail } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, serverTimestamp, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-functions.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication, Firestore, and Functions
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// Export for use in other files
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseAuthFunctions = {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signOut,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
  updatePassword,
  sendEmailVerification,
  applyActionCode,
  verifyBeforeUpdateEmail
};

// Debug: Log to verify verifyBeforeUpdateEmail is exported
console.log('Firebase config loaded. verifyBeforeUpdateEmail type:', typeof verifyBeforeUpdateEmail);
console.log('Available in window.firebaseAuthFunctions:', typeof window.firebaseAuthFunctions.verifyBeforeUpdateEmail);
window.firebaseFirestoreFunctions = {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where
};
window.firebaseFunctions = {
  httpsCallable
};
window.firebaseFunctionsInstance = functions;

