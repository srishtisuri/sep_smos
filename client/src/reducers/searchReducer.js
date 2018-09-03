const initialState = {
    searchParam: ''
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH": return{
            searchParam: action.payload,
        }
        default: return state;
    }
}