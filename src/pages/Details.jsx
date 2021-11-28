import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../config';
import { Button } from '../components/Button'
import { Info } from '../components/Info'
import { useDispatch, useSelector } from 'react-redux'
import { loadCountry } from '../store/actions/details'


export const Details = () => {
    const country = useSelector(state => state.details.country)
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        dispatch(loadCountry(params.name))
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