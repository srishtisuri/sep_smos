export const notify = (notificationColor, notification) => dispatch => {
    dispatch({
        type: "PUSH_NOTIFICATION",
        payload: { notification, notificationColor: getNotifColor(notificationColor) }
    })
    setTimeout(() => {
        dispatch({ type: "CLOSE_NOTIFICATION", payload: notification })
    }, 3500)

}

function getNotifColor(notificationColor) {
    switch (notificationColor) {
        case 'success': return '#99ff99'
        case 'danger': return '#db5e5e'
    }
}
