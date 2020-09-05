import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  shouldDisplay: boolean;
};

type BottomNavReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  shouldDisplay: true,
};

export const bottomNavReducer: BottomNavReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_SHOULD_DISPLAY_BOTTOM_NAV:
      return {
        ...state,
        shouldDisplay: action.payload.shouldDisplay,
      };
    default: {
      return state;
    }
  }
};
