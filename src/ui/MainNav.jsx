import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import { useEffect, useRef, useState } from 'react';

const StyledNav = styled.nav`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
    }
`;

const HamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    div {
        width: 25px;
        height: 5px;
        background-color: black;
        border-radius: 2px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileMenu = styled.div`
    display: ${(props) => (props['data-is-open'] ? 'block' : 'none')};
    position: absolute;
    top: 3rem;
    right: 1rem;
    background: white;
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 99;

    nav {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const StyledNavLink = styled(NavLink)`
    position: relative;
    padding: 10px 15px;
    color: var(--color-green-900);
    border-radius: 8px;
    transition: background-color 0.5s ease-in-out;

    &.active {
        background-color: rgba(0, 128, 0, 0.2);
        border: none;
    }

    &:hover {
        background-color: rgba(0, 128, 0, 0.3);
    }
`;

function MainNav() {
    const { isAuthenticated } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.addEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <HamburgerMenu onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </HamburgerMenu>
            <MobileMenu ref={menuRef} data-is-open={isOpen}>
                <StyledNav>
                    <StyledNavLink
                        to="store"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => setIsOpen(false)}
                    >
                        Store
                    </StyledNavLink>
                    <StyledNavLink
                        to="shoppingCart"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => setIsOpen(false)}
                    >
                        Shopping cart
                    </StyledNavLink>
                    <StyledNavLink
                        to="contacts"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => setIsOpen(false)}
                    >
                        Contacts
                    </StyledNavLink>
                    {isAuthenticated ? (
                        <StyledNavLink
                            to="profile"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Profile
                        </StyledNavLink>
                    ) : (
                        <StyledNavLink
                            to="authorization"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Authorization
                        </StyledNavLink>
                    )}
                </StyledNav>
            </MobileMenu>
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
        </>
    );
}

export default MainNav;
