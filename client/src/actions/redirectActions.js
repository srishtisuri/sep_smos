export const redirect = (history, location) => dispatch => {
    dispatch({ type: "REDIRECT_START" })
    history.push(location);
    setTimeout(() => {
        dispatch({ type: "REDIRECT_FIN" })
    }, 500)
}