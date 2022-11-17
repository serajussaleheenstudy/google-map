import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const MyLocation = () => {

    const containerStyle = {
        width: '100vw',
        height: '100vh'
    };

    const center = {
        lat: 25.743860,
        lng: 89.224869
    };

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
            >
                <Marker
                    position={center}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default MyLocation;