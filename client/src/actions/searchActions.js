export const search = (param) => dispatch => {
    dispatch({
        type: "SEARCH",
        payload: param
    })
}