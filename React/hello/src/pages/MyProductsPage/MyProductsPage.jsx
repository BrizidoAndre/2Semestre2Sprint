import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';

const MyProductsPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <>
        <h1>My products Page</h1>
        <h2>Private Pages</h2>

        <span>{theme}</span>
        </>
    );
};

export default MyProductsPage;