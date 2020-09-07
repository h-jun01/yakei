import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  allPhotoDataList: firebase.firestore.DocumentData[];
};

type AllPhotoReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  allPhotoDataList: [],
};

export const allPhotoReducer: AllPhotoReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.PHOTO_ALL_DATA_LIST:
      return {
        ...state,
        allPhotoDataList: action.payload.allPhotoDataList,
      };
    default: {
      return state;
    }
  }
};
