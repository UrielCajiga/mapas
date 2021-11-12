import React from 'react'

import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function SimpleMap({ latitud, longitud }) {

    const defaultProps = {
        center: {
            lat: latitud,
            lng: longitud
        },
        zoom: 15
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAAaU2kF8w37xYmdPulqPN89VN2vx_tb9s" }}
                defaultCenter={{ lat: latitud, lng: longitud }}
                defaultZoom={15}
            >
                <AnyReactComponent

                    lat={latitud}
                    lng={longitud}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}