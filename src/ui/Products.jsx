import styled from 'styled-components';

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0 20px;
    justify-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

function Products({ data, render }) {
    if (!data.length === 0) return <div>No data to show</div>;
    return <ProductsContainer>{data.map(render)}</ProductsContainer>;
}

export default Products;
