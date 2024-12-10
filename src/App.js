import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Ficha } from "./pages/Ficha";
import { Login } from "./pages/Login";
import { TurnoNuevo } from "./pages/TurnoNuevo";
import { Calendario } from "./pages/Calendario";
import "./styles.css";

export default function App() {
  console.clear();
  //console.log("APP");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/ficha" element={<Ficha />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Calendario />} />
        <Route path="/turnoNuevo" element={<TurnoNuevo />} />
      </Routes>
    </>
  );
}

/*
 context
 router
 auth
 db
 dataObj
 loading
 internet conection
 add
 delete
 edit
 protected home
 fechas espejo
 "otros" select
 editar turnos
 incluir turnos de años anteriores
*/
