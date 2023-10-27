import React from "react";
import "./Title.css"

const Title = (props) => {

    return(
        <>
        <h1 className="title">Hello {props.nome} meu caro {props.sobrenome}</h1>
        </>  
    );
}

export default Title;

const Title2 = () => <h1 className="title">Hello Component Title</h1>