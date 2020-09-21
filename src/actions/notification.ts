import { ActionTypes } from "./index";
import { Timestamp } from "@google-cloud/firestore";

type NotificationItems = {
  opponent_uid: string;
  opponent_url: string;
  opponent_name: string;
  photo_url: string;
  uid: string;
  content: string;
  create_time: Timestamp;
};

//お知らせの情報をセット
export const setNotificationDataList = (
  notificationDataList: NotificationItems[]
) =>
  ({
    type: ActionTypes.SET_NOTIFICATION_DATA_LIST,
    payload: {
      notificationDataList,
    },
  } as const);
