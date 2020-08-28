import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { myPhotoReducer } from "./myPhotoReducer";
import { allPhotoReducer } from "./allPhotoReducer";
import { postedDataReducer } from "./postedDataReducer";
import { noticeReducer } from "./noticeReducer";
import { bottomNavReducer } from "./bottomNavReducer";
import { cameraAndAlbumReducer } from "./cameraAndAlbumReducer";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  allPhotoReducer,
  myPhotoReducer,
  postedDataReducer,
  noticeReducer,
  bottomNavReducer,
  cameraAndAlbumReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
