import { lodingStatusChange, loginStatusChange } from "./auth";

export enum ActionTypes {
  LODING_STATUS = "LODING_STATUS",
  LOGIN_STATUS = "LOGIN_STATUS",
}

export type UnionedAction =
  | ReturnType<typeof lodingStatusChange>
  | ReturnType<typeof loginStatusChange>;
