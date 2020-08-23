import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  allPhotoDataList: firebase.firestore.DocumentData[];
};

const initialState: State = {
  allPhotoDataList: [],
};

export const allPhotoReducer = (
  state = initialState,
  action: UnionedAction
) => {
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
