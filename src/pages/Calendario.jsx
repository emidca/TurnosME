import React, { useState, useContext } from "react";
import { TurnoContext } from "../context/TurnoContext";
import { Semana } from "../components/Semana";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Calendario = () => {
  const { MESES, MESES_NOMBRE, FECHA_ACTUAL, loading } = useContext(
    TurnoContext
  );

  const [fecha, setFecha] = useState(FECHA_ACTUAL);

  const handleMesAnt = () => {
    let nuevaFecha = { ...fecha };
    if (nuevaFecha.mes === 0) {
      if (nuevaFecha.anio !== 2022) {
        nuevaFecha.mes = 11;
        nuevaFecha.anio--;
      }
    } else {
      nuevaFecha.mes--;
    }
    setFecha(nuevaFecha);
  };

  const handleMesPos = () => {
    let nuevaFecha = { ...fecha };
    if (nuevaFecha.mes === 11) {
      if (nuevaFecha.anio !== 2026) {
        nuevaFecha.mes = 0;
        nuevaFecha.anio++;
      }
    } else {
      nuevaFecha.mes++;
    }
    setFecha(nuevaFecha);
  };

  return (
    <>
      {loading && (
        <div className="loading-container">
          <span>Cargando</span>
          <span className="loader4"></span>
        </div>
      )}
      <div className="calendario-container">
        <div className="titulo-container">
          <FaChevronLeft className="chevron" onClick={handleMesAnt} />
          <h2 className="mes-titulo">{MESES_NOMBRE[fecha.mes]}</h2>
          <h2 className="anio-titulo">{fecha.anio}</h2>
          <FaChevronRight className="chevron" onClick={handleMesPos} />
        </div>
        <div className="calendar-header-container">
          <span>Lun</span>
          <span>Mar</span>
          <span>Mie</span>
          <span>Jue</span>
          <span>Vier</span>
          <span>Sab</span>
        </div>
        {MESES[fecha.anio][fecha.mes].map((semana, indice) => (
          <Semana key={indice} semana={semana} fecha={fecha} />
        ))}
      </div>
    </>
  );
};
