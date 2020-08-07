import { ActionTypes, UnionedAction } from "../actions/index";

type NoticeDataList = {
  message: string;
  time: string;
};

type State = {
  noticeDataList: NoticeDataList[];
};

const initialState: State = {
  noticeDataList: [],
};

export const noticeReducer = (state = initialState, action: UnionedAction) => {
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
