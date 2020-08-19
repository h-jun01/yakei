import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { myPhotoReducer } from "./myPhotoReducer";
import { allPhotoReducer } from "./allPhotoReducer";
import { commentReducer } from "./commentReducer";
import { noticeReducer } from "./noticeReducer";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  allPhotoReducer,
  myPhotoReducer,
  commentReducer,
  noticeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
