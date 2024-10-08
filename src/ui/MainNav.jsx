import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';

const StyledNav = styled.nav`
    display: flex;
    gap: 10px;
`;

function MainNav() {
    const { isAuthenticated } = useUser();

    return (
        <StyledNav>
            <NavLink to="store">Store</NavLink>
            <NavLink to="shoppingCart">Shopping cart</NavLink>
            <NavLink to="contacts">Contacts</NavLink>
            {isAuthenticated ? (
                <NavLink to="profile">Profile</NavLink>
            ) : (
                <NavLink to="authorization">Authorization</NavLink>
            )}
        </StyledNav>
    );
}

export default MainNav;
