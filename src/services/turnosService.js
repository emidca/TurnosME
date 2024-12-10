import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Importa la configuración de Firebase

// Función para obtener turnos desde Firestore
export async function fetchTurnos() {
  try {
    const querySnapshot = await getDocs(collection(db, "turnos"));
    const turnos = [];
    querySnapshot.forEach((doc) => {
      turnos.push({ id: doc.id, ...doc.data() }); // Agrega el ID del documento a los datos
    });
    return turnos;
  } catch (error) {
    console.error("Error al obtener turnos:", error);
    throw error;
  }
}
