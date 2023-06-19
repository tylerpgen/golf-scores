import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import scoresReducer from "./scoresReducer";

// Combining multiple reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer, // Authentication
  scores: scoresReducer, // Scores
});

export default rootReducer;
