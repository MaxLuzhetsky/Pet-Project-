import { useState, useEffect } from "react";
import { Filter } from "bad-words";

//@comment for value, constants, enum e.t.c you can create file invariants and put it there(src/invariants.ts) 
export enum MessageType {
  USER = "USER",
  ANONIM = "ANONIM", // ANONIM -> ANONYM wording mistake
  ADMIN = "ADMIN",
}

export default function useChatMessage(value: string, name: string, role: MessageType) {
  //@comment  it looks like u don't need useState. U take value, then set up it in state and then filter it
  //But u can filter it directly. Look at line 37
  const [message, setMessage] = useState<string>("");

  //@comment  Filter instance is re-created on every render
  const filter = new Filter();

  //@comment move formatDate outside hook. 
  function formatDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return new Intl.DateTimeFormat("en-GB", options).format(new Date());
  }

  useEffect(() => {
    setMessage(value);
  }, [value]);

  return {
    date: formatDate(),
    // @comment u message: filter.clean(value),
    message: filter.clean(message),
    //@comment use '??' -> name: name ?? "Anonymous",
    name: name ? name : "Anonymous",
    role: role,
  };
}
