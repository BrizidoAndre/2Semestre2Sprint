import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Importando a Context
import ThemeContext from '../../context/ThemeContext';

const Nav = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const tm = theme === "Light" ? "Dark" : "Light"
        setTheme(tm);
        
        localStorage.setItem("theme", tm)
    }

    return (
        <header>
            <Link to={"/"}>Home</Link> | &nbsp;
            <Link to={"/produtos"}>Produtos</Link> | &nbsp;
            <Link to={"/importante"}>Dados Importantes</Link> | &nbsp;
            <Link to={"/meus-pedidos"}>Dados Pessoais</Link> | &nbsp;
            <Link to={"/login"}>Login</Link> | &nbsp;
            <button onClick={toggleTheme}>Mudar Tema</button>
            
        </header>
    );
};

export default Nav;