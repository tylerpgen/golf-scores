import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import { apiSlice } from "../features/apiSlices";

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Add the authReducer to the store
    [apiSlice.reducerPath]: apiSlice.reducer, // Add the apiSlice reducer to the store
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), // Add the apiSlice middleware to the store's middleware stack
  devTools: true, // Enable Redux DevTools extension
});

export default store;
