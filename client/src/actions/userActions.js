import axios from 'axios';
import { pushErr } from './errorActions';
import { notify } from './notificationActions';


export const login = (userNumber, password, history) => dispatch => {
    dispatch({ type: "LOADING_START" })
    dispatch(pushErr({
        type: "CLEAR_ERRORS",
    }))
    axios.post('/api/users/login', {
        userNumber,
        password
    }).then(res => {
        if (res.data.success) {
            dispatch({
                type: "AUTH_SUCCESS",
                payload: res.data.user
            })
            history.push('/dashboard/' + res.data.user.userNumber)
            dispatch(notify("success", "You have successfully logged in!"))
        } else {
            // dispatch(pushErr({
            //     type: "AUTH_FAIL",
            //     payload: "That account doesn't exist!"
            // }))
            dispatch(notify("danger", "Incorrect login details!"))

        }
    }).then(() => {
        setTimeout  (()=>{
            dispatch({ type: "LOADING_FIN" })    
        }, 250)
    })
        .catch(err =>{
            setTimeout  (()=>{
                dispatch({ type: "LOADING_FIN" })    
            }, 250)
            dispatch(notify("danger", "An error occurred!"))
        })
}

export const logout = (history) => dispatch => {
    dispatch({ type: "LOADING_START" })
    axios.get('/api/users/logout')
        .then((res) => {
            if (res.data.success) {
                dispatch({ type: "LOGOUT_SUCCESS" })
            } else {
                dispatch({ type: "LOGOUT_FAIL" })
            }
            history.push("/")
        })
        .then(() => {
            setTimeout(()=>{
                dispatch({ type: "LOADING_FIN" })    
            }, 250)
            dispatch(notify("success", "You have successfully logged out!"))
        })
        .catch(err =>{
            setTimeout  (()=>{
                dispatch({ type: "LOADING_FIN" })    
            }, 250)
            dispatch(notify("danger", "An error occurred!"))
        })
}

export const checkAuth = () => dispatch => {
    dispatch({ type: "LOADING_START" })
    dispatch(pushErr({
        type: "CLEAR_ERRORS",
    }))
    axios.get('/api/users/currentUser')
    .then(res => {
        if (res.data.exists) {
            dispatch({
                type: "AUTH_SUCCESS",
                payload: res.data.user
            })
            dispatch(notify("success", "Authentication successful!"))
        } else {
            dispatch({
                type: "NO_EXISTING_AUTH"
            })
            }
        })
        .then(() => {
            setTimeout(()=>{
                dispatch({ type: "LOADING_FIN" })    
            }, 250)
        })
        .catch(err => console.log(err))
}

export const signup = (userNumber, password, history) => dispatch => {
    dispatch({ type: "LOADING_START" })
    dispatch(pushErr({
        type: "CLEAR_ERRORS",
    }))
    axios.post('/api/users/signup', {
        userNumber,
        password
    })
        .then(res => {
            if (res.data.success) {
                dispatch(pushErr({
                    type: "SIGNUP_SUCCESS",
                }))
                history.push('/')
                dispatch(notify("success", "You have successfully signed up!"))
            } else {
                dispatch(pushErr({
                    type: "SIGNUP_FAIL",
                    payload: "Something Went Wrong"
                }))
                dispatch(notify("danger", "An error occured while signing up!"))

            }
        })
        .then(() => {
            setTimeout(()=>{
                dispatch({ type: "LOADING_FIN" })    
            }, 250)
        })
        .catch(err => console.log(err))
};

export const addToCart = (itemId, userQuantity) => dispatch => {
    // dispatch({ type: "LOADING_START" })
    dispatch(pushErr({
        type: "CLEAR_ERRORS",
    }))
    axios.post('/api/users/currentUser/addToCart', {
        itemId, userQuantity
    })
        .then(res => {
            if (res.data.success) {
                dispatch(pushErr({
                    type: "ADD_TO_CART_SUCCESS",
                    payload: res.data.data
                }))
                dispatch(notify("success", "Item added to cart!"))
            } else {
                dispatch(pushErr({
                    type: "ADD_TO_CART_FAIL",
                    payload: "Something Went Wrong"
                }))
                dispatch(notify("danger", "An error occured while adding to cart!"))

            }
        })
        .then(() => {
            // setTimeout(()=>{
            //     dispatch({ type: "LOADING_FIN" })    
            // }, 250)
        })
        .catch(err => console.log(err))
};

export const clearCart = () => dispatch => {
    dispatch(pushErr({
        type: "CLEAR_ERRORS",
    }))
    axios.delete('/api/users/currentUser/cart')
        .then(res => {
            if (res.data.success) {
                dispatch(pushErr({
                    type: "CLEAR_CART_SUCCESS",
                    payload: res.data.data
                }))
                dispatch(notify("success", "Cart cleared!"))
            } else {
                dispatch(pushErr({
                    type: "CLEAR_CART_FAIL",
                    payload: "Something Went Wrong"
                }))
                dispatch(notify("danger", "An error occured while clearing the cart!"))
            }
        })
        .then(() => {
            dispatch(checkAuth())
        })
        .catch(err => console.log(err))
};