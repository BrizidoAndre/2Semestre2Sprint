import React, { useState } from 'react';
import './TipoEventosPage.css';
import Title from '../../components/Title/Title';
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';
import ImageIlustrator from '../../components/ImageIlustrator/ImageIlustrator';

// Importando as imagens
import tipoEventoImg from "../../assets/images/tipo-evento.svg"

const TipoEventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(false); //está em modo edição?

    function handleSubmit() {
        alert("Cadastrar")
    }
    function handleUpdate() {
        alert("Editar");
    }

    return (
        <>
            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">
                            
                            <Title titleText={"Cadastro Tipo de Eventos"}/>

                            <ImageIlustrator imageRender={tipoEventoImg} />

                        
                            <form 
                                className='ftipo-evento'
                                onSubmit={frmEdit ? handleUpdate : handleSubmit}
                            >
                                {/* cadastrar ou editar? */}
                                {
                                    !frmEdit ? (<p>Tela de Cadastro</p>) : (<p>Tela de edição</p>)
                                }
                            </form>

                        </div>
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default TipoEventosPage;