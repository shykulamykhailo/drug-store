import styled from 'styled-components';
import StoreProducts from '../features/store/StoreProducts';
import StoreSidebar from '../features/store/StoreSidebar';

const StyledStore = styled.div`
    margin: 100px 40px;
`;

const StoreContent = styled.div`
    display: flex;
    gap: 50px;
`;

function Store() {
    return (
        <StyledStore>
            <h3>Store</h3>
            <StoreContent>
                <StoreSidebar />
                <StoreProducts />
            </StoreContent>
        </StyledStore>
    );
}

export default Store;
