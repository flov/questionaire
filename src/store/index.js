import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// creating Store together with middleware and config for redux devtoools
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
