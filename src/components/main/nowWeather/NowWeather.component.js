import React from "react";
import Axios from "axios";

function NowWeather(props) {
    let weatherOptions = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        params: {
            lat: props.currentLocation.lat,
            lon: props.currentLocation.lon,
            units: "metric",
            lang: "ru",
            appid: "e9f4e8df7091d92f0af515581d59d2d9",
        }
    }
    // let [weatherUrl, setWeatherUrl] = React.useState(`https://weatherkit.apple.com/api/v1/availability/${props.currentLocation.lat}/${props.currentLocation.lon}`)
    let [weatherData, setWeatherData] = React.useState({"coord":{"lon":90.0833,"lat":52.65},"weather":[{"id":500,"main":"Rain","description":"небольшой дождь","icon":"10n"}],"base":"stations","main":{"temp":7.36,"feels_like":5.99,"temp_min":7.36,"temp_max":7.36,"pressure":1021,"humidity":89,"sea_level":1021,"grnd_level":965},"visibility":10000,"wind":{"speed":2.14,"deg":237,"gust":5.62},"rain":{"1h":0.2},"clouds":{"all":100},"dt":1666019845,"sys":{"country":"RU","sunrise":1665966476,"sunset":1666004515},"timezone":25200,"id":1512205,"name":"Абаза","cod":200});
    if (!weatherData) {
        Axios.request(weatherOptions).then(res => {
            setWeatherData(res.data);
        }).catch(err => console.log(err))
    } else {
        if (weatherData.coord.lat.toFixed(0) !== props.currentLocation.lat.toFixed(0) || weatherData.coord["lon"].toFixed(0) !== props.currentLocation.lon.toFixed(0)) {
            setWeatherData(null)
        }
    }

    return (
        <div className="weather">
            <h1>На данный момент {props.currentCity.name}</h1>
            <div className="weather-data">
                <table className="table table-light">
                    <thead className="table-dark sticky-top"><tr><td>Время</td><td>Температура</td><td>Погода</td></tr></thead>
                    <tbody>{weatherData ? <tr><td>Сейчас</td><td>{weatherData.main.temp+"˚C"}</td><td>{weatherData.weather[0].description}</td></tr> : <tr><td>Время</td><td>Температура</td><td>Погода</td></tr>}</tbody>
                </table>
            </div>
        </div>
    )
}

export default NowWeather;