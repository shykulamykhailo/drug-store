import styled from 'styled-components';
import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { DEFAULT_MAP_POSITION, DRUGSTORES_ADRESESS } from '../utils/constants';
import { useGeolocation } from '../utils/useGeolocation';

const Flex = styled.div`
    position: relative;
    flex-direction: row;
    align-items: center;
    background-position: 'bottom';
    max-width: 635px;
    width: 100%;
    margin: 0;

    @media (min-width: 768px) {
        margin: 0 1.5rem;
    }
`;

const Box = styled.div`
    padding: 16px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1400;
`;

function Map({ mapSize }) {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    const [mapPosition, setMapPostion] = useState(DEFAULT_MAP_POSITION);

    const {
        isLoading: isLoadingPosition,
        position: geolocationPosition,
        getPosition,
    } = useGeolocation();

    useEffect(() => {
        if (geolocationPosition)
            setMapPostion({
                lat: geolocationPosition.lat,
                lng: geolocationPosition.lng,
            });
    }, [geolocationPosition]);

    if (!isLoaded) {
        return <div>Loading</div>;
    }

    return (
        <Flex>
            <Box>
                <GoogleMap
                    center={mapPosition}
                    zoom={15}
                    mapContainerStyle={mapSize}
                    onLoad={(map) => setMap(map)}
                >
                    {geolocationPosition && (
                        <>
                            <MarkerF position={mapPosition} />
                        </>
                    )}
                    {DRUGSTORES_ADRESESS.map((drugstore) => (
                        <MarkerF position={drugstore} key={drugstore.lat} />
                    ))}
                </GoogleMap>
            </Box>
        </Flex>
    );
}

export default Map;
