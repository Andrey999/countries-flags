import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../config';
import { Button } from '../components/Button'
import { Info } from '../components/Info'


export const Details = () => {
    const [country, setCountry] = useState(null)
    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        axios.get(searchByCountry(params.name))
            .then(({ data }) => setCountry(data[0]))
    }, [params.name])

    return (
        <>
            <Button onClick={() => history.goBack()}>
                <IoArrowBack  /> Back
            </Button>

            {country && <Info push={history.push} {...country} />}
        </>
    );
}