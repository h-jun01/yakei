import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  isLoading: boolean;
  isLogin: boolean;
};

const initialState: State = {
  isLoading: false,
  isLogin: false,
};

export const authReducer = (state = initialState, action: UnionedAction) => {
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
