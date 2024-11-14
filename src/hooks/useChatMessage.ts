import { Filter } from "bad-words";
import { MessageType } from "../@types";

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

export default function useChatMessage(
  value: string,
  name: string,
  role: MessageType
) {
  const filter = new Filter();

  return {
    date: formatDate(),
    message: filter.clean(value),
    name: name ?? "Anonymous",
    role: role,
  };
}
