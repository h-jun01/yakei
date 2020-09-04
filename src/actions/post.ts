import { ActionTypes } from "./index";

export const setPostData = (uri: string, type: "camera" | "album") =>
  ({
    type: ActionTypes.SET_POST_DATA,
    payload: {
      uri,
      type,
    },
  } as const);
