import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import MainContent from '../../components/MainContent/MainContent';
import Title from '../../components/Title/Title';
import api, { commentEventResource, eventsResource } from '../../Services/Service';
import Table from './TableDe/TableDe';
import { UserContext } from '../../context/AuthContext';

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
    // UseContext para buscar informações do perfil
    const { userData, setUserData } = useContext(UserContext)



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

            if (userData.role === "Administrador") {
                const request = await api.get(`${commentEventResource}/BuscarPorEvento/${idEvento}`)
                setComments(request.data);
            }

            else{
                const request = await api.get(`${commentEventResource}/ListarSomenteExibe/${idEvento}`)
                setComments(request.data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <MainContent>
                <Container>
                    <Title nomeClass='custom-title' titleText={evento.nomeEvento} />

                    {userData.role === "Administrador" ?
                        <>
                            <Table event={evento} comments={comments} isAdmin={true} />
                        </> : <>

                            <Table event={evento} comments={comments} />
                        </>}
                </Container>
            </MainContent>
        </>
    );
};

export default DetalhesEventoPage;