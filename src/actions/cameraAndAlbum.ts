import { ActionTypes } from "./index";

export const setShouldAppearPostBtns = (shouldAppear: boolean) =>
  ({
    type: ActionTypes.SET_SHOULD_APPEAR_POST_BTNS,
    payload: {
      shouldAppear,
    },
  } as const);
