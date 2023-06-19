import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: () => {},
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export default authSlice.reducer;
