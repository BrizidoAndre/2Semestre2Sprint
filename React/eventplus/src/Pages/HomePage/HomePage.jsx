import React from 'react';
import './HomePage.css';

// Importando componentes
import Title from '../../components/Title/Title';
import Banner from '../../components/Banner/Banner';
import MainContent from '../../components/MainContent/MainContent';
import VisionSection from '../../components/VisionSection/VisionSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import NextEvent from '../../components/NextEvent/NextEvent';
import Container from '../../components/Container/Container'

const HomePage = () => {
    return (
        <div>
            <MainContent>
                <Banner />
                <section className='proximos-eventos'>
                    <Container>
                    <Title titleText={"Próximos Eventos"} />
                    
                    <div className="events-box">
                        <NextEvent 
                            title={"Evento 1"} 
                            description={"Descrição do evento 1"} 
                            eventDate="09/11/2023" 
                        />
                        <NextEvent 
                            title={""} 
                            description={""} 
                            eventDate="" 
                        />
                        <NextEvent 
                            title={""} 
                            description={""} 
                            eventDate="" 
                        />
                        <NextEvent 
                            title={""} 
                            description={""} 
                            eventDate="" 
                        />
                        <NextEvent 
                            title={""} 
                            description={""} 
                            eventDate="" 
                        />
                        <NextEvent 
                            title={""} 
                            description={""} 
                            eventDate="" 
                        />
                        <NextEvent 
                            title={""} 
                            description={""} 
                            eventDate="" 
                        />
                    </div>
                    </Container>

                </section>
                <VisionSection />
                <ContactSection />
            </MainContent>
        </div>
    );
};

export default HomePage;