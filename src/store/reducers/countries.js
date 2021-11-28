import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR } from '../constants'

const initialState = {
    loading: false,
    countries: [],
    error: ''
}

export const countries = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                countries: action.payload
            }

        case FETCH_COUNTRIES_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}