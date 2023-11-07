import React from 'react';
import './HomePage.css';
import Title from '../../components/Title/Title';
import Banner from '../../components/Banner/Banner';
import MainContent from '../../components/MainContent/MainContent';
import VisionSection from '../../components/VisionSection/VisionSection';


const HomePage = () => {
    return (
        <div>
            <MainContent>
            <Banner/>
            <VisionSection/>
                
            </MainContent>
        </div>
    );
};

export default HomePage;