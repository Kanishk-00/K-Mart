import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };