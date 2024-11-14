export type stringType = {
  nickName: string;
  date: string;
  message: string;
};
export type User = {
  login: string;
  password: string;
};

export interface Message {
  date: string;
  message: string;
  nickName: string;
}

export enum MessageType {
  USER = "USER",
  ANONYM = "ANONYM",
  ADMIN = "ADMIN",
}
