const initialState = {
    message: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MSG":
            return { message: action.payload }
        case "CLEAR_MSG":
            return initialState;
        default:
            return state
    }
}
