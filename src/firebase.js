// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc , setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApphZZXS6kDJN7ZF5r40QFmajRJWsn4-k",
  authDomain: "fintrack---finance-tracker.firebaseapp.com",
  projectId: "fintrack---finance-tracker",
  storageBucket: "fintrack---finance-tracker.appspot.com",
  messagingSenderId: "39597711630",
  appId: "1:39597711630:web:e10daef227362d44d5f75f",
  measurementId: "G-QF6G0YKHTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };