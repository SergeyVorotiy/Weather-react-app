import React from "react";

import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

import "./LocationCity.component.css"


function CityFromLocation(props) {
    let [coords, setCoords] = React.useState({
        "latitude": 55.755864,
        "longitude": 37.617698
    });
    let [isNavigating, setNavigatig] = React.useState(false);
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            setCoords({
                "latitude": position.coords.latitude,
                "longitude": position.coords.longitude
            })
            setNavigatig(true);
            props.onChangeLocation(coords);
        })
    } else {
        setNavigatig(false);
    }
    return(
        <YMaps>
            <Map defaultState={isNavigating?
                { center: [
                        coords.latitude,
                        coords.longitude], zoom: 8}:
                { center: [
                        55.755864,
                        37.617698
                    ], zoom: 8}
            }>
                <Placemark geometry={[coords.latitude, coords.longitude]}/>
                <p>{"Вы находитесь тут"}</p>
            </Map>
        </YMaps>
    )
}

export default CityFromLocation;