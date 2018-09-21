import axios from 'axios';

export const getItems = () => async dispatch => {
    dispatch({ type: "LOADING_START" })

    let items = [];
    await axios.get('/api/items')
        .then(res => {
            items = res.data;
        }).catch(err => console.log(err));

    if (items) {
        await dispatch({
            type: "GET_ITEMS_SUCCESS",
            payload: items
        });
        
        dispatch({ type: "GET_ITEMS_FETCHED" });
        dispatch({ type: "LOADING_FIN" });
    }
};