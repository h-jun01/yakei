import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { photoReducer } from "./photoReducer";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  photoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
