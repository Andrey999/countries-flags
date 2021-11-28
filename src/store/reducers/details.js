import { FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_ERROR } from '../constants'

const initialState = {
    loading: false,
    country: null,
    error: ''
}

export const details = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTRY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                country: action.payload
            }

        case FETCH_COUNTRY_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}