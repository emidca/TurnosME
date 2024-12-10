import { useContext, useMemo, useState } from "react";
import { Clienta } from "../components/Clienta";
import { TurnoContext } from "../context/TurnoContext";
import { BiSearch, BiX } from "react-icons/bi";

export const Ficha = () => {
  const { turnos, depilaciones } = useContext(TurnoContext);

  const [filter, setFilter] = useState("");
  const [clientas, setClientas] = useState({});

  const clientasArray = useMemo(() => {
    let newClientas = {};
    for (let fecha in turnos) {
      turnos[fecha].map((t) => {
        newClientas[t.nombre] = newClientas[t.nombre] || [];
        newClientas[t.nombre].push({
          fecha: t.id,
          tratamiento: t.tratamiento,
          valor: t.valor
        });
      });
    }
    for (let fecha in depilaciones) {
      depilaciones[fecha].map((t) => {
        newClientas[t.nombre] = newClientas[t.nombre] || [];
        newClientas[t.nombre].push({
          fecha: t.id,
          tratamiento: t.tratamiento,
          valor: t.valor
        });
      });
    }
    setClientas(newClientas);
  }, [turnos, depilaciones]);

  const filteredClientas = useMemo(() => {
    let nombreClientasOrd = Object.keys(clientas).sort();
    return nombreClientasOrd.filter((b) => b.toLowerCase().includes(filter));
  }, [clientas, filter]);

  return (
    <div className="ficha-container">
      <div className="search-container">
        <h2>Clientas ({Object.keys(clientas).length})</h2>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        />
        {filter === "" ? (
          <BiSearch className="search-icon" />
        ) : (
          <BiX className="search-icon" onClick={() => setFilter("")} />
        )}
      </div>
      <br />
      {filteredClientas.map((nombre) => {
        return (
          <Clienta
            key={nombre}
            nombre={nombre}
            historialArray={clientas[nombre]}
          />
        );
      })}
    </div>
  );
};
