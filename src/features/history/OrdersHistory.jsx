import Spinner from '../../ui/Spinner';
import { useUser } from '../authentication/useUser';
import OrderCart from './OrderCart';
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
            <h3>Orders history</h3>
            {filteredUserOrders.length > 0 ? (
                <ul>
                    {filteredUserOrders.map((order) => (
                        <OrderCart order={order} key={order.id} id={order.id} />
                    ))}
                </ul>
            ) : (
                <p>You dont have any orders yet</p>
            )}
        </div>
    );
}

export default OrdersHistory;
