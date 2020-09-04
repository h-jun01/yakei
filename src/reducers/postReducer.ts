import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  uri: string;
};

type PostReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  uri: "",
};

export const postReducer: PostReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_POST_DATA:
      return {
        ...state,
        uri: action.payload.uri,
      };
    default: {
      return state;
    }
  }
};
