import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  isLoding: boolean;
  isLogin: boolean;
};

const initialState: State = {
  isLoding: false,
  isLogin: false,
};

export const authReducer = (state = initialState, action: UnionedAction) => {
  switch (action.type) {
    case ActionTypes.LODING_STATUS:
      console.log("通った");
      return {
        ...state,
        isLoding: action.payload.isLoding,
      };
    case ActionTypes.LOGIN_STATUS:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    default: {
      // const _: never = action.type;
      //command+Sを押すした時になぜか通る。
      //別のファイルでcommand+Sすると解決する
      console.log("失敗");
      return state;
    }
  }
};
