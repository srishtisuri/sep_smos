const initialState = {
    items: [],
    fetched: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_ITEMS_SUCCESS": return{
            ...state,
            items: action.payload,
            fetched: true
        }
        case "CLEAR_ITEMS": return initialState;

        default: return state;
    }
}