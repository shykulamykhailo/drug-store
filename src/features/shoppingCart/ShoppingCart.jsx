import styled from 'styled-components';
import { useStore } from '../../context/StoreContext';
import { insertOrder } from '../../services/apiOrders';
import OrderForm from '../../ui/OrderForm';
import Button from '../../ui/Button';
import EmptyShoppingCartComponent from '../../ui/EmptyShoppingCartComponent';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 100px;
`;
const StyledTitle = styled.h3`
    padding: 20px;
`;

const StyledShoppingCart = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
    }
`;

const StyledStoredProducts = styled.div`
    padding: 20px;
    border: 3px solid var(--color-green-700);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
`;

const ProductInfo = styled.div`
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 150px;

    @media (max-width: 768px) {
        max-width: 300px;
    }
`;

const ProductPrice = styled.span`
    margin-right: 10px;
`;

const ProductActions = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const StyledProduct = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--color-green-200);
    flex-wrap: nowrap;
    max-width: 100%;
    width: 100%;
`;

const TotalOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
`;

function ShoppingCart() {
    const {
        storeData,
        handleIncrement,
        handleDecrement,
        handleRemove,
        handleClear,
        calculateTotalPrice,
    } = useStore();

    const handleFormSubmit = (userData) => {
        insertOrder({ userData, storeData });
        handleClear();
    };

    if (storeData.length === 0) {
        return <EmptyShoppingCartComponent />;
    }

    return (
        <PageContainer>
            <StyledTitle>Shopping cart</StyledTitle>
            <StyledShoppingCart>
                <StyledStoredProducts>
                    <ul>
                        {storeData.map((item) => (
                            <StyledProduct key={item.id}>
                                <ProductInfo>{item.name}</ProductInfo>
                                <ProductPrice>
                                    ${item.productPrice}
                                </ProductPrice>
                                <ProductActions>
                                    <Button
                                        size="small"
                                        onClick={() => handleDecrement(item.id)}
                                    >
                                        -
                                    </Button>
                                    <span>{item.quantity}</span>
                                    <Button
                                        size="small"
                                        onClick={() => handleIncrement(item.id)}
                                    >
                                        +
                                    </Button>
                                    <Button
                                        size="small"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remove
                                    </Button>
                                </ProductActions>
                            </StyledProduct>
                        ))}
                    </ul>
                    {storeData.length !== 0 && (
                        <TotalOptions>
                            <p> Total Price: ${calculateTotalPrice()}</p>
                            <Button onClick={() => handleClear()}>
                                Clear shopping cart
                            </Button>
                        </TotalOptions>
                    )}
                </StyledStoredProducts>
                <OrderForm onFormSubmit={handleFormSubmit} />
            </StyledShoppingCart>
        </PageContainer>
    );
}

export default ShoppingCart;
