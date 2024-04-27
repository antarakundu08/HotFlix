// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE8pZoMiR6huMDp-OItd-qFPymGMDbx0Q",
  authDomain: "netflixgpt-6ec6f.firebaseapp.com",
  projectId: "netflixgpt-6ec6f",
  storageBucket: "netflixgpt-6ec6f.appspot.com",
  messagingSenderId: "892595926771",
  appId: "1:892595926771:web:63db2683050ff2aedde986",
  measurementId: "G-C3B4WZB14X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();