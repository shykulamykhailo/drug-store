import styled from 'styled-components';
import { useRef } from 'react';
import Banner from '../features/homepage/Banner';
import About from '../features/homepage/About';
import Services from '../features/homepage/Services';
import Testimonials from '../features/homepage/Testimonials';
import MainStoreProducts from '../features/homepage/MainStoreProducts';

const Container = styled.div`
    text-align: center;
    overflow-x: hidden;
`;

function HomePage() {
    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Container>
            <Banner scrollToAbout={scrollToAbout} />
            <About aboutRef={aboutRef} />
            <MainStoreProducts />
            <Services />
            <Testimonials />
        </Container>
    );
}

export default HomePage;
