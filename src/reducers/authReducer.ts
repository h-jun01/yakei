import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  isLoading: boolean;
  isLogin: boolean;
};

type AuthReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  isLoading: false,
  isLogin: false,
};

export const authReducer: AuthReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case ActionTypes.LOGIN_STATUS:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    default: {
      return state;
    }
  }
};
