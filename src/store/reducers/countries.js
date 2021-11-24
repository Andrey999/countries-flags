const initialState = {
    countries: []
}

const countries = (state = initialState, action) => {
    switch (action.type) {
        case 'hello': return state
        default:
            return state
    }
}