const initialState = {
    user: null,
    authenticated: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "AUTH_SUCCESS": return{
            ...state,
            user:action.payload,
            authenticated: true
        }
        case "ADD_TO_CART_SUCCESS": return{
            ...state,
            user:action.payload
        }
        case "LOGOUT_SUCCESS": return initialState;
        // case "SIGNUP": return{}
        default: return state;
    }
}