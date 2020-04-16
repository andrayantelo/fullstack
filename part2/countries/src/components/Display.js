import React from 'react';
import Country from './Country';
import CountryList from './CountryList';

const Display = (props) => {
    const {
        countries,
        handleShowClick,
        selectedCountry,
        loaded,
        weather
    } = props;

    if (Object.keys(selectedCountry).length) {
        return <Country country={selectedCountry} weather={weather} />
    }
    else if (countries.length > 10 || !loaded) {
        return <div>Too many matches, specify another filter.</div>
    }
    else if (countries.length > 1 && countries.length <= 10) {
        return <CountryList countries={countries} handleShowClick={handleShowClick} />
    }
    else {
        return (
            <Country country={countries[0]} weather={weather} />
        )
    }
}

export default Display;