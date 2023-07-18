import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scoresData: null,
};

const scoreSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    setScoresData: (state, action) => {
      state.scoresData = action.payload;
    },
    clearScoresData: (state) => {
      state.scoresData = null;
    },
  },
});

export const { setScoresData, clearScoresData } = scoreSlice.actions;
export default scoreSlice.reducer;
