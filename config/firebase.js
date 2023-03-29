import { initializeApp } from "firebase/app";
// import {createUserWithEmailAndPassword} from 'firebase/auth'
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA8mp0IjZ9CDwbeOrjH2FKQVDiCdxkBbRA",
  authDomain: "ladichat-75e36.firebaseapp.com",
  projectId: "ladichat-75e36",
  storageBucket: "ladichat-75e36.appspot.com",
  messagingSenderId: "1014968288460",
  appId: "1:1014968288460:web:4e559f1e01b538e9d5ee69",
  measurementId: "G-B7ESE3W9KD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
// const createUser = createUserWithEmailAndPassword(app)

export { auth, app, provider, db };