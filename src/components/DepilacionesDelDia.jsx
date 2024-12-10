import { useContext, useState } from "react";
import { TurnoContext } from "../context/TurnoContext";
import { useNavigate } from "react-router-dom";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";

export const DepilacionesDelDia = ({ depisArray }) => {
  const [showData, setShowData] = useState(false);
  const { formId, depilaciones, setDepilaciones, deleteItem } = useContext(
    TurnoContext
  );
  let navigate = useNavigate();

  const handleDelete = (e, id) => {
    e.stopPropagation();
    console.log("Borrando depilacion :", id);
    let fecha = id.substring(0, 10);
    let newDepilaciones = { ...depilaciones };
    let newDepilacionesArray = newDepilaciones[fecha].filter(
      (t) => t.id !== id
    );
    if (newDepilacionesArray.length === 0) delete newDepilaciones[fecha];
    else newDepilaciones[fecha] = newDepilacionesArray;
    setDepilaciones(newDepilaciones);

    deleteItem(id);
    if (!depilaciones[fecha]) {
      navigate("/");
    }
  };

  const handleEdit = (turnoId) => {
    formId.current = turnoId;
    navigate("/turnoNuevo");
  };

  return (
    <div className="depilaciones" onClick={() => setShowData(!showData)}>
      {showData ? (
        <>
          {depisArray.map((t) => (
            <div className="depilacion" key={t.id}>
              <span className="hora">
                {t.id.substring(11, 13)}:{t.id.substring(13, 15)}
              </span>
              <span className="nombre">{t.nombre}</span>
              <span className="tratamiento">{t.tratamiento}</span>
              <span className="duracion">{t.duracion}m</span>
              <span className="valor">$ {t.valor}</span>
              <div className="icons">
                <BsPencilFill
                  className="icon"
                  onClick={() => handleEdit(t.id)}
                />
                <BsTrashFill
                  className="icon"
                  onClick={(e) => handleDelete(e, t.id)}
                />
              </div>
            </div>
          ))}{" "}
        </>
      ) : (
        <span className="depis-numero">{depisArray.length}</span>
      )}
    </div>
  );
};
