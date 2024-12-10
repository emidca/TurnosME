import { useState } from "react";

export const Clienta = ({ nombre, historialArray }) => {
  const [show, setShow] = useState(false);

  const historialBg = (id = "", tratamiento = "") => {
    if (id.includes("depi")) return { backgroundColor: "#74ff74" };
    return { backgroundColor: "#a7d8f7" };
  };

  const totalClienta = () => {
    return historialArray.reduce((a, v) => a + v.valor, 0);
  };

  return (
    <div className="clientas-container">
      <div className="clienta-header" onClick={() => setShow(!show)}>
        <div className="clienta-nombre">
          <span>{nombre}</span>
          <span>({historialArray.length})</span>
        </div>
      </div>
      {show && (
        <div className="clienta-data">
          {historialArray
            .sort((a, b) => {
              let fechaA = Number(a.fecha.substring(0, 10).replaceAll("-", ""));
              let fechaB = Number(b.fecha.substring(0, 10).replaceAll("-", ""));
              return fechaA - fechaB;
            })
            .map((h, indice) => (
              <div
                key={indice}
                className="historial-container"
                style={historialBg(h.fecha, h.tratamiento)}
              >
                <p>
                  {" "}
                  <span className="clienta-label">fecha : </span>{" "}
                  {h.fecha.substring(0, 10)}
                </p>
                <p>
                  {" "}
                  <span className="clienta-label">tratamiento : </span>{" "}
                  {h.tratamiento}
                </p>
                <p>
                  {" "}
                  <span className="clienta-label">valor: </span>$ {h.valor}
                </p>
              </div>
            ))}
          <p className="clienta-total">total: $ {totalClienta()}</p>
        </div>
      )}
    </div>
  );
};
