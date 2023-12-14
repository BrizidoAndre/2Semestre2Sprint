import React from "react";
import "./TableDe.css";

// Importando functions
import { dateFormatDbToViewEfetivo } from "../../../Utils/stringFunctions";

// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";

// Importando imagens
import openEye from "../../../assets/images/icons8-visível-30.png"
import closedEye from "../../../assets/images/icons8-olho-fechado-50.png"


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

                {e.exibe ? <>
                  <img
                    className="tbal-data__icon"
                    src={openEye}
                    alt="Ícone de visualização se o comentário tá exibindo"
                  />
                </> : <>
                  <img
                    className="tbal-data__icon"
                    src={closedEye}
                    alt="Ícone de visualização se o comentário tá exibindo"
                  />
                </>}

              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
