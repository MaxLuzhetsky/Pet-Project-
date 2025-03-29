import { ReactNode } from "react";

export  type stringType = {
  name: string;
  date: string;
  message: string;
};
export type User = {
  login: string;
  password: string;
};

export type Children = {
  children: ReactNode;
}

export interface Message {
  date: string;
  message: string;
  name: string;
}

export enum MessageType {
  USER = "USER",
  ANONYM = "ANONYM",
  ADMIN = "ADMIN",
}
