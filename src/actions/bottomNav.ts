import { ActionTypes } from "./index";

export const setBottomNavStatus = (shouldDisplay: boolean) =>
  ({
    type: ActionTypes.SET_BOTTOM_NAVI_STATUS,
    payload: {
      shouldDisplay,
    },
  } as const);
