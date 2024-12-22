import styled from 'styled-components';
import { useStore } from '../context/StoreContext';
import Button from './Button';

const StyledProductCart = styled.div`
    border: 1px solid var(--color-green-700);
    border-radius: 10px;
    padding: 16px;
    text-align: center;
    background-color: var(--color-green-100);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 260px;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 66.66%;
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`;

const ProductName = styled.div`
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
`;

const ProductFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
`;

const ProductCategory = styled.div`
    font-size: 13px;
    color: var(--color--green--900);
    background-color: #7cf37c;
    border: 1px solid var(--color-green-900);
    padding: 2px;
    border-radius: 5px;
`;

const ProductPriceAndButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const ProductPrice = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 2px;
`;

function ProductCart({ drug }) {
    const { addProduct } = useStore();
    const { id: drugId, name, category, price, drugImage } = drug;

    const handleAddToCart = (product) => {
        addProduct(product);
    };

    return (
        <StyledProductCart id={drugId}>
            <ProductImage src={`${drugImage}`} height="60px" />
            <ProductDetails>
                <ProductName>{name}</ProductName>
                <ProductFooter>
                    <ProductCategory>{category}</ProductCategory>
                    <ProductPriceAndButton>
                        <ProductPrice>${price}</ProductPrice>
                        <Button
                            size="small"
                            onClick={() => handleAddToCart(drug)}
                        >
                            Add to cart
                        </Button>
                    </ProductPriceAndButton>
                </ProductFooter>
            </ProductDetails>
        </StyledProductCart>
    );
}

export default ProductCart;
