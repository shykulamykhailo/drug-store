import styled from 'styled-components';
import { useStore } from '../context/StoreContext';
import Button from './Button';

const StyledProductCart = styled.div`
    border-radius: 0.5rem;
    align-items: center;
    background-color: var(--color-grey-0);
    box-shadow: var(--shadow-lg);
    width: 15rem;
    height: auto;
`;

const ProductImage = styled.img`
    width: 15rem;
    height: 14rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: 0 1rem 1rem 1rem;
`;

const ProductName = styled.div`
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
`;

const ProductCategory = styled.div`
    font-size: 13px;

    padding: 2px;
    border-radius: 5px;
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
            <ProductImage src="pharm.jpg" height="60px" />
            <ProductDetails>
                <ProductName>{name}</ProductName>
                <ProductCategory>{category}</ProductCategory>
                <ProductPrice>${price}</ProductPrice>
                <Button size="small" onClick={() => handleAddToCart(drug)}>
                    Add to cart
                </Button>
            </ProductDetails>
        </StyledProductCart>
    );
}

export default ProductCart;
