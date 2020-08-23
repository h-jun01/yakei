import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  photoDataList: firebase.firestore.DocumentData[];
};

const initialState: State = {
  photoDataList: [],
};

export const myPhotoReducer = (state = initialState, action: UnionedAction) => {
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
