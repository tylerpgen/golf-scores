import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import scoresReducer from "./scoresReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  scores: scoresReducer,
});

export default rootReducer;
