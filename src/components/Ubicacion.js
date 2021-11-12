import React, { useState } from 'react'


import Geocode from 'react-geocode'
import Mapa from './Mapa'

Geocode.setApiKey("AIzaSyAAaU2kF8w37xYmdPulqPN89VN2vx_tb9s")
Geocode.setLanguage("es")
Geocode.setRegion("es")



export default function Ubicacion({ locacion }) {
    const [latitud, setLatitud] = useState('')
    const [longitud, setLongitud] = useState('')


    Geocode.fromAddress(locacion).then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            setLatitud(lat)
            setLongitud(lng)
            console.log(locacion)
            console.log(lat, lng);
        },
        (error) => {
            console.error(error);
        }
    );



    return (
        <React.Fragment>
            
            {
                latitud !== '' && longitud !== '' ?
                    <Mapa longitud={longitud} latitud={latitud} />
                    :
                    <div>Cargando...</div>
            }
        </React.Fragment>
    )
}