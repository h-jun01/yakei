import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

export type State = {
  latitude: number;
  longitude: number;
};

type PostPhotoReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  latitude: 0,
  longitude: 0,
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
