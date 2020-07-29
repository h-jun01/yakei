import { lodingStatusChange, loginStatusChange } from "./auth";
import { setUserData, upDateUserName } from "./user";
import { setPhotoListData } from "./photo";

export enum ActionTypes {
  LODING_STATUS = "LODING_STATUS",
  LOGIN_STATUS = "LOGIN_STATUS",
  USER_DATA = "USER_DATA",
  PHOTO_DATA_LIST = "PHOTO_DATA_LIST",
  UPDATE_USER_NAME = "UPDATE_USER_NAME",
}

export type UnionedAction =
  | ReturnType<typeof lodingStatusChange>
  | ReturnType<typeof loginStatusChange>
  | ReturnType<typeof setUserData>
  | ReturnType<typeof setPhotoListData>
  | ReturnType<typeof upDateUserName>;
