import { ActionTypes } from "./index";

export const setCameraAndAlbumStatus = (isAppeared: boolean) =>
  ({
    type: ActionTypes.SET_CAMERA_AND_ALBUM_STATUS,
    payload: {
      isAppeared,
    },
  } as const);
