import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import { useState, useEffect } from 'react';

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${(props) =>
        props.$isScrolled ? 'var(--color-green-50)' : 'transparent'};
    transition: background-color 0.3s ease;
    z-index: 100;
`;

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <StyledHeader $isScrolled={isScrolled}>
            <Logo />
            <MainNav />
        </StyledHeader>
    );
}

export default Header;
