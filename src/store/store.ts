import { createStore, applyMiddleware , combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers/reducers.ts';
// import rootSaga from './saga.ts';


// const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(thunk));

// sagaMiddleware.run(rootSaga)
export type AppDispatch = typeof store.dispatch; 
export default store;