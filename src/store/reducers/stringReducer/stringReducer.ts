import { Message } from "../../../@types/types.ts";
import {
  SET_STRINGS,
  CLEAR_STRINGS,
  CLEAR_STRINGS_REQUEST,
} from "../../actions/actions.ts";

const loadStringsFromLocalStorage = () => {
  const storedStrings = localStorage.getItem("strings");
  return storedStrings ? JSON.parse(storedStrings) : [];
};

const initialState: { strings: Message[] } = {
  strings: loadStringsFromLocalStorage(),
};

const rootReducer = (state = initialState, action) => {
  const clearStorage = () => {
    const clearState = {
      ...state,
      strings: [],
    };
    localStorage.removeItem("strings");
    return clearState;
  };
  switch (action.type) {
    case SET_STRINGS:
      const newState = {
        ...state,
        strings: action.payload,
      };
      localStorage.setItem("strings", JSON.stringify(newState.strings));
      return newState;
    case CLEAR_STRINGS_REQUEST:
      return clearStorage();
    case CLEAR_STRINGS:
      return clearStorage();
    default:
      return state;
  }
};

export default rootReducer;
