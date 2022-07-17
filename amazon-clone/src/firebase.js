// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCufG3XV0wJJ181tsXB_97yMV_Tgbi7oI",
  authDomain: "challenge-f210e.firebaseapp.com",
  projectId: "challenge-f210e",
  storageBucket: "challenge-f210e.appspot.com",
  messagingSenderId: "807117284345",
  appId: "1:807117284345:web:7c89b779cf250814315328",
  measurementId: "G-MFC7183Z45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);