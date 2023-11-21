import React, { useState } from 'react';
import './EventosPage.css'

// Importando Imagens
import eventoImage from '../../assets/images/evento.svg'

// Importando Componentes
import Container from '../../components/Container/Container';
import ImageIlustrator from '../../components/ImageIlustrator/ImageIlustrator';
import MainContent from '../../components/MainContent/MainContent';
import Title from '../../components/Title/Title';
import { Input } from '../../components/FormComponents/FormComponents';


const EventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(true); //Está cadastrando?


    return (
        <>
            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">


                            <Title titleText={"Cadastro Eventos"}/>
                            <ImageIlustrator imageRender={eventoImage}/>

                            <form className='ftipo-evento'>

                                {/* Cadastrar ou editar? */}
                                {frmEdit ? (
                                    <>
                                    <Input />
                                    </>
                                ):(
                                    <>
                                    </>
                                )}


                            </form>


                        </div>
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default EventosPage;