import { ActionTypes } from "./index";

//写真一覧の情報をセット
export const setAllPhotoListData = (
  allPhotoDataList: firebase.firestore.DocumentData | undefined
) =>
  ({
    type: ActionTypes.PHOTO_ALL_DATA_LIST,
    payload: {
      allPhotoDataList: {
        uid: allPhotoDataList?.uid,
        createTime: allPhotoDataList?.create_time,
        shootTime: allPhotoDataList?.shoot_time,
        userID: allPhotoDataList?.user_id,
        url: allPhotoDataList?.url,
        latitude: allPhotoDataList?.latitude,
        longitude: allPhotoDataList?.longitude,
      },
    },
  } as const);

//写真一覧の情報をリセット
export const defaultPhotoListData = () =>
  ({
    type: ActionTypes.DEFAULT_PHOTO_ALL_DATA_LIST,
  } as const);
