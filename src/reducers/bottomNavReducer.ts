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
    case ActionTypes.BOTTOM_NAVI_STATUS:
      return {
        ...state,
        shouldDisplay: action.payload.shouldDisplay,
      };
    default: {
      return state;
    }
  }
};
