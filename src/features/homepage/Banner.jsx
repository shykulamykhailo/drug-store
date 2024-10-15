import { useEffect, useState } from 'react';
import styled from 'styled-components';
import photoMain from '../../data/img/homepage-photo-main.jpg';

const StyledBanner = styled.div`
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

function Banner({ scrollToAbout }) {
    const [isVisible, setIsvisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsvisible(true);
        }, 100);
    }, []);
    return (
        <StyledBanner isVisible={isVisible}>
            <h1>BioPharm</h1>
            <h3>
                We combine the power of nature with the latest technologies for
                your health
            </h3>
            <button onClick={scrollToAbout}>Learn more...</button>
        </StyledBanner>
    );
}

export default Banner;
