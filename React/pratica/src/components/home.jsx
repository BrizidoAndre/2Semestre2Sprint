import { useState } from "react";
// aqui estamos importando a função useState da biblioteca react
const Home = () => {
    // Essa const serve para armazenar dois valores
    // O primeiro é o valor que aparece na tela
    // O segundo é uma função que ao ser chamada altera o valor inicial 
    const [value, setvalue] = useState('Bananas');

    // Essa função é quando clickamos no botão da tela
    const HandleClick = () => {
        // Ao apertar chamamos a função que altera a variável e alteramos
        setvalue('Melão');
    };

    // Relembrando sempre que o retorno deve ser uma única div
    return (
        <div>
            <h2>Página Inicial</h2>
            <p>Um texto qualquer de exemplo</p>

            <h1>Fruta favorita: {value}</h1>

                {/* Aqui a variável muda só de alterarmos o input dela */}
                <input type="text"/>

                {/* On click é a função executada ao apertar o botão */}
                <button onClick={HandleClick}>Me aperte</button>


        </div>
    )
}

// Sempre devemos exportar a função
export default Home;