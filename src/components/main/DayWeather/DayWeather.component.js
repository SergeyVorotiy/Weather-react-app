import React from "react";
import Axios from "axios";

function formatDate(date, nextday=0) {

    var dd = date.getDate()+nextday;
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var YYYY = date.getFullYear();

    return YYYY + '-' + mm + '-' + dd;
}
function DayWeather(props) {
    const date = new Date();
    let weatherOptions = {
        method: "GET",
        url: "https://api.open-meteo.com/v1/forecast",
        params: {
            latitude: props.currentLocation.lat,
            longitude: props.currentLocation.lon,
            windspeed_unit: "ms",
            hourly: "temperature_2m,precipitation,weathercode,windspeed_10m",
            start_date: formatDate(date),
            end_date: formatDate(date,1)
        }
    }
    let [weatherData, setWeatherData] = React.useState(null);
    if (!weatherData) {
        Axios.request(weatherOptions).then(res => {
            setWeatherData(res.data);
        }).catch(err => console.log(err))
    } else {
        if (weatherData.longitude.toFixed(0) !== props.currentLocation.lon.toFixed(0) || weatherData.latitude.toFixed(0) !== props.currentLocation.lat.toFixed(0)){
            setWeatherData(null);
        }
    }


    return (
        <div className="weather">
            <h1>Погода на 2 дня {props.currentCity.name}</h1>
            <table className="table table-light">
                <thead className="table-dark sticky-top"><tr><td>Время</td><td>Температура</td><td>Осадки</td><td>Ветер</td></tr></thead>
                <tbody>{weatherData ? weatherData.hourly.time.map((time, index) => <tr key={index}><td>{time}</td><td>{weatherData.hourly.temperature_2m[index]+"˚C"}</td><td>{weatherData.hourly.precipitation[index]+"мм"}</td><td>{weatherData.hourly.windspeed_10m[index]+"м/с"}</td></tr>) : <tr><td>Время</td><td>Температура</td><td>Осадки</td><td>Ветер</td></tr>}</tbody>
            </table>
        </div>
    )
}

export default DayWeather;