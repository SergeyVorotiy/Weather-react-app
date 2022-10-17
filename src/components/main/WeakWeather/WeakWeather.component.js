import React from "react";
import Axios from "axios";


function WeakWeather(props) {
    let weatherOptions = {
        method: "GET",
        url: "https://api.open-meteo.com/v1/forecast",
        params: {
            latitude: props.currentLocation.lat,
            longitude: props.currentLocation.lon,
            daily: "temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max",
            timezone: "Europe/Moscow"
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
            <h1>Погода на нделю {props.currentCity.name}</h1>
            <table className="table table-light">
                <thead className="table-dark sticky-top"><tr><td>Дата</td><td>Мин-температура</td><td>Макс-емпература</td><td>Осадки</td><td>Ветер</td></tr></thead>
                <tbody>{weatherData ? weatherData.daily.time.map((time, index) => <tr key={index}><td>{time}</td><td>{weatherData.daily.temperature_2m_max[index]+"˚C"}</td><td>{weatherData.daily.temperature_2m_min[index]+"˚C"}</td><td>{weatherData.daily.precipitation_sum[index]+"мм"}</td><td>{weatherData.daily.windspeed_10m_max[index]+"м/с"}</td></tr>) : <tr><td>Время</td><td>Температура</td><td>Осадки</td><td>Ветер</td></tr>}</tbody>
            </table>
        </div>
    )
}

export default WeakWeather;