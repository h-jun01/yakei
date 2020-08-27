import { ActionTypes, UnionedAction } from "../actions/index";
import { Reducer } from "redux";

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
) => {
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
