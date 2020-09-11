import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  latitude: number | undefined;
  longitude: number | undefined;
};

type PostPhotoReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  latitude: undefined,
  longitude: undefined,
};

export const PostPhotoReducer: PostPhotoReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_POST_PHOTO:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    default: {
      return state;
    }
  }
};
