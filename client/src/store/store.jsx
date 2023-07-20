import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import { apiSlice } from "../features/apiSlices";
import scoreReducer from "../features/scoreSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Add the authReducer to the store
    [apiSlice.reducerPath]: apiSlice.reducer, // Add the apiSlice reducer to the store
    scores: scoreReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), // Add the apiSlice middleware to the store's middleware stack
  devTools: false, // Enable Redux DevTools extension
});

export default store;
