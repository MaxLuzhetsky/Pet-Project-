import { useState, useEffect } from "react";
import { Filter } from "bad-words";

export default function useChatMessage(value: string, name: string) {
  const [message, setMessage] = useState<string>("");

  const filter = new Filter();

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
    message: filter.clean(message),
    name: name ? name : "Anonymous",
  };
}
