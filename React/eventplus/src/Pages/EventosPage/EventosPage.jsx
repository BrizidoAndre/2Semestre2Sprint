import React, { useEffect, useState } from 'react';
import './EventosPage.css'

// Importando Imagens
import eventoImage from '../../assets/images/evento.svg'

// Importando Componentes
import Container from '../../components/Container/Container';
import ImageIlustrator from '../../components/ImageIlustrator/ImageIlustrator';
import MainContent from '../../components/MainContent/MainContent';
import Title from '../../components/Title/Title';
import { Button, Input, Select } from '../../components/FormComponents/FormComponents';
import api, { eventsResource, eventsTypeResource } from '../../Services/Service';
import TableTp from './TableTp/TableTp';

import { dateFormatDbToViewEfetivo, dateFormatDbToViewEfetivoContrario } from '../../Utils/stringFunctions';


const EventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(true); //Está cadastrando?
    const [evento, setEvento] = useState({
        idEvento:'',
        dataEvento: "",
        nomeEvento: "",
        descricao: "",
        idTipoEvento: "",
        idInstituicao: "860669ec-c897-48c1-90f9-39f4113e3b8f"
    }) //Objeto de cadastro
    const [listEvento, setListEvento] = useState([]); //Lista de Eventos
    const [tipoEvento, setTipoEvento] = useState([]); //Array de objetos para a utilização do options no cadastro


    async function getTypeEvent() {
        // Lista do Tipo de eventos
        const tipoEventos = await api.get(eventsTypeResource);
        setTipoEvento(tipoEventos.data);
    }

    async function getEvent() {
        // Lista dos Eventos
        const eventos = await (await api.get(eventsResource)).data
        setListEvento(eventos);
    }

    useEffect(() => {
        async function loadEventType() {
            try {

                getTypeEvent();
                getEvent();


            } catch (error) {
                alert("Erro na api Eventos");
                console.log(error());
            }
        }

        loadEventType();
    }, [])

    function objectValue(dados) {
        let dadoGenerico = [];


        dados.map(z => {
            let objectGenerico = {
                text: dados.titulo,
                value: dados.idTipoEvento
            };
            dadoGenerico.push(objectGenerico);
        })

        setTipoEvento(dadoGenerico);
        console.log(dadoGenerico);
    }

    function clearEvento(){
        setEvento({
            dataEvento: "",
            descricao: "",
            nomeEvento: "",
            idInstituicao: "",
            idTipoEvento: ""
        })
    }

    // todo ****************Cadastro*******************
    async function handleSubmit(e) {
        e.preventDefault();
        try {

            console.log(evento);
            const retorno = await api.post(eventsResource, evento)

        } catch (error) {
            alert("Erro na API")
            console.log(error);
        }

    }

    // todo ************Apagar****************
    async function handleDelete(idEvento) {
        try {
            if (window.confirm("")) {
                const retorno = await api.delete(eventsResource + `/${idEvento}`)
                if (retorno.status === 204 || retorno.status === 200 || retorno.status === 202) {
                    alert("Deleção realizada com sucesso")

                }
            }
        } catch (error) {
            alert("erro na api")
            console.log(error);
        }
    }

    // todo ****************Editar**********************
    async function handleUpdate(e) {
        e.preventDefault();

        try {

            console.log(evento);

            const retorno = await (api.put(`${eventsResource}/${evento.idEvento}`,evento))


        } catch (error) {
            alert("Erro no update")
            console.log(error);
        }

    }

    // todo ************Edição MOSTRAR************
    async function showUpdate(idEvento) {
        setFrmEdit(false);

        try {
            const retorno = await (await api.get(eventsResource + `/${idEvento}`)).data;

            console.log(retorno);

            setEvento({
                ...evento,
                idEvento: retorno.idEvento,
                dataEvento: retorno.dataEvento,
                descricao: retorno.descricao,
                nomeEvento: retorno.nomeEvento,
                idInstituicao: retorno.idInstituicao,
                idTipoEvento: retorno.idTipoEvento
            })

            window.scroll({ top: 0, left: 0, behavior: "smooth" })



        } catch (error) {
            alert("Erro na busca do evento")
            console.log(error);
        }
    }

    // todo ************Edição ESCONDER************
    async function hideUpdate() {

        setFrmEdit(true);

        clearEvento();

    }


    return (
        <>
            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">


                            <Title titleText={"Cadastro Eventos"} />
                            <ImageIlustrator imageRender={eventoImage} />

                            <form
                                className='ftipo-evento'
                                onSubmit={frmEdit ? handleSubmit : handleUpdate}
                            >

                                {/* Cadastrar ou editar? */}
                                {frmEdit ? (




                                    // Cadastrar
                                    <>
                                        <Input
                                            key={"Nome"}
                                            id={"Nome"}
                                            name={"nomeEvento"}
                                            placeholder={"Nome"}
                                            required={"required"}
                                            type={"text"}
                                            value={evento.nomeEvento}
                                            manipulatorFunction={z =>
                                                setEvento({
                                                    ...evento,
                                                    "nomeEvento": z.target.value
                                                })
                                            }
                                        />
                                        <Input
                                            key={"Descricao"}
                                            id={"Descricao"}
                                            name={"descricao"}
                                            placeholder={"Descrição"}
                                            required={"required"}
                                            type={"text"}
                                            value={evento.descricaoEvento}
                                            manipulatorFunction={z =>
                                                setEvento({
                                                    ...evento,
                                                    "descricao": z.target.value
                                                })} />
                                        <Select
                                            id={'TipoEvento'}
                                            name={"tipoEvento"}
                                            key={'TipoEvento'}
                                            required={"required"}
                                            options={tipoEvento}
                                            manipulatorFunction={z => {
                                                setEvento({
                                                    ...evento,
                                                    'idTipoEvento': z.target.value
                                                });
                                            }} />
                                        <Input
                                            key={"Data"}
                                            id={"Data"}
                                            name={"data"}
                                            placeholder={"Data"}
                                            required={"required"}
                                            type={"date"}
                                            value={evento.dataEvento}
                                            manipulatorFunction={z =>
                                                setEvento({
                                                    ...evento,
                                                    "dataEvento": z.target.value
                                                })} />
                                        <Button
                                            id={"Cadastrar"}
                                            name={"cadastrar"}
                                            textButton={"Cadastrar"}
                                            type={"sumbit"}
                                        />
                                    </>
                                ) : (





                                    // Editar

                                    <>
                                        <Input
                                            key={"Nome"}
                                            id={"Nome"}
                                            name={"nome"}
                                            placeholder={"Nome"}
                                            required={"required"}
                                            type={"text"}
                                            value={evento.nomeEvento}
                                            manipulatorFunction={z =>
                                                setEvento({
                                                    ...evento,
                                                    "nomeEvento": z.target.value
                                                })} />
                                        <Input
                                            key={"descricao"}
                                            id={"descricao"}
                                            name={"descricao"}
                                            placeholder={"Descrição"}
                                            required={"required"}
                                            type={"text"}
                                            value={evento.descricao}
                                            manipulatorFunction={z =>
                                                setEvento({
                                                    ...evento,
                                                    "descricao": z.target.value
                                                })}
                                        />
                                        <Select
                                            id={'TipoEvento'}
                                            name={"tipoEvento"}
                                            key={'TipoEvento'}
                                            required={"required"}
                                            options={tipoEvento}
                                            manipulatorFunction={z =>
                                                setEvento({
                                                    ...evento,
                                                    "idTipoEvento": z.target.value
                                                })}
                                        />
                                        <Input
                                            key={"Data"}
                                            id={"Data"}
                                            name={"data"}
                                            placeholder={"Data"}
                                            required={"required"}
                                            type={"date"}
                                            value={dateFormatDbToViewEfetivoContrario(evento.dataEvento)}
                                            manipulatorFunction={z =>
                                                setEvento({
                                                    ...evento,
                                                    "dataEvento": z.target.value
                                                })} />
                                        <Button
                                            id={"Atualizar"}
                                            name={"atualizar"}
                                            textButton={"Atualizar"}
                                            type={"sumbit"}
                                        />
                                        <Button
                                            id={"Cancelar"}
                                            name={"cancelar"}
                                            textButton={"Cancelar"}
                                            type={"button"}
                                            manipulatorFunction={() => {
                                                hideUpdate();
                                            }}
                                        />

                                    </>
                                )}


                            </form>


                        </div>
                    </Container>
                </section>

                <section className="lista-eventos-section">
                    <Container>

                        <Title
                            titleText={"Lista de Eventos"}
                            color="white" />

                        <TableTp
                            dados={listEvento}
                            fnDelete={handleDelete}
                            fnUpdate={showUpdate}
                        />

                    </Container>
                </section>
            </MainContent>
        </>
    )
}

export default EventosPage;