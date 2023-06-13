import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  course: String,
  score: Number,
});

export const Score = mongoose.model("Score", scoreSchema);
