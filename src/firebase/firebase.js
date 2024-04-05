
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDH9Va2V6bYYPpqQ5tc6Vc2OTAg_QJqU4",
  authDomain: "cafe-be1b7.firebaseapp.com",
  projectId: "cafe-be1b7",
  storageBucket: "cafe-be1b7.appspot.com",
  messagingSenderId: "404821386627",
  appId: "1:404821386627:web:fb93287c18015da487c2b6",
  measurementId: "G-10V837ZZJK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProviderAuth = new GoogleAuthProvider();
export const storage = getStorage();