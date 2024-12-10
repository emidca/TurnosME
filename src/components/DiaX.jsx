import React, { useContext } from "react";
import { TurnoContext } from "../context/TurnoContext";
import { TurnosDelDia } from "./TurnosDelDia";
import { DepilacionesDelDia } from "./DepilacionesDelDia";
import { useNavigate } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";

export const DiaX = ({ dia, fecha }) => {
  const { FECHA_ACTUAL, turnos, depilaciones, formId } = useContext(
    TurnoContext
  );
  const style =
    dia === FECHA_ACTUAL.dia &&
    fecha.mes === FECHA_ACTUAL.mes &&
    fecha.anio === FECHA_ACTUAL.anio
      ? { background: "pink" }
      : null;

  let mesSelecto =
    fecha.mes < 10 ? "0" + (fecha.mes + 1) : "" + (fecha.mes + 1);
  let fechaSelecto = fecha.anio + "-" + mesSelecto + "-" + dia;
  let turnosArray = turnos[fechaSelecto] || [];
  let depisArray = depilaciones[fechaSelecto] || [];

  let navigate = useNavigate();

  const handleAgregarTurno = () => {
    formId.current = fechaSelecto;
    navigate("/turnoNuevo");
  };

  return (
    <div className="dia-container" style={style}>
      <div className="dia-header">
        <span>{dia}</span>
        <FaPlusSquare className="plus-icon" onClick={handleAgregarTurno} />
      </div>
      <div className="turnos-container">
        {turnosArray.length > 0 && <TurnosDelDia turnosArray={turnosArray} />}
      </div>
      <div className="depilaciones-container">
        {depisArray.length > 0 && (
          <DepilacionesDelDia depisArray={depisArray} />
        )}
      </div>
    </div>
  );
};
