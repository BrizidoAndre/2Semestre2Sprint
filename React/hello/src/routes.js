import React from "react";
import { Route as Rota, BrowserRouter, Routes} from 'react-router-dom'


// import dos componentes - páginas
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage"
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";

const Rotas = () => {
    return(
        <BrowserRouter>
        
        <Routes>

        <Rota element={<HomePage />} path={"/"} exact />
        <Rota element={<LoginPage />} path={"/login"} exact />
        <Rota element={<ProdutoPage />} path={"/produtos"} exact />
        </Routes>
        </BrowserRouter>
    );
}

export default Rotas