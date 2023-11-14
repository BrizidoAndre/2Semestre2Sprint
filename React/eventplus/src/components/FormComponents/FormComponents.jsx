import React from 'react';
import './FormComponents.css'

export const Input = ({
    type,
    id,
    value,
    required,
    name,
    placeholder,
    manipulatorFunction, 
    additionalClass = ""
}) => {
    return (
        <input
            type={type}
            id={id}
            value={value}
            required={required ? "required" : ""}
            className={`input-component ${additionalClass}`}
            name={name}
            placeholder={placeholder}
            onChange={manipulatorFunction}
            autoComplete="off"
        />
    );
};

export const Label = (htmlFor, labelText) => {
    return <label htmlFor={htmlFor}>{labelText}</label>
}

//* Componente criado na forma tradicional props ao invés da desestruturação
export const Button = ({ id,
    name,
    type,
    additionalClass,
    manipulatorFunction,
    textButton }) => {
    return (
        <button
            id={id}
            name={name}
            type={type}
            className={`button-component ${additionalClass}`}
            onClick={manipulatorFunction}
        >
            {textButton}
        </button>
    )
}

// options = [
//     {value: "sdaghsd", text: "Selecione"},
//     {value: "asdfuasds", text: "SQL Server"},
//     {value: "asdfuasdsasdf", text: "Javascript"},
// ]; //veio do banco de dados pela api

//* Tentando criar outro componente usando props
export const Select = (props) => {
    return (
        <select
            name={props.name}
            id={props.id}
            required={props.required}
            className={`input-component ${props.additionalClass}`}
            onChange={props.manipulatorFunction}
            value={props.defaultValue}
        >

            <option value="">Tipo Evento</option>
            {/* options.map(???) */}
            {props.options.map((o) => {
                return (
                    <option key={Math.random()} value={o.value}>{o.text}</option>
                );
            })};

        </select>
    )
}
