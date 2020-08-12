import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { photoReducer } from "./photoReducer";
import { noticeReducer } from "./noticeReducer";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  photoReducer,
  noticeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
