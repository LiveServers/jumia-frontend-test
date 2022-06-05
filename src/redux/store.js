import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combineReducers";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: rootReducer,
});
