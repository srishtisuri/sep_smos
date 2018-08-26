import { combineReducers } from 'redux';
import user from './userReducer';
import error from './errorReducer';
import loader from './loaderReducer';
import items from './itemReducer';
import mobi from './mobiReducer';
import redirect from './redirectReducer';

export default combineReducers({
    user: user,
    error: error,
    loader: loader,
    items: items,
    mobi: mobi,
    redirect: redirect
})