const initialState = {
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOADING_START": return{
            ...state,
            loading: true
        }
        case "LOADING_FIN": return{
            ...state,
            loading: false
        }
        // case "SIGNUP": return{}
        default: return state;
    }
}