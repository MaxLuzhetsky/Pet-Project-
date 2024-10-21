
import { combineReducers } from 'redux'
import rootReducer from './stringReducer/stringReducer'
import userReducer from './userReducer/userReducer'


export const reducers = combineReducers({
   rootReducer,
   userReducer,
})