import { ActionTypes } from "./index";

export const setBottomNavStatus = (shouldDisplay: boolean) =>
  ({
    type: ActionTypes.BOTTOM_NAVI_STATUS,
    payload: {
      shouldDisplay,
    },
  } as const);
