const initialState = {
    notification: null,
    notificationColor: ""
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case "PUSH_NOTIFICATION":
            return { notification: action.payload.notification, notificationColor:action.payload.notificationColor }
        case "CLOSE_NOTIFICATION":
            return (action.payload===state.notification)?initialState:state
        default:
            return state
    }
}
