import React from 'react';
import './NextEvent.css'
import { dateFormatDbToView, dateFormatDbToViewEfetivo } from "../../Utils/stringFunctions"
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';

const NextEvent = ({ title, description, eventDate, idEvent, linkText}) => {

    return (
        <article className='event-card'>
            <h2 className='event-card__title'>{title}</h2>

            <p
                className='event-card__description'
                data-tooltip-id="my-tooltip"
                data-tooltip-content={description}
                data-tooltip-place="top"
            >
                <Tooltip id="my-tooltip" className='tooltip'/>
                {description.substr(0, 15)}...
            </p>

            <p className='event-card__description'>{dateFormatDbToViewEfetivo(eventDate)}</p>

            <Link to={`/detalheEvento/${idEvent}`} className="event-card__connect-link">{linkText}</Link>
        </article>
    );
};

export default NextEvent;