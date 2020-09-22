import { ActionTypes } from "./index";

//写真一覧の情報をセット
export const setPhotoDataList = (
  photoDataList: firebase.firestore.DocumentData[]
) =>
  ({
    type: ActionTypes.PHOTO_DATA_LIST,
    payload: {
      photoDataList,
    },
  } as const);
