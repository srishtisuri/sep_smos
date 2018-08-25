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
        case "LOGOUT_SUCCESS": return initialState;
        // case "SIGNUP": return{}
        default: return state;
    }
}