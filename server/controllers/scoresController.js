import asyncHandler from "express-async-handler";
import { Score } from "../models/scores.js";

const getAllScores = asyncHandler(async (req, res) => {
  const scores = await Scores.find({ user: req.user._id });

  if (scores) {
    res.status(200).json(scores);
  } else {
    res.status(404);
    throw new Error("Could not retreive scores");
  }
});

const addScore = asyncHandler(async (req, res) => {
  const { course, date, score } = req.body;
  const newScore = await Score.create({ course, date, score, user: req.user._id });

  if (newScore) {
    res.status(201).json(newScore);
  } else {
    res.status(500);
    throw new Error("Failed to create new score");
  }
});

const updateScore = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { course, date, score } = req.body;
  const updatedScore = await Score.findByIdAndUpdate(id, { course, date, score }, { new: true });

  if (updatedScore) {
    res.status(200).json(updatedScore);
  } else {
    res.status(404);
    throw new Error("Score could not be found / updated");
  }
});

const deleteScore = async (req, res) => {
  const { id } = req.params;
  const deletedScore = await Score.findByIdAndDelete(id);

  if (deletedScore) {
    res.status(200).json({ message: "Score deleted" });
  } else {
    res.status(404);
    throw new Error("Could not delete score");
  }
};

export { getAllScores, addScore, updateScore, deleteScore };
