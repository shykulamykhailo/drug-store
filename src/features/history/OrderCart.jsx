import styled from 'styled-components';
import { formatDateTime } from '../../utils/helpers';

const StyledOrder = styled.li`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    padding: 15px;
    border: 2px solid var(--color-green-700);
    border-radius: 8px;
    max-width: 500px;
`;

const StyledOrderItems = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: var(--color-green-200);
    border-radius: 5px;
    gap: 10px;
    margin: 10px 0;
    padding: 5px 10px;
`;

const StyledTotal = styled.div`
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
`;

const StyledName = styled.span`
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 200px;
`;

function OrderCart({ order, id }) {
    const totalAmount = order.orderedDrugs.reduce((total, drug) => {
        return total + drug.quantity * drug.price;
    }, 0);

    return (
        <StyledOrder key={id}>
            <h4>{formatDateTime(order.created_at)}</h4>
            <ul>
                {order.orderedDrugs.map((drug) => (
                    <StyledOrderItems key={drug.id}>
                        <StyledName>{drug.name}</StyledName>
                        <div>
                            <span> {drug.quantity}</span>
                            <span> ${drug.price}</span>
                        </div>
                    </StyledOrderItems>
                ))}
            </ul>
            <StyledTotal>
                <span>Total Price: ${totalAmount.toFixed(2)}</span>
            </StyledTotal>
        </StyledOrder>
    );
}

export default OrderCart;
