import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Feature/counterSlice";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
