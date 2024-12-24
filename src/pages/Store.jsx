import styled from 'styled-components';
import StoreProducts from '../features/store/StoreProducts';
import StoreSidebar from '../features/store/StoreSidebar';

const StoreContent = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    gap: 50px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

function Store() {
    return (
        <StoreContent>
            <StoreSidebar />
            <StoreProducts />
        </StoreContent>
    );
}

export default Store;
