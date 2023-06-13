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
