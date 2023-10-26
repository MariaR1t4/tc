// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import app from 'next/app';

const firebaseConfig = {
    apiKey: "AIzaSyDFdan43fXzt2fHF7ep6qfcMlm907W-vMk",
    authDomain: "alumnus-402118.firebaseapp.com",
    projectId: "alumnus-402118",
    storageBucket: "alumnus-402118.appspot.com",
    messagingSenderId: "368441154494",
    appId: "1:368441154494:web:2965eb0b8470d7ec7a77ef",
    measurementId: "G-3M6SPN6028"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
