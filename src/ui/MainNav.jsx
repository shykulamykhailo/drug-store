import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';

const StyledNav = styled.nav`
    display: flex;
    gap: 10px;
`;

const StyledNavLink = styled(NavLink)`
    position: relative;
    padding: 10px 15px;
    color: var(--color-green-900);
    border-radius: 8px;
    transition: background 0.5s ease-in-out;

    &.active {
        background: rgba(0, 128, 0, 0.2);
    }

    &:hover {
        background-color: rgba(0, 128, 0, 0.3);
    }
`;

function MainNav() {
    const { isAuthenticated } = useUser();

    return (
        <StyledNav>
            <StyledNavLink
                to="store"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Store
            </StyledNavLink>
            <StyledNavLink
                to="shoppingCart"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Shopping cart
            </StyledNavLink>
            <StyledNavLink
                to="contacts"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Contacts
            </StyledNavLink>
            {isAuthenticated ? (
                <StyledNavLink
                    to="profile"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Profile
                </StyledNavLink>
            ) : (
                <StyledNavLink
                    to="authorization"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Authorization
                </StyledNavLink>
            )}
        </StyledNav>
    );
}

export default MainNav;
