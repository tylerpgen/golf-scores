import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  course: { type: String, required: true },
  date: { type: Date, required: true },
  score: { type: Number, required: true },
});

export const Score = mongoose.model("Score", scoreSchema);
