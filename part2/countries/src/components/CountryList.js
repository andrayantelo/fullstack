import React from 'react';

const CountryList = ({countries, handleShowClick}) => {
    const renderCountries = countries.map((country, index) => {
        return (
            <div key={country.name}>
            {country.name}
            <button
                onClick={handleShowClick}
                value={index}
            >
                show
            </button>
            </div>
        )
    })

    return <div>{renderCountries}</div>
}

export default CountryList;