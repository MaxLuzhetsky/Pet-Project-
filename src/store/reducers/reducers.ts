import { combineReducers } from "redux";
import rootReducer from "./stringReducer/stringReducer.ts";
import userReducer from "./userReducer/userReducer.ts";

export const reducers = combineReducers({
  rootReducer,
  userReducer,
});
