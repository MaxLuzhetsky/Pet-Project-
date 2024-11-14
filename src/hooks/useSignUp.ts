import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setUser } from "../store/actions/actions.ts";
import { MessageType } from "../@types/types.ts";


export default function useSignUp() {
  const [name, setName] = useState("");
  const [role, setRole] = useState<MessageType>(MessageType.ANONYM);
  const dispatch = useDispatch<AppDispatch>();

  const dispName = name || "Anonim";

  const signUp = (login: string, password: string) => {
    setName(login);
    if (login === "Max") {
      setRole(MessageType.ADMIN);
    } else if (login && login !== "Max") {
      setRole(MessageType.USER);
    } else {
      setRole(MessageType.ANONYM);
    }
    dispatch(setUser(login, password));
  };

  return {
    dispName,
    signUp,
    role,
  };
}
