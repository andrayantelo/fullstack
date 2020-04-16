import React from 'react';

const Weather = (props) => {
    if (props.weather.main === undefined) {
        return null;
    }
    else {
        return (
            <div>
                <h1>Weather in {props.country.name}</h1>
                <div>Temperature: {props.weather.main.temp} Celcius</div>
                <div>Wind: {props.weather.wind.speed} m/s</div>
                <div></div>
            </div>
        )
    }
}

export default Weather;