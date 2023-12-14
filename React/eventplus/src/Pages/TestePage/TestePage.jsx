import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const TestePage = () => {
    // Variáveis do componente
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    // Usando UseParams
    const {idEvento} = useParams();

    // Função para calcular as variáveis do componente
    function handleCalcular(e) {
        e.preventDefault();
        setTotal(parseFloat(n1) + parseFloat(n2));
    };
    
    useEffect(() => {
        alert(`id do Evento ${idEvento} recuperado`)
    },[])

    return (
        <div>
            <h1>Pagina de Poc`s</h1>
            <h2>Calculator</h2>

            <form 
                action=''
                onSubmit={handleCalcular}
            >
                <Input 
                    type='number'
                    placeholder="Insira o primeiro digito"
                    name="n1"
                    id="n1"
                    value={n1}
                    onChange={(e) => {setN1(e.target.value)}}
                />

                <br />

                <Input 
                    type='number'
                    placeholder="Insira o segundo digito"
                    name="n2"
                    id="n2"
                    value={n2}
                    onChange={(e) => {setN2(e.target.value)}}
                />

                <br />

                <Button 
                    textButton="Calcular" 
                    type="submit"
                />
                <span>
                    Resultado: 
                    <strong>
                    {total}
                    </strong>
                </span>
            </form>
        </div>
    );
};

export default TestePage;