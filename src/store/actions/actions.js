export const SET_STRINGS = "SET_STRINGS";
export const CLEAR_STRINGS = "CLEAR_STRINGS";
export const CLEAR_STRINGS_REQUEST = "CLEAR_STRINGS_REQUEST";
export const SET_USER = "SET_USER";

export const setStrings = (strings) => ({
  type: SET_STRINGS,
  payload: strings,
});

export const clearStrings = () => ({
  type: CLEAR_STRINGS,
});

export const setUser = ({ login, password }) => ({
  type: SET_USER,
  payload: { login, password },
});

export const fetchStrings = (strings) => {
  return (dispatch) => {
    dispatch(setStrings(strings));
  };
};

export const fetchClearStrings = () => {
  return (dispatch) => {
    dispatch(clearStrings());
  };
};
