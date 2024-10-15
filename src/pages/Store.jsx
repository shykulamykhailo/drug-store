import styled from 'styled-components';
import StoreProducts from '../features/store/StoreProducts';
import StoreSidebar from '../features/store/StoreSidebar';

const StyledStore = styled.div`
    padding-top: 70px;
`;

function Store() {
    return (
        <StyledStore>
            <span>Store</span>
            <StoreSidebar />
            <StoreProducts />
        </StyledStore>
    );
}

export default Store;
