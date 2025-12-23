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
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signOut, reauthenticateWithCredential, EmailAuthProvider, updateEmail, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, serverTimestamp, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

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
  sendEmailVerification
};
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

