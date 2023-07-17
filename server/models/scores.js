import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    course: { type: String, required: true },
    date: { type: String, required: true },
    score: { type: Number, required: true },
    id: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Score = mongoose.model("Score", scoreSchema);
