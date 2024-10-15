import styled from 'styled-components';
import photoAbout1 from '../../data/img/homepage-about-1.jpg';
import photoAbout2 from '../../data/img/homepage-about-2.png';
import photoAbout3 from '../../data/img/homepage-about-3.jpg';

const AboutSection = styled.div`
    padding-top: 70px;
    padding-bottom: 60px;

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
    width: 100%;
    height: 500px;
    justify-content: space-around;
    overflow: hidden;
    margin-top: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
const BenefitItem = styled.div`
    position: relative;
    flex: 1;
    width: 100%;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    &:hover div {
        opacity: 1;
    }
`;

const BenefitOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    h4 {
        color: white;
        font-size: 2rem;
        margin-bottom: 10px;
    }

    p {
        color: white;
        font-size: 1.2rem;
        text-align: center;
        max-width: 250px;
    }
`;

function About({ aboutRef }) {
    return (
        <AboutSection ref={aboutRef}>
            <h2>About BioPharm</h2>
            <p>
                At BioPharm, we believe in the power of nature. Combining
                natural elements and the latest scientific advancements, we
                create effective and eco-friendly medicines. Our mission is to
                provide sustainable healthcare solutions that improve lives
                while protecting the environment.
            </p>
            <BenefitsContainer>
                <BenefitItem img={photoAbout1}>
                    <BenefitOverlay>
                        <h4>Eco-Friendly</h4>
                        <p>
                            We prioritize sustainability in our production,
                            ensuring our medicines are as eco-friendly as
                            possible.
                        </p>
                    </BenefitOverlay>
                </BenefitItem>
                <BenefitItem img={photoAbout2}>
                    <BenefitOverlay>
                        <h4>Scientific Research</h4>
                        <p>
                            Our team of experts conducts rigorous research to
                            ensure the effectiveness of our natural-based
                            medicines.
                        </p>
                    </BenefitOverlay>
                </BenefitItem>
                <BenefitItem img={photoAbout3}>
                    <BenefitOverlay>
                        <h4>Innovative Solutions</h4>
                        <p>
                            We use cutting-edge technology to develop medicines
                            that offer the best of both nature and science.
                        </p>
                    </BenefitOverlay>
                </BenefitItem>
            </BenefitsContainer>
        </AboutSection>
    );
}

export default About;
