import React, { useState } from 'react';
import { DirectionsService, DirectionsRenderer, GoogleMap, LoadScript } from '@react-google-maps/api';

const Direction = ({ origin, destination }) => {
    const [response, setResponse] = useState(null);

    const directionsCallback = (res) => {

        if (res !== null) {
            if (res.status === 'OK') {
                setResponse(res);
            }
            else {
                console.log('response: ', res)
            }
        }
    }

    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            ><GoogleMap
                // required
                id='direction-example'
                // required
                mapContainerStyle={{
                    height: '100vh',
                    width: '100%'
                }}
                // required
                zoom={16}
                // required
                center={{
                    lat: 0,
                    lng: -180
                }}
            >
                    {
                        (
                            destination !== '' &&
                            origin !== ''
                        ) && (
                            <DirectionsService
                                // required
                                options={{
                                    destination: destination,
                                    origin: origin,
                                    travelMode: 'DRIVING'
                                }}
                                // required
                                callback={directionsCallback}
                            />
                        )
                    }

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                            />
                        )
                    }
                </GoogleMap></LoadScript>
        </div>
    );
};

export default Direction;