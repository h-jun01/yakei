import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  photoDataList: firebase.firestore.DocumentData[];
};

type MyPhotoReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  photoDataList: [],
};

export const myPhotoReducer: MyPhotoReducer = (
  state = initialState,
  action: UnionedAction
): State => {
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
