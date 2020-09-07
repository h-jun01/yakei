import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  favoriteItems: firebase.firestore.DocumentData[];
};

type FavoriteReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  favoriteItems: [],
};

export const favoriteReducer: FavoriteReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_FAVORITE_ITEMS:
      return {
        ...state,
        favoriteItems: action.payload.favoriteItems,
      };
    default: {
      return state;
    }
  }
};
