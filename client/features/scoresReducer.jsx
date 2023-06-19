import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "scores",
  initialState: [],
  reducers: {
    fetchAllScores: (state, action) => {
      return action.payload;
    },
    addScore: (state, action) => {
      state.push(action.payload);
    },
    deleteScore: (state, action) => {
      return state.filter((score) => score.id !== action.payload);
    },
    updateScore: (state, action) => {
      const { id, updatedScore } = action.payload;
      const scoreIndex = state.findIndex((score) => score.id === id);
      if (scoreIndex !== -1) {
        state[scoreIndex] = { ...state[scoreIndex], ...updatedScore };
      }
    },
  },
});

export const { fetchAllScores, addScore, deleteScore, updateScore } = scoreSlice.actions;
export default scoreSlice.reducer;
