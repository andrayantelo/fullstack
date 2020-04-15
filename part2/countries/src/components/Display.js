import React from 'react';
import Country from './Country';
import CountryList from './CountryList';

const Display = ({ countries, handleShowClick, selectedCountry, loaded }) => {

    if (selectedCountry) {
        return <Country country={selectedCountry} />
    }
    else if (countries.length > 10 || !loaded) {
        return <div>Too many matches, specify another filter.</div>
    }
    else if (countries.length > 1 && countries.length <= 10) {
        return <CountryList countries={countries} handleShowClick={handleShowClick} />
    }
    else {
        return (
            <Country country={countries[0]} />
        )
    }
}

export default Display;