import React, { useState, createContext, useRef, useEffect } from "react";
import { UserAuth } from "./AuthContext";
import { db } from "../firebase";
import {
  collection,
  setDoc,
  query,
  onSnapshot,
  doc,
  deleteDoc
} from "firebase/firestore";
import { MESES, MESES_NOMBRE, FECHA_ACTUAL } from "../data/semanas";
//import { semanas2022al2026 } from "../data/semanas";
//import { TURNOS } from "../data/turnos";

export const TurnoContext = createContext();

export const TurnoProvider = ({ children }) => {
  const [turnos, setTurnos] = useState([]);
  const [depilaciones, setDepilaciones] = useState([]);
  const formId = useRef(
    `${FECHA_ACTUAL.anio}-${FECHA_ACTUAL.mes}-${FECHA_ACTUAL.dia} `
  );
  const usuarioRef = useRef("");
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.displayName) {
      try {
        console.log("cargando de firestore");
        const usuario = user.displayName.replace(" ", "_");
        usuarioRef.current = usuario;
        const q = query(collection(db, usuarioRef.current));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let turnosArray = [];
          querySnapshot.forEach((doc) => {
            turnosArray.push({ ...doc.data() });
          });

          // obtuve de firebase y creo
          // turnosObj y depiObj
          const turnosObj = {};
          const depilacionesObj = {};

          turnosArray.forEach((turno) => {
            let fecha = turno.id.substring(0, 10);
            if (turno.id.length > 15) {
              if (depilacionesObj[fecha]) {
                depilacionesObj[fecha].push(turno);
              } else {
                depilacionesObj[fecha] = [turno];
              }
            } else if (turnosObj[fecha]) {
              turnosObj[fecha].push(turno);
            } else turnosObj[fecha] = [turno];
          });
          setTurnos(turnosObj);
          setDepilaciones(depilacionesObj);
          setLoading(false);
        });
        return () => unsub();
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  const addItem = async (docId, item) => {
    await setDoc(doc(db, usuarioRef.current, docId), item);
  };

  const deleteItem = async (docId) => {
    await deleteDoc(doc(db, usuarioRef.current, docId));
  };

  const editItem = () => {};

  return (
    <TurnoContext.Provider
      value={{
        MESES,
        MESES_NOMBRE,
        FECHA_ACTUAL,
        turnos,
        setTurnos,
        depilaciones,
        setDepilaciones,
        formId,
        addItem,
        deleteItem,
        editItem,
        loading,
        setLoading
      }}
    >
      {children}
    </TurnoContext.Provider>
  );
};
