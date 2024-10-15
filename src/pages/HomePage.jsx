import styled from 'styled-components';

import { useRef } from 'react';
import Banner from '../features/homepage/Banner';
import About from '../features/homepage/About';
import Services from '../features/homepage/Services';
import Testimonials from '../features/homepage/Testimonials';

const Container = styled.div`
    text-align: center;
`;

const TestimonialsSection = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 40px 20px;
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
            <Services />
            <Testimonials />
        </Container>
    );
}

export default HomePage;
