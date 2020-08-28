import { ActionTypes } from "./index";

export const setCameraAndAlbumStatus = (shouldAppear: boolean) =>
  ({
    type: ActionTypes.SET_CAMERA_AND_ALBUM_STATUS,
    payload: {
      shouldAppear,
    },
  } as const);
