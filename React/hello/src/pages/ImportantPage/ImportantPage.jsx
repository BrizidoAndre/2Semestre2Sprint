import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';



const ImportantPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <>
            <h1>ImportantPage</h1>
            <span>{theme}</span>
        </>
    );
};

export default ImportantPage;