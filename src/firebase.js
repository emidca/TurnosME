// Importa solo los módulos necesarios
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCokY5atRdvU8UkOgsAJDuoWwzinFCd--s",
  authDomain: "turnos-me.firebaseapp.com",
  projectId: "turnos-me",
  storageBucket: "turnos-me.firebasestorage.app",
  messagingSenderId: "314472133464",
  appId: "1:314472133464:web:e53cb026192511a3806b2d",
  measurementId: "G-E9GNRFNW68" // Opcional, puedes omitirlo si no usas Analytics
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore (Base de datos) y Auth (Autenticación)
export const db = getFirestore(app); // Base de datos
export const auth = getAuth(app);    // Autenticación
