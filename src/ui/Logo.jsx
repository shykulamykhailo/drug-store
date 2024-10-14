import { NavLink } from 'react-router-dom';
import { RiLeafFill } from 'react-icons/ri';
import styled from 'styled-components';

const StyledIcon = styled(RiLeafFill)`
    font-size: 2rem;
    color: var(--color-green-600);
    :hover {
        color: var(--color-green-700);
    }
`;

function Logo() {
    return (
        <NavLink to="/">
            <StyledIcon />
        </NavLink>
    );
}

export default Logo;
