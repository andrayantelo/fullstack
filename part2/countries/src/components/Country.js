import React from 'react';
import Languages from './Languages';
import Weather from './Weather';

const Country = (props) => {
    if (!Object.keys(props.country).length || !Object.keys(props.weather).length) {
        return null;
    }
    const {country, weather} = props;
    return (
        <div key={country.name}>
            <h1>{country.name}</h1>
                <div>capital: {country.capital}</div>
                <div>population: {country.population}</div>
            <Languages
                languages={country.languages}
            />
            <img
                src={country.flag}
                alt="country flag"
                height="25%"
                width="25%"
            />
            <Weather country={country} weather={weather} />
        </div>
    )
}

export default Country;