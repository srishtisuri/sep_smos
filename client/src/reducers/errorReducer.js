const initialState = {
    errors: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "AUTH_FAIL": return{
            ...state,
            errors: [...state.errors, action.payload]
        }
        case "SIGNUP_FAIL": return{
            ...state,
            errors: [...state.errors, action.payload]
        }
        case "LOGOUT_FAIL": return{
            ...state,
            errors: [...state.errors, action.payload]
        }
        case "NOT_AUTH": return{
            ...state,
            errors: [...state.errors, action.payload]
        }
        case "CLEAR_ERRORS": return{
            ...state,
            errors: []
        }
        // case "SIGNUP": return{}
        default: return state;
    }
}