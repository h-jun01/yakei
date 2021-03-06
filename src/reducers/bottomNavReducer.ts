import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  shouldDisplay: boolean;
  height: number;
  tab: string;
  shouldNavigate: boolean;
};

type BottomNavReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  shouldDisplay: true,
  height: 0,
  tab: "home",
  shouldNavigate: false,
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
    case ActionTypes.SET_BOTTOM_NAV_HEIGHT:
      return {
        ...state,
        height: action.payload.height,
      };
    case ActionTypes.SET_TAB_STATE:
      return {
        ...state,
        tab: action.payload.tab,
      };
    case ActionTypes.SET_SHOULD_NAVIGATE:
      return {
        ...state,
        shouldNavigate: action.payload.shouldNavigate,
      };
    default: {
      return state;
    }
  }
};
