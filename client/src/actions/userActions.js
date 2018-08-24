import axios from 'axios';
import { pushErr } from './errorActions';

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
        } else {
            dispatch(pushErr({
                type: "AUTH_FAIL",
                payload: "That account doesn't exist!"
            }))
        }
    }).then(() => {
        setTimeout  (()=>{
            dispatch({ type: "LOADING_FIN" })    
        }, 250)
    })
        .catch(err => console.log(err))
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
        })
        .catch(err => console.log(err))
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
            } else {
                dispatch(pushErr({
                    type: "SIGNUP_FAIL",
                    payload: "Something Went Wrong"
                }))
            }
        })
        .then(() => {
            setTimeout(()=>{
                dispatch({ type: "LOADING_FIN" })    
            }, 250)
        })
        .catch(err => console.log(err))
};