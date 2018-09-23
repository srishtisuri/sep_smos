const initialState = {
    value: ''
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH": return{
            value: action.payload,
        }
        default: return state;
    }
}