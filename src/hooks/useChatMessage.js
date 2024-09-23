import { useState, useEffect } from "react";

export default function useChatMessage(value) {
  const [message, setMessage] = useState("");
  const [formatedDate, setFormatedDate] = useState("");

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
    const currentDate = new Date();
    const messageDate = formatDate(currentDate);
    setFormatedDate(messageDate);
  }, [value]);

  if (formatedDate && message) {
    return formatedDate + "-" + message;
  } else {
    return;
  }
}
