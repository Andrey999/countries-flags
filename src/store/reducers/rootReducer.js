import { combineReducers } from 'redux'
import { countries } from './countries'
import { details } from './details'

export const rootReducer = combineReducers({
    countries,
    details
})