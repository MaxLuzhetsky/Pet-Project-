import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/reducers'; // Create this file later
import rootSaga from './saga';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(thunk , sagaMiddleware));

sagaMiddleware.run(rootSaga)
export default store;