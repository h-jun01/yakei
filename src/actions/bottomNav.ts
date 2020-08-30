import { ActionTypes } from "./index";

export const setBottomNavStatus = (isDisplayed: boolean) =>
  ({
    type: ActionTypes.SET_BOTTOM_NAVI_STATUS,
    payload: {
      isDisplayed,
    },
  } as const);
