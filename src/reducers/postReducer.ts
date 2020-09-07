import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  uri: string;
  type: "camera" | "album";
};

type PostReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  uri: "",
  type: "camera",
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
        type: action.payload.type,
      };
    default: {
      return state;
    }
  }
};
