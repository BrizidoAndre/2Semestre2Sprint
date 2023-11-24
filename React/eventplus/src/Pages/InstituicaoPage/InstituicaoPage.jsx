import React, { useEffect, useState } from "react";
import "./InstituicaoPage.css"

// Importando Imagens
import eventoImage from '../../assets/images/evento.svg'

// Importando componentes
import Title from "../../components/Title/Title"
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import ImageIlustrator from "../../components/ImageIlustrator/ImageIlustrator";
import TableIn from "./TableIn/TableIn";
import { logDOM } from "@testing-library/react";
import api, { instituicaoResource } from "../../Services/Service";

const InstituicaoPage = () => {

    const [instituicao, setInstituicao] = useState([]);

    async function getInstituicao() {
        try {
            const request = await ( await api.get(instituicaoResource)).data

            setInstituicao(request)
        } catch (error) {
            alert("Erro na api instituição")
            console.log(error);
        }
    }

    useEffect( () => {
        try {
            getInstituicao();
        } catch (error) {
            alert("erro no Effect")
            console.log(error);
        }
    }, [])


    async function deleteInstituicao(idInstituicao){

    }




    return (
        <>
            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">
                            <Title titleText={"Página de Instituição"} />

                            <ImageIlustrator imageRender={eventoImage} />
                        </div>
                    </Container>
                </section>

                {/* Listagem */}
                <section className="lista-eventos-section">
                    <Container>
                        <Title 
                            titleText={"Lista de Instituições"}
                            color="white"
                        />

                        <TableIn dados={instituicao} fnDelete={deleteInstituicao}/>
                    </Container>
                </section>
            </MainContent>

        </>
    )
};

export default InstituicaoPage;