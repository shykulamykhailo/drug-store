import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const Banner = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AboutSection = styled.div`
    padding: 60px 20px;
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
    return (
        <Container>
            <Banner>
                <h1>BioPharm</h1>
                <h3>Medicines delivered straight to your door</h3>
            </Banner>
            <AboutSection>
                <h3>About us...</h3>
                <div>Our service</div>
            </AboutSection>
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
