import React from 'react';
import "./Nav.css"

// Importando logotipo das navs
import logoMobile from "../../assets/images/logo-white.svg";
import logoDesktop from '../../assets/images/logo-pink.svg';


import { Link } from 'react-router-dom';

const Nav = ({exibeNavbar, setExibeNavbar }) => {

    console.log(`Exibe o menu? ${exibeNavbar}`);

    return (
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
            <span 
                className='navbar__close'
                onClick={() => {setExibeNavbar(false)}} 
            >
                x
            </span>




            <Link to="/" className='eventlogo'>
                <img 
                className='eventlogo__logo-image' 
                src={window.innerWidth >= 992 ? logoDesktop : logoMobile} 
                alt="Event Plus Logo" 
                />
            </Link>




            <div className="navbar__items-box">
                <Link className='navbar__item' to={"/"}>Home</Link>
                <Link className='navbar__item' to={"/tipoEventos"}>Tipos de Evento</Link>
                <Link className='navbar__item' to={"/eventos"}>Eventos</Link>
            </div>
        </nav>
    );
};

export default Nav;