// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9xXAUuxZy5cVjTRhV13ZuYEkU9QylG3s",
  authDomain: "myportfolio-c799b.firebaseapp.com",
  projectId: "myportfolio-c799b",
  storageBucket: "myportfolio-c799b.appspot.com",
  messagingSenderId: "303923101425",
  appId: "1:303923101425:web:8a41376f8b6d764539f350",
  measurementId: "G-LDY981SZNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and export it for use in other parts of the app
// Note: Analytics will only work in the browser environment
if (typeof window !== 'undefined') {
    try {
        getAnalytics(app);
    } catch (error) {
        console.error('Error initializing Analytics:', error);
    }
}


export default app;
