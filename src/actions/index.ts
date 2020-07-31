import { lodingStatusChange, loginStatusChange } from "./auth";
import { setPhotoListData } from "./photo";
import {
  setUserData,
  upDateUserName,
  upDateUserProfileImage,
  upDateUserImgIndex,
} from "./user";

export enum ActionTypes {
  LOADING_STATUS = "LOADING_STATUS",
  LOGIN_STATUS = "LOGIN_STATUS",
  USER_DATA = "USER_DATA",
  PHOTO_DATA_LIST = "PHOTO_DATA_LIST",
  UPDATE_USER_NAME = "UPDATE_USER_NAME",
  UPDATE_PROFILE_IMAGE = "UPDATE_PROFILE_IMAGE",
  UPDATE_IMG_INDEX = "UPDATE_IMG_INDEX",
}

export type UnionedAction =
  | ReturnType<typeof lodingStatusChange>
  | ReturnType<typeof loginStatusChange>
  | ReturnType<typeof setUserData>
  | ReturnType<typeof setPhotoListData>
  | ReturnType<typeof upDateUserName>
  | ReturnType<typeof upDateUserProfileImage>
  | ReturnType<typeof upDateUserImgIndex>;
