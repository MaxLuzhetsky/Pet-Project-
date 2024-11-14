import { User } from "../../../@types/types.ts";
import { SET_USER } from "../../actions/actions.ts";

const initialState: { user: User } = {
  user: {
    login: "",
    password: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const newState = {
        ...state,
        user: action.payload,
      };
      localStorage.setItem("user_login", JSON.stringify(newState.user));
      return newState;
    default:
      return state;
  }
};

export default userReducer;
