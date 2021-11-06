import { useState, useEffect } from 'react';
import { ALL_COUNTRIES } from '../config'
import { Controls } from '../components/Controls';
import { List } from '../components/List';
import axios from 'axios';
import Card from '../components/Card';
import { useHistory } from "react-router-dom";


export const Home = ({ countries, setCountries }) => {
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const history = useHistory()

    const handleSearch = (searchText, region) => {
        let data = [...countries]
        if (searchText) {
            data = data.filter(c => c.name.toLowerCase().includes(searchText.toLowerCase()))
        }

        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        setFilteredCountries(data)
    }

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES)
                .then(({ data }) => setCountries(data))
        }
    }, [])

    useEffect(() => {
        handleSearch()
    }, [countries])

    return (
        <>
            <Controls handleSearch={handleSearch} />

            <List>
                {filteredCountries.map(c => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            { title: 'Population', description: c.population.toLocaleString() },
                            { title: 'Region', description: c.region },
                            { title: 'Capital', description: c.capital }
                        ]
                    }
                    return <Card key={c.name} {...countryInfo} onClick={() => history.push(`/country/${c.name}`)} />
                })}
            </List>

        </>
    );
}