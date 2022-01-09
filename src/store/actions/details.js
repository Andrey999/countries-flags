import { FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_ERROR, FETCH_NEIGHBORS } from '../constants'
import { searchByCountry, filterByCode } from '../../config';
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

const fetchNeighbors = (neighbors) => ({
    type: FETCH_NEIGHBORS,
    payload: neighbors
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

export const loadNeighbors = (neighbors) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(filterByCode(neighbors))
            dispatch(fetchNeighbors(data.map(c => c.name)))
        } catch (err) {
            
        }
    }
}