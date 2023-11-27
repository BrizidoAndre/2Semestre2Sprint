import React, { useContext, useState } from "react";
import { Route as Rota, BrowserRouter, Routes } from 'react-router-dom'
import Nav from "./components/Nav/Nav";

// Import dos Contextos
import ThemeContext from "./context/ThemeContext";

// import dos componentes - páginas
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage"
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import ImportantPage from "./pages/ImportantPage/ImportantPage"
import MyProductsPage from "./pages/MyProductsPage/MyProductsPage"

// Testar as Rotas
// Context API
// Token
// Login em si

const Rotas = () => {

    const [theme, setTheme] = useState( getThemeLocalStorage);

    // Verifica se o tema está no localStorage ou assume o tema light
    function getThemeLocalStorage(){
        setTheme( localStorage.getItem("theme") !== null 
        ? localStorage.getItem("theme") 
        : "Light" )
    }

    useState();//


    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{theme, setTheme}}>

                <Nav />

                <Routes>
                    <Rota element={<HomePage />} path={"/"} exact />
                    <Rota element={<HomePage />} path={"*"} />
                    <Rota element={<ProdutoPage />} path={"/produtos"} />
                    <Rota element={<ImportantPage />} path={"/importante"} />
                    <Rota element={<MyProductsPage />} path={"/meus-pedidos"} />
                    <Rota element={<LoginPage />} path={"/login"} />
                </Routes>

            </ThemeContext.Provider>
        </BrowserRouter>
    );
}

export default Rotas