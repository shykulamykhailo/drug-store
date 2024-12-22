import { useSearchParams } from 'react-router-dom';
import { useDrugs } from './useDrugs';
import Products from '../../ui/Products';
import Spinner from '../../ui/Spinner';
import ProductCart from '../../ui/ProductCart';
import Pagination from '../../ui/Pagination';

function StoreProducts() {
    const { isLoading, drugs, count } = useDrugs();
    const [searchParams] = useSearchParams();

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
