import { useStore } from '../context/StoreContext';

function ProductCart({ drug }) {
    const { addProduct } = useStore();
    const { id: drugId, name, category, price, drugImage } = drug;

    const handleAddToCart = (product) => {
        console.log('click');
        addProduct(product);
    };

    return (
        <div id={drugId}>
            <img src={`${drugImage}`} height="60px" />
            <div>{name}</div>
            <div>{category}</div>
            <div>${price}</div>
            <button onClick={() => handleAddToCart(drug)}>add to cart</button>
        </div>
    );
}

export default ProductCart;
