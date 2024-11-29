// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd93KTibf0s9aKg9lQRKB2mvgUYvfOzew",
  authDomain: "portfoliostark.firebaseapp.com",
  projectId: "portfoliostark",
  storageBucket: "portfoliostark.firebasestorage.app",
  messagingSenderId: "682983228248",
  appId: "1:682983228248:web:e1056ea0014681dc351b2d",
  measurementId: "G-VPGZM9CWTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (if you plan to use analytics)
const analytics = getAnalytics(app);

export default app;  // Export the initialized Firebase app if needed elsewhere
