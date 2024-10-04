import { useSearchParams } from 'react-router-dom';
import { useDrugs } from './useDrugs';
import Product from '../../ui/Product';
import Spinner from '../../ui/Spinner';
import ProductCart from '../../ui/ProductCart';
import Pagination from '../../ui/Pagination';

function StoreProducts() {
    const { isLoading, drugs, count } = useDrugs();
    const [searchParams] = useSearchParams();
    console.log(searchParams.toString());

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <Product
                data={drugs}
                render={(drug) => <ProductCart drug={drug} key={drug.id} />}
            />
            <Pagination count={count} />
        </>
    );
}

export default StoreProducts;
