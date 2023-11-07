import React, { useState } from 'react';
import './Header.css';

// Importando Componentes necessários
import Container from '../Container/Container';
import Nav from "../Nav/Nav";
import PerfilUsuario from '../PerfilUsuaio/PerfilUsuario';

// Importando imagens
import menubar from "../../assets/images/menubar.png"


const Header = () => {

    const [exibeNavbar, setExibeNavBar] = useState(false); //Exibe ou esconde o menu

    return (
        <header className='headerpage'>
            <Container>
                <div className='header-flex'>
                    <img
                    src={menubar}
                    alt="Imagem menu de barras. Serve para exibir ou esconder o menu do smartphone" 
                    onClick={() => {setExibeNavBar(true)}}
                    className='headerpage_menubar'
                    />


                    <Nav exibeNavbar={exibeNavbar} setExibeNavBar={setExibeNavBar}/>
                    <PerfilUsuario/>
                </div>
            </Container>
        </header>
    );
};

export default Header;