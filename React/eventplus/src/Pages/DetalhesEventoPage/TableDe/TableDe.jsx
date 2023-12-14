import React from "react";
import visualizeIcon from "../../../assets/images/icons8-visível-30.png"
import { dateFormatDbToViewEfetivo } from "../../../Utils/stringFunctions";
import ToggleSwitch from "../../../components/Toggle/Toggle";
// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";

// import trashDelete from "../../../assets/images/trash-delete.svg";
import "./TableDe.css";

const Table = ({ event, comments, fnShowModal = null }) => {
  return (
    <table className="tbal-data">
      <thead className="tbal-data__head">
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            {event.descricao}
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            {dateFormatDbToViewEfetivo(event.dataEvento)}
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            {event.tipoEvento.titulo}
          </th>
        </tr>
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Comentário
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Usuario
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Visualizar
          </th>
        </tr>
      </thead>
      <tbody>
        {comments.map((e) => {
          return (
            <tr className="tbal-data__head-row" key={Math.random()}>
              <td className="tbal-data__data tbal-data__data--big">
                {e.descricao}
              </td>

              <td className="tbal-data__data tbal-data__data--big">
                {e.usuario.nome}
              </td>

              <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
                <img
                  className="tbal-data__icon"
                  src={visualizeIcon}
                  alt="Ícone de visualização se o comentário tá exibindo"
                />

              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
