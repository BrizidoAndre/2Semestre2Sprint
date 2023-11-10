import React from 'react';
import './TipoEventosPage.css';
import Title from '../../components/Title/Title';
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';

const TipoEventosPage = () => {
    return (
        <>
            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento-box">
                            
                            <Title titleText={"Cadastro Tipo de Eventos"}/>

                            {/* <ImageIlustrator /> */}

                            <form className='tipo-evento'>
                                <p>Formulário será criado aqui</p>
                            </form>
                        </div>
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default TipoEventosPage;