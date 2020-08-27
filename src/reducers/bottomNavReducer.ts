import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  shouldDisplay: boolean;
};

const initialState: State = {
  shouldDisplay: true,
};

type BottomNavReducer = Reducer<State, UnionedAction>;

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
