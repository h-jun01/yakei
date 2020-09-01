import { ActionTypes } from "./index";

//ユーザ情報をセット
export const setUserData = (
  account: firebase.firestore.DocumentData | undefined
) =>
  ({
    type: ActionTypes.USER_DATA,
    payload: {
      uid: account?.uid as string,
      name: account?.name as string,
      userImg: account?.user_img as string,
      userHeaderImg: account?.user_header_img as string,
      imgIndex: account?.img_index as string,
      headerImgIndex: account?.header_img_index as string,
      selfIntroduction: account?.self_introduction as string,
      favoriteList: account?.favorite_list as firebase.firestore.DocumentData[],
    },
  } as const);

//ユーザ名の更新
export const upDateUserName = (name: string) =>
  ({
    type: ActionTypes.UPDATE_USER_NAME,
    payload: {
      name,
    },
  } as const);

//自己紹介のの更新
export const upDateUserSelfIntroduction = (selfIntroduction: string) =>
  ({
    type: ActionTypes.UPDATE_SELF_INTRODUCTION,
    payload: {
      selfIntroduction,
    },
  } as const);

//プロフィールアイコン画像の更新
export const upDateUserProfileImage = (userImg: string) =>
  ({
    type: ActionTypes.UPDATE_PROFILE_IMAGE,
    payload: {
      userImg,
    },
  } as const);

//プロフィールヘッダー画像の更新
export const upDateUserProfileHeaderImage = (userHeaderImg: string) =>
  ({
    type: ActionTypes.UPDATE_PROFILE_HEADER_IMAGE,
    payload: {
      userHeaderImg,
    },
  } as const);

//アイコン画像URLの更新
export const upDateUserImgIndex = (imgIndex: string) =>
  ({
    type: ActionTypes.UPDATE_IMG_INDEX,
    payload: {
      imgIndex,
    },
  } as const);

//ヘッダー画像URLの更新
export const upDateUserHeaderImgIndex = (headerImgIndex: string) =>
  ({
    type: ActionTypes.UPDATE_HEADER_IMG_INDEX,
    payload: {
      headerImgIndex,
    },
  } as const);
