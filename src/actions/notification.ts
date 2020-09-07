import { ActionTypes } from "./index";

//お知らせの情報をセット
export const setNotificationDataList = (
  notificationDataList: firebase.firestore.DocumentData[]
) =>
  ({
    type: ActionTypes.SET_NOTIFICATION_DATA_LIST,
    payload: {
      notificationDataList,
    },
  } as const);
