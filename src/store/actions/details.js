import { FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_ERROR } from '../constants'
import { searchByCountry } from '../../config';
import axios from 'axios'

const fetchCountry = () => ({
    type: FETCH_COUNTRY_REQUEST
})

const successCountry = (country) => ({
    type: FETCH_COUNTRY_SUCCESS,
    payload: country
})

const errorCountry = (error) => ({
    type: FETCH_COUNTRY_ERROR,
    payload: error
})

export const loadCountry = (name) => {
    return async (dispatch) => {
        try {
            dispatch(fetchCountry());

            const { data } = await axios.get(searchByCountry(name))
            dispatch(successCountry(data[0]))
        } catch (err) {
            dispatch(errorCountry(err.message))
        }
    }
}