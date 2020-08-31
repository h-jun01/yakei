import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  isDisplayed: boolean;
};

type BottomNavReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  isDisplayed: true,
};

export const bottomNavReducer: BottomNavReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_BOTTOM_NAVI_STATUS:
      return {
        ...state,
        isDisplayed: action.payload.isDisplayed,
      };
    default: {
      return state;
    }
  }
};
