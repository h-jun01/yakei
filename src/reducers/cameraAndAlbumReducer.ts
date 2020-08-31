import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  isAppeared: boolean;
};

const initialState: State = {
  isAppeared: false,
};

type CameraAndAlbumReducer = Reducer<State, UnionedAction>;

export const cameraAndAlbumReducer: CameraAndAlbumReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_CAMERA_AND_ALBUM_STATUS:
      return {
        ...state,
        isAppeared: action.payload.isAppeared,
      };
    default: {
      return state;
    }
  }
};
