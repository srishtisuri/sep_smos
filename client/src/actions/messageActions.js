export const pushMessage = (action) => dispatch => {
    dispatch({
        type:"ADD_MSG",
        payload: action
    })
    setTimeout(() => {
        dispatch({type:"CLEAR_MSG"})
      }, 2000)
}