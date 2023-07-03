import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import { apiSlice } from "../features/apiSlices";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
