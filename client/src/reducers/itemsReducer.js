const initialState = {
    items: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_ITEMS": return{
            ...state,
            items: action.payload.items
        }
        default: return state;
    }
}