import React, { useContext, useState } from "react";
import { TurnoContext } from "../context/TurnoContext";
import { BsTrashFill } from "react-icons/bs";

export const TurnosDelDia = ({ turnosArray }) => {
  const [showData, setShowData] = useState(false);
  const { turnos, setTurnos, deleteItem } = useContext(TurnoContext);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    console.log("Borrando turno", id);
    let fecha = id.substring(0, 10);
    let newTurnos = { ...turnos };
    let newTurnosArray = newTurnos[fecha].filter((t) => t.id !== id);
    if (newTurnosArray.length === 0) delete newTurnos[fecha];
    else newTurnos[fecha] = newTurnosArray;
    setTurnos(newTurnos);

    deleteItem(id);
  };

  return (
    <>
      {turnosArray.length > 0 && (
        <div className="turnos" onClick={() => setShowData(!showData)}>
          {showData ? (
            <>
              {turnosArray.map((t) => (
                <div className="turno" key={t.id}>
                  <span className="hora">
                    {t.id.substring(11, 13)}:{t.id.substring(13, 15)}
                  </span>
                  <span className="nombre">{t.nombre}</span>
                  <span className="tratamiento">{t.tratamiento}</span>
                  <span className="duracion">{t.duracion}m</span>
                  <span className="valor">$ {t.valor}</span>
                  <div className="icons">
                    <BsTrashFill
                      className="icon"
                      onClick={(e) => handleDelete(e, t.id)}
                    />
                  </div>
                </div>
              ))}{" "}
            </>
          ) : (
            <span className="turnos-numero">{turnosArray.length}</span>
          )}
        </div>
      )}
    </>
  );
};
