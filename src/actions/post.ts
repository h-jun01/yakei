import { ActionTypes } from "./index";

export const setPostData = (uri: string) =>
  ({
    type: ActionTypes.SET_POST_DATA,
    payload: {
      uri,
    },
  } as const);
