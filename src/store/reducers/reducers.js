import {
  SET_STRINGS,
  CLEAR_STRINGS,
  CLEAR_STRINGS_REQUEST,
} from "../actions/actions";

const loadStringsFromLocalStorage = () => {
  const storedStrings = localStorage.getItem("strings");
  return storedStrings ? JSON.parse(storedStrings) : [];
};

const initialState = {
  strings: loadStringsFromLocalStorage(),
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STRINGS:
      const newState = {
        ...state,
        strings: action.payload,
      };
      localStorage.setItem("strings", JSON.stringify(newState.strings));
      return newState;
    case CLEAR_STRINGS_REQUEST:
      const clearState = {
        ...state,
        strings: [],
      };
      localStorage.removeItem("strings")
      return clearState;
    case CLEAR_STRINGS:
      const clearedState = {
        ...state,
        strings: [],
      };
      localStorage.removeItem("strings")
      return clearedState;
    default:
      return state;
  }
};

export default rootReducer;
