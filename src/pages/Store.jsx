import styled from 'styled-components';
import StoreProducts from '../features/store/StoreProducts';
import StoreSidebar from '../features/store/StoreSidebar';

const StyledStore = styled.div`
    margin: 100px 50px 0 50px;
`;

const StyledTitle = styled.div`
    padding: 20px;
`;

const StoreContent = styled.div`
    display: flex;
    gap: 50px;
`;

function Store() {
    return (
        <StyledStore>
            <StyledTitle>Store</StyledTitle>
            <StoreContent>
                <StoreSidebar />
                <StoreProducts />
            </StoreContent>
        </StyledStore>
    );
}

export default Store;
