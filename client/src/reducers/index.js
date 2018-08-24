import { combineReducers } from 'redux';
import user from './userReducer';
import error from './errorReducer';
import loader from './loaderReducer';
import items from './itemReducer';

export default combineReducers({
    user: user,
    error: error,
    loader: loader,
    items: items
})