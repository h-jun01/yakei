import { ActionTypes } from "./index";

//コメント一覧をセット
export const setCommentDataList = (
  commentDataList: firebase.firestore.DocumentData[]
) =>
  ({
    type: ActionTypes.COMMENT_DATA_LIST,
    payload: {
      commentDataList,
    },
  } as const);

//入力したコメントを取得
export const setInputCommentValue = (inputValue: string) =>
  ({
    type: ActionTypes.INPUT_COMMENT_VALUE,
    payload: {
      inputValue,
    },
  } as const);

//入力フォームの切り替え
export const setIsInputForm = (isInputForm: boolean) =>
  ({
    type: ActionTypes.INPUT_FORM_STATUS,
    payload: {
      isInputForm,
    },
  } as const);
