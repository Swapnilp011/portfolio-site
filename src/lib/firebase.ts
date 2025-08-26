// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "skillslate-282ey",
  "appId": "1:1060382025488:web:d6f2b4abd01537cc9b6795",
  "storageBucket": "skillslate-282ey.firebasestorage.app",
  "apiKey": "AIzaSyA3HH7BTLy13A776LzlBehpUR4caoCpd1w",
  "authDomain": "skillslate-282ey.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "1060382025488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
