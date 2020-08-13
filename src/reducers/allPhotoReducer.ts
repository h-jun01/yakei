import { ActionTypes, UnionedAction } from "../actions/index";
import { PhotoData } from "../entities/common";

type State = {
  allPhotoDataList: PhotoData[];
};

const initialState: State = {
  allPhotoDataList: [],
};
function addItem(array, item) {
  return Array.from(new Set([...array, item])); //重複データが入らないようにするための対応
}

export const allPhotoReducer = (
  state = initialState,
  action: UnionedAction
) => {
  switch (action.type) {
    case ActionTypes.DEFAULT_PHOTO_ALL_DATA_LIST:
      return {
        ...state,
        allPhotoDataList: [],
      };
    case ActionTypes.PHOTO_ALL_DATA_LIST:
      return {
        ...state,
        allPhotoDataList: addItem(
          state.allPhotoDataList,
          action.payload.allPhotoDataList
        ),
      };
    default: {
      return state;
    }
  }
};
