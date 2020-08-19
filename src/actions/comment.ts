import { ActionTypes } from "./index";

//コメント一覧をセット
export const setCommentDataList = (commentDataList: any[]) =>
  ({
    type: ActionTypes.COMMENT_DATA_LIST,
    payload: {
      commentDataList,
    },
  } as const);
