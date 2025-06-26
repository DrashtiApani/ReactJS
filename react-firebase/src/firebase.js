// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjDbIbf1szBwIuSXwjoq1X2jCp3sSi4Ho",
  authDomain: "react-firebase-realtimedatabas.firebaseapp.com",
  databaseURL: "https://react-firebase-realtimedatabas-default-rtdb.firebaseio.com",
  projectId: "react-firebase-realtimedatabas",
  storageBucket: "react-firebase-realtimedatabas.firebasestorage.app",
  messagingSenderId: "1019594600927",
  appId: "1:1019594600927:web:b872e892a91fe4b88f546a",
  measurementId: "G-H7KZGVPJDF"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

