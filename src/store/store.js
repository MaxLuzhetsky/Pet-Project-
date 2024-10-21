import { createStore, applyMiddleware , combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers/reducers';
import rootSaga from './saga';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(thunk , sagaMiddleware));

sagaMiddleware.run(rootSaga)
export default store;