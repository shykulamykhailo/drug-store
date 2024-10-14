import { formatDateTime } from '../../utils/helpers';

function OrderCart({ order, id }) {
    return (
        <li key={id}>
            <p>{formatDateTime(order.created_at)}</p>
            <ul>
                {order.orderedDrugs.map((drug) => (
                    <li key={drug.id}>
                        <span>{drug.name}</span>
                        <span> {drug.quantity}</span>
                        <span> ${drug.price}</span>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default OrderCart;
