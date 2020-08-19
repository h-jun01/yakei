import { ActionTypes, UnionedAction } from "../actions/index";

type CommentDataList = {
  uid: string;
  message: string;
  createTime: string;
};

type State = {
  commentDataList: CommentDataList[];
  inputValue: string;
  isInputForm: boolean;
};

const initialState: State = {
  commentDataList: [],
  inputValue: "",
  isInputForm: false,
};

export const postedDataReducer = (
  state = initialState,
  action: UnionedAction
) => {
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
    case ActionTypes.INPUT_FORM_STATUS:
      return {
        ...state,
        isInputForm: action.payload.isInputForm,
      };
    default: {
      return state;
    }
  }
};
