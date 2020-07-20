import { ActionTypes } from "./index";

//ユーザ情報をセット
export const setUserData = (
  account: firebase.firestore.DocumentData | undefined
) =>
  ({
    type: ActionTypes.USER_DATA,
    payload: {
      uid: account?.uid,
      name: account?.name,
      userImg: account?.user_img,
      titleList: account?.title_list,
      createTime: account?.create_time,
      updateTime: account?.update_time,
    },
  } as const);
