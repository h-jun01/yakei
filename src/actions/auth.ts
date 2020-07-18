import { ActionTypes } from "./index";

//ローディング状態の変更
export const lodingStatusChange = (isLoding: boolean) =>
  ({
    type: ActionTypes.LODING_STATUS,
    payload: {
      isLoding,
    },
  } as const);

//ログイン状態の変更
export const loginStatusChange = (isLogin: boolean) =>
  ({
    type: ActionTypes.LOGIN_STATUS,
    payload: {
      isLogin,
    },
  } as const);
