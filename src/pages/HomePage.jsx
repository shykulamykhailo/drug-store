import styled from 'styled-components';

import { useRef } from 'react';
import Banner from '../features/homepage/Banner';
import About from '../features/homepage/About';

const Container = styled.div`
    text-align: center;
`;

const ServicesSection = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 40px 20px;
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
            <ServicesSection>
                <span>Delivery</span>
                <span>Pre order</span>
            </ServicesSection>

            <TestimonialsSection>
                <p>Testimonial</p>
                <p>Testimonial</p>
                <p>Testimonial</p>
            </TestimonialsSection>
        </Container>
    );
}

export default HomePage;
