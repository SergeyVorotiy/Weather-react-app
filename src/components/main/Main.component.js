import React from "react";

import "./Main.Component.css"

import NowWeather from "./nowWeather/NowWeather.component";
import DayWeather from "./DayWeather/DayWeather.component";
import WeakWeather from "./WeakWeather/WeakWeather.component";
import CitySelect from "./citySelect/CityChoice.component";
import CityFromLocation from "./sityLocation/LocationCity.component";
import CITIES_LIST from "./CITIES_LIST";


function MainComponent(props) {
    let [currentCity, setCurrentCity] = React.useState(CITIES_LIST[0])
    let [cityCoords, setCitiCoords] = React.useState(CITIES_LIST[0].coords)
    let [isNavigationSearch, setIsNavigationSearch] = React.useState(true)
    const handleSelect = (cityId) =>{
        setCurrentCity(CITIES_LIST.slice()[cityId]);
    }
    const changeMethodOfSelectedCity = () => {
        setIsNavigationSearch(!isNavigationSearch);
    }
    const changeLocation = (coords) => {
        setCitiCoords({
            lat: coords.latitude,
            lon: coords.longitude
        })
    }
    if (isNavigationSearch){

    }
    return(
        <main className="main container">
            <div className="cityChoice d-flex justify-content-center align-items-center">
                <button className="btn btn-light" onClick={changeMethodOfSelectedCity}>
                    {isNavigationSearch ?
                        "Выбрать город из списка" :
                        "Использовать геолокацию"
                    }</button>
                {
                    isNavigationSearch ?
                        <CityFromLocation onChangeLocation={(coords) => changeLocation(coords)} />:
                        <CitySelect citiesList={CITIES_LIST} handleSelect={(cityId) => handleSelect(cityId)}/>
                }
            </div>
            {(props.activeMode === "NowMode") ?
                <NowWeather currentLocation={
                    isNavigationSearch ?
                        cityCoords :
                        currentCity.coords
                } currentCity={isNavigationSearch ?
                    "":
                    currentCity}/> :
            (props.activeMode === "DayMode") ?
                <DayWeather currentLocation={isNavigationSearch ?
                    cityCoords :
                    currentCity.coords} currentCity={isNavigationSearch ?
                    "":
                    currentCity} /> :
            <WeakWeather currentLocation={isNavigationSearch ?
                cityCoords :
                currentCity.coords} currentCity={isNavigationSearch ?
                "":
                currentCity} />
            }
        </main>
    )
}

export default MainComponent;