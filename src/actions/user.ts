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
      createTime: account?.create_time,
      updateTime: account?.update_time,
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
