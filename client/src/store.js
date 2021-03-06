import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import {checkCurrUser} from './actions/userActions';


//create logger to be put after thunk if required
const middleware = applyMiddleware(thunk);

const initialState = {};

const store = createStore(
    rootReducer, 
    initialState,
    compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
)

export default store;