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
import Notification from '../../components/Notification/Notification';

const TipoEventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(false); //está em modo edição?
    const [titulo, setTitulo] = useState();
    const [uniqueTipoEvento, setUniqueTipoEvento] = useState({}); //objeto para a atualização de um objeto específico
    const [tipoEvento, setTipoEvento] = useState([]); //array
    const [notifyUser, setNotifyUser] = useState(); //Componente Notification

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
    }, []);


    function theMagic() {
        setNotifyUser({
            titleNote: "Sucesso",
            textNote: `Evento excluído com sucesso`,
            imgIcon: "Succes",
            imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
            showMessage: true
        });
    }

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


    //todo **************Edição*********************
    // Modifica o evento com base no titulo digitado
    async function handleUpdate(e) {
        e.preventDefault();

        uniqueTipoEvento.titulo = titulo
        await api.put(eventsTypeResource + `/${uniqueTipoEvento.idTipoEvento}`, { "titulo": uniqueTipoEvento.titulo })

    }

    //todo ************EdiçãoMostrar***************
    // Mostra a tela/ação de edição
    async function showUpdateForm(idTipoEvento) {
        setFrmEdit(true);
        const retorno = await api.get(eventsTypeResource + `/${idTipoEvento}`);

        const tipoEvento = retorno.data;

        setTitulo(tipoEvento.titulo);
        setUniqueTipoEvento(tipoEvento);

    }

    //todo **************EdiçãoCancelar***************
    // Cancela a tela/ação de edição 
    function editActionAbort(e) {
        setFrmEdit(false);
        setTitulo("");
    }


    //todo ************APAGAR***********************
    // Apaga o tipo de evento na api
    async function handleDelete(idElement) {
        try {


            if (window.confirm(`Confirma a exclusão do evento?`)) {

                const promise = await api.delete(eventsTypeResource + `/${idElement}`,)

                if (promise.status === 204 || promise.status === 200 || promise.status === 202) {
                    theMagic();
                    // Atualiza a variável e roda o useState novamente (que dá um get na api)

                    // DEsafio fazer uma função para retirar o registro apagado do array tipoEventos
                    const buscaEventos = await api.get(eventsTypeResource)
                    setTipoEvento(buscaEventos.data); //Aqui retorna um array então de boa
                }
            }


        } catch (error) {
            alert("Deu ruim no deletar")
            console.log(error);
        }
    }

    return (
        <>
            <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
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

                                        <Button
                                            textButton={"The Magic"}
                                            id={"magica"}
                                            name={"magica"}
                                            type={"button"}
                                            manipulatorFunction={theMagic}
                                        />
                                    </>





                                ) : (





                                    // Editar
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
                                            }} />
                                        {/* BOTÃO ATUALIZAR */}
                                        <Button
                                            textButton={"Atualizar"}
                                            id={"atualizar"}
                                            name={"atualizar"}
                                            type={"submit"}
                                        />
                                        {/* BOTÃO Cancelar */}
                                        <Button
                                            textButton={"Cancelar"}
                                            id={"cancela"}
                                            name={"cancela"}
                                            type={"button"}
                                            manipulatorFunction={() => {
                                                editActionAbort();
                                            }}
                                        />
                                    </>




                                )}




                            </form>

                        </div>
                    </Container>
                </section>


               ' {/* Listagem de tipo de eventos */}
                <section className="lista-eventos-section">
                    <Container>
                        <Title titleText={"Lista Tipo de Eventos"} color="white" />

                        <TableTp
                            fnUpdate={showUpdateForm}
                            fnDelete={handleDelete}
                            dados={tipoEvento}
                        />
                    </Container>
                </section>'
            </MainContent>
        </>
    );
};

export default TipoEventosPage;