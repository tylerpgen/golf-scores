import express from "express";
import { getAllScores, addScore, updateScore, deleteScore } from "../controllers/scoresController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route for retreiving all scores
router.get("/scores", protect, getAllScores);

//Route for creating a new score
router.post("/scores/add", protect, addScore);

//Route for editing an existing score
router.put("/scores/:id", protect, updateScore);

//Route for deleting a score
router.delete("/scores/:id", protect, deleteScore);

export default router;
