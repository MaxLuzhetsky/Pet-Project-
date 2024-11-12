import { SET_USER } from "../../actions/actions.ts";

type User = {
  login: string;
  password: string;
};

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
      localStorage.setItem("user_saga", JSON.stringify(action.payload));
      return newState;
    default:
      return state;
  }
};

export default userReducer;
