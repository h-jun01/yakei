import { ActionTypes } from "./index";

export const setShouldDisplayBottomNav = (shouldDisplay: boolean) =>
  ({
    type: ActionTypes.SET_SHOULD_DISPLAY_BOTTOM_NAV,
    payload: {
      shouldDisplay,
    },
  } as const);
