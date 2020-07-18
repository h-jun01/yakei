import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
