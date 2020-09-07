import { ActionTypes } from "./index";

//お知らせの情報をセット
export const setNewsDataList = (
  newsDataList: firebase.firestore.DocumentData | undefined
) =>
  ({
    type: ActionTypes.NEWS_DATA_LIST,
    payload: {
      newsDataList: newsDataList?.news_list,
    },
  } as const);
