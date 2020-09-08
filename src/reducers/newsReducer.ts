import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

type NewsDataList = {
  title: string;
  message: string;
  time: string;
};

type State = {
  newsDataList: NewsDataList[];
};

type NewsReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  newsDataList: [],
};

export const newsReducer: NewsReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.NEWS_DATA_LIST:
      return {
        ...state,
        newsDataList: action.payload.newsDataList,
      };
    default: {
      return state;
    }
  }
};
