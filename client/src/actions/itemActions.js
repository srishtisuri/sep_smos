import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch({type:"LOADING_START"})
    axios.get('/api/items')
    .then(res => {
       if (res.data) {
            dispatch({
               type: "GET_ITEMS_SUCCESS",
               payload: res.data
            })
        }
    }).then(() => {
        setTimeout  (()=>{
            dispatch({ type: "LOADING_FIN" })    
        }, 250)
    })
    .catch(err => console.log(err))
};