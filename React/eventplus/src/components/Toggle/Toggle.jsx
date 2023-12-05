import React from "react";

import "./Toggle.css";

const Toggle = ({ manipulationFunction = null, toggleActive = false }) => {





  const todosEventos = [
    { tipoEvento: 1, nomeEvento: "Evento de JS" },
    { tipoEvento: 2, nomeEvento: "Evento de SQL" },
    { tipoEvento: 3, nomeEvento: "Evento de MySQL" },
    { tipoEvento: 4, nomeEvento: "Evento de React" },
    { tipoEvento: 5, nomeEvento: "Evento de C#" }
  ];

  const meusEvento = [ //Presenças no evento
 
    ]















  return (
    <>
      <input type="checkbox" id="switch-check" className="toggle__switch-check" />

      <label className={`toggle ${toggleActive ? "toggle--active" : ""}`} htmlFor="switch-check" onClick={manipulationFunction}>
        <div className={`toggle__switch ${toggleActive ? "toggle__switch--active" : ""}`}></div>
      </label>
    </>
  );
};

export default Toggle;
