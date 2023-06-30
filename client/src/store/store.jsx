import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
