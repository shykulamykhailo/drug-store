import { useSearchParams } from 'react-router-dom';
import { useDrugs } from './useDrugs';
import Products from '../../ui/Products';
import Spinner from '../../ui/Spinner';
import ProductCart from '../../ui/ProductCart';
import Pagination from '../../ui/Pagination';
import styled from 'styled-components';

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
`;

function StoreProducts() {
    const { isLoading, drugs, count } = useDrugs();
    const [searchParams] = useSearchParams();
    console.log(searchParams.toString());

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <div>
                <Products
                    data={drugs}
                    render={(drug) => <ProductCart drug={drug} key={drug.id} />}
                />
            </div>
            <Pagination count={count} />
        </div>
    );
}

export default StoreProducts;
