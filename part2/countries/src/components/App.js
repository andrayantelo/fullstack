import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import Display from './Display';

const App = () => {
    const [ countries, setCountries ] = useState([]);
    const [ query, setQuery ] = useState('');
    const [ selectedCountry, setSelectedCountry] = useState('');
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data);
                setLoaded(true);
            })
    }, [])

    const handleShowClick = (event) => {
        setSelectedCountry(filteredCountries[event.target.value])
    }

    const filteredCountries = countries.filter(country => {
        const name = country.name.toLowerCase();
        return name.includes(query);
    });

    const handleQueryChange = (event) => {
        setQuery(event.target.value.toLowerCase());
        setSelectedCountry('');
    }

    return (
        <div>
            <Form
                query={query}
                handleQueryChange={handleQueryChange}
            />
            <Display
                countries={filteredCountries}
                handleShowClick={handleShowClick}
                selectedCountry={selectedCountry}
                loaded={loaded}
            />
        </div>
    )
}

export default App;