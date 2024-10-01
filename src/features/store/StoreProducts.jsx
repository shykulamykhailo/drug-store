import { useSearchParams } from 'react-router-dom';
import { useDrugs } from './useDrugs';
import Product from '../../ui/Product';
import Spinner from '../../ui/Spinner';
import ProductCart from '../../ui/ProductCart';

function StoreProducts() {
    const { isLoading, drugs } = useDrugs();
    const [searchParams] = useSearchParams();

    if (isLoading) {
        return <Spinner />;
    }

    const filterDrugs = searchParams.get('category') || 'all';

    let filteredDrugs;

    if (filterDrugs === 'all') filteredDrugs = drugs;

    if (filterDrugs === 'first-aid')
        filteredDrugs = drugs.filter((cabin) => cabin.category === 'First Aid');

    if (filterDrugs === 'temperature-reduction')
        filteredDrugs = drugs.filter(
            (cabin) => cabin.category === 'Temperature Reduction'
        );
    if (filterDrugs === 'antibiotics')
        filteredDrugs = drugs.filter(
            (cabin) => cabin.category === 'Antibiotics'
        );
    if (filterDrugs === 'antihistamines')
        filteredDrugs = drugs.filter(
            (cabin) => cabin.category === 'Antihistamines'
        );
    if (filterDrugs === 'diabetes')
        filteredDrugs = drugs.filter((cabin) => cabin.category === 'Diabetes');
    if (filterDrugs === 'vitamins')
        filteredDrugs = drugs.filter((cabin) => cabin.category === 'Vitamins');

    return (
        <Product
            data={filteredDrugs}
            render={(drug) => <ProductCart drug={drug} key={drug.id} />}
        />
    );
}

export default StoreProducts;
