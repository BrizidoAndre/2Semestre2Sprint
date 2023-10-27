import React from "react";
import "./CardEvento.css"

const CardEvento = ({titulo, descricao, link}) => {
    return (
        <div className="card-evento">
        <h3 className="card-evento__titulo">{titulo}</h3>
        <p className="card-evento__text">{descricao}</p>
       <a href="" className="card-evento__conection">{link}</a>
    </div>
    );
};

export default CardEvento