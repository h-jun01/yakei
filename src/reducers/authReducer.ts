import { ActionTypes, UnionedAction } from "../actions/index";
import { Reducer } from "redux";

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
) => {
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
