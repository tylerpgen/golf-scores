import { connectToDatabase } from "../database/db.js";
import { Score } from "../models/scores.js";

// Retrieving all existing scores
export const getAllScores = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const scores = await Scores.find({});

    res.json(scores);
  } catch (error) {
    console.error("Error retreiving scores:", error);
    res.status(500).json({ message: "Failed to retreive scores" });
  }
};

// Adding a score to the database
export const addScore = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { course, score } = req.body;

    const newScore = new Score({ course, score });
    await newScore.save();

    res.status(201).json({ message: "Score added!" });
  } catch (error) {
    console.error("Error adding score", error);
    res.status(500).json({ message: "Failed to add score" });
  }
};

// Editing a score by ID
export const editScore = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { id } = req.params;
    const { score } = req.body;

    await Score.findByIdAndUpdate(id, { score });
    res.json({ message: "Score updated sucessfully" });
  } catch (error) {
    console.error("Error updating score:", error);
    res.status(500).json({ message: "Failed to update score" });
  }
};

// Deleting a score by ID
export const deleteScore = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { id } = req.params;

    await Score.findByIdAndDelete(id);
    res.json({ message: "Score deleted!" });
  } catch (error) {
    console.error("Error deleting score:", error);
    res.status(500).json({ message: "Failed to delete score" });
  }
};
