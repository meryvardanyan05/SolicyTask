import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardSlice from "./reducers/card/cardSlice";

const rootReducer = combineReducers({
  cardSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
