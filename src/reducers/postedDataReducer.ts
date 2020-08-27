import { ActionTypes, UnionedAction } from "../actions/index";
import { Reducer } from "redux";

type CommentDataList = {
  uid: string;
  message: string;
  create_time: string;
};

type State = {
  commentDataList: CommentDataList[] | firebase.firestore.DocumentData[];
  inputValue: string;
  isInputForm: boolean;
};

type PostedDataReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  commentDataList: [],
  inputValue: "",
  isInputForm: false,
};

export const postedDataReducer: PostedDataReducer = (
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
