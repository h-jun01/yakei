import { ActionTypes } from "./index";

//お知らせの情報をセット
export const setNoticeListData = (
  noticeDataList: firebase.firestore.DocumentData | undefined
) =>
  ({
    type: ActionTypes.NOTICE_DATA_LIST,
    payload: {
      noticeDataList: noticeDataList?.notice_list,
    },
  } as const);
