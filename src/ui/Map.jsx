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
`;

const Box = styled.div`
    padding: 16px;
    border-radius: 8px;
    margin-top: 16px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-width: 400px;
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

    console.log(mapPosition);
    return (
        <Flex>
            <button onClick={getPosition}>
                {isLoadingPosition ? 'Loading...' : 'Use your position'}
            </button>
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
