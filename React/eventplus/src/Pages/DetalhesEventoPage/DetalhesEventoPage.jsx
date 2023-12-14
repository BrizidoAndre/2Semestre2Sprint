import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import MainContent from '../../components/MainContent/MainContent';
import Title from '../../components/Title/Title';
import api, { commentEventResource, eventsResource } from '../../Services/Service';
import Table from './TableDe/TableDe';

const DetalhesEventoPage = () => {

    // UseState para o array de comentários de um evento
    const [comments, setComments] = useState([]);
    // UseState para o objeto de evento buscado
    const [evento, setEvento] = useState({
        idEvento: "",
        dataEvento: "",
        nomeEvento: "",
        descricao: "",
        idTipoEvento: "",
        tipoEvento: "",
        idInstituicao: ""
    });


    // IdDoEvento Usado como parâmetro para buscar evento específico
    const { idEvento } = useParams();



    useEffect(() => {
        loadComments();
        loadEvent();

    }, [])


    async function loadEvent() {
        try {
            const request = await (await api.get(`${eventsResource}/${idEvento}`)).data
            setEvento(request);
        } catch (error) {
            console.log(error)
        }
    }

    async function loadComments() {
        try {
            const request = await api.get(`${commentEventResource}/BuscarPorEvento/${idEvento}`) //!Atente-se a mudar isso

            setComments(request.data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <MainContent>
                <Container>
                    <Title nomeClass='custom-title' titleText={evento.nomeEvento} />


                    <Table event={evento} comments={comments} />
                </Container>
            </MainContent>
        </>
    );
};

export default DetalhesEventoPage;