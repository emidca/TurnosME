import React, { useContext } from "react";
import { TurnoContext } from "../context/TurnoContext";
import { DiaX } from "./DiaX";

export const Semana = ({ semana, fecha }) => {
  const { turnos, depilaciones } = useContext(TurnoContext);

  const totalSemana = () => {
    let total = 0;

    semana.map((d) => {
      let mesSelecto =
        fecha.mes < 10 ? "0" + (fecha.mes + 1) : "" + (fecha.mes + 1);
      let fechaSelecto = fecha.anio + "-" + mesSelecto + "-" + d;
      if (turnos[fechaSelecto]) {
        total += turnos[fechaSelecto].reduce((a, v) => a + v.valor, 0);
      }
      if (depilaciones[fechaSelecto]) {
        total += depilaciones[fechaSelecto].reduce((a, v) => a + v.valor, 0);
      }
    });

    return total;
  };
  console.log(semana, fecha);
  return (
    <>
      <div className="semana-container">
        {semana.map((dia, indice) => (
          <DiaX key={indice} dia={dia} fecha={fecha} />
        ))}
      </div>
      <span className="semana-total">total : $ {totalSemana()}</span>
    </>
  );
};
