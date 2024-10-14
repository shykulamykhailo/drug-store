import Spinner from '../../ui/Spinner';
import { useUser } from '../authentication/useUser';
import { useOrders } from './useOrders';

function OrdersHistory() {
    const { data: orders, isLoading: ordersLoading } = useOrders();
    const { user, isLoading: userLoading } = useUser();

    if (ordersLoading || userLoading) {
        return <Spinner />;
    }

    if (!orders) {
        return <div>No orders</div>;
    }

    const filteredUserOrders = orders.filter(
        (order) => order.user_id === user.id
    );

    console.log(filteredUserOrders);

    return (
        <div>
            <div>Orders history</div>
            {filteredUserOrders.length > 0 ? (
                <ul>
                    {filteredUserOrders.map((order) => (
                        <li key={order.id}>
                            <p>{order.created_at}</p>
                            <ul>
                                {order.orderedDrugs.map((drug) => (
                                    <li key={drug.id}>{drug.name}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You dont have any orders yet</p>
            )}
        </div>
    );
}

export default OrdersHistory;
