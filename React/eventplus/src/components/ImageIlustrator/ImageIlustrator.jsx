import React from 'react';
import 'ImageIlustrator'
import tipoEventoImage from "../../assets/images/tipo-evento.svg"

const ImageIlustrator = ({ alteText, imageName, additionalClass }) => {

    let imageResource;

    switch (imageName) {
        case "tipo-evento":
            imageResource = tipoEventoImage;
            break;
        case "evento":
            imageResource = eventoImage;
            break;
        default:
            imageResource = defaultImage;
            break;

    }


    return (
        <figure className='illustrator-brox'>
            <img
                src={imageResource}
                alt={alteText}
                className={`illustrator-box__image ${additionalClass}`}
            />
        </figure>
    );
};

export default ImageIlustrator;