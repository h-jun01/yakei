import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  shouldAppear: boolean;
};

const initialState: State = {
  shouldAppear: true,
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
        shouldAppear: action.payload.shouldAppear,
      };
    default: {
      return state;
    }
  }
};
