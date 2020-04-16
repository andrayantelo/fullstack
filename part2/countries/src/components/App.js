import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import Display from './Display';

const App = () => {
    const [ countries, setCountries ] = useState([]);
    const [ filtered, setFiltered ] = useState([]);
    const [ query, setQuery ] = useState('');
    const [ selectedCountry, setSelectedCountry] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    const [ weather, setWeather ] =useState({});

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data);
                setFiltered(response.data);
                setLoaded(true);
            })
    }, [])

    useEffect(() => {
        if (filtered.length === 1) {
            setSelectedCountry(filtered[0]);
        }
        else if (filtered.length > 1) {
            setSelectedCountry({});
        }
    }, [filtered])

    useEffect(() => {
        // Whenver there's a change in selectedCountry
        // request the weather api
        if (Object.keys(selectedCountry).length) {
            const api_key = process.env.REACT_APP_API_KEY;
            const url = 'http://api.openweathermap.org/data/2.5/weather'
            
            axios
                .get(`${url}?q=${selectedCountry.capital}&appid=${api_key}&units=metric`)
                .then(response => {
                    setWeather(response.data);  
                })
        }
    }, [selectedCountry])

    const handleShowClick = (event) => {
        setSelectedCountry(filtered[event.target.value])
    }

    const filterCountries = () => {
        const filteredCountries = countries.filter(country => {
            const name = country.name.toLowerCase();
            return name.includes(query);
        })
        setFiltered(filteredCountries);
    }


    const handleQueryChange = (event) => {
        setQuery(event.target.value.toLowerCase());
        filterCountries();
    }

    return (
        <div>
            <Form
                query={query}
                handleQueryChange={handleQueryChange}
            />
            <Display
                countries={filtered}
                handleShowClick={handleShowClick}
                selectedCountry={selectedCountry}
                loaded={loaded}
                weather={weather}
            />
        </div>
    )
}

export default App;