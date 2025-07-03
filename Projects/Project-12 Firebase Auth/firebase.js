// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAixhLeQwDVnr80PQtmqUSe_QHpeLRXGuk",
  authDomain: "authantication-7fc5b.firebaseapp.com",
  projectId: "authantication-7fc5b",
  storageBucket: "authantication-7fc5b.firebasestorage.app",
  messagingSenderId: "567512806796",
  appId: "1:567512806796:web:5b382d00ed0056eea952a9",
  measurementId: "G-GQ50VXPSXY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider;