import React from 'react';
import './Header.css';

// Importando Componentes necessários
import Container from '../Container/Container';
import Nav from "../Nav/Nav";
import PerfilUsuario from '../PerfilUsuaio/PerfilUsuario';

// Importando imagens
import menubar from "../../assets/images/menubar.png"


const Header = () => {
    return (
        <header className='headerPage'>
            <Container>
                <div className='header-flex'>
                    <img
                    src={menubar}
                    alt="Imagem menu de barras. Serve para exibir ou esconder o menu do smartphone" 
                    />

                    <Nav/>
                    <PerfilUsuario/>
                </div>
            </Container>
        </header>
    );
};

export default Header;