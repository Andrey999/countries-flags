import { useState, useEffect } from 'react';
import { Controls } from '../components/Controls';
import { List } from '../components/List';
import Card from '../components/Card';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { loadCountries } from '../store/actions/countries'
import { Loader } from '../components/Loader';


export const Home = () => {
    const { countries, loading, error } = useSelector(state => ({
        countries: state.countries.countries,
        loading: state.countries.loading,
        error: state.countries.error
    }))
    
    const [filteredCountries, setFilteredCountries] = useState(countries)

    const history = useHistory()
    const dispatch = useDispatch();

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
            dispatch(loadCountries())
        }
        handleSearch()
    }, [countries])

    if(loading) return <Loader />

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