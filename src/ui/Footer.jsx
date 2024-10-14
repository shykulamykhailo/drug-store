import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: relative;
    background-color: var(--color-green-200);
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter>
            <div>contacts</div> <div>about us</div>
        </StyledFooter>
    );
}

export default Footer;
