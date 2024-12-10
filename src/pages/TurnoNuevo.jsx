import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TurnoContext } from "../context/TurnoContext";
export const TurnoNuevo = () => {
  //console.count("TURNO NUEVO");
  const {
    turnos,
    setTurnos,
    depilaciones,
    setDepilaciones,
    formId,
    addItem,
    deleteItem
  } = useContext(TurnoContext);
  const [time, setTime] = useState(15);
  const [horaError, setHoraError] = useState("");
  const [tipoError, setTipoError] = useState("");
  const [depiEdit, setDepiEdit] = useState({});
  const [esDepi, setEsDepi] = useState(false);
  let navigate = useNavigate();

  const diaX = formId.current.substring(8, 10);
  const mesX = formId.current.substring(5, 7);
  const timerStep = 15;

  const handleDecTime = (e) => {
    e.preventDefault();
    setTime((prev) => (prev = prev - timerStep < 0 ? 0 : prev - timerStep));
  };

  const handleIncTime = (e) => {
    e.preventDefault();
    setTime((prev) => prev + timerStep);
  };

  const esHoraCorrecta = (id, duracion) => {
    let resultado = "";
    let tNuevoFecha = id.substring(0, 10);
    let tNuevoHora = id.substring(11, 15);
    let tNuevoMin = +tNuevoHora.substring(0, 2) * 60 + +tNuevoHora.substring(2);
    let tNuevoDuracion = duracion;

    for (let tViejoFecha in turnos) {
      if (tViejoFecha === tNuevoFecha) {
        for (let t of turnos[tViejoFecha]) {
          if (t.id !== formId.current) {
            let tViejoHora = t.id.substring(11);
            let tViejoMin =
              +tViejoHora.substring(0, 2) * 60 + +tViejoHora.substring(2);
            let tViejoDuracion = t.duracion;

            if (
              tViejoMin + tViejoDuracion > tNuevoMin &&
              tNuevoMin + tNuevoDuracion > tViejoMin
            ) {
              resultado = `${tViejoHora} ${t.nombre} ${t.tratamiento} ${t.duracion}m`;
              break;
            }
          }
        }
      }
    }

    for (let tViejoFecha in depilaciones) {
      if (tViejoFecha === tNuevoFecha) {
        for (let t of depilaciones[tViejoFecha]) {
          if (t.id !== formId.current) {
            let tViejoHora = t.id.substring(11, 15);
            let tViejoMin =
              +tViejoHora.substring(0, 2) * 60 + +tViejoHora.substring(2);
            let tViejoDuracion = t.duracion;

            if (
              tViejoMin + tViejoDuracion > tNuevoMin &&
              tNuevoMin + tNuevoDuracion > tViejoMin
            ) {
              resultado = `${tViejoHora} ${t.nombre} ${t.tratamiento} ${t.duracion}m`;
              break;
            }
          }
        }
      }
    }

    return resultado;
  };

  const obtenerTipoDepi = (form) => {
    let tipo = [];
    if (form.Pierna_Entera.checked) tipo.push("Pierna Entera");
    if (form.Media_Pierna.checked) tipo.push("Media Pierna");
    if (form.Axila.checked) tipo.push("Axila");
    if (form.Brazos.checked) tipo.push("Brazos");
    if (form.Bozo.checked) tipo.push("Bozo");
    if (form.Rostro_Completo.checked) tipo.push("Rostro Completo");
    if (form.Pecho.checked) tipo.push("Pecho");
    if (form.Espalda_Baja.checked) tipo.push("Espalda Baja");
    if (form.Espalda.checked) tipo.push("Espalda");
    if (form.Cavado_Completo_con_Tiro.checked)
      tipo.push("Cavado Completo con Tiro");
    if (form.Cavado_Completo_sin_Tiro.checked)
      tipo.push("Cavado Completo sin Tiro");
    if (form.Pierna_mas_Cavado.checked) tipo.push("Pierna + Cavado");
    if (form.Pierna_mas_Cavado_mas_Axila.checked)
      tipo.push("Pierna + Cavado + Axila");
    if (form.Media_Pierna_mas_Cavado_mas_Axila.checked)
      tipo.push("1/2 Pierna + Cavado + Axila");
    return tipo.join(" + ");
  };

  const agregarTurno = (e) => {
    e.preventDefault();
    let form = e.target;
    let fecha = formId.current.substring(0, 10);

    let id = fecha + "-" + form.hora.value;
    let tratamiento = form.tratamiento.value;
    if (form.tratamiento.value === "depilacion") {
      id += "-depi";
      tratamiento = obtenerTipoDepi(form);
    }

    if (form.hora.value.toString().length !== 4) {
      setHoraError("==> hora incorrecta <==");
      return;
    }

    let turnoEnConflicto = esHoraCorrecta(id, time);
    if (turnoEnConflicto !== "") {
      setHoraError(`Conflicto con:
      ${turnoEnConflicto}`);
      return;
    }

    let newTurno = {
      id,
      nombre: form.nombre.value,
      tratamiento,
      duracion: time,
      valor: form.esGasto.checked ? -form.valor.value : +form.valor.value
    };

    if (tratamiento === "") {
      setTipoError("==> elige tipo de depilacion <==");
      return;
    }

    //  es un turno nuevo o depi nueva
    if (formId.current.length < 16) {
      //  es turno nuevo
      if (id.length < 16) {
        let newTurnos = { ...turnos };
        newTurnos[fecha] = newTurnos[fecha] || [];
        newTurnos[fecha].push(newTurno);
        console.log("Agregando nuevo turno :", JSON.stringify(newTurno));
        setTurnos(newTurnos);
      }

      // es depi nueva
      else {
        let newDepilaciones = { ...depilaciones };
        newDepilaciones[fecha] = newDepilaciones[fecha] || [];
        newDepilaciones[fecha].push(newTurno);
        console.log("Agregando nueva depilacion :", JSON.stringify(newTurno));
        setDepilaciones(newDepilaciones);
      }

      addItem(id, newTurno);
      return navigate("/");
    }

    // es un edit de depilacion
    else {
      let newDepilaciones = { ...depilaciones };
      newDepilaciones[fecha] = newDepilaciones[fecha].filter(
        (d) => d.id !== formId.current
      );
      newDepilaciones[fecha].push(newTurno);
      setDepilaciones(newDepilaciones);

      // tienen distinto id
      if (formId.current !== id) {
        deleteItem(formId.current);
        console.log("Borrando depilacion :", JSON.stringify(newTurno));
      }

      console.log("Editando depilacion mismo id :", JSON.stringify(newTurno));
      addItem(id, newTurno);
      return navigate("/");
    }
  };

  const esDepiCheck = (e) => {
    if (e.target.value === "depilacion") setEsDepi(true);
    else setEsDepi(false);
  };

  useEffect(() => {
    let depilacionEdit = {
      hora: "",
      nombre: "",
      tratamiento: "",
      valor: "",
      duracion: "",
      id: ""
    };

    if (formId.current.length > 20) {
      formId.current = formId.current.substring(0, 10);
      setEsDepi(true);
    } else if (formId.current.length > 15) {
      depilacionEdit = depilaciones[formId.current.substring(0, 10)].filter(
        (d) => d.id === formId.current
      )[0];
      depilacionEdit["hora"] = formId.current.substring(11, 15);
      setTime((prev) => depilacionEdit.duracion);
      setEsDepi(true);
    }
    setDepiEdit(depilacionEdit);
  }, []);

  return (
    <div className="turnoNuevo-container">
      <button className="form-cancel-btn" onClick={() => navigate("/")}>
        X
      </button>
      <div className="form-container">
        <form onSubmit={agregarTurno}>
          <h2>Dia : {`${diaX} - ${mesX}`}</h2>
          <div className="hora-container">
            <div className="row hora">
              <label htmlFor="">hora</label>
              <input
                className="ss"
                type="number"
                name="hora"
                defaultValue={depiEdit.hora}
                required
              />
            </div>
            <span className="error-msg">{horaError}</span>
          </div>
          <div className="row">
            <label htmlFor="">nombre</label>
            <input
              type="text"
              name="nombre"
              defaultValue={depiEdit.nombre}
              required
            />
          </div>
          <div className="row">
            <label htmlFor="">tratamiento</label>
            <select
              name="tratamiento"
              defaultValue={formId.current.length > 15 ? "depilacion" : ""}
              onChange={esDepiCheck}
            >
              <option value="maderoterapia">maderoterapia</option>
              <option value="madero + aparat">madero + aparat</option>
              <option value="lifting pestaña">lifting de pestaña</option>
              <option value="lifting + perfilado">lifting + perfilado</option>
              <option value="lifting + higiene">lifting + higiene</option>
              <option value="facial profundo">facial profundo</option>
              <option value="facial prem + aparat">facial prem + aparat</option>
              <option value="evaluacion">evaluacion</option>
              <option value="depilacion">depilacion</option>
              <option value="otro">otro</option>
            </select>
          </div>
          {esDepi && (
            <div className="tipo-container">
              <div className="row">
                <input
                  type="checkbox"
                  name="Pierna_Entera"
                  id="Pierna_Entera"
                  defaultChecked={depiEdit.tratamiento.includes(
                    "Pierna Entera"
                  )}
                />
                <label htmlFor="Pierna_Entera">Pierna Entera</label>

                <input
                  type="checkbox"
                  name="Media_Pierna"
                  id="Media_Pierna"
                  defaultChecked={depiEdit.tratamiento.includes("Media Pierna")}
                />
                <label htmlFor="Media_Pierna">Media Pierna</label>
              </div>

              <div className="row">
                <input
                  type="checkbox"
                  name="Axila"
                  id="Axila"
                  defaultChecked={depiEdit.tratamiento.includes("Axila")}
                />
                <label htmlFor="Axila">Axila</label>

                <input
                  type="checkbox"
                  name="Brazos"
                  id="Brazos"
                  defaultChecked={depiEdit.tratamiento.includes("Brazos")}
                />
                <label htmlFor="Brazos">Brazos</label>

                <input
                  type="checkbox"
                  name="Bozo"
                  id="Bozo"
                  defaultChecked={depiEdit.tratamiento.includes("Bozo")}
                />
                <label htmlFor="Bozo">Bozo</label>
              </div>

              <div className="row">
                <input
                  type="checkbox"
                  name="Rostro_Completo"
                  id="Rostro_Completo"
                  defaultChecked={depiEdit.tratamiento.includes(
                    "Rostro Completo"
                  )}
                />
                <label htmlFor="Rostro_Completo">Rostro Completo</label>

                <input
                  type="checkbox"
                  name="Pecho"
                  id="Pecho"
                  defaultChecked={depiEdit.tratamiento.includes("Pecho")}
                />
                <label htmlFor="Pecho">Pecho</label>
              </div>

              <div className="row">
                <input
                  type="checkbox"
                  name="Espalda_Baja"
                  id="Espalda_Baja"
                  defaultChecked={depiEdit.tratamiento.includes("Espalda Baja")}
                />
                <label htmlFor="Espalda_Baja">Espalda Baja</label>

                <input
                  type="checkbox"
                  name="Espalda"
                  id="Espalda"
                  defaultChecked={depiEdit.tratamiento.includes("Espalda")}
                />
                <label htmlFor="Espalda">Espalda</label>
              </div>

              <div className="row">
                <input
                  type="checkbox"
                  name="Cavado_Completo_con_Tiro"
                  id="Cavado_Completo_con_Tiro"
                  defaultChecked={depiEdit.tratamiento.includes(
                    "Cavado Completo con Tiro"
                  )}
                />
                <label htmlFor="Cavado_Completo_con_Tiro">
                  Cavado Completo con Tiro
                </label>
              </div>

              <div className="row">
                <input
                  type="checkbox"
                  name="Cavado_Completo_sin_Tiro"
                  id="Cavado_Completo_sin_Tiro"
                  defaultChecked={depiEdit.tratamiento.includes(
                    "Cavado Completo sin Tiro"
                  )}
                />
                <label htmlFor="Cavado_Completo_sin_Tiro">
                  Cavado Completo sin Tiro
                </label>
              </div>

              <span className="combos">Combos :</span>
              <div className="row">
                <input
                  type="checkbox"
                  name="Pierna_mas_Cavado"
                  id="Pierna_mas_Cavado"
                  defaultChecked={depiEdit.tratamiento.includes(
                    "Pierna + Cavado"
                  )}
                />
                <label htmlFor="Pierna_mas_Cavado">Pierna + Cavado</label>
              </div>

              <div className="row">
                <input
                  type="checkbox"
                  name="Pierna_mas_Cavado_mas_Axila"
                  id="Pierna_mas_Cavado_mas_Axila"
                  defaultChecked={depiEdit.tratamiento.includes(
                    "Pierna + Cavado + Axila"
                  )}
                />
                <label htmlFor="Pierna_mas_Cavado_mas_Axila">
                  Pierna + Cavado + Axila
                </label>
              </div>

              <div className="row">
                <input
                  type="checkbox"
                  name="Media_Pierna_mas_Cavado_mas_Axila"
                  id="Media_Pierna_mas_Cavado_mas_Axila"
                  defaultChecked={depiEdit.tratamiento.includes(
                    "1/2 Pierna + Cavado + Axila"
                  )}
                />
                <label htmlFor="Media_Pierna_mas_Cavado_mas_Axila">
                  1/2 Pierna + Cavado + Axila
                </label>
              </div>
              <span className="error-msg">{tipoError}</span>
            </div>
          )}
          <div className="row">
            <button onClick={(e) => handleDecTime(e)}>-</button>
            <span>{time} m</span>
            <button onClick={(e) => handleIncTime(e)}>+</button>
          </div>
          <div className="row">
            <label htmlFor="">valor</label>
            <input
              type="number"
              name="valor"
              defaultValue={depiEdit.valor}
              required
            />
          </div>
          <div className="row gasto">
            <label htmlFor="esGasto">es gasto : </label>
            <input type="checkbox" name="esGasto" id="esGasto" />
          </div>
          <button className="form-submit-btn" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};
