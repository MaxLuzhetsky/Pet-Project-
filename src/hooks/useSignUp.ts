import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store"; 
import { setUser } from "../store/actions/actions.ts";

export default function useSignUp(login: string, password: string) {
  const [name, setName] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const dispName = name ? name : "Anonim";

  const signUp = (login: string, password: string) => {
    setName(login);
    dispatch(setUser(login, password));
  };

  return {
    dispName,
    signUp,
  };
}