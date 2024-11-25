// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVJOCLukgFcPQ3ZG7-ZeNBC70_Wf6FG7s",
  authDomain: "hello-tractor-80408.firebaseapp.com",
  projectId: "hello-tractor-80408",
  storageBucket: "hello-tractor-80408.firebasestorage.app",
  messagingSenderId: "309676444753",
  appId: "1:309676444753:web:9e6a65ca1a1a687f73fc70",
  measurementId: "G-TVMT7V2G1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();