import { ActionTypes, UnionedAction } from "../actions/index";

type PhotoDataList = {
  URL: string;
  latitude: number;
  longitude: number;
};

type State = {
  photoDataList: PhotoDataList[];
};

const initialState: State = {
  photoDataList: [],
};

export const photoReducer = (state = initialState, action: UnionedAction) => {
  switch (action.type) {
    case ActionTypes.PHOTO_DATA_LIST:
      return {
        ...state,
        photoDataList: action.payload.photoDataList,
      };
    default: {
      return state;
    }
  }
};
