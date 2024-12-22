import styled from 'styled-components';
import Map from '../ui/Map';

const StyledContacts = styled.div`
    height: 100vh;
    min-height: 100vh;
    margin-top: 6rem;
`;

const AddressesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 3rem 3rem 3rem;
`;

function Contacts() {
    const mapSize = {
        width: '100%',
        height: '400px',
        maxWidth: '600px',
    };
    return (
        <StyledContacts>
            <AddressesContainer>
                <h3>Contacts</h3>
                <h4>Addreses our stores</h4>
                <div>Medova St. 2</div>
                <div>Mykhaila Verbyts&apos;koho st. 1</div>
                <div>Zelena st. 30</div>
                <div>Liubinska st. 60</div>
            </AddressesContainer>
            <Map mapSize={mapSize} />
        </StyledContacts>
    );
}

export default Contacts;
