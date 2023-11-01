import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
 
// Importando as páginas
import HomePage from "./Pages/HomePage/HomePage"
import EventosPage from "./Pages/EventosPage/EventosPage"
import TipoEventosPage from "./Pages/TipoEventosPage/TipoEventosPage"
import TestePage from "./Pages/TestePage/TestePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


// Sempre nessa ordem as rotas retornam um BrowserRouter > Routes > Route
const Rotas = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                {/* Relembrando que as routes são as páginas que vamos direcionar o usuario */}
                {/* element= "A página que importamos acima" */}
                {/* path= "O texto que será mostrado na url" */}
                <Route element={<HomePage/>} path="/" exact  />
                <Route element={<EventosPage/>} path="/eventos"  />
                <Route element={<TipoEventosPage/>} path="/tipoEventos"  />
                <Route element={<TestePage/>} path="/testePage"/>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Rotas