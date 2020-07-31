import { ActionTypes } from "./index";

//ローディング状態の変更
export const loadingStatusChange = (isLoading: boolean) =>
  ({
    type: ActionTypes.LOADING_STATUS,
    payload: {
      isLoading,
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
