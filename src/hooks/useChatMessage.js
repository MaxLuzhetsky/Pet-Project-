import { useState, useEffect } from "react";
import { Filter } from "bad-words";

export default function useChatMessage(value, name) {
  const [message, setMessage] = useState("");

  const filter = new Filter();

  function formatDate(date) {
    const options = {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  }

  useEffect(() => {
    setMessage(value);
  }, [value]);

  return {
    date: formatDate(),
    message: filter.clean(message),
    name: name ? name : "Anonim",
  };
}
