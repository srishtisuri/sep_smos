import axios from 'axios';

export const pushErr = (error) => dispatch => {
    dispatch({
        type: error.type,
        payload: error.payload
    })
}