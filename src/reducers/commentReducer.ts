import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  commentDataList: any[];
};

const initialState: State = {
  commentDataList: [],
};

export const commentReducer = (state = initialState, action: UnionedAction) => {
  switch (action.type) {
    case ActionTypes.COMMENT_DATA_LIST:
      return {
        ...state,
        commentDataList: action.payload.commentDataList,
      };
    default: {
      return state;
    }
  }
};
