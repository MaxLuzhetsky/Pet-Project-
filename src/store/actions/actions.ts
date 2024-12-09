import { stringType } from "../../types";

export const SET_STRINGS = "SET_STRINGS";
export const CLEAR_STRINGS = "CLEAR_STRINGS";
export const CLEAR_STRINGS_REQUEST = "CLEAR_STRINGS_REQUEST";
export const SET_USER = "SET_USER";

export const setStrings = (strings: stringType[]) => ({
  type: SET_STRINGS,
  payload: strings,
});

export const clearStrings = () => ({
  type: CLEAR_STRINGS,
});

export const setUser = (login: string, password: string) => ({
  type: SET_USER,
  payload: { login, password },
});

export const fetchStrings = (strings: stringType[]) => {
  return (dispatch) => {
    dispatch(setStrings(strings));
  };
};

export const fetchClearStrings = () => {
  return (dispatch) => {
    dispatch(clearStrings());
  };
};

export const fetchUser = (login: string, password: string) => {
  return (dispatch) => {
    dispatch(setUser(login, password));
  };
};
