// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnBEaR26FDs-dfnjNq65R4EbqeinNLQGg",
  authDomain: "fir-firestore-5f6cd.firebaseapp.com",
  projectId: "fir-firestore-5f6cd",
  storageBucket: "fir-firestore-5f6cd.firebasestorage.app",
  messagingSenderId: "358770000904",
  appId: "1:358770000904:web:f951ea87d4ec66c5123dbd",
  measurementId: "G-MKBVWSDFDQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);