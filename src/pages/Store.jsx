import StoreProducts from '../features/store/StoreProducts';
import StoreSidebar from '../features/store/StoreSidebar';

function Store() {
    return (
        <div>
            <span>Store</span>
            <StoreSidebar />
            <StoreProducts />
        </div>
    );
}

export default Store;
