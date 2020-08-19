import { ActionTypes, UnionedAction } from "../actions/index";

type CommentDataList = {
  uid: string;
  message: string;
  createTime: string;
};

type State = {
  commentDataList: CommentDataList[];
  inputValue: string;
};

const initialState: State = {
  commentDataList: [],
  inputValue: "",
};

export const commentReducer = (state = initialState, action: UnionedAction) => {
  switch (action.type) {
    case ActionTypes.COMMENT_DATA_LIST:
      return {
        ...state,
        commentDataList: action.payload.commentDataList,
      };
    case ActionTypes.INPUT_COMMENT_VALUE:
      return {
        ...state,
        inputValue: action.payload.inputValue,
      };
    default: {
      return state;
    }
  }
};
