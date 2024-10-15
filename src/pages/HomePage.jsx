import styled from 'styled-components';
import photoMain from '../data/img/homepage-photo-main.jpg';
import photoAbout1 from '../data/img/homepage-about-1.jpg';
import photoAbout2 from '../data/img/homepage-about-2.png';
import photoAbout3 from '../data/img/homepage-about-3.jpg';

import { useEffect, useState } from 'react';

const Container = styled.div`
    text-align: center;
`;

const Banner = styled.div`
    background-image: url(${photoMain});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 1;

    h1,
    h3 {
        opacity: ${(props) => (props.isVisible ? 1 : 0)};
        transform: ${(props) =>
            props.isVisible ? 'translateY(0)' : 'translateY(-50px)'};
        transition: opacity 1s ease, transform 1s ease;
    }

    h1 {
        font-size: 4rem;
    }

    button {
        background-color: var(--color-green-400);
        color: white;
        margin-top: 200px;
        padding: 15px 30px;
        font-size: 1.2rem;
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: var(--color-green-500);
        }
    }
`;

const AboutSection = styled.div`
    padding: 60px 20px;
    text-align: center;

    h2 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 40px;
        line-height: 1.6;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
`;
const BenefitsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
const BenefitItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;
    margin: 20px 0;
    img {
        width: 300px;
        margin-bottom: 20px;
    }

    h4 {
        font-size: 1.3rem;
        margin-bottom: 10px;
    }
    p {
        font-size: 1rem;
    }
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
    const [isVisible, setIsvisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsvisible(true);
        }, 100);
    }, []);

    return (
        <Container>
            <Banner isVisible={isVisible}>
                <h1>BioPharm</h1>
                <h3>
                    We combine the power of nature with the latest technologies
                    for your health
                </h3>
                <button>Learn more...</button>
            </Banner>
            <AboutSection>
                <h2>About BioPharm</h2>
                <p>
                    At BioPharm, we believe in the power of nature. Combining
                    natural elements and the latest scientific advancements, we
                    create effective and eco-friendly medicines. Our mission is
                    to provide sustainable healthcare solutions that improve
                    lives while protecting the environment.
                </p>
                <BenefitsContainer>
                    <BenefitItem>
                        <img src={photoAbout1} />
                        <h4>Eco-Friendly</h4>
                        <p>
                            We prioritize sustainability in our production,
                            ensuring our medicines are as eco-friendly as
                            possible.
                        </p>
                    </BenefitItem>
                    <BenefitItem>
                        <img src={photoAbout2} />
                        <h4>Scientific Research</h4>
                        <p>
                            Our team of experts conducts rigorous research to
                            ensure the effectiveness of our natural-based
                            medicines.
                        </p>
                    </BenefitItem>
                    <BenefitItem>
                        <img src={photoAbout3} />
                        <h4>Innovative Solutions</h4>
                        <p>
                            We use cutting-edge technology to develop medicines
                            that offer the best of both nature and science.
                        </p>
                    </BenefitItem>
                </BenefitsContainer>
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
