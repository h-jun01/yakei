import { ActionTypes } from "./index";

export const setshouldNavigateMap = (shouldNavigateMap: boolean) =>
  ({
    type: ActionTypes.SET_SHOULD_NAVIGATE,
    payload: {
      shouldNavigateMap,
    },
  } as const);
