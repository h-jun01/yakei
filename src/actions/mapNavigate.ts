import { ActionTypes } from "./index";

export const setShouldNavigateMap = (shouldNavigateMap: boolean) =>
  ({
    type: ActionTypes.SET_SHOULD_NAVIGATE,
    payload: {
      shouldNavigateMap,
    },
  } as const);
