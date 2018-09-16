const initialState = {
    redirecting: false
}
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case "REDIRECT_START":
            return { ...state, redirecting: true }
        case "REDIRECT_FIN":
            return initialState
        default:
            return state
    }
}
