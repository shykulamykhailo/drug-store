import styled from 'styled-components';
import {
    useJsApiLoader,
    GoogleMap,
    MarkerF,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api';
import { useRef, useState } from 'react';

const Flex = styled.div`
    position: relative;
    flex-direction: column;
    align-items: center;

    background-position: 'bottom';
    height: 100vh;
    width: 100vw;
`;

const Box = styled.div`
    padding: 16px;
    border-radius: 8px;
    margin-top: 16px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-width: 768px;
    z-index: 1400;
`;

const center = { lat: 48.8584, lng: 2.2945 };

function OrdersHistory() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    const originRef = useRef();

    const destinationRef = useRef();

    if (!isLoaded) {
        return <div>Loading</div>;
    }

    async function calculateRoute() {
        if (
            originRef.current.value === '' ||
            destinationRef.current.value === ''
        ) {
            return;
        }

        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        });
        setDirectionsResponse(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.value);
    }

    function clearRoute() {
        setDirectionsResponse(null);
        setDistance('');
        setDuration('');
        originRef.current.value = '';
        destinationRef.current.value = '';
    }

    return (
        <Flex>
            <div>OrdersHistory</div>
            <Autocomplete>
                <input type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>
            <Autocomplete>
                <input
                    type="text"
                    placeholder="Destination"
                    ref={destinationRef}
                />
            </Autocomplete>
            <button type="submit" onClick={calculateRoute}>
                Calculete route
            </button>
            <button onClick={clearRoute}>Clear route</button>

            <button onClick={() => map.panTo(center)}>My location</button>
            <p>Distance: {distance}</p>
            <p>Duration: {duration}</p>
            <Box>
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '500px' }}
                    onLoad={(map) => setMap(map)}
                >
                    <MarkerF position={center} />
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            </Box>
        </Flex>
    );
}

export default OrdersHistory;
