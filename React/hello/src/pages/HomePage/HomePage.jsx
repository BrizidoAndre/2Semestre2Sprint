import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Homepage = () => {

    const {theme} = useContext(ThemeContext);


    return (
        <>
            <h1>HomePage</h1>
            <span>{theme}</span>
            <hr />
        </>
    );
};

export default Homepage;