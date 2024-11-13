import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setUser } from "../store/actions/actions.ts";
import { MessageType } from "./useChatMessage.ts";

//@comment: here u have login and password as parameters, but u don't use it. 
export default function useSignUp(login: string, password: string) {
  const [name, setName] = useState("");
  const [role, setRole] = useState<MessageType>(MessageType.ANONIM)
  const dispatch = useDispatch<AppDispatch>();

  //comment: name || "Anonym"
  const dispName = name ? name : "Anonim";

  const signUp = (login: string, password: string) => {
    setName(login);
    if (login === "Max") {
      setRole(MessageType.ADMIN)
    } else if (login && login !== "Max") {
      setRole(MessageType.USER)
    } else {
      setRole(MessageType.ANONIM)
    }
    dispatch(setUser(login, password));
  };

  return {
    dispName,
    signUp,
    role,
  };
}