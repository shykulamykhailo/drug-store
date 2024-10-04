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

    // if (!drugs.length) return <div>Empry drugs data...</div>;
    // const filterDrugs = searchParams.get('category') || 'all';

    // let filteredDrugs;

    // if (filterDrugs === 'all') filteredDrugs = drugs;

    // if (filterDrugs === 'first-aid')
    //     filteredDrugs = drugs.filter((drug) => drug.category === 'First Aid');

    // if (filterDrugs === 'temperature-reduction')
    //     filteredDrugs = drugs.filter(
    //         (drug) => drug.category === 'Temperature Reduction'
    //     );
    // if (filterDrugs === 'antibiotics')
    //     filteredDrugs = drugs.filter((drug) => drug.category === 'Antibiotics');
    // if (filterDrugs === 'antihistamines')
    //     filteredDrugs = drugs.filter(
    //         (drug) => drug.category === 'Antihistamines'
    //     );
    // if (filterDrugs === 'diabetes')
    //     filteredDrugs = drugs.filter((drug) => drug.category === 'Diabetes');
    // if (filterDrugs === 'vitamins')
    //     filteredDrugs = drugs.filter((drug) => drug.category === 'Vitamins');

    console.log(drugs);

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
