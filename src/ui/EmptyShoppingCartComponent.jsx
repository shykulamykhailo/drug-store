import styled from 'styled-components';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

function EmptyShoppingCartComponent() {
    return (
        <PageContainer>
            <h3>Your cart is empty, please check out store</h3>
            <NavLink to="/store">
                <Button>To store</Button>
            </NavLink>
        </PageContainer>
    );
}

export default EmptyShoppingCartComponent;
