import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { photoReducer } from "./photoReducer";
import { allPhotoReducer } from "./allPhotoReducer";
import { noticeReducer } from "./noticeReducer";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  allPhotoReducer,
  photoReducer,
  noticeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
