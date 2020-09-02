import { ActionTypes } from "./index";

//お気にりをセット
export const setFavoriteItems = (
  favoriteItems: firebase.firestore.DocumentData[]
) =>
  ({
    type: ActionTypes.SET_FAVORITE_ITEMS,
    payload: {
      favoriteItems,
    },
  } as const);
