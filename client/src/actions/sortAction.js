import axios from 'axios';

export const sortItems = () => dispatch => {
    alert("HI");
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
            dispatch({ type: "GET_ITEMS_FETCHED" })    
            dispatch({ type: "LOADING_FIN" })    
        }, 0)
    })
    .catch(err => console.log(err))
};