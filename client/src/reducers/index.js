import { combineReducers } from 'redux';
import user from './userReducer';
import error from './errorReducer';
import loader from './loaderReducer';

export default combineReducers({
    user: user,
    error: error,
    loader: loader
})