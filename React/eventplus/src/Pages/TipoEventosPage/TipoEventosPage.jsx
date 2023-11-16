import React, { useEffect, useState } from 'react';
import './TipoEventosPage.css';

// Importando componentes
import Title from '../../components/Title/Title';
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';
import ImageIlustrator from '../../components/ImageIlustrator/ImageIlustrator';
import { Button, Input } from '../../components/FormComponents/FormComponents'
import api, { eventsTypeResource } from '../../Services/Service'
import TableTp from './TableTp/TableTp';

// Importando as imagens
import tipoEventoImg from "../../assets/images/tipo-evento.svg"

const TipoEventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(false); //está em modo edição?
    const [titulo, setTitulo] = useState();
    const [tipoEvento, setTipoEvento] = useState([]);

    useEffect(() => {
        async function loadEventType() {
            try {
                const retorno = await api.get(eventsTypeResource);

                setTipoEvento(retorno.data)

            } catch (error) {
                console.log("Erro na api");
                console.log(error);
            }
        }

        // Chama a função/api no carregamento da página/componente
        loadEventType();
    }, [tipoEvento]);

    //todo ************Cadastro******************
    // Cadastra o evento digitado no banco de dados
    async function handleSubmit(e) {
        e.preventDefault();//evita o submit do formulário

        if (titulo.trim().lenght < 3) {
            alert("Seu nome é muito pequeno!")
        }

        try {
            const retorno = await api.post(eventsTypeResource, {
                titulo: titulo
            });
            alert("Cadastrado com sucesso")
            console.log(retorno);

        } catch (error) {
            alert("Deu ruim no submit")
        }
    }
    function handleUpdate() {
        alert("Editar");
    }

    //todo *************************Edição ******************************
    // Cancela a tela/ação de edição (volta para o form de cadastro)
    function ediActionAbort(e) {
        alert("Cancelar a tela de edição de dados")
    }

    //todo Mostra o formulário de edição
    function showUpdateForm() {
        alert("Vamos mostrar o formulátio de edição")
    }

    //todo ************************ APAGAR
    // Apaga o tipo de evento na api
    async function handleDelete(idElement) {
        try {

        
            if (window.confirm(`Confirma a exclusão do evento ${titulo}?`)) {

                await api.delete(eventsTypeResource + `/${idElement}`,)
            }


        } catch (error) {
            alert("Deu ruim no deletar")
            console.log(error);
        }
    }

    return (
        <>
            <MainContent>
                {/* Formulário de cadastro de tipo de evento */}
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">

                            <Title titleText={"Cadastro Tipo de Eventos"} />

                            <ImageIlustrator imageRender={tipoEventoImg} />


                            <form
                                className='ftipo-evento'
                                onSubmit={frmEdit ? handleUpdate : handleSubmit}
                            >
                                {/* cadastrar ou editar? */}
                                {!frmEdit ? (
                                    // Cadastrar
                                    <>
                                        <Input
                                            key={"Titulo"}
                                            id={"Titulo"}
                                            placeholder={"Título"}
                                            name={"titulo"}
                                            type={"text"}
                                            required={"required"}
                                            value={titulo}
                                            manipulatorFunction={(e) => {
                                                setTitulo(e.target.value);
                                            }}
                                        />
                                        <Button
                                            textButton={"Cadastrar"}
                                            id={"cadastrar"}
                                            name={"cadastrar"}
                                            type={"submit"}
                                        />
                                    </>
                                ) : (
                                    // Editar
                                    <p>Tela de edição</p>
                                )}
                            </form>

                        </div>
                    </Container>
                </section>


                {/* Listagem de tipo de eventos */}
                <section className="lista-eventos-section">
                    <Container>
                        <Title titleText={"Lista Tipo de Eventos"} color="white" />

                        <TableTp
                            fnUpdate={showUpdateForm}
                            fnDelete={handleDelete}
                            dados={tipoEvento}
                        />
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default TipoEventosPage;