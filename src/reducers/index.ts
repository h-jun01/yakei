import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { myPhotoReducer } from "./myPhotoReducer";
import { allPhotoReducer } from "./allPhotoReducer";
import { postedDataReducer } from "./postedDataReducer";
import { newsReducer } from "./newsReducer";
import { bottomNavReducer } from "./bottomNavReducer";
import { postBtnsReducer } from "./postBtnsReducer";
import { postReducer } from "./postReducer";
import { mapNavigateReducer } from "./mapNavigateReducer";
import { favoriteReducer } from "./favoriteReducer";
import { notificationReducer } from "./notificationReducer";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  allPhotoReducer,
  myPhotoReducer,
  postedDataReducer,
  newsReducer,
  bottomNavReducer,
  postBtnsReducer,
  postReducer,
  mapNavigateReducer,
  favoriteReducer,
  notificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
