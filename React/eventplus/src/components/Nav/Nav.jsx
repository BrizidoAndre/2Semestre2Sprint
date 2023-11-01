import React from 'react';
import "./Nav.css"

// Importando logotipo das navs
import logoMobile from "../../assets/images/logo-white.svg"
import logoDesktop from '../../assets/images/logo-pink.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='navbar'>
            <span className='navbar__close'>X</span>4

            <Link to="/" className='eventlogo'>
                <img 
                className='eventlogo__logo-image' 
                src={window.innerWidth >= 992 ? logoDesktop : logoMobile} 
                alt="Event Plus Logo" />
            </Link>

            <div className="navbar__items-box">
                <a href="">Home</a>
                <a href="">Tipos de Evento</a>
                <a href="">Home</a>
            </div>
        </nav>
    );
};

export default Nav;