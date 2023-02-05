// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj_CNUcfww6rkzttVUOWLHlgWMOnMJINU",
  authDomain: "todolist-79c71.firebaseapp.com",
  projectId: "todolist-79c71",
  storageBucket: "todolist-79c71.appspot.com",
  messagingSenderId: "468753048606",
  appId: "1:468753048606:web:e20715f10b9d9a2bebfa0f",
  measurementId: "G-NKCFCW6HHF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore();
