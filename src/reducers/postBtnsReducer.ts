import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  shouldAppear: boolean;
};

type CameraAndAlbumReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  shouldAppear: false,
};

type PostBtnsReducer = Reducer<State, UnionedAction>;

export const postBtnsReducer: PostBtnsReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_SHOULD_APPEAR_POST_BTNS:
      return {
        ...state,
        shouldAppear: action.payload.shouldAppear,
      };
    default: {
      return state;
    }
  }
};
