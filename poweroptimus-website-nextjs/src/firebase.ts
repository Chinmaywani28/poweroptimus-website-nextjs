// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Copy your Firebase config from the Firebase console → Project Settings
const firebaseConfig = {
  apiKey: "AIzaSyDXCbN9T7uFcaoF9Zk4AgUNeO062fqU7e0",
  authDomain: "poweroptimus-prod.firebaseapp.com",
  projectId: "poweroptimus-prod",
  storageBucket: "poweroptimus-prod.firebasestorage.app",
  messagingSenderId: "493451623955",
  appId: "1:493451623955:web:649ce9282a6ac2ea3249e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
