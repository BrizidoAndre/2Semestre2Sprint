import React from "react";
import { useState } from "react";


const Contador = () => {

    const[contador,setContador] = useState(0);

    function Incrementar() {
        setContador(contador + 1)
    }
    function Decrementar() {
        setContador(contador == 0 ? 0 : contador - 1)
    }
    
    return (
        <>
            <h1>Contador</h1>

            <span>{contador}</span>
            <button onClick={() => Incrementar()}>Incrementar</button>
            <button onClick={() => Decrementar()}>Decrementar</button>
        </>
    )
}

export default Contador