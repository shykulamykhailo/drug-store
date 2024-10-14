import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';

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
    background-color: var(--color-green-200);
`;

function Header() {
    return (
        <StyledHeader>
            <Logo />
            <MainNav />
        </StyledHeader>
    );
}

export default Header;
