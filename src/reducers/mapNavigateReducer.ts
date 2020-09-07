import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  shouldNavigateMap: boolean;
};

type MapNavigateReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  shouldNavigateMap: false,
};

export const mapNavigateReducer: MapNavigateReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_SHOULD_NAVIGATE:
      return {
        ...state,
        shouldNavigateMap: action.payload.shouldNavigateMap,
      };
    default: {
      return state;
    }
  }
};
