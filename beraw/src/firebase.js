// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHJ-RHJVJP8mNl2JuDbejMkAMfzJo7Kng",
  authDomain: "beraw-1.firebaseapp.com",
  projectId: "beraw-1",
  storageBucket: "beraw-1.appspot.com",
  messagingSenderId: "221384795193",
  appId: "1:221384795193:web:2776083c30f2bd8ead99e8",
  measurementId: "G-E8783XD4F8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
