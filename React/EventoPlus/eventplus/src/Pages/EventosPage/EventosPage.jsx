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


const EventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(true); //Está cadastrando?
    const [evento, setEvento] = useState({}) //Objeto de cadastro
    const [listEvento, setListEvento] = useState([]); //Lista de Eventos
    const [tipoEvento, setTipoEvento] = useState([]); //Array de objetos para a utilização do options no cadastro

    useEffect(() => {
        async function loadEventType() {
            try {
                // Lista do Tipo de eventos
                const retorno = await (await api.get(eventsTypeResource)).data;
                setTipoEvento(retorno);

                // Lista dos Eventos
                const eventos = await (await api.get(eventsResource)).data
                setListEvento(eventos);
            } catch (error) {
                alert("Erro na api Eventos");
                console.log(error());
            }
        }

        loadEventType();
    }, [])


    async function handleSubmit() {

    }

    async function handleUpdate() {

    }

    async function handleDelete(idEvento) {
        try {
            const retorno = await api.delete(eventsResource + `/${idEvento}`)
            if (retorno.status === 204 || retorno.status === 200 || retorno.status === 202) {
                alert("Deleção realizada com sucesso")
                
            }
        } catch (error) {
            alert("erro na api")
            console.log(error);
        }
    }

    async function showUpdate() {
        setFrmEdit(false);
    }

    async function hideUpdate() {

        setFrmEdit(true);

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
                                            name={"nome"}
                                            placeholder={"Nome"}
                                            required={"required"}
                                            type={"text"}
                                            value={evento.nomeEvento} />
                                        <Input
                                            key={"Descricao"}
                                            id={"Descricao"}
                                            name={"descricao"}
                                            placeholder={"Descrição"}
                                            required={"required"}
                                            type={"text"}
                                            value={evento.descricaoEvento} />
                                        <Select
                                            id={'TipoEvento'}
                                            name={"tipoEvento"}
                                            key={'TipoEvento'}
                                            required={"required"}
                                            defaultValue={""}
                                            manipulatorFunction={""}
                                            options={tipoEvento} />
                                        <Input
                                            key={"Data"}
                                            id={"Data"}
                                            name={"data"}
                                            placeholder={"Data"}
                                            required={"required"}
                                            type={"date"}
                                            value={evento.dataEvento} />
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
                                            value={evento.nomeEvento} />
                                        <Input
                                            key={"Descricao"}
                                            id={"Descricao"}
                                            name={"descricao"}
                                            placeholder={"Descrição"}
                                            required={"required"}
                                            type={"text"}
                                            value={evento.descricaoEvento} />
                                        <Select
                                            id={'TipoEvento'}
                                            name={"tipoEvento"}
                                            key={'TipoEvento'}
                                            required={"required"}
                                            defaultValue={""}
                                            manipulatorFunction={""}
                                            options={tipoEvento} />
                                        <Input
                                            key={"Data"}
                                            id={"Data"}
                                            name={"data"}
                                            placeholder={"Data"}
                                            required={"required"}
                                            type={"date"}
                                            value={evento.dataEvento} />
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
                                            manipulatorFunction={()=>{
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