// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Copy your Firebase config from the Firebase console → Project Settings

// production(poweroptimus-prod) config start

const firebaseConfig = {
  apiKey: "AIzaSyDXCbN9T7uFcaoF9Zk4AgUNeO062fqU7e0",
  authDomain: "poweroptimus-prod.firebaseapp.com",
  projectId: "poweroptimus-prod",
  storageBucket: "poweroptimus-prod.firebasestorage.app",
  messagingSenderId: "493451623955",
  appId: "1:493451623955:web:649ce9282a6ac2ea3249e6",
};

// production(poweroptimus-prod) config end
//////////////////////


// stage(poweroptimus-stage) config start

// const firebaseConfig = {
//   apiKey: "AIzaSyAfoi_VaYfGUPo7w474h7RqTRwe6SaN2cs",
//   authDomain: "poweroptimus-stage.firebaseapp.com",
//   projectId: "poweroptimus-stage",
//   storageBucket: "poweroptimus-stage.firebasestorage.app",
//   messagingSenderId: "9198945042",
//   appId: "1:9198945042:web:40617f390c7d515c74a9cb"
// };

// stage(poweroptimus-stage) config end

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
