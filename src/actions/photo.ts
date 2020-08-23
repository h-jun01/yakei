import { ActionTypes } from "./index";

//写真一覧の情報をセット
export const setPhotoListData = (
  photoDataList: firebase.firestore.DocumentData[]
) =>
  ({
    type: ActionTypes.PHOTO_DATA_LIST,
    payload: {
      photoDataList,
    },
  } as const);
