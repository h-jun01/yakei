import { ActionTypes, UnionedAction } from "../actions/index";
import { Reducer } from "redux";

type NoticeDataList = {
  message: string;
  time: string;
};

type State = {
  noticeDataList: NoticeDataList[];
};

type NoticeReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  noticeDataList: [],
};

export const noticeReducer: NoticeReducer = (
  state = initialState,
  action: UnionedAction
) => {
  switch (action.type) {
    case ActionTypes.NOTICE_DATA_LIST:
      return {
        ...state,
        noticeDataList: action.payload.noticeDataList,
      };
    default: {
      return state;
    }
  }
};
