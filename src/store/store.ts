import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers/reducers.ts';
import root from './saga.ts';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root)
export type AppDispatch = typeof store.dispatch; 
export default store;