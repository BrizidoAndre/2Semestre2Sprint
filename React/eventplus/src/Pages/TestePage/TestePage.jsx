import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';

const TestePage = () => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    return (
        <div>
            <Header/>
            <h1>Pagina de Poc`s</h1>
            <h2>Calculator</h2>

            <form action="">
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
            </form>

        </div>
    );
};

export default TestePage;