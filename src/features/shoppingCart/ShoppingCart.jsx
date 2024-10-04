import { useStore } from '../../context/StoreContext';
import { insertOrder } from '../../services/apiOrders';
import Form from '../../ui/Form';

function ShoppingCart() {
    const {
        storeData,
        handleIncrement,
        handleDecrement,
        handleRemove,
        handleClear,
        calculateTotalPrice,
    } = useStore();

    const handleFormSubmit = (userData) => {
        console.log(userData);
        console.log(storeData);
        insertOrder({ userData, storeData });
    };

    return (
        <>
            <div>
                <h3>Shopping Cart</h3>
                <ul>
                    {storeData.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.productPrice} -
                            <button onClick={() => handleDecrement(item.id)}>
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleIncrement(item.id)}>
                                +
                            </button>
                            <button onClick={() => handleRemove(item.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => handleClear()}>
                    Clear shopping cart
                </button>
                <p> Total Price: ${calculateTotalPrice()}</p>
            </div>
            <Form onFormSubmit={handleFormSubmit} />
        </>
    );
}

export default ShoppingCart;
