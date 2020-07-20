import { ActionTypes } from "./index";

//写真一覧の情報をセット
export const setPhotoListData = (
  photoDataList: firebase.firestore.DocumentData | undefined
) =>
  ({
    type: ActionTypes.PHOTO_DATA_LIST,
    payload: {
      photoDataList: photoDataList?.photo_list,
    },
  } as const);
