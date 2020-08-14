import { ActionTypes } from "./index";

//写真一覧の情報をセット
export const setAllPhotoListData = (
  allPhotoDataList: firebase.firestore.DocumentData[]
) =>
  ({
    type: ActionTypes.PHOTO_ALL_DATA_LIST,
    payload: {
      allPhotoDataList,
    },
  } as const);
