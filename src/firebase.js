/*    react-auth     */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfgCpZnV6dZnEQeg_rbXkcWWgIwZJ9iQo",
  authDomain: "react-turnos-244e1.firebaseapp.com",
  projectId: "react-turnos-244e1",
  storageBucket: "react-turnos-244e1.appspot.com",
  messagingSenderId: "927193625823",
  appId: "1:927193625823:web:f79b70aea7357b79c7a56a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
