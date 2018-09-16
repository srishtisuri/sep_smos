const initialState = {
    mobi: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
      case "MOBI_TRUE":
        return { ...state, mobi: true }
      case "MOBI_FALSE":
        return initialState   
  default:
    return state
  }
}
