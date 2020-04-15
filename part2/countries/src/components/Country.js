import React from 'react';
import Languages from './Languages';

const Country = ({ country }) => {
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
                height="50%"
                width="50%"
            />
        </div>
    )
}

export default Country;