import { ActionTypes } from "./index";

//写真一覧の情報をセット
export const setPostPhoto = (
  latitude: number | undefined,
  longitude: number | undefined
) =>
  ({
    type: ActionTypes.SET_POST_PHOTO,
    payload: {
      latitude,
      longitude,
    },
  } as const);
