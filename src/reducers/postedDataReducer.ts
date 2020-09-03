import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  commentDataList: firebase.firestore.DocumentData[];
  isInputForm: boolean;
};

type PostedDataReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  commentDataList: [],
  isInputForm: false,
};

export const postedDataReducer: PostedDataReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.COMMENT_DATA_LIST:
      return {
        ...state,
        commentDataList: action.payload.commentDataList,
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
