import { loadingStatusChange, loginStatusChange } from "./auth";
import { setPhotoListData } from "./photo";
import { setNewsDataList } from "./news ";
import { setAllPhotoListData } from "./allPhoto";
import { setShouldDisplayBottomNav, setBottomNavHeight } from "./bottomNav";
import { setShouldAppearPostBtns } from "./cameraAndAlbum";
import { setPostData } from "./post";
import { setShouldNavigateMap } from "./mapNavigate";
import { setFavoriteItems } from "./favorite";
import { setNotificationDataList } from "./notification";
import { setCommentDataList, setIsInputForm } from "./postedData";
import { setPostPhoto } from "./postPhoto";
import {
  setUserData,
  upDateUserName,
  upDateUserSelfIntroduction,
  upDateUserProfileImage,
  upDateUserProfileHeaderImage,
  upDateUserImgIndex,
  upDateUserHeaderImgIndex,
  upDateFavoriteList,
} from "./user";

export enum ActionTypes {
  LOADING_STATUS = "LOADING_STATUS",
  LOGIN_STATUS = "LOGIN_STATUS",
  USER_DATA = "USER_DATA",
  PHOTO_DATA_LIST = "PHOTO_DATA_LIST",
  PHOTO_ALL_DATA_LIST = "PHOTO_ALL_DATA_LIST",
  COMMENT_DATA_LIST = "COMMENT_DATA_LIST",
  INPUT_FORM_STATUS = "INPUT_FORM_STATUS",
  NEWS_DATA_LIST = "NOTICE_DATA_LIST",
  UPDATE_USER_NAME = "UPDATE_USER_NAME",
  UPDATE_SELF_INTRODUCTION = "UPDATE_SELF_INTRODUCTION",
  UPDATE_PROFILE_IMAGE = "UPDATE_PROFILE_IMAGE",
  UPDATE_PROFILE_HEADER_IMAGE = "UPDATE_PROFILE_HEADER_IMAGE",
  UPDATE_IMG_INDEX = "UPDATE_IMG_INDEX",
  UPDATE_HEADER_IMG_INDEX = "UPDATE_HEADER_IMG_INDEX",
  UPDATE_FAVORITE_LIST = "UPDATE_FAVORITE_LIST",
  SET_SHOULD_DISPLAY_BOTTOM_NAV = "SET_SHOULD_DISPLAY_BOTTOM_NAV",
  SET_BOTTOM_NAV_HEIGHT = "SET_BOTTOM_NAV_HEIGHT",
  SET_SHOULD_APPEAR_POST_BTNS = "SET_SHOULD_APPEAR_POST_BTNS",
  SET_POST_DATA = "SET_POST_DATA",
  SET_SHOULD_NAVIGATE = "SET_SHOULD_NAVIGATE",
  SET_FAVORITE_ITEMS = "SET_FAVORITE_ITEMS",
  SET_NOTIFICATION_DATA_LIST = "SET_NOTIFICATION_DATA_LIST",
  SET_POST_PHOTO = "SET_POST_PHOTO",
}

export type UnionedAction =
  | ReturnType<typeof loadingStatusChange>
  | ReturnType<typeof loginStatusChange>
  | ReturnType<typeof setUserData>
  | ReturnType<typeof setPhotoListData>
  | ReturnType<typeof setAllPhotoListData>
  | ReturnType<typeof setCommentDataList>
  | ReturnType<typeof setIsInputForm>
  | ReturnType<typeof setNewsDataList>
  | ReturnType<typeof upDateUserName>
  | ReturnType<typeof upDateUserSelfIntroduction>
  | ReturnType<typeof upDateUserProfileImage>
  | ReturnType<typeof upDateUserProfileHeaderImage>
  | ReturnType<typeof upDateUserImgIndex>
  | ReturnType<typeof upDateUserHeaderImgIndex>
  | ReturnType<typeof upDateFavoriteList>
  | ReturnType<typeof setShouldDisplayBottomNav>
  | ReturnType<typeof setBottomNavHeight>
  | ReturnType<typeof setShouldAppearPostBtns>
  | ReturnType<typeof setPostData>
  | ReturnType<typeof setShouldNavigateMap>
  | ReturnType<typeof setFavoriteItems>
  | ReturnType<typeof setNotificationDataList>
  | ReturnType<typeof setPostPhoto>;
