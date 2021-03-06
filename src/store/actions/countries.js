import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR, CHANGE_THEME } from '../constants'
import { ALL_COUNTRIES } from '../../config'
import axios from 'axios'

export const changeTheme = (theme) => ({
    type: CHANGE_THEME,
    payload: theme
})

const fetchCountries = () => ({
    type: FETCH_COUNTRIES_REQUEST
})

const successCountries = (countries) => ({
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries
})

const errorCountries = (error) => ({
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