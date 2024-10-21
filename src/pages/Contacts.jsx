import styled from 'styled-components';
import Map from '../ui/Map';

const StyledContacts = styled.div`
    margin: 100px 50px 0 50px;
`;

function Contacts() {
    return (
        <StyledContacts>
            <h3>Contacts</h3>
            <Map mapSize={{ width: '600px', height: '400px' }} />
        </StyledContacts>
    );
}

export default Contacts;
