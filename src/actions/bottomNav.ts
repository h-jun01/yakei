import { ActionTypes } from "./index";

export const setShouldDisplayBottomNav = (shouldDisplay: boolean) =>
  ({
    type: ActionTypes.SET_SHOULD_DISPLAY_BOTTOM_NAV,
    payload: {
      shouldDisplay,
    },
  } as const);

export const setBottomNavHeight = (height: number) =>
  ({
    type: ActionTypes.SET_BOTTOM_NAV_HEIGHT,
    payload: {
      height,
    },
  } as const);

export const setTabState = (tab: string) =>
  ({
    type: ActionTypes.SET_TAB_STATE,
    payload: {
      tab,
    },
  } as const);

export const setShouldNavigate = (shouldNavigate: boolean) =>
  ({
    type: ActionTypes.SET_SHOULD_NAVIGATE,
    payload: {
      shouldNavigate,
    },
  } as const);
