import styled from 'styled-components';
import StoreProducts from '../features/store/StoreProducts';
import StoreSidebar from '../features/store/StoreSidebar';

const StyledStore = styled.div`
    margin-top: 100px;
`;

const StyledTitle = styled.div`
    padding: 20px;
`;

const StoreContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    width: 100%;
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
