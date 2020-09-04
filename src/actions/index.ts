import { loadingStatusChange, loginStatusChange } from "./auth";
import { setPhotoListData } from "./photo";
import { setNoticeListData } from "./notice";
import { setAllPhotoListData } from "./allPhoto";
import { setBottomNavStatus } from "./bottomNav";
import { setCameraAndAlbumStatus } from "./cameraAndAlbum";
import { setPostData } from "./post";
import {
  setCommentDataList,
  setInputCommentValue,
  setIsInputForm,
} from "./postedData";
import {
  setUserData,
  upDateUserName,
  upDateUserSelfIntroduction,
  upDateUserProfileImage,
  upDateUserProfileHeaderImage,
  upDateUserImgIndex,
  upDateUserHeaderImgIndex,
} from "./user";

export enum ActionTypes {
  LOADING_STATUS = "LOADING_STATUS",
  LOGIN_STATUS = "LOGIN_STATUS",
  USER_DATA = "USER_DATA",
  PHOTO_DATA_LIST = "PHOTO_DATA_LIST",
  PHOTO_ALL_DATA_LIST = "PHOTO_ALL_DATA_LIST",
  COMMENT_DATA_LIST = "COMMENT_DATA_LIST",
  INPUT_COMMENT_VALUE = "INPUT_COMMENT_VALUE",
  INPUT_FORM_STATUS = "INPUT_FORM_STATUS",
  NOTICE_DATA_LIST = "NOTICE_DATA_LIST",
  UPDATE_USER_NAME = "UPDATE_USER_NAME",
  UPDATE_SELF_INTRODUCTION = "UPDATE_SELF_INTRODUCTION",
  UPDATE_PROFILE_IMAGE = "UPDATE_PROFILE_IMAGE",
  UPDATE_PROFILE_HEADER_IMAGE = "UPDATE_PROFILE_HEADER_IMAGE",
  UPDATE_IMG_INDEX = "UPDATE_IMG_INDEX",
  UPDATE_HEADER_IMG_INDEX = "UPDATE_HEADER_IMG_INDEX",
  SET_BOTTOM_NAVI_STATUS = "SET_BOTTOM_NAVI_STATUS",
  SET_CAMERA_AND_ALBUM_STATUS = "SET_CAMERA_AND_ALBUM_STATUS",
  SET_POST_DATA = "SET_POST_DATA",
}

export type UnionedAction =
  | ReturnType<typeof loadingStatusChange>
  | ReturnType<typeof loginStatusChange>
  | ReturnType<typeof setUserData>
  | ReturnType<typeof setPhotoListData>
  | ReturnType<typeof setAllPhotoListData>
  | ReturnType<typeof setCommentDataList>
  | ReturnType<typeof setInputCommentValue>
  | ReturnType<typeof setIsInputForm>
  | ReturnType<typeof setNoticeListData>
  | ReturnType<typeof upDateUserName>
  | ReturnType<typeof upDateUserSelfIntroduction>
  | ReturnType<typeof upDateUserProfileImage>
  | ReturnType<typeof upDateUserProfileHeaderImage>
  | ReturnType<typeof upDateUserImgIndex>
  | ReturnType<typeof upDateUserHeaderImgIndex>
  | ReturnType<typeof setBottomNavStatus>
  | ReturnType<typeof setCameraAndAlbumStatus>
  | ReturnType<typeof setPostData>;
