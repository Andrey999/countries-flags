import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR } from '../constants'
import { ALL_COUNTRIES } from '../../config'
import axios from 'axios'

export const fetchCountries = () => ({
    type: FETCH_COUNTRIES_REQUEST
})

export const successCountries = (countries) => ({
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries
})

export const errorCountries = (error) => ({
    type: FETCH_COUNTRIES_ERROR,
    payload: error
})

export const loadCountries = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchCountries());

            const { data } = await axios.get(ALL_COUNTRIES)
            dispatch(successCountries(data))
        } catch (err) {
            dispatch(errorCountries(err.message))
        }
    }
}